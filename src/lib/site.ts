export const SITE = {
  url: "https://chaabaneanas.github.io",
  name: "Anas Chaabane",
  shortName: "AC",
  role: "Full Stack Developer",
  email: "anas.chaabane98@gmail.com",
  phone: "+21626951134",
  phoneDisplay: "+216 26 951 134",
  location: "Sousse, Tunisia",
  locality: "Sousse",
  country: "TN",
  linkedin: "https://www.linkedin.com/in/chaabaneanas/",
  github: "https://github.com/ChaabaneAnas",
  githubUser: process.env.NEXT_PUBLIC_GITHUB_USER ?? "ChaabaneAnas",
  resume: "/Eng_Anas_Chaabane.pdf",
  since: 2022,
} as const;

/** Public by design — Web3Forms keys are meant to live in the client bundle. */
export const WEB3FORMS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_KEY ?? "";
