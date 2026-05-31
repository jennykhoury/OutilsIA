/* ==========================================================================
   LOGIQUE APPLICATIVE : Guide Pédagogique de l'IA (Liban)
   Interactivité, Filtrage, Copie rapide, Quiz diagnostic & Mode Sombre
   ========================================================================== */

// Base de données des Outils IA
const toolsData = [
    {
        id: "chatgpt",
        name: "ChatGPT & Claude",
        tagline: "Assistants d'écriture & préparation pédagogique",
        category: "preparation",
        difficulty: "easy",
        difficultyLabel: "Très Simple",
        icon: "fa-brain",
        desc: "Les compagnons idéaux pour structurer des plans de cours, générer des résumés de textes littéraires, trouver des idées de sujets d'examen ou rédiger des exercices de différents niveaux pour une classe hétérogène.",
        target: "Tous niveaux. Idéal pour débuter et gagner des heures de préparation.",
        programContext: "Créer instantanément une dictée différenciée ou un exemple de devoir de type Bac de Français.",
        videoUrl: "https://www.youtube.com/embed/kYJt2x-Yn0Y",
        steps: [
            "Ouvrez le site de ChatGPT ou de Claude.",
            "Copiez un de nos prompts prêts à l'emploi ci-dessous.",
            "Collez-le dans l'espace de discussion en ajustant le niveau (ex: CM2, 3ème) et votre sujet.",
            "Lisez la réponse et affinez en discutant naturellement avec l'IA comme s'il s'agissait d'un stagiaire zélé."
        ],
        samplePrompt: "Agis en tant que professeur d'Histoire-Géographie certifié en France. Rédige un résumé de cours de 300 mots maximum sur l'impact de la Révolution Industrielle au XIXe siècle en Europe. Utilise un vocabulaire accessible à des collégiens de 4ème. Ensuite, propose une version simplifiée de ce même texte avec des phrases plus courtes, des mots importants en gras et un glossaire des 5 termes clés pour aider mes élèves dyslexiques."
    },
    {
        id: "notebooklm",
        name: "Google NotebookLM",
        tagline: "Analyse intelligente de documents officiels",
        category: "preparation",
        difficulty: "medium",
        difficultyLabel: "Intermédiaire",
        icon: "fa-book-open",
        desc: "Une IA révolutionnaire qui travaille uniquement à partir des documents que vous lui donnez (PDF du programme officiel, extraits de manuels scolaires, œuvres complètes). Aucun risque d'invention ou d'erreur, c'est un expert de vos propres fichiers !",
        target: "Enseignants du secondaire (Collège/Lycée) préparant des examens nationaux.",
        programContext: "Analyser le Bulletin Officiel (B.O.) ou une œuvre de français de 1ère pour générer des fiches de synthèse ou des podcasts audio explicatifs en un clic.",
        videoUrl: "https://www.youtube.com/embed/nO3jVw9yR0w",
        steps: [
            "Connectez-vous sur NotebookLM avec votre compte Google.",
            "Créez un nouveau bloc-notes.",
            "Importez vos sources : fichiers PDF, documents Word, ou liens Internet (ex. une page d'Eduscol).",
            "Posez des questions dans le chat ou cliquez sur 'Générer un guide d'étude' ou 'Audio Overview' pour avoir une discussion audio générée automatique (en anglais pour le moment, mais fascinant pour les langues !)."
        ],
        samplePrompt: "En te basant uniquement sur le document du programme officiel d'Enseignement Scientifique de Terminale que je viens d'importer, rédige une fiche de révision synthétique sur le thème de 'Le climat du futur' en mettant l'accent sur les 10 notions clés indispensables pour les élèves."
    },
    {
        id: "canvamagic",
        name: "Canva (Écriture & Design Magique)",
        tagline: "Création visuelle & présentations interactives",
        category: "media",
        difficulty: "easy",
        difficultyLabel: "Très Simple",
        icon: "fa-palette",
        desc: "Gratuit pour les enseignants, Canva intègre de puissantes fonctions d'IA permettant de transformer un texte brut en une présentation diapositive illustrée et animée en 10 secondes, ou d'éditer des images simplement par commande vocale/écrite.",
        target: "Tous niveaux. Idéal pour capter l'attention visuelle des élèves.",
        programContext: "Créer un support de cours illustré pour le cycle de l'eau en SVT (6ème) avec des visuels géographiques locaux.",
        videoUrl: "https://www.youtube.com/embed/FqX5L-n5TSc",
        steps: [
            "Connectez-vous à Canva pour l'Éducation (gratuit pour les profs).",
            "Cliquez sur 'Design Magique' ou créez un document texte classique.",
            "Utilisez l'assistant IA 'Écriture Magique' pour structurer votre contenu de cours.",
            "Cliquez sur 'Convertir en Présentation' pour laisser l'IA concevoir des diapositives élégantes prêtes à projeter."
        ],
        samplePrompt: "Conçois une série de 5 diapositives pour expliquer le cycle de l'eau en classe de 6ème. Inclue un titre engageant, un schéma simple étape par étape (évaporation, condensation, précipitations, ruissellement) et un exemple local lié aux montagnes du Liban (les sources de la Békaa ou d'Afqa) pour contextualiser le cours."
    },
    {
        id: "ladigitale",
        name: "La Digitale (Digiquiz & Digipad)",
        tagline: "La suite éducative francophone & RGPD",
        category: "evaluation",
        difficulty: "easy",
        difficultyLabel: "Très Simple",
        icon: "fa-shield-halved",
        desc: "Une alternative fantastique développée spécialement pour les enseignants. Gratuite, sans publicité, et 100% respectueuse du RGPD. Elle permet de créer des activités interactives (murs de post-it, flashcards, questionnaires multimédias) sans stocker de données élèves à leur insu.",
        target: "Parfait pour tous les professeurs des écoles homologuées AEFE soucieux de la sécurité numérique.",
        programContext: "Lancer un remue-méninges de début de cours sur un mur collaboratif anonymisé sécurisé.",
        videoUrl: "https://www.youtube.com/embed/EZ12SPIs1LQ",
        steps: [
            "Allez sur ladigitale.dev.",
            "Sélectionnez l'outil de votre choix : Digipad (murs collaboratifs) ou Digiquiz (exercices H5P).",
            "Créez votre activité interactive grâce à l'interface intuitive en français.",
            "Partagez simplement le lien court ou le QR Code généré automatiquement avec vos élèves. Aucune inscription n'est requise pour eux !"
        ],
        samplePrompt: "Outil sans IA intrusive : créez vos activités de classe directement dans l'interface sécurisée de La Digitale pour garantir le respect absolu de la vie privée de vos élèves au Liban."
    },
    {
        id: "googlevids",
        name: "Google Vids",
        tagline: "Production de vidéos animées par l'IA",
        category: "media",
        difficulty: "medium",
        difficultyLabel: "Intermédiaire",
        icon: "fa-video",
        desc: "Le tout nouvel outil de la suite Google Workspace for Education. Il permet de transformer un plan de cours, un texte documentaire ou un script écrit en une vidéo explicative dynamique avec voix hors champ automatique, transitions et musiques libres de droits.",
        target: "Enseignants souhaitant appliquer la classe inversée ou créer des capsules vidéos d'introduction.",
        programContext: "Réaliser une capsule de 2 minutes sur l'Impressionnisme en Histoire des Arts (3ème) ou un résumé de séquence de SVT.",
        videoUrl: "https://www.youtube.com/embed/F0f-pYn74pQ",
        steps: [
            "Accédez à Google Workspace for Education (si activé par votre établissement).",
            "Ouvrez Google Vids.",
            "Saisissez le script de votre leçon ou importez un document d'accompagnement (Google Docs/Slides).",
            "Sélectionnez le style graphique proposé par l'IA, ajustez la voix de synthèse française de votre choix, puis exportez la capsule pour vos élèves."
        ],
        samplePrompt: "Génère un script vidéo dynamique de 2 minutes pour introduire le mouvement impressionniste à des élèves de 3ème. Décris 3 tableaux célèbres (ex. Monet, Renoir, Caillebotte), propose les visuels associés et rédige la voix-off en français avec un ton captivant et pédagogique."
    },
    {
        id: "quizizz",
        name: "Quizizz & Kahoot (IA)",
        tagline: "Évaluations formatives amusantes instantanées",
        category: "evaluation",
        difficulty: "easy",
        difficultyLabel: "Très Simple",
        icon: "fa-gamepad",
        desc: "Ces géants de l'évaluation interactive intègrent désormais l'IA. Collez le texte de votre leçon ou insérez un lien Web : l'IA extrait automatiquement les concepts clés pour générer un jeu de quiz de 10 questions en 10 secondes.",
        target: "Idéal pour réviser en classe en fin de séance de manière très interactive.",
        programContext: "Générer un quiz de révision sur le subjonctif présent ou le cycle de Krebs en un clin d'œil.",
        videoUrl: "https://www.youtube.com/embed/F3wYlP9XQfM",
        steps: [
            "Connectez-vous sur Quizizz avec votre compte enseignant.",
            "Cliquez sur 'Créer avec l'IA'.",
            "Collez votre cours ou fournissez un lien documentaire.",
            "L'IA génère les questions. Relisez-les, ajustez les distracteurs, et lancez la partie en direct avec vos élèves qui y répondent sur leur smartphone/tablette."
        ],
        samplePrompt: "Génère un questionnaire à choix multiples (QCM) de 10 questions sur l'utilisation et la conjugaison du subjonctif présent en français (niveau 3ème). Pour chaque question, propose 4 options dont une seule correcte, et rédige une explication bienveillante de la règle pour l'option de correction."
    },
    {
        id: "perplexity",
        name: "Perplexity AI",
        tagline: "Le moteur de recherche sourcé & fiable",
        category: "recherche",
        difficulty: "easy",
        difficultyLabel: "Très Simple",
        icon: "fa-magnifying-glass",
        desc: "Contrairement aux moteurs de recherche classiques qui renvoient des milliers de liens, ou aux IAs génératives classiques qui peuvent inventer (hallucinations), Perplexity répond précisément à vos requêtes en synthétisant l'information et en citant explicitement chaque source universitaire ou institutionnelle.",
        target: "Parfait pour la recherche documentaire, la préparation de cours d'Histoire, de SES, de SVT ou de Lettres.",
        programContext: "Trouver des documents d'époque authentiques et validés pédagogiquement sur l'histoire de la Méditerranée.",
        videoUrl: "https://www.youtube.com/embed/FqS2BqFq9vY",
        steps: [
            "Rendez-vous sur perplexity.ai.",
            "Posez votre question de recherche pédagogique de manière détaillée.",
            "Analysez la synthèse proposée et cliquez directement sur les petits chiffres bleus (indices) pour vérifier la source originale (Eduscol, Lumni, articles CNRS, etc.).",
            "Profitez de la section 'Questions suggérées' pour approfondir la recherche historique ou scientifique."
        ],
        samplePrompt: "Recherche des sources fiables et historiquement attestées sur les comptoirs commerciaux maritimes en Méditerranée (ex. Venise, Gênes, Beyrouth) au XIIe siècle pour une leçon d'Histoire de 5ème. Cite précisément tes sources et fournis des liens ou références vers des ressources d'enseignants (Lumni, Éduscol)."
    }
];

