// créer moi varibale objets en js

const timelineData = {
    Constructions: [{
        date: "2006",
        titre: "Auberge du Tremplin",
        temps: "13 mois",
        descriptif: 'Ma 1ère expérience dans le bâtiment à été de construire l’Auberge du Tremplin à la sortie de mes études dans l’hydraulique. Construction en brique monomur de 37,5cm de largeur. Matériaux qui n’a pas été au final un bon choix au niveau thermique le R seul ne prend pas en compte l’effussivité du matériaux. Utilisation pour la toiture de panneau Simonin + panneau de fibre de bois. Matériau très intéressant pour la rapidité de pose, l’entraxe entre poutre et l’aspect visuel. Rélaisation compéte hormis chappe liquide/crépis et carrellage au sol.',
        photos: ["aub1.jpg", "aub2.jpg", "aub3.jpg", "aub4.jpg"]
    },
    {
        date: "2015",
        titre: "Maison d'habitation",
        temps: "8 mois",
        descriptif: 'Après trois ans de travail en tant qu’entrepreneur dans le bâtiment, je me suis lancé dans la réalisation de notre maison, juste au-dessus de celle-ci. La construction est réalisée en béton cellulaire et en parpaing classique pour la partie enterrée. J’ai poussé mes recherches en matière d’économie d’énergie, en installant des panneaux solaires photovoltaïques et hydrauliques classiques, ainsi que des panneaux solaires tubulaires. J’ai commencé à tester un enduit terre dans la chambre, en utilisant des sacs de terre prêts à l’emploi. L’isolation est assurée par une jupe isolante.',
        photos: ["perso1.png", "perso2.png", "perso3.png", "perso4.png"]
    },
    {
        date: "2022",
        titre: "Maison pour location",
        temps: "10 mois",
        descriptif: 'Création d’une maison pour location des plans au finition. Seul taches sous traité ont été l’isolation par l’extérieur et chape liquide. Réalisation de la maison en moellon avec enduit sur mur intérieur avec chaux sable / chaux sable terre / 100% terre . Réalisation avec terre du terrain. Isolation laine de bois suite à recherche d’optimisation du confort d’été et d’hiver',
        photos: ["loc (1).jpg", "loc (2).jpg", "loc (3).jpg", "loc (4).jpg", "loc (5).jpg", "loc (6).jpg", "loc (7).jpg", "loc (8).jpg", "loc (9).jpg"]
    }],

    Plandeconstruction: [
    {
        date: "2006",
        titre: "Plan pour ERP",  
        temps: "Arcitect3D",
        descriptif: "1ère expérience en dessin technique pour dépôt de plan avec plan pour ERP et plan électrique avec triphasé. Dessin sur logiciel Arcitect3D",
        photos: ["planauberge1.jpg", "planauberge2.jpg"]
    },
    {
        date: "2012",
        titre: "Plan hotel",  
        temps: "Sketchup",
        descriptif: "Suite à la découverte de mon blog sur conseil construction et maison troglodyte j'élabore un visuel sous Sketchup pour habitation de vacances",
        photos: ["planproj1.png", "planproj2.png"]
    },
    {
        date: "2013",
        titre: "Plan maison d'habitation",  
        temps: "Sketchup Home 3D",
        descriptif: "plan technique sur Sketchup afin de budjetiser la maconnerie et la couverture, ainsi que plan d'éléctricité",
        photos: ["planmh (0).png","planmh (00).png","planmh (1).jpg", "planmh (2).jpg", "planmh (3).jpg", "planmh (4).jpg"]
    },
    {
        date: "2019",
        titre: "Plan maison d'habitation",  
        temps: "Sketchup et Kosikaza",
        descriptif: "Plan maison d'habitation pour client",
        photos: ["planan1.png", "planan2.png", "planan3.png"]
    },
    {
        date: "2020",
        titre: "Plan déclaration cabanon",  
        temps: "Home 3D",
        descriptif: "Demande client pour création local de stockage",
        photos: ["planga1.png", "planga2.png"]
    },
    {
        date: "2020",
        titre: "Plan pour client maison au Perou",  
        temps: "Home 3D",
        descriptif: "Demande client pour création maison d'habitation au Pérou. Recherche des normes et des materiaux utilisés",
        photos: ["planpav1.png", "planpav2.png", "planpav3.png"]
    },
    {
        date: "2021",
        titre: "Plan client",  
        temps: "Home 3D",
        descriptif: "Accompagnement complet client pour structurer leurs envies et besoin et dépôt du plan",
        photos: ["plander1.png", "plander2.png", "plander3.png"]
    },
    {
        date: "2022",
        titre: "Maison pour location",  
        temps: "Home 3D Squetchup",
        descriptif: "Plan complet avec schéma réseaux électriques et demande pour RT2021, plan pour la maconnerie et la charpente sur Sketchup pour chiffrage",
        photos: ["planperso1.png", "planperso2.png", "planperso3.png"]
    },
    {
        date: "2023",
        titre: "Maison d'habitation",  
        temps: "Home 3D",
        descriptif: "Plan complet pour client avec demande pour RT2021",
        photos: ["planbl1.png", "planbl2.png", "planbl3.png", "planbl4.png"]
    },
    {
        date: "2024",
        titre: "Maison d'habitation",  
        temps: "Home 3D",
        descriptif: "Plan complet pour client avec demande pour RT2021",
        photos: ["planfa1.png", "planfa2.png", "planfa3.png", "planfa4.png"]
    },
    {
        date: "2024",
        titre: "Extension maison d'habitation",  
        temps: "Home 3D",
        descriptif: "Plan d'extention avec diverses options de projection pour aide a la décision de la construction",
        photos: ["planvois (1).png", "planvois (2).png", "planvois (3).png"]
    }],
        //###########################Codeage###################################
    Codage: [{
        date: "Depuis 2019",
        titre: "Ruby on Rails",
        temps: "Avancé",
        descriptif: "Réalisation de 7 applications complètes pour clients toujours en fonctionnement et en support. Rails 6 et Rails 7 avec migration de projets de Rails 6 vers Rails 7. Outils utilisés avec l'environnement Rails : Heroku / Docker / Stimulus / JS / Git / PostgreSQL / S3 / Stripe / Mapbox + Mission de formateur développement Ruby sur l'École Hesias Clermont-Ferrand pour BAC +5 – Ingénierie. Clients ci-dessous",
        photos: ["ruby (1).png", "ruby (2).png", "ruby (3).png", "ruby (4).png"]
    },
    {
        date: "Depuis 2018",
        titre: "VBA EXCEL",
        temps: "Expert",
        descriptif: "Gestion de bases de données, création de logiciels de gestion de parc de photocopieurs / deviseur / gestion des EPI / main courante agent de sécurité / automatisation d'envoi d'emails / rapports pour personnes en situation de handicap...",
        photos: ["excel (1).png", "excel (2).png", "excel (3).png"]
    },
    {
        date: "Depuis 2020",
        titre: "ACCESS",
        temps: "Expert",
        descriptif: "Réalisation de logiciels complets et intervention chez les clients pour dépannage et amélioration",
        photos: ["access (1).png"]
    },
    {
        date: "Depuis 2023",
        titre: "JS",
        temps: "Avancé",
        descriptif: "Réalisation de calculateurs de matériaux ou deviseurs en ligne pour sites web, jeux d'apprentissage",
        photos: ["js (1).jpg", "js (2).jpg", "js (3).jpg", "js (4).jpg"]
    },
    {
        date: "Depuis 2024",
        titre: "Application Kotlin",
        temps: "Débutant",
        descriptif: "Projet en cours : réalisation d'une application de gestion de bornes et comptes avec cartographie",
        photos: ["kotlin (1).png", "kotlin (2).png", "kotlin (3).png"]
    }]
};

