document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contact-form');

    contactForm.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevents page refresh

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        if (name && email && message) {
            alert(`Gracias por contactarnos, ${name}! Pronto responderemos tu mensaje.`);
            contactForm.reset(); // Clear the form
        } else {
            alert('Por favor, completa todos los campos antes de enviar.');
        }
    });
});