// Base de données des Prompts prêts à l'emploi
const promptsData = [
    {
        title: "Différenciation pédagogique (Soutien & DYS)",
        category: "differenciation",
        level: "Tous Niveaux",
        promptText: "Je prépare une leçon sur [sujet de cours, ex: les fractions décimales] pour une classe de [niveau, ex: CM1]. Rédige : \n1. Un résumé court et structuré du cours.\n2. Une liste de 5 exercices d'application directe.\n3. Une version adaptée de ce cours et de ces exercices pour des élèves dyspraxiques ou dyslexiques (phrases courtes, mise en valeur visuelle des concepts, consignes ultra-simplifiées et explicites, étapes détaillées pas-à-pas).",
        explanation: "Indiquez bien le sujet et le niveau. L'IA sait adapter son vocabulaire et la mise en page (ex. avec des listes à puces) pour les troubles de l'apprentissage."
    },
    {
        title: "Création d'une Évaluation Formative active",
        category: "evaluation",
        level: "Collège / Lycée",
        promptText: "Agis en tant que professeur certifié de [matière, ex: Sciences de la Vie et de la Terre]. Rédige un QCM d'évaluation de 10 questions sur le thème [sujet, ex: la tectonique des plaques] adapté à des élèves de [niveau, ex: 4ème].\nPour chaque question, propose 4 options de réponse (A, B, C, D). \nFournis la clé de correction à la toute fin avec une brève justification pédagogique de 2 phrases pour chaque bonne réponse.",
        explanation: "Un excellent gain de temps. Vous n'avez plus qu'à copier-coller ces questions directement dans **Quizizz** ou sur **Pronote**."
    },
    {
        title: "Plan de Séquence complet (Aligné Programme Français)",
        category: "preparation",
        level: "Primaire / Secondaire",
        promptText: "Je dois préparer une séquence pédagogique de [nombre] séances sur le thème [sujet, ex: la poésie lyrique au XIXe siècle] conformément aux programmes officiels de l'Éducation Nationale française pour le niveau [niveau, ex: 2de].\nPour chaque séance, indique :\n- Le titre de la séance\n- L'objectif pédagogique principal\n- Les activités détaillées des élèves (durée totale 55 min)\n- Une idée de document d'appui ou de support numérique\n- Le mode d'évaluation prévu.",
        explanation: "Le résultat est une base structurée solide que vous pouvez enrichir de vos propres documents de classe ou ressources locales."
    },
    {
        title: "Situation Problème engageante (Contextualisée Liban)",
        category: "preparation",
        level: "Tous Niveaux",
        promptText: "Rédige une 'situation-problème' de départ pour introduire mon chapitre de [Matière, ex: Géographie/Sciences] sur le thème [thème, ex: la gestion de l'eau et le développement durable]. \nCrée une histoire fictive mais réaliste ancrée au Liban (par exemple en mentionnant les cèdres, la vallée de la Qadisha, le fleuve Litani ou l'agriculture dans la plaine de la Békaa). L'histoire doit se terminer par un défi ou une question ouverte et motivante qui incite mes élèves de [niveau, ex: 5ème] à mener l'enquête scientifique.",
        explanation: "Idéal pour capter l'intérêt des élèves en faisant résonner le programme français avec leur environnement local au Liban."
    }
];

