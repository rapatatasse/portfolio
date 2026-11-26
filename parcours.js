/*
  Données du portfolio "branches" (vue timeline 3D).
  - Dates au format "AAAA-MM" ou "now".
  - gains : valeur gagnée par compétence à la fin de l'expérience (progressif pendant sa durée).
  - images : liste facultative (peut être vide []).
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
    { icon: "WEB", label: "Platon Formation", value: "platonformation.com", url: "https://www.platonformation.com/" },
    { icon: "IN", label: "LinkedIn", value: "jonathan-chaffanjon", url: "https://www.linkedin.com/in/jonathan-chaffanjon-96683775/" },
    { icon: "GIT", label: "GitHub", value: "github.com/rapatatasse", url: "https://github.com/rapatatasse" },
    { icon: "GPS", label: "Adresse", value: " 07430 St Clair, Rhône Alpes", url: "" },
    { icon: "CV", label: "CV (PDF)", value: "Télécharger le CV", url: "cv 2024.01 .pdf" }
  ],

  clients: [
    "PAC diffusion", "Nexconec", "Artixium", "Securygard", "Arcada", "L'atelier Patisserie", "AGP", "Boxing club Viennois",
    "AMB", "Eco Bois Matériaux", "Les amis du Plateau", "Silcomp", "ASA irrigation", "GESR Energie"
  ],

  branches: [
    { id: "gestion",    name: "Gestion d'entreprise",  color: "#f0883e", lane: -34 },
    { id: "batiment",   name: "Bâtiment",              color: "#d29922", lane: -68 },
    { id: "ingenierie", name: "Ingénierie & plans 3D", color: "#39d0d0", lane: -102 },
    { id: "code",       name: "Codage",                color: "#58a6ff", lane: 34 },
    { id: "ia",         name: "IA & automatisation",   color: "#7ee787", lane: 68 },
    { id: "formation",  name: "Formation",             color: "#bc8cff", lane: 102 },
    { id: "art",        name: "Création artistique",   color: "#f778ba", lane: 136 }
  ],

  skills: [
    { id: "service",      label: "Relation client",                branch: "gestion" },
    { id: "stress",       label: "Gestion du stress & pression",   branch: "gestion" },
    { id: "polyvalence",  label: "Polyvalence",                    branch: "gestion" },
    { id: "personnel",    label: "Gestion du personnel",           branch: "gestion" },
    { id: "gestionResto", label: "Gestion de restaurant",          branch: "gestion" },
    { id: "entreprendre", label: "Entrepreneuriat",                branch: "gestion" },
    { id: "admin",        label: "Administration / CRM-ERP",       branch: "gestion" },
    { id: "direction",    label: "Direction d'entreprise",         branch: "gestion" },
    { id: "commercial",   label: "Service client / Commercial (prospection)", branch: "gestion" },

    { id: "construction", label: "Construction",                   branch: "batiment" },
    { id: "electricite",  label: "Électricité / Plomberie",                    branch: "batiment" },
    { id: "finitions",    label: "Placo / Peinture / Menuiserie",  branch: "batiment" },
    { id: "chantier",     label: "Autonomie de chantier",          branch: "batiment" },
    { id: "ecoconst",     label: "Éco-construction (terre, chaux, bois)", branch: "batiment" },
    { id: "energie",      label: "Énergies renouvelables",         branch: "batiment" },

    { id: "analyse",      label: "Analyse technique",              branch: "ingenierie" },
    { id: "plans",        label: "Plans de construction",          branch: "ingenierie" },
    { id: "modelisation", label: "Modélisation 3D (SketchUp, Home 3D)", branch: "ingenierie" },
    { id: "normes",       label: "Normes & permis (ERP, RT2021)",  branch: "ingenierie" },

    { id: "web",          label: "Web (HTML/CSS)",                 branch: "code" },
    { id: "js",           label: "JavaScript / Node.js",           branch: "code" },
    { id: "rails",        label: "Ruby on Rails",                  branch: "code" },
    { id: "laravel",      label: "Laravel / PHP",                  branch: "code" },
    { id: "bdd",          label: "Bases de données",               branch: "code" },
    { id: "vba",          label: "VBA Excel",                      branch: "code" },
    { id: "access",       label: "Access",                         branch: "code" },
    { id: "wordpress",    label: "WordPress",                      branch: "code" },
    { id: "kotlin",       label: "Mobile (Kotlin)",                branch: "code" },
    { id: "devops",       label: "Docker / Git / PowerShell",      branch: "code" },
    { id: "arduino",      label: "Arduino / Électronique",         branch: "code" },
    { id: "bi",           label: "Power BI / Données",             branch: "code" },

    { id: "ia_img",       label: "Création d'images IA",           branch: "ia" },
    { id: "ia_llm",       label: "LLM & prompts",                  branch: "ia" },
    { id: "ia_code",      label: "Codage assisté par IA (Devin)",  branch: "ia" },
    { id: "ia_agents",    label: "Agents IA & n8n",                branch: "ia" },
    { id: "automation",   label: "Automatisation de processus",    branch: "ia" },

    { id: "pedagogie",    label: "Pédagogie",                      branch: "formation" },
    { id: "bureautique",  label: "Bureautique (Office)",           branch: "formation" },
    { id: "elearning",    label: "Supports e-learning",            branch: "formation" },
    { id: "enseignement", label: "Enseignement supérieur (BTS)",   branch: "formation" },
    { id: "formia",       label: "Formation IA & cybersécurité",   branch: "formation" },

    { id: "logo",         label: "Logos / Identité visuelle",      branch: "art" },
    { id: "vectoriel",    label: "Dessin vectoriel (Inkscape)",    branch: "art" },
    { id: "print",        label: "Cartes de visite & flyers",      branch: "art" },
    { id: "jeu",          label: "Conception de jeu de société",   branch: "art" },
    { id: "ecriture",     label: "Écriture & mise en scène",       branch: "art" },
    { id: "production",   label: "Fabrication & édition",          branch: "art" }
  ],

  experiences: [
    /* ============ GESTION D'ENTREPRISE ============ */
    {
      id: "resto-client", branch: "gestion", start: "1998-06", end: "2006-06",
      title: "Restaurant familial : relation client", place: "Auberge Panoramique, St Etienne",
      desc: "À 14 ans, premières tâches au restaurant familial : accueil, service en salle et relation avec les clients. Première école du contact humain et du service sous pression. Vers 16 ans, on me confie la gestion du personnel : organisation du service, coordination de l'équipe en salle et en cuisine, jusqu'à la fermeture du restaurant. Apprentissage de la gestion du stress et de la pression en plein service.",
      images: [],
      gains: { service: 20, stress: 20, polyvalence: 32 }
    },
    {
      id: "auberge-gestion", branch: "gestion", start: "2008-10", end: "2010-12",
      title: "Cogérant - Auberge du Tremplin", place: "Le Bessat (42660)",
      desc: "Gestion du restaurant pendant un an, jusqu'à 100 couverts par service : équipe, approvisionnement, comptabilité, fiche de paye avec TESE, gestion des fournisseurs, achats des matières premières, relation client.",
      images: [],
      gains: { gestionResto: 30, personnel: 15, entreprendre: 20, stress: 15, service: 8 }
    },
      {
      id: "UTOBAT", branch: "gestion", start: "2011-01", end: "2015-12",
      title: "Gérant - UTOBAT", place: "OZON 07",
      desc: "Autoentrepreneur dans le bâtiment second œuvre particulier et professionnel (électricité, placo, peinture, menuiserie…), facturation et gestion administrative, prospection client. création du site internet, des cartes de visite et des flyers, et recherche active de mes clients (service client et démarche commerciale).",
      images: ["image/experience/ent utobat (1).png", "image/experience/ent utobat (2).png", "image/experience/ent utobat (3).png"],
      gains: { direction: 40, entreprendre: 30, admin: 35, service: 12, personnel: 10 }
    },
    {
      id: "platon", branch: "gestion", start: "2017-01", end: "now",
      title: "Gérant - Platon Formation (ex-Linkdigit)", place: "Annonay · EURL puis SARL",
      desc: "Direction de Platon Formation, organisme certifié Qualiopi : formation informatique et bureautique, IA, cybersécurité, données et automatisation, mais aussi création d'applications et de sites sur mesure pour des clients de secteurs variés. Plus de 64 personnes formées, 4,5/5 de satisfaction. Mise en place de CRM / ERP (Dolibarr).",
      images: [],
      gains: { direction: 40, entreprendre: 30, admin: 35, service: 12, personnel: 10 }
    },

    /* ============ BÂTIMENT ============ */
    {
      id: "auberge-construction", branch: "batiment", start: "2007-09", end: "2008-10",
      title: "Construction de l'Auberge du Tremplin", place: "13 mois · brique monomur 37,5 cm",
      desc: "Ma 1ère expérience dans le bâtiment : construire l'Auberge du Tremplin à la sortie de mes études dans l'hydraulique. Brique monomur de 37,5 cm (le R seul ne prend pas en compte l'effusivité du matériau), toiture en panneaux Simonin + fibre de bois : très rapide à poser. Réalisation complète hormis chape liquide, crépis et carrelage au sol. Pour faire connaître l'auberge, création du site internet, des cartes de visite et des flyers.",
      images: ["image/experience/aub1.jpg", "image/experience/aub2.jpg", "image/experience/aub3.jpg", "image/experience/aub4.jpg"],
      gains: { construction: 28, electricite: 10, finitions: 12, chantier: 22, web: 12, print: 15 }
    },
    {
      id: "utobat", branch: "batiment", start: "2011-01", end: "2015-06",
      title: "Autoentrepreneur - Utobat", place: "Particuliers et professionnels",
      desc: "Bâtiment second œuvre pour particuliers et professionnels : électricité, placo, peinture, menuiserie…  Recherche avancée en économie d'énergie, méthode de construction écologique",
      images: ["image/experience/utobat.png"],
      gains: { electricite: 18, finitions: 28, chantier: 15, construction: 8, web: 15, print: 20, commercial: 30 }
    },
    {
      id: "maison-habitation", branch: "batiment", start: "2015-03", end: "2015-11",
      title: "Maison d'habitation", place: "8 mois · béton cellulaire",
      desc: "Après trois ans comme entrepreneur, construction de notre maison, réalisée à 100 % par moi-même (y compris électricité, plomberie, placo, peinture et menuiserie) : béton cellulaire et parpaing pour la partie enterrée. Recherche poussée en économie d'énergie : panneaux solaires photovoltaïques, hydrauliques et tubulaires, jupe isolante, premier test d'enduit terre dans la chambre.",
      images: ["image/experience/perso1.png", "image/experience/perso2.png", "image/experience/perso3.png", "image/experience/perso4.png"],
      gains: { construction: 18, energie: 30, ecoconst: 10, chantier: 10, electricite: 30, finitions: 25 }
    },
    {
      id: "maison-location", branch: "batiment", start: "2022-01", end: "2022-11",
      title: "Maison pour location", place: "10 mois · des plans aux finitions",
      desc: "Création d'une maison de location des plans aux finitions (seules l'isolation par l'extérieur et la chape liquide ont été sous-traitées). Maison en moellon, enduits intérieurs chaux-sable, chaux-sable-terre et 100 % terre avec la terre du terrain. Isolation laine de bois pour optimiser le confort d'été et d'hiver.",
      images: ["image/experience/loc (1).jpg", "image/experience/loc (2).jpg", "image/experience/loc (3).jpg", "image/experience/loc (4).jpg", "image/experience/loc (5).jpg", "image/experience/loc (6).jpg", "image/experience/loc (7).jpg", "image/experience/loc (8).jpg", "image/experience/loc (9).jpg"],
      gains: { ecoconst: 40, construction: 15, chantier: 15, energie: 8 }
    },

    /* ============ INGÉNIERIE & PLANS 3D ============ */
    {
      id: "btsa", branch: "ingenierie", start: "2003-09", end: "2007-06",
      title: "BTSA Gestion et maîtrise de l'eau", place: "Institut rural de la Loire, St Etienne",
      desc: "Formation technique en hydraulique et gestion de l'eau, avec un stage en hydraulique de 13 mois sur le terrain.",
      images: [],
      gains: { analyse: 18 }
    },
    {
      id: "licence-eau", branch: "ingenierie", start: "2006-09", end: "2007-06",
      title: "Licence Ingénierie et exploitation des eaux", place: "IUT de Saint Etienne",
      desc: "Approfondissement en ingénierie : dimensionnement, exploitation et analyse de réseaux d'eau.",
      images: [],
      gains: { analyse: 14 }
    },
    {
      id: "plan-erp", branch: "ingenierie", start: "2006-06", end: "2006-10",
      title: "Plan pour ERP", place: "Architect 3D",
      desc: "1ère expérience en dessin technique pour dépôt de plan : plan pour ERP et plan électrique avec triphasé, dessinés sur Architect 3D.",
      images: ["image/experience/planauberge1.jpg", "image/experience/planauberge2.jpg"],
      gains: { plans: 8, normes: 8 }
    },
    {
      id: "plan-hotel", branch: "ingenierie", start: "2012-03", end: "2012-07",
      title: "Plan hôtel", place: "SketchUp",
      desc: "Suite à la découverte de mon blog sur la construction et la maison troglodyte, j'élabore un visuel sous SketchUp pour une habitation de vacances.",
      images: ["image/experience/planproj1.png", "image/experience/planproj2.png"],
      gains: { modelisation: 12, plans: 4 }
    },
    {
      id: "plan-mh-2013", branch: "ingenierie", start: "2013-03", end: "2013-07",
      title: "Plan maison d'habitation", place: "SketchUp · Home 3D",
      desc: "Plan technique sur SketchUp afin de budgétiser la maçonnerie et la couverture, ainsi que le plan d'électricité.",
      images: ["image/experience/planmh (0).png", "image/experience/planmh (00).png", "image/experience/planmh (1).jpg", "image/experience/planmh (2).jpg", "image/experience/planmh (3).jpg", "image/experience/planmh (4).jpg"],
      gains: { plans: 8, modelisation: 8 }
    },
    {
      id: "plan-2019", branch: "ingenierie", start: "2019-06", end: "2019-10",
      title: "Plan maison d'habitation (client)", place: "SketchUp · Kozikaza",
      desc: "Plan de maison d'habitation pour un client.",
      images: ["image/experience/planan1.png", "image/experience/planan2.png", "image/experience/planan3.png"],
      gains: { plans: 8, modelisation: 5 }
    },
    {
      id: "plan-cabanon", branch: "ingenierie", start: "2020-03", end: "2020-06",
      title: "Plan déclaration cabanon", place: "Home 3D",
      desc: "Demande client pour la création d'un local de stockage : plan et déclaration.",
      images: ["image/experience/planga1.png", "image/experience/planga2.png"],
      gains: { plans: 4, normes: 6 }
    },
    {
      id: "plan-perou", branch: "ingenierie", start: "2020-09", end: "2021-01",
      title: "Maison au Pérou", place: "Home 3D",
      desc: "Création d'une maison d'habitation au Pérou pour un client, avec recherche des normes et des matériaux utilisés sur place.",
      images: ["image/experience/planpav1.png", "image/experience/planpav2.png", "image/experience/planpav3.png"],
      gains: { plans: 6, analyse: 6, modelisation: 4 }
    },
    {
      id: "plan-2021", branch: "ingenierie", start: "2021-06", end: "2021-10",
      title: "Accompagnement complet d'un client", place: "Home 3D",
      desc: "Accompagnement client pour structurer ses envies et besoins, puis dépôt du plan.",
      images: ["image/experience/plander1.png", "image/experience/plander2.png", "image/experience/plander3.png"],
      gains: { plans: 6, normes: 6, modelisation: 4 }
    },
    {
      id: "plan-location", branch: "ingenierie", start: "2022-03", end: "2022-07",
      title: "Plans de la maison de location", place: "Home 3D · SketchUp",
      desc: "Plan complet avec schéma des réseaux électriques et dossier RT2021, plans de maçonnerie et de charpente sur SketchUp pour le chiffrage.",
      images: ["image/experience/planperso1.png", "image/experience/planperso2.png", "image/experience/planperso3.png"],
      gains: { plans: 8, normes: 10, modelisation: 6 }
    },
    {
      id: "plan-2023", branch: "ingenierie", start: "2023-06", end: "2023-10",
      title: "Maison d'habitation (client)", place: "Home 3D",
      desc: "Plan complet pour un client avec dossier RT2021.",
      images: ["image/experience/planbl1.png", "image/experience/planbl2.png", "image/experience/planbl3.png", "image/experience/planbl4.png"],
      gains: { plans: 6, normes: 8 }
    },
    {
      id: "plan-2024", branch: "ingenierie", start: "2024-02", end: "2024-05",
      title: "Maison d'habitation (client)", place: "Home 3D",
      desc: "Plan complet pour un client avec dossier RT2021.",
      images: ["image/experience/planfa1.png", "image/experience/planfa2.png", "image/experience/planfa3.png", "image/experience/planfa4.png"],
      gains: { plans: 6, normes: 6 }
    },
    {
      id: "plan-ext", branch: "ingenierie", start: "2024-07", end: "2024-10",
      title: "Extension de maison d'habitation", place: "Home 3D",
      desc: "Plan d'extension avec diverses options de projection pour aider à la décision de construction.",
      images: ["image/experience/planvois (1).png", "image/experience/planvois (2).png", "image/experience/planvois (3).png"],
      gains: { plans: 5, modelisation: 6 }
    },
    {
      id: "plan-permis", branch: "ingenierie", start: "2025-03", end: "2025-06",
      title: "Plan pour permis de construire", place: "Home 3D",
      desc: "Plan complet depuis la base client et création des différents documents pour le dépôt des plans en mairie.",
      images: ["image/experience/plandavid0.png", "image/experience/plandavid1.png", "image/experience/plandavid2.png"],
      gains: { plans: 6, normes: 8 }
    },

    /* ============ CODAGE ============ */
    {
      id: "vba", branch: "code", start: "2018-01", end: "now",
      title: "VBA Excel (niveau expert)", place: "Depuis 2018",
      desc: "Gestion de bases de données et création de logiciels : gestion de parc de photocopieurs, devis, gestion des EPI, main courante d'agents de sécurité, automatisation d'envoi d'emails, rapports pour personnes en situation de handicap…",
      images: ["image/experience/excel (1).png", "image/experience/excel (2).png", "image/experience/excel (3).png"],
      gains: { vba: 70, bdd: 12, bureautique: 12 }
    },
    {
      id: "sites", branch: "code", start: "2018-06", end: "now",
      title: "Sites vitrines (WordPress, HTML)", place: "Clients Platon Formation",
      desc: "Création de sites vitrines pour des clients : WordPress puis sites en HTML/CSS/JS (dépôts GitHub : AGPI, Securygard, Boxing Olympic Viennois, Chetot gîtes et élevage…).",
      images: ["image/wordpress.png"],
      gains: { wordpress: 40, web: 35 }
    },
    {
      id: "arduino-bi", branch: "code", start: "2019-09", end: "now",
      title: "Arduino & Power BI", place: "Projets clients et formations",
      desc: "Projets électroniques avec Arduino et tableaux de bord de données avec Power BI.",
      images: ["image/arduino.png", "image/powerbi.jpg"],
      gains: { arduino: 30, bi: 40 }
    },
    {
      id: "wagon", branch: "code", start: "2019-01", end: "2019-04",
      title: "Développeur Full Stack - Le Wagon", place: "Lyon",
      desc: "Bootcamp de 9 semaines : bases de données, HTML, CSS, JavaScript, Ruby on Rails et travail en équipe sur une application web complète.",
      images: ["image/experience/ruby (1).png"],
      gains: { web: 25, rails: 30, bdd: 25, js: 10 }
    },
    {
      id: "rails", branch: "code", start: "2019-04", end: "now",
      title: "Ruby on Rails (niveau avancé)", place: "Depuis 2019",
      desc: "7 applications complètes pour des clients, toujours en fonctionnement et en support. Rails 6 et 7, migration de projets de Rails 6 vers Rails 7. Outils : Heroku, Docker, Stimulus, JS, Git, PostgreSQL, S3, Stripe, Mapbox. Mission de formateur Ruby à l'école Hesias (Clermont-Ferrand) pour des BAC +5 en ingénierie.",
      images: ["image/experience/ruby (1).png", "image/experience/ruby (2).png", "image/experience/ruby (3).png", "image/experience/ruby (4).png", "image/experience/ruby (5).png"],
      gains: { rails: 60, bdd: 25, devops: 15, web: 15 }
    },
    {
      id: "access", branch: "code", start: "2020-01", end: "now",
      title: "Access (niveau expert)", place: "Depuis 2020",
      desc: "Réalisation de logiciels complets et interventions chez les clients pour dépannage et amélioration.",
      images: ["image/experience/access (1).png"],
      gains: { access: 70, bdd: 20 }
    },
    {
      id: "laravel", branch: "code", start: "2023-01", end: "2023-04",
      title: "Laravel / PHP", place: "Projet d'exemple pour étudiants",
      desc: "Projet d'exemple Laravel 8 : gestion de produits, rôles sur les utilisateurs, tables liées, middleware.",
      images: ["image/laravel.png"],
      gains: { laravel: 55, bdd: 8 }
    },
    {
      id: "js", branch: "code", start: "2023-06", end: "now",
      title: "JavaScript (niveau avancé)", place: "Depuis 2023",
      desc: "Calculateurs de matériaux et devis en ligne pour des sites web, jeux éducatifs (Platon_Jeux, jeueducatif en collaboration avec des étudiants), exercices JS sous forme de jeu, module BoxTransceiver.",
      images: ["image/experience/js (1).jpg", "image/experience/js (2).jpg", "image/experience/js (3).jpg", "image/experience/js (4).jpg", "image/experience/node (1).jpg"],
      gains: { js: 75, web: 15 }
    },
    {
      id: "devops", branch: "code", start: "2023-10", end: "2025-06",
      title: "Docker & scripts PowerShell", place: "Environnements de développement",
      desc: "Environnements Rails sous Docker pour les étudiants (appwagonwithdocker, RailsDockerNew avec Rails 7 et Devise) et outil PowerShell de gestion de fichiers.",
      images: [],
      gains: { devops: 45 }
    },
    {
      id: "kotlin", branch: "code", start: "2024-01", end: "now",
      title: "Application Kotlin (débutant)", place: "Depuis 2024",
      desc: "Dernier projet : application de gestion de bornes et de comptes avec cartographie.",
      images: ["image/experience/kotlin (0).png", "image/experience/kotlin (1).png", "image/experience/kotlin (2).png", "image/experience/kotlin (3).png"],
      gains: { kotlin: 40 }
    },

    /* ============ IA & AUTOMATISATION ============ */
    {
      id: "stable-diffusion", branch: "ia", start: "2023-03", end: "2023-09",
      title: "Stable Diffusion & ChatGPT", place: "Création d'images par IA",
      desc: "Premiers pas dans l'IA avec la création d'images sous Stable Diffusion : interface graphique et intégration de ChatGPT pour générer les prompts (projet stablediffusion-chatGPT).",
      images: [],
      gains: { ia_img: 45, ia_llm: 10 }
    },
    {
      id: "llm", branch: "ia", start: "2023-09", end: "now",
      title: "Prise en main des LLM", place: "ChatGPT & modèles de langage",
      desc: "Utilisation et intégration des modèles de langage dans mes projets et mes formations : prompts, génération de contenu, aide à l'analyse.",
      images: [],
      gains: { ia_llm: 55, automation: 10 }
    },
    {
      id: "devin", branch: "ia", start: "2024-03", end: "now",
      title: "Codage avec Devin", place: "Développement assisté par agent IA",
      desc: "Codage avec Devin depuis ses débuts : délégation de tâches de développement à un agent IA, revue de code et pilotage des projets.",
      images: [],
      gains: { ia_code: 70, ia_agents: 10 }
    },
    {
      id: "cv-ai", branch: "ia", start: "2026-04", end: "2026-05",
      title: "CV AI Transformeur", place: "Node.js · PowerShell · projet BTS SIO SISR",
      desc: "Transforme les informations de CV en CSV et les affiche dans un site Node.js.",
      images: [],
      gains: { ia_llm: 10, automation: 10, js: 5 }
    },
    {
      id: "n8n", branch: "ia", start: "2026-06", end: "now",
      title: "Agents IA & automatisation n8n", place: "Dernier ajout",
      desc: "Création d'agents IA et automatisation de processus avec n8n : des tâches répétitives transformées en workflows, avec validation humaine au bon endroit.",
      images: [],
      gains: { ia_agents: 55, automation: 50 }
    },

    /* ============ FORMATION ============ */
    {
      id: "assistant-formateur", branch: "formation", start: "2015-12", end: "2016-10",
      title: "Assistant de direction et formateur informatique", place: "Centre de formation",
      desc: "Gestion administrative d'un centre de formation informatique, formation de stagiaires en bureautique et réalisation de supports de cours e-learning.",
      images: [],
      gains: { pedagogie: 18, bureautique: 30, elearning: 18, admin: 12 }
    },
    {
      id: "formateur-platon", branch: "formation", start: "2017-01", end: "now",
      title: "Formateur - Platon Formation", place: "Annonay · centre, intra-entreprise, distance",
      desc: "Formations calibrées pour chaque public après diagnostic : pack Office, Access, Power BI, Google Workspace, VBA et macros, données et tableaux de bord, Inkscape, GIMP, SketchUp. Plateforme de cours en ligne Moodle. Plus de 64 personnes formées, 4,5/5 d'évaluation du formateur.",
      images: [],
      gains: { pedagogie: 50, bureautique: 25, elearning: 20 }
    },
    {
      id: "bts-slam", branch: "formation", start: "2021-09", end: "now",
      title: "Professeur BTS SIO (SLAM)", place: "Solutions Logicielles et Applications Métiers",
      desc: "Enseignement du développement d'applications en BTS SIO option SLAM : conception, programmation, bases de données et projets (création de jeux éducatifs avec les étudiants).",
      images: [],
      gains: { enseignement: 65, pedagogie: 20 }
    },
    {
      id: "formation-ia", branch: "formation", start: "2025-01", end: "now",
      title: "Formation IA, data & cybersécurité", place: "Platon Formation",
      desc: "Formation et accompagnement IA & data : capturer, organiser, exposer et analyser les données, utiliser l'IA générative de façon responsable et sécurisée, reconnaître les risques de cybersécurité.",
      images: [],
      gains: { formia: 60, pedagogie: 8 }
    },

    /* ============ CRÉATION ARTISTIQUE ============ */
    {
      id: "brame", branch: "art", start: "2014-01", end: "2014-12",
      title: "Brame : jeu de société", place: "Création et auto-édition",
      desc: "Création d'un jeu de société, Brame : conception des règles et du matériel, fabrication confiée à des prestataires, puis auto-édition et commercialisation. Une expérience complète de la création au produit vendu : recherche de fabricants, budget, communication et vente.",
      images: ["image/experience/brame plateau.jpg","image/experience/brame regles.jpg","image/experience/brame salon.jpg","image/experience/brame vue de haut.jpg"],
      gains: { jeu: 40, production: 35, commercial: 20, entreprendre: 15, print: 10 }
    },
    {
      id: "theatre-2015", branch: "art", start: "2015-01", end: "2015-12",
      title: "Pièce de théâtre « Le corps… »", place: "Écriture, mise en scène et jeu",
      desc: "Écriture, mise en scène et jeu d'une pièce de théâtre : direction des comédiens, organisation des répétitions et coordination de toute l'équipe jusqu'à la représentation. Une expérience forte de gestion de personnes.",
      images: ["image/experience/theatre1.jpg","image/experience/theatre2.jpg","image/experience/theatre3.jpg","image/experience/theatre4.jpg"],
      gains: { ecriture: 40, personnel: 20, stress: 8 }
    },
    {
      id: "theatre-2024", branch: "art", start: "2024-01", end: "now",
      title: "Nouvelle pièce de théâtre", place: "Écrite et mise en scène · en répétition",
      desc: "Nouvelle pièce de théâtre, écrite et mise en scène par mes soins, actuellement en répétition.",
      images: [],
      gains: { ecriture: 30, personnel: 12 }
    },
    {
      id: "logos", branch: "art", start: "2017-09", end: "2024-10",
      title: "Logos & identités visuelles", place: "Inkscape · GIMP",
      desc: "Réalisation de logos et d'identités visuelles pour les clients, en dessin vectoriel avec Inkscape.",
      images: ["image/inkscape.png"],
      gains: { logo: 40, vectoriel: 45 }
    }
  ]
};
