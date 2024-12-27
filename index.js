document.addEventListener('DOMContentLoaded', () => {
    const projects = document.querySelectorAll('.project'); // Tous les projets
    let currentIndex = 0;

    function showNextProject() {
        // Projets actuel et suivant
        const currentProject = projects[currentIndex];

        // Calcul de l'index précédent
        const lastIndex = (currentIndex - 1 + projects.length) % projects.length;
        const lastProject = projects[lastIndex];

        // Calcul de l'index suivant
        const nextIndex = (currentIndex + 1) % projects.length;
        const nextProject = projects[nextIndex];
        
        // Sort le projet actuel
        currentProject.classList.remove('active');
        currentProject.classList.add('hidden');

        // Prépare le prochain projet
        nextProject.classList.remove('hidden');
        void nextProject.offsetWidth; // Forcer le reflow pour appliquer les transitions

        // Fait glisser le prochain projet au centre
        nextProject.classList.add('active');
        lastProject.classList.remove('hidden')

        // Met à jour l'index
        currentIndex = nextIndex;
    }

    // Activer le premier projet au chargement
    projects[currentIndex].classList.add('active');

    // Lancer le défilement toutes les 3 secondes
    setInterval(showNextProject, 8000);
});

document.addEventListener('DOMContentLoaded', () => {
    closeModals()
    const projects = document.querySelectorAll('.project');

    projects.forEach(project => {
        const bgImage = project.getAttribute('data-bg');
        if (bgImage) {
            project.style.setProperty('--bg-image', `url(${bgImage})`);
        }
    });
});

// Sélectionnez tous les boutons de projet
const projectButtons = document.querySelectorAll(".projectAfficher");

// Fonction pour ouvrir une modale
function openModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        closeModals(); // Ferme toutes les autres modales
        modal.classList.add("mdlActive");
        modal.style.display = "flex";
    }
}

// Fonction pour fermer toutes les modales
function closeModals() {
    const modals = document.querySelectorAll(".modal");
    modals.forEach(modal => {
        modal.classList.remove("mdlActive");
        modal.style.display = "none";
    });
}

// Attachez un événement de clic à chaque bouton de projet
projectButtons.forEach((project, index) => {
    const modalId = `modal-${index}`; // Associez un ID unique à chaque modale
    project.addEventListener("click", () => openModal(modalId));
});

// Écouteur global pour fermer les modales
document.addEventListener("click", (event) => {
    if (event.target.classList.contains("close") || event.target.classList.contains("modal")) {
        closeModals();
    }
});
