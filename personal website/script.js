document.addEventListener('DOMContentLoaded', function() {
    
    const menuToggle = document.getElementById('menuToggle');
    const navLinks = document.querySelector('.nav-links');
    
    if (menuToggle) {
        menuToggle.addEventListener('click', function() {
            navLinks.classList.toggle('show');
        });
    }
    
    const welcomeBtn = document.getElementById('welcomeBtn');
    if (welcomeBtn) {
        welcomeBtn.addEventListener('click', function() {
            alert('Welcome to my portfolio! Thank you for visiting.');
        });
    }
    
    const climateBtn = document.getElementById('climateBtn');
    if (climateBtn) {
        climateBtn.addEventListener('click', function() {
            const messageBox = document.getElementById('climateMessage');
            messageBox.innerHTML = 'Thank you for caring about our planet! 🌍 Small actions like reducing waste, saving energy, and planting trees make a big difference. Every person can help fight climate change.';
            messageBox.classList.remove('hidden');
        });
    }
});

function toggleDetails(detailsId) {
    const detailsElement = document.getElementById(detailsId);
    if (detailsElement) {
        if (detailsElement.classList.contains('hidden')) {
            detailsElement.classList.remove('hidden');
        } else {
            detailsElement.classList.add('hidden');
        }
    }
}