// quand on clique sur un lien du menu, on descend doucement vers la section
document.querySelectorAll('a[href^="#"]').forEach(function(link) {
    link.addEventListener('click', function(e) {
        e.preventDefault();                    // on empêche le comportement par défaut
        let section = document.querySelector(this.getAttribute('href'));
        section.scrollIntoView({ behavior: 'smooth' });
    });
});

// quand quelqu'un envoie le formulaire de contact
document.getElementById('form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert("Merci pour ton message ! Je te répondrai bientôt.");
    this.reset();   // on vide le formulaire
});

// fonctions pour la fenêtre qui s'ouvre quand on clique sur un projet
function showProject(n) {
    document.getElementById('modal').style.display = "flex";
}

function closeModal() {
    document.getElementById('modal').style.display = "none";
}