// Variables d'état
let currentTheme = localStorage.getItem('theme') || 'dark';
let activeCategory = 'all';
let searchQuery = '';

// Sélection des éléments DOM
const bodyEl = document.documentElement;
const themeToggleBtn = document.getElementById('theme-toggle');
const themeIcon = themeToggleBtn ? themeToggleBtn.querySelector('i') : null;
const themeText = themeToggleBtn ? themeToggleBtn.querySelector('span') : null;

const toolsGrid = document.getElementById('tools-grid');
const searchInput = document.getElementById('search-input');
const filterChips = document.querySelectorAll('.filter-chip');

const modal = document.getElementById('video-modal');
const modalClose = document.getElementById('modal-close');
const modalIframe = document.getElementById('modal-iframe');
const modalTitle = document.getElementById('modal-title');
const modalSubtitle = document.getElementById('modal-subtitle');
const modalDesc = document.getElementById('modal-desc');
const modalStepsList = document.getElementById('modal-steps-list');
const modalPromptBox = document.getElementById('modal-prompt-box');
const modalPromptCopyBtn = document.getElementById('modal-prompt-copy-btn');

const promptsListContainer = document.getElementById('prompts-list');

const sidebar = document.getElementById('sidebar');
const mobileNavToggle = document.getElementById('mobile-nav-toggle');

