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
import { Label } from "@/components/ui/label";

interface Project {
  id: string;
  title: string;
  description: string;
  summary: string;
  outcome: string;
  tech: string[];
  image: string;
}

const projects: Project[] = [
  {
    id: "1",
    title: "Dieture Website",
    description: "The Official Website for Dieture",
    summary:
      "Built the official responsive, SEO-optimized website for Dieture, a compmany with more than 10 000 active users, where customer are able to browse and purchase products,",
    outcome: "Increased online sales by 30% within first quarter post-launch",
    tech: [
      "NextJs",
      "TypeScript",
      "TailwindCss",
      "Framer Motion",
      "Contentful",
    ],
    image: "/diturecover.png",
  },
  {
    id: "2",
    title: "Design System",
    description:
      "Component library serving 50+ products across the organization",
    summary:
      "Created comprehensive design system with 100+ reusable components",
    outcome: "Increased development velocity by 40%, improved consistency",
    tech: ["React", "Storybook", "TypeScript", "Tailwind"],
    image: "/placeholder.svg?key=uscm3",
  },
  {
    id: "3",
    title: "E-Commerce Platform",
    description:
      "Full-stack marketplace with payment integration and inventory management",
    summary: "Developed complete e-commerce solution with real-time inventory",
    outcome: "Processed $2M in transactions, 99.9% uptime",
    tech: ["Next.js", "Stripe", "MongoDB", "AWS"],
    image: "/placeholder.svg?key=tpwf6",
  },
];

export default function Projects() {
  return (
    <section
      id="work"
      className="relative py-20 px-4 sm:px-6 lg:px-8 bg-card/30"
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="font-display text-4xl font-bold mb-12">
          Featured <span className="text-accent">Projects</span>
        </h2>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project) => (
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
                <div className="h-96 relative">
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
          ))}
        </div>
      </div>
    </section>
  );
}

// export function DialogDemo() {
//   return (
//     <Dialog>
//       <form>
//         <DialogTrigger asChild>
//           <Button variant="outline">Open Dialog</Button>
//         </DialogTrigger>
//         <DialogContent className="sm:max-w-[425px]">
//           <DialogHeader>
//             <DialogTitle>Edit profile</DialogTitle>
//             <DialogDescription>
//               Make changes to your profile here. Click save when you&apos;re
//               done.
//             </DialogDescription>
//           </DialogHeader>
//           <div className="grid gap-4">
//             <div className="grid gap-3">
//               <Label htmlFor="name-1">Name</Label>
//               <Input id="name-1" name="name" defaultValue="Pedro Duarte" />
//             </div>
//             <div className="grid gap-3">
//               <Label htmlFor="username-1">Username</Label>
//             </div>
//           </div>
//           <DialogFooter>
//             <DialogClose asChild>
//               <Button variant="outline">Cancel</Button>
//             </DialogClose>
//             <Button type="submit">Save changes</Button>
//           </DialogFooter>
//         </DialogContent>
//       </form>
//     </Dialog>
//   );
// }
