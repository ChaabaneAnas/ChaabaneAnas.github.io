import type { Content } from "./types";

export const fr: Content = {
  htmlLang: "fr",

  meta: {
    title: "Anas Chaabane — Développeur Full Stack",
    titleTemplate: "%s · Anas Chaabane",
    description:
      "Développeur Full Stack, 4 ans en production. Je construis des produits rapides et riches en données avec React, Next.js, TypeScript, NestJS et D3 — et je mesure la différence.",
    keywords: [
      "Développeur Full Stack",
      "Développeur React",
      "Next.js",
      "TypeScript",
      "NestJS",
      "Node.js",
      "D3.js",
      "GraphQL",
      "extensions Power BI",
      "extensions Qlik",
      "Tunisie",
      "Sousse",
      "Anas Chaabane",
    ],
    ogAlt: "Anas Chaabane — Développeur Full Stack",
  },

  nav: {
    items: [
      { id: "work", label: "Projets" },
      { id: "experience", label: "Parcours" },
      { id: "stack", label: "Stack" },
      { id: "about", label: "À propos" },
      { id: "contact", label: "Contact" },
    ],
    resume: "CV",
    resumeAria: "Télécharger le CV en PDF",
    openMenu: "Ouvrir le menu",
    closeMenu: "Fermer le menu",
    langLabel: "Langue",
    switchTo: "View in English",
    skipToContent: "Aller au contenu",
    backToTop: "Haut de page",
  },

  hero: {
    status: "Ouvert aux opportunités",
    role: "Développeur Full Stack",
    firstName: "Anas",
    lastName: "Chaabane",
    lead:
      "Quatre ans à livrer du logiciel en production. Je travaille sur toute la stack JavaScript — React et Next.js côté interface, Node et NestJS derrière — et je passe l'essentiel de mon temps sur ce que les gens ressentent vraiment : la vitesse de chargement, et la tenue de charge face aux vraies données.",
    stackLine: ["TypeScript", "React", "Next.js", "NestJS", "GraphQL", "D3.js"],
    primaryCta: "Voir les projets",
    secondaryCta: "CV",
    scrollHint: "Défiler",
    location: "Sousse, Tunisie · Ouvert au télétravail · GMT+1",
    stats: [
      { value: "4", label: "Ans en production" },
      { value: "20+", label: "Projets livrés" },
      { value: "5+", label: "Développeurs encadrés" },
      { value: "3", label: "Langues parlées" },
    ],
  },

  work: {
    label: "Projets sélectionnés",
    title: "Ce que j'ai construit, et ce que ça a changé",
    intro:
      "Une liste courte plutôt qu'exhaustive. Chacun de ces projets a été livré à de vrais utilisateurs, et chacun a son étude de cas : le problème, l'architecture, le résultat.",
    viewCase: "Lire l'étude de cas",
    all: "Tous les projets",
    projects: [
      {
        slug: "bi-visualization-extensions",
        index: "01",
        name: "Extensions de visualisation BI",
        tagline: "Des moteurs graphiques sur mesure dans Power BI et Qlik",
        category: "Data visualisation · Vayetek",
        period: "2026 — Aujourd'hui",
        role: "Lead Développeur Full Stack",
        summary:
          "Des extensions de visualisation React et D3 exécutées à l'intérieur de Power BI et Qlik Sense, conçues pour des volumes de données où un rendu naïf fige l'application hôte.",
        stack: ["React", "TypeScript", "D3.js", "API Power BI", "API Qlik Sense", "Rollup"],
        featured: true,
        study: {
          lead:
            "Les plateformes de business intelligence arrivent avec une bibliothèque de graphiques figée. Quand un client a besoin d'un visuel absent de cette bibliothèque, il faut le construire — en bac à sable, dans le cycle de rendu de l'hôte, sur son modèle de données. C'est le travail que je dirige chez Vayetek.",
          sections: [
            {
              heading: "Le problème",
              body: [
                "Power BI et Qlik exposent tous deux une API d'extension, et imposent tous deux la même contrainte : votre visuel s'exécute dans leur boucle de mise à jour, sur leur modèle de données, dans leur budget mémoire. Un graphique qui tourne sans effort dans une application React autonome saccade — ou fige le rapport entier — dès qu'il doit se redessiner à chaque filtre croisé, chaque redimensionnement et chaque sélection.",
                "Les clients qui demandent ces visuels ne cherchent pas de la décoration. Ils veulent des encodages que la bibliothèque standard ne sait pas exprimer : comparaisons superposées, hiérarchies personnalisées, échelles métier, sur des jeux de dizaines de milliers de lignes.",
              ],
            },
            {
              heading: "L'approche",
              body: [
                "Chaque visuel est découpé en trois couches. Une couche données remet la vue fournie par l'hôte à plat, typée. Une couche layout construite sur D3 calcule échelles, empilements et tracés, sans jamais toucher au DOM. Une fine couche React peint exactement ce que le layout a produit.",
                "Garder D3 hors du DOM est la décision qui fait tenir le reste. Plus de double comptabilité entre deux bibliothèques qui veulent posséder les mêmes nœuds, plus de SVG orphelin après une mise à jour, et une couche layout testable sans navigateur.",
              ],
              list: [
                "Calcul de layout mémoïsé sur la révision de données de l'hôte : un redimensionnement ne recalcule jamais les échelles",
                "Chemins de rendu sur canvas au-delà du point où le SVG n'est plus viable",
                "Une couche de tokens partagée pour hériter du thème du rapport au lieu de coder les couleurs en dur",
                "Schémas du panneau de propriétés typés de bout en bout : une option de mise en forme ne peut pas exister sans son gestionnaire",
              ],
            },
            {
              heading: "Encadrer l'équipe",
              body: [
                "J'encadre ici une équipe de cinq développeurs et plus : je pose l'architecture, je relis chaque pull request, et je débloque les gens avant que ça ne coûte un sprint. La revue est l'endroit où se fait l'essentiel du travail de performance — entre un visuel qui se redessine en 16 ms et un qui prend 400 ms, il y a en général quatre lignes dans un chemin de rendu.",
                "En parallèle, j'ai refactorisé une base de code React historique du même produit, réduisant les re-rendus inutiles d'environ 25 % et rendant l'interface nettement plus réactive.",
              ],
            },
          ],
          outcome: [
            "Composants graphiques livrés dans les délais, avec les product managers et les designers comme partenaires",
            "25 % de re-rendus en moins sur la base de code React refactorisée",
            "Vélocité de sprint en hausse après la prise en charge de la revue de code et du déblocage de l'équipe",
          ],
          metrics: [
            { value: "−25 %", label: "Re-rendus React" },
            { value: "5+", label: "Développeurs encadrés" },
            { value: "2", label: "Plateformes BI visées" },
          ],
        },
      },
      {
        slug: "mnadhem",
        index: "02",
        name: "Mnadhem",
        tagline: "Un hub d'opérations pensé pour le commerce tunisien réel",
        category: "Produit · Fondateur et développeur",
        period: "2026 — Aujourd'hui",
        role: "Développeur Full Stack",
        summary:
          "Opérations internes, suivi de trésorerie et stock pour les commerces, marques de mode et D2C tunisiens de petite et moyenne taille — conçu autour du cash, des fournisseurs informels et de la vente multicanale.",
        stack: ["Next.js", "TypeScript", "NestJS", "PostgreSQL", "Prisma", "Tailwind CSS"],
        featured: true,
        study: {
          lead:
            "La plupart des logiciels de gestion de stock présupposent une entreprise qui bancarise tout, achète à des fournisseurs facturés et vend sur un seul canal. Une grande part du commerce tunisien ne coche aucune des trois cases. Mnadhem est construit pour l'entreprise qui existe vraiment.",
          sections: [
            {
              heading: "Le problème",
              body: [
                "Ici, les commerces, marques de mode et enseignes en vente directe fonctionnent avec un tableur, un carnet et une conversation de groupe. Le stock vit d'un côté, la trésorerie de l'autre, et le rapprochement se fait dans la tête de quelqu'un en fin de semaine — c'est-à-dire précisément trop tard pour agir.",
                "Les outils importés échouent pour des raisons structurelles, pas cosmétiques : ils supposent le paiement par carte, des fournisseurs facturés, un canal de vente unique et un modèle fiscal qui ne correspond pas. L'écart n'est pas une question de traduction, c'est le modèle de données.",
              ],
            },
            {
              heading: "L'approche",
              body: [
                "Je suis parti du registre de trésorerie plutôt que du catalogue produit. Chaque mouvement — une vente, un règlement fournisseur, un retour, des frais de livraison, un prélèvement du gérant — est une écriture sur un compte, et le mouvement de stock en découle. C'est cette inversion qui fait que les chiffres se rapprochent sans rituel hebdomadaire.",
                "L'interface privilégie la vitesse de saisie sur l'exhaustivité. Enregistrer une vente tient sur un écran, sans champ obligatoire au-delà de ceux qui touchent à l'argent : un outil plus lent que le carnet n'est tout simplement pas utilisé.",
              ],
              list: [
                "Registre de trésorerie en partie double comme source de vérité, le stock étant une projection dessus",
                "Saisie multicanale : boutique, messages privés sur les réseaux, partenaires de livraison",
                "Comptes fournisseurs tolérant les règlements partiels, informels et dans le désordre",
                "Accès par rôle : gérant, responsable de boutique et magasinier ont chacun une seule surface",
              ],
            },
            {
              heading: "Architecture",
              body: [
                "Next.js App Router côté interface, avec des server components sur tous les chemins de lecture : les vues en liste n'embarquent presque aucun JavaScript client. NestJS derrière, un module par domaine — registre, stock, catalogue, identité — et PostgreSQL en dessous, avec des tables de registre en ajout seul.",
                "L'ajout seul est une contrainte volontaire. Une erreur corrigée devient une écriture d'extourne plutôt qu'une modification : l'historique derrière un chiffre contesté reste toujours reconstituable. Dans un commerce au comptant, c'est la fonctionnalité principale.",
              ],
            },
          ],
          outcome: [
            "En développement et en usage actifs, modèle de données validé sur de vrais flux de boutique plutôt que sur des hypothèses",
            "Le tableau de bord répond aux deux questions qui comptent chaque jour : ce qui est en stock, et ce qui est dû",
            "Un produit que je porte de bout en bout — recherche, modélisation, API, interface et déploiement",
          ],
        },
      },
      {
        slug: "palletflow",
        index: "03",
        name: "PalletFlow",
        tagline: "Trois applications, une seule chaîne logistique",
        category: "Freelance · Logistique",
        period: "2025",
        role: "Développeur Full Stack",
        summary:
          "Un tableau de bord admin, une application chauffeur et un portail partenaire sur un unique backend NestJS — stock, affectation des missions, livraison scannée par QR et suivi des incidents.",
        stack: ["React", "Radix UI", "Tailwind CSS", "NestJS", "TypeScript", "PostgreSQL"],
        featured: true,
        study: {
          lead:
            "La logistique de palettes a trois publics qui n'ont presque rien en commun : l'exploitant qui affecte le travail, le chauffeur qui l'exécute sur un téléphone sur le terrain, et le partenaire qui veut seulement savoir où sont ses marchandises. PalletFlow est un seul système avec trois portes d'entrée délibérément différentes.",
          sections: [
            {
              heading: "Le problème",
              body: [
                "La même mission signifie trois choses différentes selon qui la regarde. Pour l'exploitant, c'est une ligne dans une file avec un coût et un affecté. Pour le chauffeur, c'est une tâche à la fois, à bout de bras, peut-être sans réseau. Pour le partenaire, c'est un statut et une date.",
                "Une interface unique pour les trois aurait échoué pour les trois. Trois applications déconnectées auraient signifié trois sources de vérité.",
              ],
            },
            {
              heading: "L'approche",
              body: [
                "Un backend NestJS, un modèle de domaine, trois clients sur une bibliothèque de composants partagée. La couche partagée est volontairement petite — tokens, primitives, client API, flux d'authentification. Tout ce qui est au-dessus est écrit par public.",
                "L'application chauffeur a hérité des contraintes les plus strictes : grandes cibles tactiles, scanner QR comme interaction principale, et une interface qui part du principe que la connexion va tomber. Les scans sont mis en file localement puis réconciliés au retour du réseau : un chauffeur dans un entrepôt ne doit pas être bloqué par une barre de signal.",
              ],
              list: [
                "Tableau de bord admin — stock, affectation des missions, suivi des incidents, gestion des partenaires",
                "Application transporteur — liste des missions, parcours tâche par tâche, scan QR, preuve de livraison",
                "Application partenaire — visibilité en lecture seule, limitée aux marchandises du partenaire",
                "Primitives Radix UI partout : comportement clavier et lecteur d'écran corrects par défaut",
              ],
            },
            {
              heading: "Architecture",
              body: [
                "Des modules NestJS découpés par domaine derrière une couche de garde basée sur les rôles : un jeton partenaire ne peut résoudre que ses propres missions — appliqué au niveau de la requête, pas par filtrage de la réponse.",
                "L'état d'une mission suit une machine à états explicite, et chaque transition est enregistrée avec son acteur et son horodatage. C'est ce qui a transformé le suivi des incidents en simple lecture sur des données existantes plutôt qu'en fonctionnalité séparée.",
              ],
            },
          ],
          outcome: [
            "Trois applications livrées sur un seul backend et un seul design system",
            "La confirmation scannée par QR a remplacé la preuve de livraison papier sur le terrain",
            "Piste d'audit complète des missions, accessible sans outil de reporting séparé",
          ],
          metrics: [
            { value: "3", label: "Applications livrées" },
            { value: "1", label: "Design system partagé" },
            { value: "100 %", label: "Missions auditables" },
          ],
        },
      },
      {
        slug: "trek-bike-rental",
        index: "04",
        name: "Trek Bike Rental",
        tagline: "Réservation, disponibilité et authentification de bout en bout",
        category: "Application full-stack",
        period: "2022",
        role: "Développeur Full Stack",
        summary:
          "Une plateforme de location avec authentification, un moteur de réservation qui refuse la double réservation, et une interface de réservation interactive.",
        stack: ["React", "Redux", "Ruby on Rails", "PostgreSQL", "RSpec"],
        featured: false,
        study: {
          lead:
            "Un système de location est un problème de planification déguisé en formulaire. L'intérêt n'est jamais le formulaire : c'est ce qui se passe quand deux personnes réservent le même vélo sur des jours qui se chevauchent, au même instant.",
          sections: [
            {
              heading: "L'approche",
              body: [
                "Une API Rails avec une contrainte d'exclusion Postgres sur la plage de dates de réservation : les chevauchements sont impossibles au niveau de la base, et pas seulement improbables au niveau applicatif. L'API remonte le conflit et l'interface en fait un message lisible plutôt qu'une erreur 500.",
                "React et Redux côté interface, pour un parcours où la disponibilité se met à jour au changement de plage de dates, et où l'utilisateur ne voit jamais un créneau qu'il ne peut pas prendre.",
              ],
              list: [
                "Authentification par jeton avec invalidation de session côté serveur",
                "Disponibilité calculée depuis la plage de réservation plutôt que depuis un statut mutable",
                "Interface optimiste à la sélection, confirmation pessimiste à la validation",
              ],
            },
          ],
          outcome: [
            "Double réservation rendue structurellement impossible plutôt que défendue dans le code applicatif",
            "Construit pendant le programme Microverse, en pair programming distant quotidien",
          ],
        },
      },
      {
        slug: "ecommerce-platform",
        index: "05",
        name: "Plateforme e-commerce",
        tagline: "Catalogue à facettes et tunnel de commande fiable",
        category: "Application full-stack",
        period: "2022",
        role: "Développeur Full Stack",
        summary:
          "Une boutique avec filtrage multidimensionnel sur un catalogue en croissance, et un tunnel de commande construit autour de l'idempotence.",
        stack: ["React", "Redux", "Ruby on Rails", "PostgreSQL"],
        featured: false,
        study: {
          lead:
            "Deux choses décident si une boutique fonctionne : la capacité du client à réduire le catalogue jusqu'à l'article voulu, et la fiabilité du tunnel de commande quand il s'agit d'argent.",
          sections: [
            {
              heading: "L'approche",
              body: [
                "Le filtrage est entièrement piloté par l'URL. Chaque facette — catégorie, tranche de prix, attributs, tri — vit dans la query string : une vue filtrée est partageable, restaurable au rafraîchissement et cacheable, et le client ne conserve aucun état de filtre.",
                "Le tunnel traite la soumission comme idempotente. Une commande porte une clé générée côté client : une requête rejouée retombe sur la même commande plutôt que d'en créer une seconde — c'est le mode d'échec que produit le plus souvent une connexion instable.",
              ],
              list: [
                "Filtrage à facettes avec l'URL comme état, pagination côté serveur",
                "Soumission de commande idempotente, avec clé par tentative",
                "Panier persistant entre sessions et réconcilié à la connexion",
              ],
            },
          ],
          outcome: [
            "Catalogue navigable sur plusieurs dimensions à la fois, sans enchevêtrement d'état côté client",
            "Tunnel résistant aux doubles soumissions et aux rejeux réseau",
          ],
        },
      },
    ],
  },

  experience: {
    label: "Parcours",
    title: "Quatre ans, trois équipes, un fil conducteur : accélérer",
    intro:
      "Chaque poste ci-dessous porte un chiffre, parce que le travail a été mesuré. Ce sont ceux qui ont tenu dans la durée.",
    present: "Aujourd'hui",
    items: [
      {
        id: "vayetek",
        company: "Vayetek",
        role: "Lead Développeur Full Stack",
        period: "Fév. 2026 — Aujourd'hui",
        location: "Sousse, Tunisie",
        current: true,
        summary:
          "Je dirige le développement d'extensions de visualisation de données sur mesure pour Power BI et Qlik, et l'équipe qui les construit.",
        highlights: [
          "Développement d'extensions de visualisation Power BI et Qlik en React et D3.js, exécutées dans le cycle de rendu de chaque hôte.",
          "Encadrement d'une équipe de 5+ développeurs et prise en charge de la revue de code, pour débloquer tôt et augmenter la vélocité.",
          "Refactorisation d'une base de code React historique : 25 % de re-rendus en moins et une interface nettement plus réactive.",
          "Collaboration avec les product managers et les designers UI/UX pour livrer des composants graphiques performants dans les délais.",
        ],
        metrics: [
          { value: "−25 %", label: "Re-rendus React" },
          { value: "5+", label: "Développeurs encadrés" },
        ],
        stack: ["React", "TypeScript", "D3.js", "API Power BI", "API Qlik Sense"],
      },
      {
        id: "dieture",
        company: "Dieture",
        role: "Développeur Full Stack",
        period: "Août 2023 — Fév. 2026",
        location: "Sousse, Tunisie",
        summary:
          "Prise en charge de fonctionnalités de bout en bout, d'un front Next.js à une API Node, avec la performance comme exigence permanente.",
        highlights: [
          "Conception et optimisation des endpoints d'API : 30 % de temps de réponse en moins.",
          "Architecture front-end scalable en Next.js et React : 25 % de gain sur le temps de chargement des pages.",
          "Introduction de GraphQL pour des requêtes pilotées par le client, éliminant le sur-chargement de données sur les écrans denses.",
          "Intégration de services tiers de paiement et de visualisation de données dans le produit.",
          "Refactorisation d'une base de code historique vers des frontières de modules plus nettes, au bénéfice de la scalabilité et de la maintenabilité.",
        ],
        metrics: [
          { value: "−30 %", label: "Temps de réponse API" },
          { value: "−25 %", label: "Temps de chargement" },
        ],
        stack: ["Next.js", "React", "Node.js", "GraphQL", "TypeScript"],
      },
      {
        id: "enr-agri",
        company: "EnR Agri",
        role: "Développeur Frontend",
        period: "Fév. 2023 — Août 2023",
        location: "Sousse, Tunisie",
        summary:
          "Livraison front-end sur un produit Next.js, centrée sur l'interface responsive et la performance au premier chargement.",
        highlights: [
          "Composants d'interface responsives en Next.js et Tailwind CSS, contribuant à 20 % d'engagement utilisateur en plus.",
          "Rendu côté serveur, découpage du code et chargement différé : 40 % de temps de chargement en moins.",
          "Intégration de services tiers de reporting et de visualisation de données.",
        ],
        metrics: [
          { value: "−40 %", label: "Temps de chargement" },
          { value: "+20 %", label: "Engagement utilisateur" },
        ],
        stack: ["Next.js", "React", "Tailwind CSS", "JavaScript"],
      },
    ],
    educationLabel: "Formation",
    education: [
      {
        id: "microverse",
        school: "Microverse",
        program: "Développement Web Full-Stack",
        period: "Mai 2022 — Mars 2023",
        location: "À distance",
        points: [
          "1300+ heures de cursus full-stack fondé sur la maîtrise",
          "15+ projets en React, Ruby on Rails et JavaScript",
          "Pair programming distant quotidien et méthodes Agile",
        ],
      },
      {
        id: "polytechnique",
        school: "École Polytechnique Sousse",
        program: "Cycle préparatoire aux études d'ingénieur",
        period: "Juin 2018 — Sept. 2021",
        location: "Sousse, Tunisie",
        points: [
          "Mathématiques, physique et fondamentaux de l'ingénierie en cursus intensif",
          "Formation analytique et résolution de problèmes en vue des concours nationaux",
        ],
      },
    ],
  },

  stack: {
    label: "Stack",
    title: "Mes outils de prédilection",
    intro:
      "Les technologies avec lesquelles j'ai livré du logiciel en production, regroupées par couche. La liste est volontairement plus courte que celle des outils que j'ai touchés.",
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
          "API REST",
          "Ruby on Rails",
          "PostgreSQL",
          "Prisma",
        ],
      },
      {
        name: "Données & visualisation",
        items: [
          "D3.js",
          "Extensions Power BI",
          "Extensions Qlik Sense",
          "SQL",
          "Architecture graphique",
        ],
      },
      {
        name: "Pratique",
        items: [
          "Git",
          "Revue de code",
          "Agile / Scrum",
          "Performance web",
          "Accessibilité",
          "CI/CD",
        ],
      },
    ],
    note:
      "À l'aise pour porter une fonctionnalité du modèle de données au détail d'interaction — et tout aussi à l'aise pour être la personne qui relit la vôtre.",
  },

  github: {
    label: "Open source",
    title: "Dernières activités GitHub",
    intro: "Dépôts publics récemment mis à jour, récupérés en direct.",
    updated: "Mis à jour",
    viewProfile: "Voir le profil complet",
    empty:
      "Les dépôts mettent un instant à charger — le lien vers le profil fonctionne toujours.",
    stars: "étoiles",
  },

  about: {
    label: "À propos",
    title: "Ingénieur d'abord, mais l'interface est le produit",
    paragraphs: [
      "Je suis développeur full stack basé à Sousse, en Tunisie, avec quatre ans passés à construire des logiciels que des gens utilisent au travail tous les jours. Mon centre de gravité, c'est l'écosystème JavaScript et TypeScript — React et Next.js côté interface, Node et NestJS derrière — et mon réflexe sur n'importe quelle fonctionnalité est de demander ce qu'elle coûtera en temps de chargement avant de demander à quoi elle ressemblera.",
      "Tout a commencé par un cycle préparatoire d'ingénieur, qui m'a donné l'habitude de mesurer, puis par Microverse, où j'ai codé en pair programming distant quotidien avec des personnes sur d'autres fuseaux. C'est pour ça que la revue de code est ma partie préférée du métier plutôt qu'une obligation : dans une équipe, l'essentiel du travail de performance se joue dans la pull request de quelqu'un d'autre.",
      "Aujourd'hui je dirige une petite équipe qui construit des extensions de visualisation pour Power BI et Qlik — le genre de travail où une boucle de rendu négligée fige le rapport de quelqu'un. En parallèle je construis Mnadhem, un produit d'opérations pour les commerces tunisiens, parce que les outils qui leur sont proposés supposent une entreprise qui n'existe pas ici.",
    ],
    languagesLabel: "Langues",
    languages: [
      { name: "Arabe", level: "Langue maternelle", value: 100 },
      { name: "Anglais", level: "Courant", value: 88 },
      { name: "Français", level: "Avancé", value: 80 },
    ],
    factsLabel: "En bref",
    facts: [
      { label: "Basé à", value: "Sousse, Tunisie (GMT+1)" },
      { label: "Spécialité", value: "Full stack · React et NestJS" },
      { label: "Actuellement", value: "Lead Développeur Full Stack chez Vayetek" },
      { label: "Ouvert à", value: "CDI, freelance et télétravail" },
    ],
  },

  contact: {
    label: "Contact",
    title: "Construisons quelque chose",
    lead:
      "Recrutement, mission freelance, ou simplement un deuxième avis sur une décision d'architecture — je lis tout ce qui passe par ici et je réponds sous un à deux jours.",
    form: {
      name: "Nom",
      namePlaceholder: "Votre nom",
      email: "E-mail",
      emailPlaceholder: "vous@entreprise.com",
      subject: "Sujet",
      subjectPlaceholder: "De quoi s'agit-il ?",
      message: "Message",
      messagePlaceholder: "Parlez-moi du poste, du projet ou du problème.",
      submit: "Envoyer le message",
      sending: "Envoi…",
      success: "Message envoyé. Je reviens vers vous très vite.",
      error: "Un problème est survenu. Écrivez-moi directement, ça arrivera.",
      required: "Ce champ est obligatoire.",
      invalidEmail: "Saisissez une adresse e-mail valide.",
      tooShort: "Un peu plus de détail serait utile.",
      fallbackNote: "Le formulaire n'est pas encore branché — l'e-mail marche tout aussi bien.",
      fallbackCta: "M'écrire directement",
    },
    directLabel: "Direct",
    copy: "Copier",
    copied: "Copié",
  },

  footer: {
    built: "Conçu et développé par Anas Chaabane avec Next.js et Tailwind CSS. Aucune bibliothèque d'animation — tout est en CSS.",
    rights: "Tous droits réservés.",
    availability: "Ouvert aux opportunités",
  },

  caseStudy: {
    back: "Retour aux projets",
    overview: "Aperçu",
    role: "Rôle",
    period: "Période",
    stackLabel: "Stack",
    outcome: "Résultat",
    next: "Projet suivant",
    liveSite: "Site en ligne",
    sourceCode: "Code source",
    contactCta: "Démarrer une conversation",
    contactLead: "Vous travaillez sur quelque chose de similaire ? J'aimerais en entendre parler.",
  },

  notFound: {
    title: "404 — Rien par ici",
    lead: "Cette page n'existe pas, ou elle a déménagé. Les projets, eux, sont restés en place.",
    cta: "Retour à l'accueil",
  },
};
