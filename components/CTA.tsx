// cta.tsx
"use client";

import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

type FormData = {
  name: string;
  email: string;
  brand: string;
  service: string;
  message: string;
  website: string; // honeypot
};

export default function CTA() {
  const ref = useRef(null);

  const inView = useInView(ref, {
    once: true,
    margin: "-60px",
  });

  const SCRIPT_URL =
    "https://script.google.com/macros/s/AKfycbwmkimur0H_JiUcy07XQ588tHQ_XL_mCQUJtx4egXYXum3C1EDQXVSK4_78V2N_JENC/exec";

  const [startTime, setStartTime] = useState(0);

  const [sent, setSent] = useState(false);

  const [loading, setLoading] = useState(false);

  const [errors, setErrors] = useState<
    Partial<Record<keyof FormData, boolean>>
  >({});

  const [form, setForm] = useState<FormData>({
    name: "",
    email: "",
    brand: "",
    service: "",
    message: "",
    website: "",
  });

  useEffect(() => {
    setStartTime(Date.now());
  }, []);

  const handleChange = (
    field: keyof FormData,
    value: string
  ) => {
    setForm((prev) => ({
      ...prev,
      [field]: value,
    }));

    setErrors((prev) => ({
      ...prev,
      [field]: false,
    }));
  };

  const validateEmail = (email: string) => {
    return /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(
      email
    );
  };

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    if (loading) return;

    // Honeypot spam protection
    if (form.website) {
      console.warn("Spam detected");
      return;
    }

    // Too-fast submission protection
    const timeTaken = Date.now() - startTime;

    if (timeTaken < 3000) {
      console.warn("Spam detected: too fast");
      return;
    }

    const trimmedForm = {
      name: form.name.trim(),
      email: form.email.trim(),
      brand: form.brand.trim(),
      service: form.service.trim(),
      message: form.message.trim(),
    };

    const newErrors: Partial<
      Record<keyof FormData, boolean>
    > = {};

    // Validation
    if (!trimmedForm.name) {
      newErrors.name = true;
    }

    if (!trimmedForm.email) {
      newErrors.email = true;
    }

    if (
      trimmedForm.email &&
      !validateEmail(trimmedForm.email)
    ) {
      newErrors.email = true;
    }

    if (!trimmedForm.message) {
      newErrors.message = true;
    }

    if (trimmedForm.message.length < 10) {
      newErrors.message = true;
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setLoading(true);

    try {
      await fetch(SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type":
            "text/plain;charset=utf-8",
        },
        body: JSON.stringify(trimmedForm),
      });

      setSent(true);

      setForm({
        name: "",
        email: "",
        brand: "",
        service: "",
        message: "",
        website: "",
      });

      setErrors({});
    } catch (error) {
      console.error(error);
      alert(
        "Something went wrong. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      ref={ref}
      className="relative overflow-hidden bg-background px-[5%] py-24 sm:py-32"
    >
      {/* BACKGROUND GLOWS */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-48 -left-48 h-112 w-md rounded-full bg-cyan-500/10 blur-[160px] dark:bg-cyan-500/20" />

        <div className="absolute -bottom-24 -right-24 h-80 w-[20rem] rounded-full bg-emerald-500/10 blur-[140px] dark:bg-emerald-500/20" />
      </div>

      <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-20">
        {/* LEFT */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={
            inView
              ? { opacity: 1, x: 0 }
              : {}
          }
          transition={{ duration: 0.7 }}
        >
          <div className="mb-5 inline-flex items-center gap-2 text-[13px] font-semibold uppercase tracking-[0.22em] text-primary">
            <span className="h-1.5 w-1.5 rounded-full bg-cyan-500" />
            Ready to grow?
          </div>

          <h2 className="mb-5 text-[clamp(2.2rem,4vw,3.8rem)] leading-[1.05] text-foreground">
            Let&apos;s build something
            <br />
            <span className="text-primary">
              the world
            </span>{" "}
            can be
            <br />
            proud of
          </h2>

          <p className="mb-10 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            Your purpose-driven brand deserves a
            partner who understands that growth and
            impact aren&apos;t opposites — they work
            together.
          </p>

          {/* PROOF POINTS */}
          <div className="flex flex-col gap-4">
            {[
              "100% purpose-driven portfolio — we only work with brands we believe in",
              "Strategy, design & tech under one roof",
              "We respond within 24 hours — no ghosting",
            ].map((text, i) => (
              <div
                key={i}
                className="flex items-start gap-3"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-cyan-500/20 bg-cyan-500/10 text-primary">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-4 w-4"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>

                <p className="pt-1 text-sm leading-relaxed text-muted-foreground sm:text-base">
                  {text}
                </p>
              </div>
            ))}
          </div>

          {/* LINKS */}
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="mailto:badiili@gmail.com"
              className="border-b border-cyan-500/20 pb-0.5 text-sm font-medium text-cyan-600 transition-colors hover:text-cyan-500 dark:text-cyan-400"
            >
              badiili@gmail.com
            </a>

            <span className="text-border">•</span>

            <a
              href="#services"
              className="border-b border-cyan-500/20 pb-0.5 text-sm font-medium text-cyan-600 transition-colors hover:text-cyan-500 dark:text-cyan-400"
            >
              View our services
            </a>
          </div>
        </motion.div>

        {/* FORM */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={
            inView
              ? { opacity: 1, x: 0 }
              : {}
          }
          transition={{
            duration: 0.7,
            delay: 0.15,
          }}
        >
          <div className="relative overflow-hidden rounded-3xl border border-border bg-card p-6 shadow-sm sm:p-8">
            <div className="pointer-events-none absolute bottom-0 right-0 h-40 w-40 bg-[radial-gradient(circle_at_100%_100%,rgba(6,182,212,0.08),transparent_70%)] dark:bg-[radial-gradient(circle_at_100%_100%,rgba(6,182,212,0.14),transparent_70%)]" />

            {!sent ? (
              <>
                <div className="mb-7">
                  <h3 className="mb-2 text-2xl text-card-foreground">
                    Start the conversation
                  </h3>

                  <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
                    Tell us about your brand and
                    what you&apos;re trying to build.
                  </p>
                </div>

                <form
                  onSubmit={handleSubmit}
                  className="space-y-4"
                  noValidate
                >
                  {/* Honeypot */}
                  <input
                    type="text"
                    name="website"
                    tabIndex={-1}
                    autoComplete="off"
                    value={form.website}
                    onChange={(e) =>
                      handleChange(
                        "website",
                        e.target.value
                      )
                    }
                    className="hidden"
                    aria-hidden="true"
                  />

                  {/* NAME + EMAIL */}
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    {/* NAME */}
                    <div className="flex flex-col gap-2">
                      <label className="text-[11px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                        Your name
                      </label>

                      <input
                        type="text"
                        placeholder="Amara Osei"
                        value={form.name}
                        onChange={(e) =>
                          handleChange(
                            "name",
                            e.target.value
                          )
                        }
                        required
                        maxLength={80}
                        className={`rounded-xl border bg-background px-4 py-3 text-sm text-foreground outline-none transition-all placeholder:text-muted-foreground/60 focus:ring-2 focus:ring-cyan-500/20 ${
                          errors.name
                            ? "border-red-500"
                            : "border-border focus:border-cyan-500"
                        }`}
                      />
                    </div>

                    {/* EMAIL */}
                    <div className="flex flex-col gap-2">
                      <label className="text-[11px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                        Email
                      </label>

                      <input
                        type="email"
                        placeholder="you@brand.com"
                        value={form.email}
                        onChange={(e) =>
                          handleChange(
                            "email",
                            e.target.value
                          )
                        }
                        required
                        maxLength={120}
                        className={`rounded-xl border bg-background px-4 py-3 text-sm text-foreground outline-none transition-all placeholder:text-muted-foreground/60 focus:ring-2 focus:ring-cyan-500/20 ${
                          errors.email
                            ? "border-red-500"
                            : "border-border focus:border-cyan-500"
                        }`}
                      />
                    </div>
                  </div>

                  {/* COMPANY */}
                  <div className="flex flex-col gap-2">
                    <label className="text-[11px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                      Brand / Company
                    </label>

                    <input
                      type="text"
                      placeholder="Your brand name"
                      value={form.brand}
                      onChange={(e) =>
                        handleChange(
                          "brand",
                          e.target.value
                        )
                      }
                      maxLength={120}
                      className="rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition-all placeholder:text-muted-foreground/60 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20"
                    />
                  </div>

                  {/* SERVICE */}
                  <div className="flex flex-col gap-2">
                    <label className="text-[11px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                      What do you need help with?
                    </label>

                    <select
                      value={form.service}
                      onChange={(e) =>
                        handleChange(
                          "service",
                          e.target.value
                        )
                      }
                      className="rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition-all focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20"
                    >
                      <option value="">
                        Select a service
                      </option>

                      {[
                        "Digital Marketing (Badili Grow)",
                        "Branding & Design (Badili Studio)",
                        "Print & Collateral (Badili Print)",
                        "Web Design & Development (Badili Build)",
                        "Consulting & Training (Badili Consult)",
                        "Not sure yet — I need guidance",
                      ].map((s) => (
                        <option
                          key={s}
                          value={s}
                        >
                          {s}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* MESSAGE */}
                  <div className="flex flex-col gap-2">
                    <label className="text-[11px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                      Tell us more
                    </label>

                    <textarea
                      rows={4}
                      placeholder="What's your biggest challenge right now?"
                      value={form.message}
                      onChange={(e) =>
                        handleChange(
                          "message",
                          e.target.value
                        )
                      }
                      required
                      minLength={10}
                      maxLength={1000}
                      className={`resize-none rounded-xl border bg-background px-4 py-3 text-sm text-foreground outline-none transition-all placeholder:text-muted-foreground/60 focus:ring-2 focus:ring-cyan-500/20 ${
                        errors.message
                          ? "border-red-500"
                          : "border-border focus:border-cyan-500"
                      }`}
                    />
                  </div>

                  {/* BUTTON */}
                  <button
                    type="submit"
                    disabled={loading}
                    className="flex w-full items-center justify-center rounded-xl bg-cyan-600 px-5 py-3 text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-cyan-500 disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    {loading
                      ? "Sending..."
                      : "Send message"}
                  </button>

                  <p className="text-center text-sm text-muted-foreground">
                    No commitment required. We
                    reply within 24 hours.
                  </p>
                </form>
              </>
            ) : (
              <div className="py-10 text-center">
                <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-500">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>

                <h3 className="mb-2 text-2xl text-foreground">
                  Message sent!
                </h3>

                <p className="text-sm leading-relaxed text-muted-foreground">
                  We&apos;ll be in touch within 24
                  hours.
                  <br />
                  Check your inbox for confirmation.
                </p>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}