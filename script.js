document.addEventListener('DOMContentLoaded', () => {
    const menuButton = document.getElementById('menu-toggle');
    const nav = document.querySelector('nav');

    if (menuButton) {
        menuButton.addEventListener('click', () => {
            nav.classList.toggle('active');
        });
    }

    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', () => {
            alert('Bedankt voor je bericht! Ik neem zo snel mogelijk contact op.');
        });
    }
});