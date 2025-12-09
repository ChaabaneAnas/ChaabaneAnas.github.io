export default function SchemaOrg() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "ANas Chaabane",
    url: "https://chaabaneanas.com",
    image: "https://chaabaneanas.com/avatar.jpg",
    jobTitle: "Full-Stack Engineer",
    email: "Anas.chaabane98@gmail.com",
    sameAs: [
      "https://www.linkedin.com/in/chaabaneanas/",
      "https://gitlab.com/anas.chaabane98",
      "https://github.com/ChaabaneAnas",
    ],
    worksFor: {
      "@type": "Organization",
      name: "Freelance Developer",
    },
    knowsAbout: [
      "JavaScript",
      "TypeScript",
      "React",
      "Next.js",
      "Node.js",
      "NestJS",
      "Express",
      "MongoDB",
      "PostgreSQL",
      "AWS",
    ],
    contact: {
      "@type": "ContactPoint",
      contactType: "Professional",
      email: "Anas.chaabane98@gmail.com",
      availableLanguage: "en",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
