"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Label } from "@/components/ui/label";
import { useMediaQuery } from "@/hooks/use-media-query";

interface Project {
  id: string;
  title: string;
  description: string;
  summary: string;
  outcome: string;
  tech: string[];
  thumb: string;
  image: string;
}

const projects: Project[] = [
  {
    id: "1",
    title: "Dieture Official Website",
    description:
      "Responsive and feature-rich website for Qatar's leading healthy meal subscription service",
    summary:
      "Developed the official website for Dieture, a Qatari health-focused meal subscription company with over 10,000 active users. The website allows customers to explore meal plans, book appointments with dietitians, purchase addons, manage subscriptions, and onboard seamlessly. Integrated marketing tools, headless CMS, and event tracking to create a full-featured, responsive, and interactive platform.",
    outcome:
      "Improved user engagement and boosted subscription conversions, contributing to a 30% increase in online sales within the first quarter post-launch.",
    tech: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Radix UI",
      "Zustand",
      "Contentful",
      "MoEngage",
      "Meta Marketing Tools",
    ],
    thumb: "dieture.png",
    image: "/dieture.png",
  },
  {
    id: "2",
    title: "PaletteFlow Platform",
    description:
      "End-to-end logistics and pallet management platform for retailers, drivers, and administrators",
    summary:
      "Built PaletteFlow as a freelance project for a French logistics company to streamline pallet tracking and delivery operations between retailers. The platform is composed of three interconnected applications: a retailer app for tracking missions, managing owed and owned pallets, and reporting issues; a driver app for viewing missions, recording deliveries, scanning pallets, updating mission statuses, and managing issues; and an admin dashboard that provides full system control, including user management, mission creation and assignment, issue resolution, and pallet reconciliation. The system supports multilingual interfaces, real-time notifications, and a polished, role-based user experience across all applications.",
    outcome:
      "Centralized pallet and mission management, reduced manual reconciliation, improved issue resolution workflow, and increased operational visibility across retailers and drivers.",
    tech: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Zustand",
      "Radix UI",
      "REST APIs",
      "Internationalization (i18n)",
      "Push Notifications",
    ],
    thumb: "/palettefloww.png",
    image: "/palettefloww.png",
  },
  {
    id: "3",
    title: "Dieture Internal Operations Dashboard",
    description:
      "Custom-built ERP and CRM platform powering Dieture’s end-to-end operations",
    summary:
      "Designed and developed a large-scale internal dashboard for Dieture to manage and monitor all operational modules from a single platform. The system functions as a custom ERP and CRM, providing full visibility and control over subscriptions, customer progress and history, deliveries, packing, kitchen workflows, B2B retailers, and internal data collection such as complaints and feedback. Key features include custom delivery coverage mapping, advanced theming and configuration, detailed logging, and real-time operational insights, enabling teams across departments to collaborate efficiently and make data-driven decisions.",
    outcome:
      "Replaced multiple manual tools with a unified internal platform, significantly improving operational efficiency, data accuracy, and cross-team visibility while supporting the company’s growth to over 10,000 active users.",
    tech: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Radix UI",
      "Zustand",
      "Map & Geospatial Tools",
      "Role-Based Access Control",
      "Custom Theming System",
      "Analytics & Logging",
    ],
    thumb: "/dieture_dashboard.png",
    image: "/dieture_dashboard.png",
  },
];

export default function Projects() {
  const isDesktop = useMediaQuery("(min-width: 768px)");
  return (
    <section
      id="work"
      className="relative py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-card/30"
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="font-display text-4xl font-bold mb-12">
          Featured <span className="text-accent">Projects</span>
        </h2>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project) => {
            if (isDesktop) {
              return (
                <Dialog key={project.id}>
                  <DialogTrigger className="cursor-pointer group">
                    <div className="relative overflow-hidden rounded-xl mb-4 h-48 bg-muted ">
                      <Image
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-linear-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                    <h3 className="font-bold text-lg mb-2 group-hover:text-accent transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-foreground/60 text-sm mb-3">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.slice(0, 2).map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 text-xs rounded-full bg-accent/10 text-accent border border-accent/20"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-2xl">
                    <div className="h-70 relative">
                      <Image
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        fill
                        className="rounded-md mb-4 object-cover w-full"
                      />
                    </div>
                    <DialogHeader>
                      <DialogTitle>{project.title}</DialogTitle>
                      <DialogDescription>{project.summary}</DialogDescription>
                    </DialogHeader>
                    <div className="grid gap-4">
                      <div className="grid gap-3">
                        <Label>Outcome</Label>
                        <p className="text-foreground/70">{project.outcome}</p>
                      </div>
                      <div className="grid gap-3">
                        <Label>Tech Stack</Label>
                        <div className="flex flex-wrap gap-2">
                          {project.tech.map((tech) => (
                            <span
                              key={tech}
                              className="px-3 py-1 text-sm rounded-full bg-accent/10 text-accent border border-accent/20"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                    <DialogFooter>
                      <DialogClose asChild>
                        <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
                          Close
                        </Button>
                      </DialogClose>
                    </DialogFooter>
                  </DialogContent>
                </Dialog>
              );
            }
            return (
              <Drawer modal={false} key={project.id}>
                <DrawerTrigger className="cursor-pointer group">
                  <div className="relative overflow-hidden rounded-xl mb-4 h-48 bg-muted ">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <h3 className="font-bold text-lg mb-2 group-hover:text-accent transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-foreground/60 text-sm mb-3">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.slice(0, 2).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 text-xs rounded-full bg-accent/10 text-accent border border-accent/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </DrawerTrigger>
                <DrawerContent>
                  <DrawerHeader>
                    <DrawerTitle>{project.title}</DrawerTitle>
                    <DrawerDescription>{project.summary}</DrawerDescription>
                  </DrawerHeader>
                  <div className="grid gap-4">
                    <div className="grid gap-3">
                      <Label>Outcome</Label>
                      <p className="text-foreground/70">{project.outcome}</p>
                    </div>
                    <div className="grid gap-3">
                      <Label>Tech Stack</Label>
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 text-sm rounded-full bg-accent/10 text-accent border border-accent/20"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </DrawerContent>
              </Drawer>
            );
          })}
        </div>
      </div>
    </section>
  );
}