// Fonction pour créer le carrousel
function createCarousel(photos, titre) {
    const carouselHtml = `
        <div class="carousel">
            <div class="carousel-container">
                ${photos.map(photo => `
                    <div class="carousel-slide">
                        <img src="image/experience/${photo}" alt="${titre}" onclick="openModal(this.src)">
                    </div>
                `).join('')}
            </div>
            <button class="carousel-button prev" onclick="moveCarousel(-1, this.parentElement)">&lt;</button>
            <button class="carousel-button next" onclick="moveCarousel(1, this.parentElement)">&gt;</button>
            <div class="carousel-dots">
                ${photos.map((_, i) => `
                    <div class="carousel-dot ${i === 0 ? 'active' : ''}" onclick="goToSlide(${i}, this.parentElement.parentElement)"></div>
                `).join('')}
            </div>
        </div>
    `;
    return carouselHtml;
}

// Fonction pour générer le HTML d'un item de timeline
function createTimelineItem(item, index) {
    const position = index % 2 === 0 ? 'left' : 'right';
    return `
        <div class="formation-item ${position}">
            <div class="formation-dot"></div>
            <div class="formation-content">
                <div class="timeline-date">${item.date} - ${item.temps}</div>
                <div class="title">${item.titre}</div>
                <p>${item.descriptif}</p>
                ${item.photos ? createCarousel(item.photos, item.titre) : ''}
            </div>
        </div>
    `;
}

