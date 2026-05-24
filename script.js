document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

document.getElementById('form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert("Merci pour ton message ! Je te répondrai bientôt.");
    this.reset();
});

function showProject(n) {
    const modal = document.getElementById('modal');
    modal.style.display = "flex";
}

function closeModal() {
    document.getElementById('modal').style.display = "none";
}
