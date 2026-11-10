"use client";

import { useState } from "react";
import type { Locale } from "@/lib/i18n";

type Form = {
  heading: string;
  name: string;
  email: string;
  subject: string;
  subjects: readonly string[];
  message: string;
  submit: string;
  sending: string;
  success: string;
  error: string;
  required: string;
  invalidEmail: string;
};

type Props = {
  locale: Locale;
  form: Form;
};

type Errors = Partial<Record<"name" | "email" | "message", string>>;

const fieldClass =
  "mt-3 w-full rounded-none border border-mist bg-paper px-4 py-3.5 text-[1rem] text-ink placeholder:text-slate/70 focus:border-ink focus:outline-none focus-visible:outline-2 focus-visible:outline-mint";

export function ContactForm({ locale, form }: Props) {
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");
  const [errors, setErrors] = useState<Errors>({});

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formEl = event.currentTarget;

    // Accessible client-side validation with the dictionary's own strings.
    const data = new FormData(formEl);
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();
    const next: Errors = {};
    if (!name) next.name = form.required;
    if (!email) next.email = form.required;
    else if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) next.email = form.invalidEmail;
    if (!message) next.message = form.required;
    setErrors(next);
    if (Object.keys(next).length > 0) return;

    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(Object.fromEntries(data.entries())),
      });
      if (!res.ok) throw new Error("request failed");
      formEl.reset();
      setStatus("sent");
    } catch {
      setStatus("idle");
      setErrors({ message: form.error });
    }
  }

  if (status === "sent") {
    return (
      <p
        role="status"
        aria-live="polite"
        className="border-l-4 border-mint bg-sand px-5 py-5 text-[1rem] leading-[1.7]"
      >
        {form.success}
      </p>
    );
  }

  const errorFor = (key: keyof Errors) =>
    errors[key] ? (
      <p role="alert" className="mt-2 text-[0.8rem] font-semibold tracking-[0.04em] text-[#b3261e] uppercase">
        {errors[key]}
      </p>
    ) : null;

  return (
    <form onSubmit={onSubmit} noValidate className="space-y-7">
      <div className="grid grid-cols-1 gap-7 sm:grid-cols-2">
        <div>
          <label htmlFor="cf-name" className="label text-slate">
            {form.name}
          </label>
          <input
            id="cf-name"
            name="name"
            type="text"
            autoComplete="name"
            required
            aria-invalid={Boolean(errors.name)}
            className={fieldClass}
          />
          {errorFor("name")}
        </div>

        <div>
          <label htmlFor="cf-email" className="label text-slate">
            {form.email}
          </label>
          <input
            id="cf-email"
            name="email"
            type="email"
            autoComplete="email"
            required
            aria-invalid={Boolean(errors.email)}
            className={fieldClass}
          />
          {errorFor("email")}
        </div>
      </div>

      <div>
        <label htmlFor="cf-subject" className="label text-slate">
          {form.subject}
        </label>
        <select
          id="cf-subject"
          name="subject"
          defaultValue={form.subjects[0]}
          className={fieldClass}
        >
          {form.subjects.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="cf-message" className="label text-slate">
          {form.message}
        </label>
        <textarea
          id="cf-message"
          name="message"
          rows={6}
          required
          aria-invalid={Boolean(errors.message)}
          className={`${fieldClass} resize-y`}
        />
        {errorFor("message")}
      </div>

      <input type="hidden" name="lang" value={locale} />

      <button
        type="submit"
        disabled={status === "sending"}
        className="btn btn-mint disabled:opacity-60"
      >
        {status === "sending" ? form.sending : form.submit}
      </button>
    </form>
  );
}
