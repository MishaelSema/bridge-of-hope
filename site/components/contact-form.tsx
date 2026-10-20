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
  "mt-3 w-full border-0 border-b border-rule bg-transparent px-0 py-3 text-[1rem] text-ink placeholder:text-grey focus:border-ink focus:outline-none";

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
        className="border-t border-ink pt-5 text-[1rem] leading-[1.7]"
      >
        {form.success}
      </p>
    );
  }

  const errorFor = (key: keyof Errors) =>
    errors[key] ? (
      <p role="alert" className="mt-2 text-[0.82rem] tracking-[0.06em] text-live uppercase">
        {errors[key]}
      </p>
    ) : null;

  return (
    <form onSubmit={onSubmit} noValidate className="space-y-9">
      <div>
        <label htmlFor="cf-name" className="caption">
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
        <label htmlFor="cf-email" className="caption">
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

      <div>
        <label htmlFor="cf-subject" className="caption">
          {form.subject}
        </label>
        <select id="cf-subject" name="subject" defaultValue={form.subjects[0]} className={fieldClass}>
          {form.subjects.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="cf-message" className="caption">
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
        className="w-fit bg-live px-8 py-4 text-[0.8rem] tracking-[0.16em] text-paper uppercase transition-colors duration-200 hover:bg-ink focus-visible:bg-ink disabled:opacity-60 sm:w-auto"
      >
        {status === "sending" ? form.sending : form.submit}
      </button>
    </form>
  );
}
