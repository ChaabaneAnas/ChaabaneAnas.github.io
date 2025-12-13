"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Github, Gitlab, Linkedin, Loader2Icon, Mail } from "lucide-react";
import { toast } from "sonner";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Form, FormControl, FormField, FormItem, FormMessage } from "./ui/form";
import { Input } from "./ui/input";
import { Spinner } from "./ui/spinner";
import { Textarea } from "./ui/textarea";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  message: z.string().min(10, {
    message: "Message must be at least 10 characters.",
  }),
});

export default function Contact() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    try {
      toast.success("Message sent successfully!");
      console.log(values);
    } catch (error) {}
  }

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
    <section
      id="contact"
      className="relative py-16 lg:py-20 px-4 sm:px-6 lg:px-8"
    >
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
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-4"
              >
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          className="w-full h-auto px-4 py-3 rounded-lg border border-border bg-card/50 text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all"
                          placeholder="Your name"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          className="w-full h-auto px-4 py-3 rounded-lg border border-border bg-card/50 text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all"
                          placeholder="Your Email"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />{" "}
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Textarea
                          className="w-full h-auto px-4 py-3 rounded-lg border border-border bg-card/50 text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all resize-none"
                          placeholder="Your Message"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button
                  type="submit"
                  disabled={form?.formState?.isSubmitting}
                  className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-semibold"
                >
                  {form.formState.isSubmitting && (
                    <Spinner className="mr-2 size-5 text-accent-foreground" />
                  )}
                  {form?.formState?.isSubmitting
                    ? "Sending..."
                    : "Send Message ↓"}
                </Button>
              </form>
            </Form>
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