// Fonction pour déplacer le carrousel
function moveCarousel(direction, carousel) {
    const container = carousel.querySelector('.carousel-container');
    const slides = carousel.querySelectorAll('.carousel-slide');
    const dots = carousel.querySelectorAll('.carousel-dot');
    
    // Récupérer l'index actuel
    const transformValue = container.style.transform || 'translateX(0%)';
    let currentIndex = parseInt(transformValue.match(/-?[\d]+/)[0]) / -100 || 0;
    
    // Calculer le nouvel index
    currentIndex += direction;
    if (currentIndex < 0) currentIndex = slides.length - 1;
    if (currentIndex >= slides.length) currentIndex = 0;
    
    // Déplacer le carrousel
    container.style.transform = `translateX(-${currentIndex * 100}%)`;
    
    // Mettre à jour les points
    dots.forEach((dot, i) => {
        dot.classList.toggle('active', i === currentIndex);
    });
}

// Fonction pour aller à une slide spécifique
function goToSlide(index, carousel) {
    const container = carousel.querySelector('.carousel-container');
    const dots = carousel.querySelectorAll('.carousel-dot');
    
    container.style.transform = `translateX(-${index * 100}%)`;
    
    dots.forEach((dot, i) => {
        dot.classList.toggle('active', i === index);
    });
}

// Fonction pour ouvrir la modale
function openModal(imageSrc) {
    const modal = document.getElementById('imageModal');
    const modalImg = document.getElementById('modalImage');
    modal.style.display = "block";
    modalImg.src = imageSrc;
}

// Initialisation des événements
document.addEventListener('DOMContentLoaded', () => {
    const competenceItems = document.querySelectorAll('.competence-item');
    const modal = document.getElementById('imageModal');
    const closeBtn = document.querySelector('.modal-close');
    const competencesGrid = document.querySelector('.competences-grid');
    
    // Gestionnaire pour les cartes de compétences
    competenceItems.forEach(item => {
        item.addEventListener('click', () => {
            // Retirer la classe active de tous les items
            competenceItems.forEach(i => i.classList.remove('active'));
            
            // Ajouter la classe active à l'item cliqué
            item.classList.add('active');
            
            // Réorganiser les cartes
            const cards = Array.from(competenceItems);
            const clickedIndex = cards.indexOf(item);
            
            // Retirer toutes les cartes du DOM
            cards.forEach(card => card.remove());
            
            // Réinsérer les cartes dans le bon ordre
            if (clickedIndex === 0) {
                // Si on clique sur la première carte
                competencesGrid.appendChild(cards[1]); // Deuxième carte
                competencesGrid.appendChild(cards[0]); // Carte cliquée (première)
                competencesGrid.appendChild(cards[2]); // Troisième carte
            } else if (clickedIndex === 2) {
                // Si on clique sur la dernière carte
                competencesGrid.appendChild(cards[0]); // Première carte
                competencesGrid.appendChild(cards[2]); // Carte cliquée (dernière)
                competencesGrid.appendChild(cards[1]); // Deuxième carte
            } else {
                // Si on clique sur la carte du milieu, garder l'ordre actuel
                competencesGrid.appendChild(cards[0]);
                competencesGrid.appendChild(cards[1]);
                competencesGrid.appendChild(cards[2]);
            }
            
            // Afficher la timeline correspondante
            const category = item.getAttribute('data-category');
            showTimeline(category);
        });
    });
    
    // Gestionnaire pour fermer la modale
    closeBtn.addEventListener('click', () => {
        modal.style.display = "none";
    });
    
    // Fermer la modale en cliquant en dehors de l'image
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = "none";
        }
    });
});

// Fonction pour afficher la timeline d'une catégorie
function showTimeline(category) {
    const timelineContainer = document.getElementById('competence-timeline');
    const timelineItems = document.querySelector('#competence-timeline .formation-items');
    
    timelineContainer.style.display = 'none';
    
    if (timelineData[category]) {
        const timelineHTML = timelineData[category]
            .map((item, index) => createTimelineItem(item, index))
            .join('');
        
        timelineItems.innerHTML = timelineHTML;
        
        timelineContainer.style.display = 'block';
        timelineContainer.style.opacity = '0';
        setTimeout(() => {
            timelineContainer.style.transition = 'opacity 0.3s ease-in-out';
            timelineContainer.style.opacity = '1';
        }, 50);
    }
}