// Toast Notification Engine
function showToast(message, iconClass = 'fa-circle-check') {
    let container = document.getElementById('toast-container');
    if (!container) {
        container = document.createElement('div');
        container.id = 'toast-container';
        container.className = 'toast-container';
        document.body.appendChild(container);
    }

    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = `<i class="fa-solid ${iconClass}"></i><span>${message}</span>`;
    container.appendChild(toast);

    // Déclenchement de l'animation d'apparition
    setTimeout(() => {
        toast.classList.add('show');
    }, 50);

    // Suppression après 3 secondes
    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => {
            toast.remove();
        }, 400);
    }, 3000);
}

// Initialisation & Gestion du Thème Sombre / Clair
function initTheme() {
    bodyEl.setAttribute('data-theme', currentTheme);
    updateThemeUI();
}

function updateThemeUI() {
    if (!themeIcon || !themeText) return;
    if (currentTheme === 'dark') {
        themeIcon.className = 'fa-solid fa-sun';
        themeText.textContent = 'Thème Clair';
    } else {
        themeIcon.className = 'fa-solid fa-moon';
        themeText.textContent = 'Thème Sombre';
    }
}

if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
        currentTheme = currentTheme === 'dark' ? 'light' : 'dark';
        bodyEl.setAttribute('data-theme', currentTheme);
        localStorage.setItem('theme', currentTheme);
        updateThemeUI();
        showToast(`Mode ${currentTheme === 'dark' ? 'sombre' : 'clair'} activé !`, 'fa-circle-half-stroke');
    });
}

