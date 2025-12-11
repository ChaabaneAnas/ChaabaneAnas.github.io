"use client";

import type React from "react";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Github, Gitlab, Linkedin, Mail } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setIsSubmitting(false);
    setFormData({ name: "", email: "", message: "" });
  };

  const socialLinks = [
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/chaabaneanas/",
      label: "LinkedIn",
    },
    { icon: Github, href: "https://github.com/ChaabaneAnas", label: "GitHub" },
    {
      icon: Gitlab,
      href: "https://gitlab.com/anas.chaabane98",
      label: "GitLab",
    },

    { icon: Mail, href: "mailto:anas.chaabane98@gmail.com", label: "Email" },
  ];

  return (
    <section id="contact" className="relative py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h2 className="font-display text-4xl font-bold text-center mb-4">
          Let&apos;s <span className="text-accent">Connect</span>
        </h2>
        <p className="text-center text-foreground/60 mb-12">
          Got a project in mind? Let&apos;s discuss how I can help bring your
          ideas to life.
        </p>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="space-y-4">
            <h3 className="font-bold text-lg mb-6">Send me a message</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-border bg-card/50 text-foreground placeholder-foreground/50 focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all"
                  required
                />
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="your@email.com"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-border bg-card/50 text-foreground placeholder-foreground/50 focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all"
                  required
                />
              </div>
              <div>
                <textarea
                  name="message"
                  placeholder="Your message..."
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-border bg-card/50 text-foreground placeholder-foreground/50 focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all resize-none"
                  required
                />
              </div>
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-semibold"
              >
                {isSubmitting ? "Sending..." : "Send Message ↓"}
              </Button>
            </form>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h3 className="font-bold text-lg mb-6">Or connect on</h3>
            <div className="space-y-3">
              {socialLinks.map((link) => (
                <Link
                  target="_blank"
                  rel="noopener noreferrer"
                  key={link.label}
                  href={link.href}
                  className="group flex items-center gap-4 p-4 rounded-lg border border-accent/10 bg-card/50 hover:border-accent/50 hover:bg-card transition-all duration-300"
                >
                  <span className="text-accent text-xl group-hover:scale-110 transition-transform">
                    <link.icon />
                  </span>
                  <span className="text-foreground group-hover:text-accent transition-colors font-medium">
                    {link.label}
                  </span>
                </Link>
              ))}
            </div>

            {/* Quick Contact Info */}
            <div className="pt-4 border-t border-border">
              <p className="text-sm text-foreground/60 mb-2">Available for</p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 text-xs rounded-full bg-accent/10 text-accent border border-accent/20">
                  Full-time roles
                </span>
                <span className="px-3 py-1 text-xs rounded-full bg-accent/10 text-accent border border-accent/20">
                  Freelance
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-20 pt-12 border-t border-border text-center text-sm text-foreground/60">
        <p>
          Designed and built with <span className="text-accent">care</span>. ©{" "}
          {new Date().getFullYear()} All rights reserved.
        </p>
      </div>
    </section>
  );
}
