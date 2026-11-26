/*
  Données du portfolio "branches" (vue timeline 3D).
  - Dates au format "AAAA-MM" ou "now".
  - gains : valeur gagnée par compétence à la fin de l'expérience (progressif pendant sa durée).
  - Pour ajouter une expérience : ajouter un objet dans "experiences" avec une "branch" existante.
  - Pour ajouter une branche : ajouter un objet dans "branches" (lane = hauteur : positif en haut, négatif en bas).
*/
const PORTFOLIO_DATA = {
  person: {
    name: "Jonathan Chaffanjon",
    birth: "1984-06",
    photo: "image/jonathan chaffanjon.webp",
    tagline: "Formateur · Développeur · Bâtisseur"
  },

  contact: [
    { icon: "TEL", label: "Téléphone", value: "06 10 67 83 31", url: "tel:+33610678331" },
    { icon: "MAIL", label: "Email", value: "jonathanchaf@gmail.com", url: "mailto:jonathanchaf@gmail.com" },
    { icon: "GIT", label: "GitHub", value: "github.com/rapatatasse", url: "https://github.com/rapatatasse" },
    { icon: "GPS", label: "Adresse", value: " 07430 St Clair, Rhône Alpes", url: "" },
    { icon: "CV", label: "CV (PDF)", value: "Télécharger le CV", url: "cv 2024.01 .pdf" }
  ],

  clients: [
    "PAC diffusion", "Nexconec", "Artixium", "MPI", "Securygard", "Arcada", "L'atelier Patisserie", "AGP", "Boxing club Viennois",
    "AMB", "Eco Bois Matériaux", "Les amis du Plateau", "Silcomp", "ASA irrigation", "GESR Energie"
  ],

  branches: [
    { id: "gestion",    name: "Gestion d'entreprise",      color: "#f0883e", lane: -28 },
    { id: "batiment",   name: "Bâtiment",                  color: "#d29922", lane: -56 },
    { id: "ingenierie", name: "Ingénierie & plans 3D",     color: "#39d0d0", lane: -84 },
    { id: "code",       name: "Codage",                    color: "#58a6ff", lane: 28 },
    { id: "formation",  name: "Formation",                 color: "#bc8cff", lane: 56 },
    { id: "art",        name: "Création artistique",       color: "#f778ba", lane: 84 }
  ],

  skills: [
    { id: "service",     label: "Service client",          branch: "gestion" },
    { id: "polyvalence", label: "Polyvalence",             branch: "gestion" },
    { id: "gestionResto",label: "Gestion restaurant",      branch: "gestion" },
    { id: "entreprendre",label: "Entrepreneuriat",         branch: "gestion" },
    { id: "admin",       label: "Administration / CRM-ERP",branch: "gestion" },
    { id: "management",  label: "Management d'équipe",     branch: "gestion" },

    { id: "construction",label: "Construction",            branch: "batiment" },
    { id: "electricite", label: "Électricité",             branch: "batiment" },
    { id: "finitions",   label: "Placo / Peinture / Menuiserie", branch: "batiment" },
    { id: "chantier",    label: "Autonomie de chantier",   branch: "batiment" },

    { id: "hydraulique", label: "Hydraulique",             branch: "ingenierie" },
    { id: "analyse",     label: "Analyse technique",       branch: "ingenierie" },
    { id: "plans",       label: "Plans de construction",   branch: "ingenierie" },
    { id: "modelisation",label: "Modélisation 3D",         branch: "ingenierie" },

    { id: "web",         label: "Web (HTML/CSS/JS)",       branch: "code" },
    { id: "rails",       label: "Ruby on Rails",           branch: "code" },
    { id: "laravel",     label: "Laravel / PHP",           branch: "code" },
    { id: "bdd",         label: "Bases de données",        branch: "code" },
    { id: "vba",         label: "VBA / Automatisation",    branch: "code" },
    { id: "wordpress",   label: "WordPress",               branch: "code" },
    { id: "arduino",     label: "Arduino / Électronique",  branch: "code" },
    { id: "bi",          label: "Power BI / Données",      branch: "code" },

    { id: "pedagogie",   label: "Pédagogie",               branch: "formation" },
    { id: "bureautique", label: "Bureautique (Office)",    branch: "formation" },
    { id: "elearning",   label: "Supports e-learning",     branch: "formation" },
    { id: "enseignement",label: "Enseignement supérieur",  branch: "formation" },

    { id: "logo",        label: "Logos / Identité visuelle",branch: "art" },
    { id: "vectoriel",   label: "Dessin vectoriel",        branch: "art" }
  ],

  experiences: [
    {
      id: "auberge-pano", branch: "gestion", start: "1996-06", end: "2006-06",
      title: "Auberge Panoramique", place: "Restaurant familial, St Etienne",
      desc: "Aide polyvalente au restaurant familial depuis mon plus jeune âge jusqu'à sa fermeture : service, cuisine, accueil des clients. Première école de la rigueur et du contact humain.",
      images: ["image/experience/aub0.jpg"],
      gains: { service: 15, polyvalence: 15 }
    },
    {
      id: "btsa", branch: "ingenierie", start: "2003-09", end: "2007-06",
      title: "BTSA Gestion et maîtrise de l'eau", place: "Institut rural de la Loire, St Etienne",
      desc: "Formation technique en hydraulique et gestion de l'eau, avec un stage en hydraulique de 13 mois sur le terrain.",
      images: ["image/experience/planperso1.png"],
      gains: { hydraulique: 15, analyse: 12 }
    },
    {
      id: "licence-eau", branch: "ingenierie", start: "2006-09", end: "2007-06",
      title: "Licence Ingénierie et exploitation des eaux", place: "IUT de Saint Etienne",
      desc: "Approfondissement en ingénierie : dimensionnement, exploitation et analyse de réseaux d'eau.",
      images: ["image/experience/planperso2.png"],
      gains: { hydraulique: 10, analyse: 8 }
    },
    {
      id: "auberge-construction", branch: "batiment", start: "2008-01", end: "2009-01",
      title: "Construction de l'Auberge du Tremplin", place: "Le Bessat (42660)",
      desc: "Construction du bâtiment réalisée à 80 % en autonomie pendant un an : gros œuvre, électricité, finitions. Un chantier complet de A à Z.",
      images: ["image/experience/aub1.jpg", "image/experience/aub2.jpg", "image/experience/aub3.jpg", "image/experience/aub4.jpg"],
      gains: { construction: 25, electricite: 10, finitions: 12, chantier: 20 }
    },
    {
      id: "auberge-gestion", branch: "gestion", start: "2009-01", end: "2010-12",
      title: "Cogérant - Auberge du Tremplin", place: "Le Bessat (42660)",
      desc: "Gestion du restaurant pendant un an, jusqu'à 100 couverts par service : équipe, approvisionnement, comptabilité, relation client.",
      images: ["image/experience/planauberge1.jpg", "image/experience/planauberge2.jpg"],
      gains: { gestionResto: 25, management: 12, entreprendre: 8, service: 10 }
    },
    {
      id: "utobat", branch: "batiment", start: "2011-01", end: "2015-06",
      title: "Autoentrepreneur - Utobat", place: "Particuliers et professionnels",
      desc: "Bâtiment second œuvre pour particuliers et professionnels : électricité, placo, peinture, menuiserie… Gestion complète de mon activité.",
      images: ["image/experience/loc (1).jpg", "image/experience/loc (2).jpg", "image/experience/loc (3).jpg"],
      gains: { electricite: 15, finitions: 25, chantier: 15, entreprendre: 20, service: 5 }
    },
    {
      id: "assistant-formateur", branch: "formation", start: "2015-12", end: "2016-10",
      title: "Assistant de direction et formateur informatique", place: "Centre de formation",
      desc: "Gestion administrative d'un centre de formation informatique, formation de stagiaires en bureautique et réalisation de supports de cours e-learning.",
      images: ["image/experience/excel (1).png", "image/experience/excel (2).png", "image/experience/excel (3).png"],
      gains: { pedagogie: 18, bureautique: 30, elearning: 18, admin: 12 }
    },
    {
      id: "vba-office", branch: "code", start: "2016-03", end: "2024-10",
      title: "Automatisation VBA & Access", place: "Clients et formations",
      desc: "Automatisation des tâches administratives : macros Excel/VBA, bases Access, outils de suivi sur mesure pour les entreprises et les stagiaires.",
      images: ["image/experience/access (1).png", "image/experience/excel (1).png"],
      gains: { vba: 40, bdd: 12, bureautique: 12 }
    },
    {
      id: "platon", branch: "gestion", start: "2017-01", end: "2024-10",
      title: "Gérant - Platon formation puis Linkdigit", place: "EURL puis SARL",
      desc: "Direction d'un centre de formation et d'une société de services informatiques : clients, projets, assistance, création d'applications, mise en place de CRM / ERP (Dolibarr).",
      images: ["image/client (1).jpg", "image/client (2).jpg", "image/client (3).jpg"],
      gains: { entreprendre: 35, management: 25, admin: 35, service: 15 }
    },
    {
      id: "formateur-platon", branch: "formation", start: "2017-01", end: "2024-10",
      title: "Formateur à plein temps", place: "Platon formation / Linkdigit",
      desc: "Formations spécialisées en automatisation des tâches administratives, bureautique et développement pour des publics variés.",
      images: ["image/experience/js (1).jpg", "image/experience/js (2).jpg"],
      gains: { pedagogie: 35, bureautique: 20, elearning: 12 }
    },
    {
      id: "plans-permis", branch: "ingenierie", start: "2017-06", end: "2025-06",
      title: "Plans de maisons & permis de construire", place: "SketchUp · plans 3D",
      desc: "Création de plans complets pour permis de construire et de modélisations 3D de maisons. À venir : plans d'objets et autres réalisations 3D.",
      images: ["image/experience/planmh (1).jpg", "image/experience/planfa1.png", "image/experience/planbl1.png", "image/experience/planpav1.png"],
      gains: { plans: 40, modelisation: 35, analyse: 8 }
    },
    {
      id: "logos", branch: "art", start: "2017-09", end: "2024-10",
      title: "Logos & identités visuelles", place: "Inkscape · clients Linkdigit",
      desc: "Réalisation de logos et d'identités visuelles pour les clients, en dessin vectoriel avec Inkscape.",
      images: ["image/inkscape.png"],
      gains: { logo: 30, vectoriel: 30 }
    },
    {
      id: "wordpress", branch: "code", start: "2018-03", end: "2024-10",
      title: "Sites WordPress & CRM Dolibarr", place: "Clients Linkdigit",
      desc: "Création de sites vitrines WordPress et mise en place de CRM / ERP Dolibarr pour des petites entreprises.",
      images: ["image/wordpress.png", "image/dolibarr.png"],
      gains: { wordpress: 35, admin: 10, web: 8 }
    },
    {
      id: "arduino-bi", branch: "code", start: "2018-09", end: "2024-10",
      title: "Arduino & Power BI", place: "Projets clients",
      desc: "Projets électroniques avec Arduino et tableaux de bord de données avec Power BI.",
      images: ["image/arduino.png", "image/powerbi.jpg"],
      gains: { arduino: 35, bi: 30 }
    },
    {
      id: "wagon", branch: "code", start: "2019-01", end: "2019-04",
      title: "Développeur Full Stack - Le Wagon", place: "Lyon",
      desc: "Bootcamp de 9 semaines : bases de données, HTML, CSS, JavaScript, Ruby on Rails et travail en équipe sur une application web complète.",
      images: ["image/experience/ruby (1).png", "image/experience/ruby (2).png", "image/rails.png"],
      gains: { web: 40, rails: 45, bdd: 25 }
    },
    {
      id: "apps-sur-mesure", branch: "code", start: "2019-06", end: "2025-10",
      title: "Applications sur mesure", place: "Laravel · Rails · Node · Kotlin",
      desc: "Création d'applications web et mobiles sur mesure pour répondre aux besoins précis des clients. Mon activité principale depuis quelques années.",
      images: ["image/laravel.png", "image/experience/node (1).jpg", "image/experience/kotlin (0).png"],
      gains: { laravel: 50, rails: 20, web: 35, bdd: 25 }
    },
    {
      id: "bts-slam", branch: "formation", start: "2021-09", end: "now",
      title: "Professeur BTS SLAM", place: "Solutions Logicielles et Applications Métiers",
      desc: "Enseignement du développement d'applications en BTS SIO option SLAM : conception, programmation, bases de données et projets.",
      images: ["image/experience/js (3).jpg", "image/experience/js (4).jpg"],
      gains: { enseignement: 55, pedagogie: 25 }
    }
  ]
};
