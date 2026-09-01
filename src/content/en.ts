import type { Content } from "./types";

export const en: Content = {
  htmlLang: "en",

  meta: {
    title: "Anas Chaabane — Full Stack Developer",
    titleTemplate: "%s · Anas Chaabane",
    description:
      "Full Stack Developer with 4 years in production. I build fast, data-dense products with React, Next.js, TypeScript, NestJS and D3 — and I measure the difference.",
    keywords: [
      "Full Stack Developer",
      "React Developer",
      "Next.js",
      "TypeScript",
      "NestJS",
      "Node.js",
      "D3.js",
      "GraphQL",
      "Power BI extensions",
      "Qlik extensions",
      "Tunisia",
      "Sousse",
      "Anas Chaabane",
    ],
    ogAlt: "Anas Chaabane — Full Stack Developer",
  },

  nav: {
    items: [
      { id: "work", label: "Work" },
      { id: "experience", label: "Experience" },
      { id: "stack", label: "Stack" },
      { id: "about", label: "About" },
      { id: "contact", label: "Contact" },
    ],
    resume: "Résumé",
    resumeAria: "Download résumé as PDF",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    langLabel: "Language",
    switchTo: "Voir en français",
    skipToContent: "Skip to content",
    backToTop: "Back to top",
  },

  hero: {
    status: "Open to opportunities",
    role: "Full Stack Developer",
    firstName: "Anas",
    lastName: "Chaabane",
    lead:
      "Four years shipping production software. I work across the JavaScript stack — React and Next.js on the front, Node and NestJS behind it — and I spend most of my time on the part people actually feel: how fast it loads, and how it holds up under real data.",
    stackLine: ["TypeScript", "React", "Next.js", "NestJS", "GraphQL", "D3.js"],
    primaryCta: "View selected work",
    secondaryCta: "Résumé",
    scrollHint: "Scroll",
    location: "Sousse, Tunisia · Remote-friendly · GMT+1",
    stats: [
      { value: "4", label: "Years in production" },
      { value: "20+", label: "Shipped projects" },
      { value: "5+", label: "Developers led" },
      { value: "3", label: "Languages spoken" },
    ],
  },

  work: {
    label: "Selected work",
    title: "Things I built, and what changed because of them",
    intro:
      "A short list rather than a long one. Each of these shipped to real users, and each has a write-up covering the problem, the architecture and the outcome.",
    viewCase: "Read case study",
    all: "All work",
    projects: [
      {
        slug: "bi-visualization-extensions",
        index: "01",
        name: "BI Visualization Extensions",
        tagline: "Custom chart engines inside Power BI and Qlik",
        category: "Data visualization · Vayetek",
        period: "2026 — Present",
        role: "Lead Full Stack Developer",
        summary:
          "React and D3 visualization extensions running inside Power BI and Qlik Sense, built for datasets large enough that a naive render locks up the host application.",
        stack: ["React", "TypeScript", "D3.js", "Power BI API", "Qlik Sense API", "Rollup"],
        featured: true,
        study: {
          lead:
            "Business intelligence platforms ship with a fixed chart library. When a client needs a visual that library does not have, someone has to build it — sandboxed, inside the host's rendering lifecycle, against the host's data model. That is the work I lead at Vayetek.",
          sections: [
            {
              heading: "The problem",
              body: [
                "Power BI and Qlik both expose an extension API, and both hand you the same hard constraint: your visual runs inside their update loop, on their data model, within their memory budget. A chart that renders comfortably in a standalone React app will stutter — or freeze the entire report — once it has to redraw on every cross-filter, every resize and every selection change.",
                "The clients asking for these visuals are not asking for decoration. They want encodings the stock library cannot express: layered comparisons, custom hierarchies, domain-specific scales, over datasets in the tens of thousands of rows.",
              ],
            },
            {
              heading: "Approach",
              body: [
                "Every visual is split into three layers. A data layer reshapes the host's data view into a flat, typed structure. A layout layer built on D3 computes scales, stacks and paths, and never touches the DOM. A thin React layer paints exactly what the layout layer produced.",
                "Keeping D3 out of the DOM is the decision that makes the rest work. There is no double bookkeeping between two libraries that both want to own nodes, no orphaned SVG after an update, and the layout layer is testable without a browser.",
              ],
              list: [
                "Memoized layout computation keyed on the host's data revision, so a resize never recomputes scales",
                "Canvas-backed rendering paths for series past the point where SVG stops being viable",
                "A shared token layer so every extension inherits the report theme instead of hardcoding colour",
                "Property-pane schemas typed end to end, so a formatting option cannot exist in the UI without a handler",
              ],
            },
            {
              heading: "Leading the work",
              body: [
                "I lead a team of five-plus developers here: setting the architecture, reviewing every pull request, and clearing whatever is blocking someone before it eats a sprint. Review is where most of the performance work actually happens — the difference between a visual that redraws in 16ms and one that takes 400ms is usually four lines inside a render path.",
                "Alongside that I refactored a legacy React codebase in the same product, cutting unnecessary re-renders by roughly 25% and making the interface measurably quicker to respond.",
              ],
            },
          ],
          outcome: [
            "Chart components delivered on schedule, with product managers and designers as partners rather than clients",
            "25% fewer re-renders across the refactored legacy React codebase",
            "Sprint velocity up after taking on pull-request review and blocker-clearing for the team",
          ],
          metrics: [
            { value: "−25%", label: "React re-renders" },
            { value: "5+", label: "Developers led" },
            { value: "2", label: "BI platforms targeted" },
          ],
        },
      },
      {
        slug: "mnadhem",
        index: "02",
        name: "Mnadhem",
        tagline: "An operations hub built for how Tunisian retail actually works",
        category: "Product · Founder and engineer",
        period: "2026 — Present",
        role: "Full Stack Developer",
        summary:
          "Internal operations, cash-flow tracking and inventory for small and mid-sized Tunisian retail, fashion and D2C brands — designed around cash, informal suppliers and multi-channel selling.",
        stack: ["Next.js", "TypeScript", "NestJS", "PostgreSQL", "Prisma", "Tailwind CSS"],
        featured: true,
        study: {
          lead:
            "Most inventory software assumes a business that banks everything, buys from invoiced suppliers, and sells through one channel. A large share of Tunisian retail does none of those three. Mnadhem is built for the business that actually exists.",
          sections: [
            {
              heading: "The problem",
              body: [
                "Small and mid-sized retail, fashion and direct-to-consumer brands here run on a spreadsheet, a notebook and a group chat. Stock lives in one place, cash in another, and the reconciliation between them happens in someone's head at the end of the week — which is exactly when it is too late to act on.",
                "Imported tools fail for structural reasons, not cosmetic ones. They assume card payments, invoiced suppliers, a single sales channel, and a tax model that does not match. The gap is not translation. It is the data model.",
              ],
            },
            {
              heading: "Approach",
              body: [
                "I started from the cash ledger rather than the product catalogue. Every movement — a sale, a supplier payment, a return, a delivery fee, an owner withdrawal — is an entry against an account, and inventory movement is derived from it. That inversion is what makes the numbers reconcile without a weekly ritual.",
                "The interface is built for speed of entry over completeness of data. Recording a sale takes one screen and no required fields beyond the ones that affect money, because a tool slower than the notebook simply does not get used.",
              ],
              list: [
                "Double-entry cash ledger as the source of truth, with inventory as a projection over it",
                "Multi-channel sales capture: shop floor, social DMs, delivery partners",
                "Supplier accounts that tolerate partial, informal and out-of-order payment",
                "Role-scoped access so an owner, a shop manager and a stockkeeper each get one surface",
              ],
            },
            {
              heading: "Architecture",
              body: [
                "Next.js App Router on the front with server components on every read path, so list views ship almost no client JavaScript. NestJS behind it with a module per domain — ledger, inventory, catalogue, identity — and PostgreSQL underneath, with the ledger tables append-only.",
                "Append-only was a deliberate constraint. A corrected mistake becomes a reversing entry rather than an edit, so the history behind a disputed number is always recoverable. In a cash business, that is the feature.",
              ],
            },
          ],
          outcome: [
            "In active development and use, with the data model validated against real shop workflows rather than assumptions",
            "Owner dashboard answers the two questions that matter daily: what is on hand, and what is owed",
            "Built as a product I own end to end — research, data modelling, API, interface and rollout",
          ],
        },
      },
      {
        slug: "palletflow",
        index: "03",
        name: "PalletFlow",
        tagline: "Three applications, one logistics pipeline",
        category: "Freelance · Logistics",
        period: "2025",
        role: "Full Stack Developer",
        summary:
          "An admin dashboard, a driver app and a partner portal over a single NestJS backend — covering inventory, mission assignment, QR-scanned delivery and issue tracking.",
        stack: ["React", "Radix UI", "Tailwind CSS", "NestJS", "TypeScript", "PostgreSQL"],
        featured: true,
        study: {
          lead:
            "Pallet logistics has three audiences with almost nothing in common: the operator assigning work, the driver executing it on a phone in the field, and the partner who only wants to know where their goods are. PalletFlow is one system with three deliberately different front doors.",
          sections: [
            {
              heading: "The problem",
              body: [
                "The same mission means three different things depending on who is looking. To the operator it is a row in a queue with a cost and an assignee. To the driver it is one task at a time, at arm's length, possibly with no signal. To the partner it is a status and a date.",
                "One interface for all three would have failed all three. Three disconnected apps would have meant three sources of truth.",
              ],
            },
            {
              heading: "Approach",
              body: [
                "One NestJS backend, one domain model, three clients over a shared component library. The shared layer is small on purpose — tokens, primitives, the API client, the auth flow. Everything above that is written per audience.",
                "The driver app took the strictest constraints: large touch targets, a QR scanner as the primary interaction, and a UI that assumes the connection will drop. Scans queue locally and reconcile when the device is back online, because a driver standing in a warehouse should not be blocked by a signal bar.",
              ],
              list: [
                "Admin dashboard — inventory, mission assignment, issue tracking, partner management",
                "Transporter app — mission list, task-at-a-time flow, QR scanning, proof of delivery",
                "Partner app — read-only mission and delivery visibility, scoped to the partner's own goods",
                "Radix UI primitives throughout, so keyboard and screen-reader behaviour came correct by default",
              ],
            },
            {
              heading: "Architecture",
              body: [
                "NestJS modules split by domain behind a role-based guard layer, so a partner token can only ever resolve its own missions — enforced at the query level rather than by filtering the response.",
                "Mission state moves through an explicit state machine, and every transition is recorded with its actor and timestamp. That is what turned issue tracking into a read over existing data instead of a separate feature.",
              ],
            },
          ],
          outcome: [
            "Three applications delivered against one backend and one design system",
            "QR-scanned confirmation replaced paper proof-of-delivery in the field",
            "Full mission audit trail available to operators without a separate reporting tool",
          ],
          metrics: [
            { value: "3", label: "Applications shipped" },
            { value: "1", label: "Shared design system" },
            { value: "100%", label: "Missions auditable" },
          ],
        },
      },
      {
        slug: "trek-bike-rental",
        index: "04",
        name: "Trek Bike Rental",
        tagline: "Booking, availability and secure auth end to end",
        category: "Full-stack application",
        period: "2022",
        role: "Full Stack Developer",
        summary:
          "A rental platform with authentication, a reservation engine that refuses to double-book, and an interactive booking interface.",
        stack: ["React", "Redux", "Ruby on Rails", "PostgreSQL", "RSpec"],
        featured: false,
        study: {
          lead:
            "A rental system is a scheduling problem wearing a booking form. The interesting part is never the form — it is what happens when two people reserve the same bike for overlapping days at the same moment.",
          sections: [
            {
              heading: "Approach",
              body: [
                "A Rails API with a Postgres exclusion constraint on the reservation date range, so overlapping bookings are impossible at the database level rather than merely unlikely at the application level. The API surfaces the conflict and the UI turns it into a readable message instead of a 500.",
                "React and Redux on the front for a booking flow where availability updates as the date range changes, and where the user never sees a slot they cannot actually take.",
              ],
              list: [
                "Token-based authentication with server-side session invalidation",
                "Availability computed from the reservation range rather than a mutable status flag",
                "Optimistic UI on selection, pessimistic confirmation on submit",
              ],
            },
          ],
          outcome: [
            "Double-booking made structurally impossible rather than defended against in application code",
            "Built during the Microverse program alongside daily remote pair programming and code review",
          ],
        },
      },
      {
        slug: "ecommerce-platform",
        index: "05",
        name: "E-commerce Platform",
        tagline: "Faceted catalogue and a checkout that holds up",
        category: "Full-stack application",
        period: "2022",
        role: "Full Stack Developer",
        summary:
          "A storefront with multi-dimensional filtering over a growing catalogue, and a checkout flow built around idempotency.",
        stack: ["React", "Redux", "Ruby on Rails", "PostgreSQL"],
        featured: false,
        study: {
          lead:
            "Two things decide whether a storefront works: whether a shopper can narrow the catalogue to the thing they want, and whether the checkout can be trusted with money.",
          sections: [
            {
              heading: "Approach",
              body: [
                "Filtering is driven entirely from the URL. Every facet — category, price band, attributes, sort — lives in the query string, so a filtered view is shareable, restorable on refresh and cacheable, and the client holds no filter state of its own.",
                "The checkout treats submission as idempotent. An order carries a client-generated key, so a retried request resolves to the same order rather than a second one — which is the failure mode a shaky connection produces most often.",
              ],
              list: [
                "URL-as-state faceted filtering with server-side pagination",
                "Idempotent order submission keyed per attempt",
                "Cart persisted across sessions and reconciled on login",
              ],
            },
          ],
          outcome: [
            "Catalogue navigable across several dimensions at once without a client-side state tangle",
            "Checkout resilient to double submission and network retries",
          ],
        },
      },
    ],
  },

  experience: {
    label: "Experience",
    title: "Four years, three teams, one throughline: make it faster",
    intro:
      "Every role below has a number attached to it, because the work was measured. These are the ones that held up afterwards.",
    present: "Present",
    items: [
      {
        id: "vayetek",
        company: "Vayetek",
        role: "Lead Full Stack Developer",
        period: "Feb 2026 — Present",
        location: "Sousse, Tunisia",
        current: true,
        summary:
          "Leading development of custom data-visualization extensions for Power BI and Qlik, and the team that builds them.",
        highlights: [
          "Built custom Power BI and Qlik visualization extensions in React and D3.js, running inside each host's rendering lifecycle.",
          "Led a team of 5+ developers and owned pull-request review, clearing blockers early and lifting sprint velocity.",
          "Refactored a legacy React codebase, cutting re-renders by 25% and making the UI measurably quicker.",
          "Partnered with product managers and UI/UX designers to ship high-performance chart components on schedule.",
        ],
        metrics: [
          { value: "−25%", label: "React re-renders" },
          { value: "5+", label: "Developers led" },
        ],
        stack: ["React", "TypeScript", "D3.js", "Power BI API", "Qlik Sense API"],
      },
      {
        id: "dieture",
        company: "Dieture",
        role: "Full Stack Developer",
        period: "Aug 2023 — Feb 2026",
        location: "Sousse, Tunisia",
        summary:
          "Owned features end to end across a Next.js front end and a Node API, with performance as a standing requirement.",
        highlights: [
          "Architected and optimised API endpoints, reducing response time by 30%.",
          "Engineered a scalable front-end architecture in Next.js and React, delivering 25% faster page loads.",
          "Introduced GraphQL for client-driven queries, eliminating over-fetching on data-heavy screens.",
          "Integrated third-party payment processing and data-visualization services into the product.",
          "Refactored a legacy codebase toward clearer module boundaries, improving scalability and maintainability.",
        ],
        metrics: [
          { value: "−30%", label: "API response time" },
          { value: "−25%", label: "Page load time" },
        ],
        stack: ["Next.js", "React", "Node.js", "GraphQL", "TypeScript"],
      },
      {
        id: "enr-agri",
        company: "EnR Agri",
        role: "Frontend Developer",
        period: "Feb 2023 — Aug 2023",
        location: "Sousse, Tunisia",
        summary:
          "Front-end delivery on a Next.js product, focused on responsive UI and first-load performance.",
        highlights: [
          "Built responsive UI components with Next.js and Tailwind CSS, contributing to a 20% lift in user engagement.",
          "Applied server-side rendering, code splitting and lazy loading to cut load time by 40%.",
          "Integrated third-party services for reporting and data visualization.",
        ],
        metrics: [
          { value: "−40%", label: "Load time" },
          { value: "+20%", label: "User engagement" },
        ],
        stack: ["Next.js", "React", "Tailwind CSS", "JavaScript"],
      },
    ],
    educationLabel: "Education",
    education: [
      {
        id: "microverse",
        school: "Microverse",
        program: "Full-Stack Web Development",
        period: "May 2022 — Mar 2023",
        location: "Remote",
        points: [
          "1300+ hours of mastery-based full-stack curriculum",
          "15+ projects in React, Ruby on Rails and JavaScript",
          "Daily remote pair programming and Agile delivery",
        ],
      },
      {
        id: "polytechnique",
        school: "Ecole Polytechnique Sousse",
        program: "Preparatory Cycle for Engineering Studies",
        period: "Jun 2018 — Sep 2021",
        location: "Sousse, Tunisia",
        points: [
          "Intensive mathematics, physics and engineering fundamentals",
          "Analytical and problem-solving training for competitive national entrance exams",
        ],
      },
    ],
  },

  stack: {
    label: "Stack",
    title: "What I reach for",
    intro:
      "Tools I have shipped production software with, grouped by where they sit. The list is deliberately shorter than the list of tools I have touched.",
    groups: [
      {
        name: "Frontend",
        items: [
          "TypeScript",
          "React",
          "Next.js",
          "Redux",
          "Tailwind CSS",
          "Radix UI",
          "React Query",
          "Web Animations",
        ],
      },
      {
        name: "Backend",
        items: [
          "Node.js",
          "NestJS",
          "GraphQL",
          "REST APIs",
          "Ruby on Rails",
          "PostgreSQL",
          "Prisma",
        ],
      },
      {
        name: "Data & visualization",
        items: [
          "D3.js",
          "Power BI extensions",
          "Qlik Sense extensions",
          "SQL",
          "Chart architecture",
        ],
      },
      {
        name: "Practice",
        items: [
          "Git",
          "Code review",
          "Agile / Scrum",
          "Web performance",
          "Accessibility",
          "CI/CD",
        ],
      },
    ],
    note:
      "Comfortable owning a feature from data model to interaction detail — and equally comfortable being the person who reviews yours.",
  },

  github: {
    label: "Open source",
    title: "Latest from GitHub",
    intro: "Recently updated public repositories, pulled live.",
    updated: "Updated",
    viewProfile: "View full profile",
    empty:
      "Repositories are taking a moment to load — the profile link below always works.",
    stars: "stars",
  },

  about: {
    label: "About",
    title: "Engineer first, but the interface is the product",
    paragraphs: [
      "I am a full stack developer based in Sousse, Tunisia, four years into building software that people use at work every day. My centre of gravity is the JavaScript and TypeScript ecosystem — React and Next.js on the front, Node and NestJS behind it — and my instinct on any feature is to ask what it will cost in load time before asking what it will look like.",
      "That started with an engineering preparatory cycle, which gave me the habit of measuring things, and continued through Microverse, where I wrote code in daily remote pair programming with people in other time zones. It is why code review is my favourite part of the job rather than an obligation: most of the performance work on a team happens inside someone else's pull request.",
      "Right now I lead a small team building data-visualization extensions for Power BI and Qlik — the kind of work where a careless render loop freezes someone's report. On the side I am building Mnadhem, an operations product for Tunisian retail businesses, because the tools available to them assume a business that does not exist here.",
    ],
    languagesLabel: "Languages",
    languages: [
      { name: "Arabic", level: "Native", value: 100 },
      { name: "English", level: "Proficient", value: 88 },
      { name: "French", level: "Advanced", value: 80 },
    ],
    factsLabel: "At a glance",
    facts: [
      { label: "Based in", value: "Sousse, Tunisia (GMT+1)" },
      { label: "Focus", value: "Full stack · React and NestJS" },
      { label: "Currently", value: "Lead Full Stack Developer at Vayetek" },
      { label: "Open to", value: "Full-time, contract and remote" },
    ],
  },

  contact: {
    label: "Contact",
    title: "Let's build something",
    lead:
      "Hiring, contracting, or just after a second opinion on an architecture decision — I read everything that comes through here and reply within a day or two.",
    form: {
      name: "Name",
      namePlaceholder: "Your name",
      email: "Email",
      emailPlaceholder: "you@company.com",
      subject: "Subject",
      subjectPlaceholder: "What is this about?",
      message: "Message",
      messagePlaceholder: "Tell me about the role, the project, or the problem.",
      submit: "Send message",
      sending: "Sending…",
      success: "Message sent. I will get back to you shortly.",
      error: "Something went wrong. Email me directly and it will get there.",
      required: "This field is required.",
      invalidEmail: "Enter a valid email address.",
      tooShort: "A little more detail would help.",
      fallbackNote: "The form is not wired up yet — email works just as well.",
      fallbackCta: "Email me directly",
    },
    directLabel: "Direct",
    copy: "Copy",
    copied: "Copied",
  },

  footer: {
    built: "Designed and built by Anas Chaabane with Next.js and Tailwind CSS. No animation library — the motion here is CSS.",
    rights: "All rights reserved.",
    availability: "Open to opportunities",
  },

  caseStudy: {
    back: "Back to work",
    overview: "Overview",
    role: "Role",
    period: "Period",
    stackLabel: "Stack",
    outcome: "Outcome",
    next: "Next project",
    liveSite: "Live site",
    sourceCode: "Source code",
    contactCta: "Start a conversation",
    contactLead: "Working on something similar? I would like to hear about it.",
  },

  notFound: {
    title: "404 — Nothing here",
    lead: "That page does not exist, or it moved. The work is still where you left it.",
    cta: "Back home",
  },
};