// Barre latérale mobile
if (mobileNavToggle) {
    mobileNavToggle.addEventListener('click', () => {
        sidebar.classList.toggle('open');
        const icon = mobileNavToggle.querySelector('i');
        if (sidebar.classList.contains('open')) {
            icon.className = 'fa-solid fa-xmark';
        } else {
            icon.className = 'fa-solid fa-bars';
        }
    });
}

// Fermeture de la sidebar lors du clic sur un lien mobile
document.querySelectorAll('.nav-item a').forEach(link => {
    link.addEventListener('click', () => {
        sidebar.classList.remove('open');
        if (mobileNavToggle) {
            mobileNavToggle.querySelector('i').className = 'fa-solid fa-bars';
        }
    });
});

// Rendu des Cartes d'Outils IA
function renderTools() {
    if (!toolsGrid) return;
    toolsGrid.innerHTML = '';

    const filteredTools = toolsData.filter(tool => {
        const matchesCategory = activeCategory === 'all' || tool.category === activeCategory;
        const matchesSearch = tool.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                              tool.tagline.toLowerCase().includes(searchQuery.toLowerCase()) ||
                              tool.desc.toLowerCase().includes(searchQuery.toLowerCase()) ||
                              tool.programContext.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    if (filteredTools.length === 0) {
        toolsGrid.innerHTML = `
            <div class="glass-card" style="grid-column: 1/-1; padding: 3rem; text-align: center;">
                <i class="fa-solid fa-magnifying-glass" style="font-size: 3rem; color: var(--text-muted); margin-bottom: 1rem;"></i>
                <h3>Aucun outil trouvé</h3>
                <p style="color: var(--text-muted); margin-top: 0.5rem;">Essayez d'autres mots-clés ou modifiez vos filtres.</p>
            </div>
        `;
        return;
    }

    filteredTools.forEach(tool => {
        const card = document.createElement('div');
        card.className = 'glass-card tool-card';
        card.innerHTML = `
            <div class="tool-header">
                <div class="tool-icon-box">
                    <i class="fa-solid ${tool.icon}"></i>
                </div>
                <span class="difficulty-badge ${tool.difficulty === 'easy' ? 'diff-easy' : 'diff-medium'}">
                    ${tool.difficultyLabel}
                </span>
            </div>
            <h3 class="tool-title">${tool.name}</h3>
            <p class="tool-tagline">${tool.tagline}</p>
            <p class="tool-desc">${tool.desc}</p>
            <div class="tool-meta">
                <div class="meta-item">
                    <strong>Pour qui :</strong>
                    <span>${tool.target}</span>
                </div>
                <div class="meta-item">
                    <strong>Exemple au Liban :</strong>
                    <span>${tool.programContext}</span>
                </div>
            </div>
            <div class="tool-actions">
                <button class="btn btn-primary" onclick="openToolModal('${tool.id}')">
                    <i class="fa-solid fa-circle-play"></i> Tutoriel & Guide
                </button>
                <button class="btn btn-outline btn-icon" onclick="copyDirectPrompt('${tool.id}')" title="Copier le prompt type">
                    <i class="fa-solid fa-copy"></i>
                </button>
            </div>
        `;
        toolsGrid.appendChild(card);
    });
}

// Copier rapidement le prompt d'un outil depuis le catalogue
window.copyDirectPrompt = function(toolId) {
    const tool = toolsData.find(t => t.id === toolId);
    if (!tool || !tool.samplePrompt) return;
    
    navigator.clipboard.writeText(tool.samplePrompt).then(() => {
        showToast(`Prompt de ${tool.name} copié dans le presse-papier !`, 'fa-clipboard-check');
    }).catch(err => {
        console.error('Erreur lors de la copie : ', err);
    });
};

// Gestion de la Boîte Modale de Tutoriel d'Outil
window.openToolModal = function(toolId) {
    const tool = toolsData.find(t => t.id === toolId);
    if (!tool || !modal) return;

    modalTitle.textContent = tool.name;
    modalSubtitle.textContent = tool.tagline;
    modalDesc.textContent = tool.desc;
    
    // Intégration de l'iframe vidéo
    if (tool.videoUrl) {
        modalIframe.src = tool.videoUrl;
        document.querySelector('.video-container').style.display = 'block';
    } else {
        modalIframe.src = '';
        document.querySelector('.video-container').style.display = 'none';
    }

    // Étapes de guide de démarrage
    modalStepsList.innerHTML = '';
    tool.steps.forEach(step => {
        const li = document.createElement('li');
        li.className = 'modal-step-item';
        li.innerHTML = `
            <div class="step-num">${tool.steps.indexOf(step) + 1}</div>
            <p>${step}</p>
        `;
        modalStepsList.appendChild(li);
    });

    // Exemple de Prompt
    if (tool.samplePrompt) {
        modalPromptBox.textContent = tool.samplePrompt;
        modalPromptBox.parentElement.style.display = 'block';
        modalPromptCopyBtn.onclick = function() {
            navigator.clipboard.writeText(tool.samplePrompt).then(() => {
                showToast("Invite copiée avec succès !", "fa-clipboard-check");
            });
        };
    } else {
        modalPromptBox.parentElement.style.display = 'none';
    }

    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden'; // Bloquer le défilement
};

function closeToolModal() {
    if (!modal) return;
    modal.style.display = 'none';
    modalIframe.src = ''; // Stopper la vidéo
    document.body.style.overflow = 'auto';
}

if (modalClose) {
    modalClose.addEventListener('click', closeToolModal);
}

if (modal) {
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeToolModal();
        }
    });
}

