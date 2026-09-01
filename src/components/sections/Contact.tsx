"use client";

import { useId, useState } from "react";
import { Reveal } from "@/components/ui/Reveal";
import { CopyButton } from "@/components/ui/CopyButton";
import { ArrowRight, ArrowUpRight, GitHub, LinkedIn, Mail } from "@/components/ui/Icons";
import { SITE, WEB3FORMS_KEY } from "@/lib/site";
import { cn } from "@/lib/cn";
import type { Content } from "@/content/types";

type Field = "name" | "email" | "subject" | "message";
type Status = "idle" | "sending" | "success" | "error";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

const EMPTY: Record<Field, string> = { name: "", email: "", subject: "", message: "" };

export function Contact({ content }: { content: Content }) {
  const { contact } = content;
  const formId = useId();
  const [values, setValues] = useState<Record<Field, string>>(EMPTY);
  const [errors, setErrors] = useState<Partial<Record<Field, string>>>({});
  const [status, setStatus] = useState<Status>("idle");

  const hasKey = WEB3FORMS_KEY.length > 0;

  function validate(next: Record<Field, string>) {
    const found: Partial<Record<Field, string>> = {};
    if (!next.name.trim()) found.name = contact.form.required;
    if (!next.email.trim()) found.email = contact.form.required;
    else if (!EMAIL_PATTERN.test(next.email.trim())) found.email = contact.form.invalidEmail;
    if (!next.message.trim()) found.message = contact.form.required;
    else if (next.message.trim().length < 20) found.message = contact.form.tooShort;
    return found;
  }

  function update(field: Field, value: string) {
    setValues((current) => ({ ...current, [field]: value }));
    if (errors[field]) setErrors((current) => ({ ...current, [field]: undefined }));
  }

  async function handleSubmit(event: React.SyntheticEvent<HTMLFormElement>) {
    event.preventDefault();
    const found = validate(values);
    setErrors(found);
    if (Object.keys(found).length > 0) {
      const first = document.getElementById(`${formId}-${Object.keys(found)[0]}`);
      first?.focus();
      return;
    }

    // No form endpoint configured — hand the composed message to the mail client.
    if (!hasKey) {
      const subject = values.subject.trim() || `${values.name} — portfolio`;
      const body = `${values.message}\n\n— ${values.name} (${values.email})`;
      window.location.href = `mailto:${SITE.email}?subject=${encodeURIComponent(
        subject,
      )}&body=${encodeURIComponent(body)}`;
      return;
    }

    setStatus("sending");
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          from_name: "Portfolio — chaabaneanas.github.io",
          subject: values.subject.trim() || `New message from ${values.name}`,
          name: values.name,
          email: values.email,
          message: values.message,
        }),
      });
      if (!response.ok) throw new Error(String(response.status));
      setStatus("success");
      setValues(EMPTY);
    } catch {
      setStatus("error");
    }
  }

  const channels = [
    { label: "Email", value: SITE.email, href: `mailto:${SITE.email}`, Icon: Mail, copy: true },
    { label: "LinkedIn", value: "in/chaabaneanas", href: SITE.linkedin, Icon: LinkedIn },
    { label: "GitHub", value: `@${SITE.githubUser}`, href: SITE.github, Icon: GitHub },
  ];

  return (
    <div className="grid gap-14 lg:grid-cols-12 lg:gap-16">
      <div className="min-w-0 lg:col-span-5">
        <Reveal>
          <p className="max-w-[46ch] text-lead text-muted">{contact.lead}</p>
        </Reveal>

        <Reveal delay={0.08}>
          <ul className="mt-10 grid gap-px overflow-hidden rounded-xl border border-line bg-line">
            {channels.map(({ label, value, href, Icon, copy }) => (
              <li key={label} className="flex items-center gap-4 bg-bg p-5">
                <span className="grid size-9 shrink-0 place-items-center rounded-full border border-line text-muted">
                  <Icon className="text-base" />
                </span>
                <div className="min-w-0 flex-1">
                  <p className="font-mono text-[0.625rem] uppercase tracking-[0.16em] text-dim">
                    {label}
                  </p>
                  <a
                    href={href}
                    {...(href.startsWith("mailto:")
                      ? {}
                      : { target: "_blank", rel: "noreferrer noopener" })}
                    className="mt-1 flex min-w-0 items-center gap-1.5 text-sm text-text transition-colors hover:text-accent"
                  >
                    <span className="truncate">{value}</span>
                    {!href.startsWith("mailto:") ? <ArrowUpRight className="text-sm" /> : null}
                  </a>
                </div>
                {copy ? (
                  <CopyButton
                    value={value}
                    label={contact.copy}
                    copiedLabel={contact.copied}
                    className="shrink-0"
                  />
                ) : null}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>

      <div className="min-w-0 lg:col-span-7">
        <Reveal delay={0.12}>
          <form
            onSubmit={handleSubmit}
            noValidate
            className="rounded-xl border border-line bg-surface/50 p-6 sm:p-8"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <TextField
                id={`${formId}-name`}
                label={contact.form.name}
                placeholder={contact.form.namePlaceholder}
                value={values.name}
                error={errors.name}
                onChange={(value) => update("name", value)}
                autoComplete="name"
              />
              <TextField
                id={`${formId}-email`}
                label={contact.form.email}
                placeholder={contact.form.emailPlaceholder}
                value={values.email}
                error={errors.email}
                onChange={(value) => update("email", value)}
                type="email"
                autoComplete="email"
              />
              <TextField
                id={`${formId}-subject`}
                label={contact.form.subject}
                placeholder={contact.form.subjectPlaceholder}
                value={values.subject}
                onChange={(value) => update("subject", value)}
                className="sm:col-span-2"
              />
              <TextField
                id={`${formId}-message`}
                label={contact.form.message}
                placeholder={contact.form.messagePlaceholder}
                value={values.message}
                error={errors.message}
                onChange={(value) => update("message", value)}
                multiline
                className="sm:col-span-2"
              />
            </div>

            {/* Honeypot: hidden from people and from assistive technology. */}
            <div aria-hidden className="hidden">
              <label htmlFor={`${formId}-botcheck`}>Leave this empty</label>
              <input id={`${formId}-botcheck`} name="botcheck" tabIndex={-1} autoComplete="off" />
            </div>

            <div className="mt-7 flex flex-wrap items-center justify-between gap-4">
              <button
                type="submit"
                disabled={status === "sending"}
                className="group inline-flex items-center gap-2.5 rounded-full bg-accent px-5 py-3 text-sm font-medium text-[#04212a] transition-colors duration-300 hover:bg-[#67e3f5] disabled:cursor-not-allowed disabled:opacity-60"
              >
                {status === "sending" ? contact.form.sending : contact.form.submit}
                <ArrowRight className="text-base transition-transform duration-300 group-hover:translate-x-1" />
              </button>

              {!hasKey ? (
                <p className="font-mono text-[0.625rem] uppercase tracking-[0.12em] text-dim">
                  {contact.form.fallbackNote}
                </p>
              ) : null}
            </div>

            <p
              role="status"
              aria-live="polite"
              className={cn(
                "mt-4 text-sm transition-opacity",
                status === "success" && "text-accent",
                status === "error" && "text-[#fca5a5]",
                (status === "idle" || status === "sending") && "sr-only",
              )}
            >
              {status === "success" ? contact.form.success : null}
              {status === "error" ? contact.form.error : null}
            </p>
          </form>
        </Reveal>
      </div>
    </div>
  );
}

interface TextFieldProps {
  id: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  error?: string;
  type?: string;
  multiline?: boolean;
  className?: string;
  autoComplete?: string;
}

function TextField({
  id,
  label,
  value,
  onChange,
  placeholder,
  error,
  type = "text",
  multiline,
  className,
  autoComplete,
}: TextFieldProps) {
  const base = cn(
    "w-full rounded-lg border bg-bg px-4 py-3 text-sm text-text placeholder:text-dim transition-colors",
    error ? "border-[#fca5a5]/60" : "border-line hover:border-line focus:border-accent/60",
  );

  return (
    <div className={className}>
      <label
        htmlFor={id}
        className="mb-2 block font-mono text-[0.625rem] uppercase tracking-[0.16em] text-dim"
      >
        {label}
      </label>
      {multiline ? (
        <textarea
          id={id}
          rows={5}
          value={value}
          placeholder={placeholder}
          onChange={(event) => onChange(event.target.value)}
          aria-invalid={error ? true : undefined}
          aria-describedby={error ? `${id}-error` : undefined}
          className={cn(base, "resize-y")}
        />
      ) : (
        <input
          id={id}
          type={type}
          value={value}
          placeholder={placeholder}
          autoComplete={autoComplete}
          onChange={(event) => onChange(event.target.value)}
          aria-invalid={error ? true : undefined}
          aria-describedby={error ? `${id}-error` : undefined}
          className={base}
        />
      )}
      {error ? (
        <p id={`${id}-error`} className="mt-2 text-xs text-[#fca5a5]">
          {error}
        </p>
      ) : null}
    </div>
  );
}
