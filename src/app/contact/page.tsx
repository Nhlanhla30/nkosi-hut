"use client";

import { useState, FormEvent } from "react";
import { Reveal } from "@/components/ui/Reveal";
import { siteConfig } from "@/lib/constants";
import {
  Send,
  CheckCircle,
  AlertCircle,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

// Replace this with your actual Formspree form ID
const FORMSPREE_ENDPOINT = "https://formspree.io/f/xeelgdpb";

const serviceOptions = [
  "Website Development",
  "Mobile App Development",
  "UI/UX Design",
  "Cloud & DevOps Solutions",
  "Full Digital Transformation",
  "Other",
];

type FormStatus = "idle" | "submitting" | "success" | "error";

export default function ContactPage() {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("submitting");

    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus("success");
        setFormData({
          name: "",
          email: "",
          phone: "",
          company: "",
          service: "",
          message: "",
        });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section className="min-h-screen pt-32 pb-[clamp(80px,12vw,160px)]">
      <div className="mx-auto max-w-[1200px] px-[clamp(20px,5vw,80px)]">
        {/* Header */}
        <Reveal>
          <div className="mb-16 max-w-[600px]">
            <span className="section-label">Get in Touch</span>
            <h1 className="mt-5 text-[clamp(2.4rem,5vw,3.5rem)] font-bold leading-tight tracking-tight">
              Let&apos;s talk about{" "}
              <span className="gradient-text">your project</span>
            </h1>
            <p className="mt-4 text-lg text-text-secondary">
              Tell us about your business and what you need. We&apos;ll get back
              to you within 24 hours.
            </p>
          </div>
        </Reveal>

        <div className="grid gap-16 lg:grid-cols-[1fr_380px]">
          {/* Form */}
          <Reveal>
            {status === "success" ? (
              <div className="flex flex-col items-center justify-center rounded-2xl border border-brand-accent/30 bg-brand-accent/[0.05] px-8 py-20 text-center">
                <CheckCircle
                  size={48}
                  className="mb-4 text-brand-accent"
                />
                <h2 className="mb-2 text-2xl font-bold">
                  Message Sent Successfully
                </h2>
                <p className="mb-8 max-w-md text-text-secondary">
                  Thank you for reaching out. We&apos;ll review your project
                  details and get back to you within 24 hours.
                </p>
                <button
                  onClick={() => setStatus("idle")}
                  className="rounded-lg border border-border-hover px-6 py-2.5 text-sm font-medium text-text-primary transition-all hover:border-brand-accent hover:bg-brand-accent/[0.08]"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name & Email Row */}
                <div className="grid gap-6 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="name"
                      className="mb-2 block text-sm font-medium text-text-secondary"
                    >
                      Full Name <span className="text-brand-accent">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      className="w-full rounded-lg border border-border bg-surface-dark-2 px-4 py-3 text-sm text-text-primary placeholder-text-muted outline-none transition-all focus:border-brand-accent focus:ring-1 focus:ring-brand-accent/30"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="mb-2 block text-sm font-medium text-text-secondary"
                    >
                      Email Address{" "}
                      <span className="text-brand-accent">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@company.co.za"
                      className="w-full rounded-lg border border-border bg-surface-dark-2 px-4 py-3 text-sm text-text-primary placeholder-text-muted outline-none transition-all focus:border-brand-accent focus:ring-1 focus:ring-brand-accent/30"
                    />
                  </div>
                </div>

                {/* Phone & Company Row */}
                <div className="grid gap-6 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="phone"
                      className="mb-2 block text-sm font-medium text-text-secondary"
                    >
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+27 XX XXX XXXX"
                      className="w-full rounded-lg border border-border bg-surface-dark-2 px-4 py-3 text-sm text-text-primary placeholder-text-muted outline-none transition-all focus:border-brand-accent focus:ring-1 focus:ring-brand-accent/30"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="company"
                      className="mb-2 block text-sm font-medium text-text-secondary"
                    >
                      Company / Business Name
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Your Company"
                      className="w-full rounded-lg border border-border bg-surface-dark-2 px-4 py-3 text-sm text-text-primary placeholder-text-muted outline-none transition-all focus:border-brand-accent focus:ring-1 focus:ring-brand-accent/30"
                    />
                  </div>
                </div>

                {/* Service Selection */}
                <div>
                  <label
                    htmlFor="service"
                    className="mb-2 block text-sm font-medium text-text-secondary"
                  >
                    Service You&apos;re Interested In{" "}
                    <span className="text-brand-accent">*</span>
                  </label>
                  <select
                    id="service"
                    name="service"
                    required
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full appearance-none rounded-lg border border-border bg-surface-dark-2 px-4 py-3 text-sm text-text-primary outline-none transition-all focus:border-brand-accent focus:ring-1 focus:ring-brand-accent/30"
                  >
                    <option value="" disabled>
                      Select a service...
                    </option>
                    {serviceOptions.map((service) => (
                      <option key={service} value={service}>
                        {service}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="mb-2 block text-sm font-medium text-text-secondary"
                  >
                    Project Description{" "}
                    <span className="text-brand-accent">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your project, goals, and timeline..."
                    className="w-full resize-none rounded-lg border border-border bg-surface-dark-2 px-4 py-3 text-sm text-text-primary placeholder-text-muted outline-none transition-all focus:border-brand-accent focus:ring-1 focus:ring-brand-accent/30"
                  />
                </div>

                {/* Error message */}
                {status === "error" && (
                  <div className="flex items-center gap-2 rounded-lg border border-red-500/30 bg-red-500/[0.05] px-4 py-3 text-sm text-red-400">
                    <AlertCircle size={16} />
                    Something went wrong. Please try again or email us directly.
                  </div>
                )}

                {/* Submit */}
                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="group inline-flex items-center gap-2 rounded-lg bg-brand-accent px-8 py-3.5 text-[0.95rem] font-semibold text-surface-dark transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-accent-light hover:shadow-[0_8px_30px_rgba(138,190,83,0.25)] disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0 disabled:hover:shadow-none"
                >
                  {status === "submitting" ? (
                    <>
                      <svg
                        className="h-4 w-4 animate-spin"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        />
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                        />
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send
                        size={16}
                        className="transition-transform duration-300 group-hover:translate-x-1"
                      />
                    </>
                  )}
                </button>
              </form>
            )}
          </Reveal>

          {/* Sidebar — Contact Info */}
          <Reveal delay={0.2}>
            <div className="space-y-6">
              {/* Email */}
              <div className="rounded-xl border border-border bg-surface-dark-2 p-6">
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-brand-accent/10">
                  <Mail size={18} className="text-brand-accent" />
                </div>
                <h3 className="mb-1 text-sm font-semibold">Email Us</h3>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="text-sm text-text-secondary transition-colors hover:text-brand-accent"
                >
                  {siteConfig.email}
                </a>
              </div>

              {/* Phone */}
              <div className="rounded-xl border border-border bg-surface-dark-2 p-6">
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-brand-accent/10">
                  <Phone size={18} className="text-brand-accent" />
                </div>
                <h3 className="mb-1 text-sm font-semibold">Call Us</h3>
                <a
                  href="tel:+27000000000"
                  className="text-sm text-text-secondary transition-colors hover:text-brand-accent"
                >
                  +27 65 990 6572
                </a>
              </div>

              {/* Location */}
              <div className="rounded-xl border border-border bg-surface-dark-2 p-6">
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-brand-accent/10">
                  <MapPin size={18} className="text-brand-accent" />
                </div>
                <h3 className="mb-1 text-sm font-semibold">Location</h3>
                <p className="text-sm text-text-secondary">
                  Johannesburg, Gauteng
                  <br />
                  South Africa
                </p>
              </div>

              {/* Response time */}
              <div className="rounded-xl border border-brand-accent/20 bg-brand-accent/[0.04] p-6">
                <p className="text-sm font-medium text-brand-accent">
                  Average Response Time
                </p>
                <p className="mt-1 text-2xl font-bold text-text-primary">
                  Under 24 hours
                </p>
                <p className="mt-1 text-xs text-text-muted">
                  We typically respond same-day during business hours.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}