// Gestion des Filtres & Recherche du Catalogue
if (searchInput) {
    searchInput.addEventListener('input', (e) => {
        searchQuery = e.target.value;
        renderTools();
    });
}

filterChips.forEach(chip => {
    chip.addEventListener('click', () => {
        filterChips.forEach(c => c.classList.remove('active'));
        chip.classList.add('active');
        activeCategory = chip.getAttribute('data-category');
        renderTools();
    });
});

// Rendu de la Bibliothèque des Prompts
function renderPrompts() {
    if (!promptsListContainer) return;
    promptsListContainer.innerHTML = '';

    promptsData.forEach(prompt => {
        const card = document.createElement('div');
        card.className = 'glass-card prompt-card';
        card.innerHTML = `
            <div class="prompt-card-header">
                <h3 class="prompt-card-title">${prompt.title}</h3>
                <div class="prompt-badges">
                    <span class="prompt-badge badge-level">${prompt.level}</span>
                    <span class="prompt-badge badge-cat">${prompt.category.toUpperCase()}</span>
                </div>
            </div>
            <div class="prompt-content-box" id="prompt-text-${promptsData.indexOf(prompt)}">${prompt.promptText}</div>
            <div class="quiz-controls" style="margin-top: 1rem;">
                <span class="prompt-explanation">
                    <i class="fa-solid fa-circle-info"></i> <strong>Astuce :</strong> ${prompt.explanation}
                </span>
                <button class="btn btn-primary" onclick="copyPromptText(${promptsData.indexOf(prompt)})">
                    <i class="fa-solid fa-copy"></i> Copier l'invite
                </button>
            </div>
        `;
        promptsListContainer.appendChild(card);
    });
}

