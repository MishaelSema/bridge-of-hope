import { NextResponse } from "next/server";
import { MongoClient } from "mongodb";
import nodemailer from "nodemailer";

/**
 * Contact endpoint.
 *
 * Degrades gracefully: with no env vars configured it logs the message and
 * returns 200 so the public site never breaks. With MONGODB_URI and
 * SMTP_* set, it stores the message and emails the team.
 */

type Payload = {
  name?: unknown;
  email?: unknown;
  subject?: unknown;
  message?: unknown;
  lang?: unknown;
};

function asString(value: unknown, max: number): string {
  return typeof value === "string" ? value.trim().slice(0, max) : "";
}

export async function POST(request: Request) {
  let payload: Payload;
  try {
    payload = (await request.json()) as Payload;
  } catch {
    return NextResponse.json({ ok: false }, { status: 400 });
  }

  const name = asString(payload.name, 200);
  const email = asString(payload.email, 320);
  const subject = asString(payload.subject, 120);
  const message = asString(payload.message, 5000);
  const lang = payload.lang === "fr" ? "fr" : "en";

  if (!name || !message || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
    return NextResponse.json({ ok: false }, { status: 400 });
  }

  const doc = {
    name,
    email,
    subject,
    message,
    lang,
    createdAt: new Date(),
  };

  // 1. Store in MongoDB (best effort).
  const mongoUri = process.env.MONGODB_URI;
  if (mongoUri) {
    try {
      const client = new MongoClient(mongoUri);
      await client.connect();
      await client.db(process.env.MONGODB_DB ?? "bridge-of-hope").collection("messages").insertOne(doc);
      await client.close();
    } catch (error) {
      console.error("[contact] mongodb write failed:", error);
    }
  }

  // 2. Notify the team by email (best effort).
  const smtpHost = process.env.SMTP_HOST;
  if (smtpHost) {
    try {
      const port = Number(process.env.SMTP_PORT ?? 587);
      const transporter = nodemailer.createTransport({
        host: smtpHost,
        port,
        // Zoho on 465 is implicit TLS; 465 ⇒ secure unless told otherwise.
        secure: process.env.SMTP_SECURE ? process.env.SMTP_SECURE === "true" : port === 465,
        auth: process.env.SMTP_USER
          ? { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS }
          : undefined,
      });
      await transporter.sendMail({
        from: process.env.SMTP_FROM ?? process.env.SMTP_USER ?? "site@bridgeofhope.cm",
        to:
          process.env.CONTACT_EMAIL ??
          process.env.CONTACT_TO ??
          process.env.SMTP_USER ??
          "contact@bridgeofhope.cm",
        subject: `[bridgeofhope.cm] ${subject || "message"} — ${name}`,
        replyTo: email,
        text: `${message}\n\n— ${name} <${email}>\nLang: ${lang}`,
      });
    } catch (error) {
      console.error("[contact] smtp send failed:", error);
    }
  }

  if (!mongoUri && !smtpHost) {
    console.info("[contact] no MONGODB_URI/SMTP configured; message received:", { name, email, subject });
  }

  return NextResponse.json({ ok: true });
}
