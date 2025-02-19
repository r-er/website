document.addEventListener('DOMContentLoaded', () => {
    console.log('Portfolio loaded');
    const links = document.querySelectorAll('nav ul li a');

    for (const link of links) {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            const section = document.querySelector(link.getAttribute('href'));
            section.scrollIntoView({ behavior: 'smooth' });
        });
    }
});