window.copyPromptText = function(index) {
    const textEl = document.getElementById(`prompt-text-${index}`);
    if (!textEl) return;

    navigator.clipboard.writeText(textEl.textContent).then(() => {
        showToast("L'invite a été copiée ! Vous pouvez maintenant la coller dans votre IA.", "fa-check-circle");
    }).catch(err => {
        console.error('Erreur lors de la copie', err);
    });
};

/* ==========================================================================
   MOTEUR DU QUESTIONNAIRE DIAGNOSTIC (QUIZ ENGINE)
   ========================================================================== */

const quizQuestions = [
    {
        question: "1. Quel est votre objectif prioritaire aujourd'hui ?",
        options: [
            { text: "Créer ou enrichir mes cours (textes, plans, différenciation DYS)", icon: "fa-file-lines", score: { chatgpt: 3, notebooklm: 3, perplexity: 1 } },
            { text: "Concevoir des vidéos interactives ou des visuels animés", icon: "fa-video", score: { canvamagic: 3, googlevids: 3 } },
            { text: "Évaluer ma classe par le jeu ou faire des quiz interactifs", icon: "fa-gamepad", score: { quizizz: 3, ladigitale: 2 } },
            { text: "Faire des recherches documentaires solides avec des sources fiables", icon: "fa-magnifying-glass", score: { perplexity: 3, notebooklm: 1 } }
        ]
    },
    {
        question: "2. Quel est votre degré de familiarité avec l'outil numérique ?",
        options: [
            { text: "Débutant (J'aime quand tout est guidé, simple et transparent)", icon: "fa-seedling", score: { ladigitale: 2, canvamagic: 2, perplexity: 2, quizizz: 1 } },
            { text: "Intermédiaire (Je maîtrise la navigation et n'ai pas peur d'expérimenter)", icon: "fa-gauge-high", score: { chatgpt: 2, notebooklm: 3, googlevids: 3 } }
        ]
    },
    {
        question: "3. Quel public cible enseignez-vous principalement ?",
        options: [
            { text: "Premier degré (Maternelle & Élémentaire / Primaire)", icon: "fa-children", score: { canvamagic: 2, ladigitale: 2, quizizz: 1, chatgpt: 1 } },
            { text: "Second degré (Collège & Lycée / Ados)", icon: "fa-graduation-cap", score: { notebooklm: 3, perplexity: 2, chatgpt: 2, googlevids: 2 } }
        ]
    }
];

let quizCurrentStep = 0;
let userScores = {
    chatgpt: 0,
    notebooklm: 0,
    canvamagic: 0,
    ladigitale: 0,
    googlevids: 0,
    quizizz: 0,
    perplexity: 0
};

const quizProgressBar = document.getElementById('quiz-progress-fill');
const quizCard = document.getElementById('quiz-card');

function renderQuiz() {
    if (!quizCard) return;
    quizCard.innerHTML = '';

    // Mettre à jour la barre de progression
    const progressPercent = (quizCurrentStep / quizQuestions.length) * 100;
    if (quizProgressBar) {
        quizProgressBar.style.width = `${progressPercent}%`;
    }

    if (quizCurrentStep < quizQuestions.length) {
        const qData = quizQuestions[quizCurrentStep];
        
        // Créer l'élément de la question
        const stepDiv = document.createElement('div');
        stepDiv.className = 'quiz-step active';
        
        let optionsHtml = '';
        qData.options.forEach((opt, idx) => {
            optionsHtml += `
                <div class="quiz-option" onclick="selectQuizOption(${idx})">
                    <i class="fa-solid ${opt.icon} quiz-option-icon"></i>
                    <div class="quiz-option-text">${opt.text}</div>
                </div>
            `;
        });

        stepDiv.innerHTML = `
            <h3 class="quiz-question">${qData.question}</h3>
            <div class="quiz-options">
                ${optionsHtml}
            </div>
            <div class="quiz-controls" style="justify-content: center;">
                ${quizCurrentStep > 0 ? `
                    <button class="btn btn-outline" onclick="prevQuizStep()">
                        <i class="fa-solid fa-arrow-left"></i> Précédent
                    </button>
                ` : ''}
            </div>
        `;
        quizCard.appendChild(stepDiv);
    } else {
        // Rendu final des Résultats
        showQuizResult();
    }
}

window.selectQuizOption = function(optionIndex) {
    const currentQuestion = quizQuestions[quizCurrentStep];
    const selectedOption = currentQuestion.options[optionIndex];

    // Ajouter les scores de l'option choisie aux scores totaux de l'utilisateur
    for (const [toolId, val] of Object.entries(selectedOption.score)) {
        if (userScores[toolId] !== undefined) {
            userScores[toolId] += val;
        }
    }

    quizCurrentStep++;
    renderQuiz();
};

window.prevQuizStep = function() {
    if (quizCurrentStep > 0) {
        quizCurrentStep--;
        renderQuiz();
    }
};

function showQuizResult() {
    if (quizProgressBar) {
        quizProgressBar.style.width = '100%';
    }

    // Trouver l'outil avec le score le plus élevé
    let recommendedToolId = 'chatgpt';
    let maxScore = -1;

    for (const [toolId, score] of Object.entries(userScores)) {
        if (score > maxScore) {
            maxScore = score;
            recommendedToolId = toolId;
        }
    }

    const recTool = toolsData.find(t => t.id === recommendedToolId);

    quizCard.innerHTML = `
        <div class="quiz-result">
            <i class="fa-solid fa-circle-check result-icon"></i>
            <h3 class="result-title">Votre compagnon IA idéal est identifié !</h3>
            <p class="result-desc">
                En se basant sur vos objectifs pédagogiques et votre aisance numérique, notre algorithme d'orientation vous recommande en priorité :
            </p>
            
            <div class="glass-card tool-card recommended-tool-card">
                <div class="tool-header">
                    <div class="tool-icon-box">
                        <i class="fa-solid ${recTool.icon}"></i>
                    </div>
                    <span class="difficulty-badge ${recTool.difficulty === 'easy' ? 'diff-easy' : 'diff-medium'}">
                        ${recTool.difficultyLabel}
                    </span>
                </div>
                <h3 class="tool-title" style="color: var(--color-primary);">${recTool.name}</h3>
                <p class="tool-tagline">${recTool.tagline}</p>
                <p class="tool-desc" style="text-align: left; font-size: 0.9rem;">${recTool.desc}</p>
                <div class="tool-actions" style="margin-top: 1rem;">
                    <button class="btn btn-primary" style="width: 100%;" onclick="openToolModal('${recTool.id}')">
                        <i class="fa-solid fa-rocket"></i> Découvrir et regarder le guide
                    </button>
                </div>
            </div>
            
            <button class="btn btn-outline" onclick="resetQuiz()">
                <i class="fa-solid fa-rotate-left"></i> Recommencer le questionnaire
            </button>
        </div>
    `;
}

window.resetQuiz = function() {
    quizCurrentStep = 0;
    userScores = {
        chatgpt: 0,
        notebooklm: 0,
        canvamagic: 0,
        ladigitale: 0,
        googlevids: 0,
        quizizz: 0,
        perplexity: 0
    };
    renderQuiz();
};

// Initialisation globale au chargement de la page
window.addEventListener('DOMContentLoaded', () => {
    initTheme();
    renderTools();
    renderPrompts();
    renderQuiz();
});
