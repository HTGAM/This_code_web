// Navbar Scroll Effect
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('bg-dark-bg/95', 'shadow-lg');
        navbar.classList.remove('bg-dark-bg/80');
    } else {
        navbar.classList.remove('bg-dark-bg/95', 'shadow-lg');
        navbar.classList.add('bg-dark-bg/80');
    }
});

// Mobile Menu Toggle
const menuButton = document.querySelector('[data-collapse-toggle="navbar-sticky"]');
const menu = document.getElementById('navbar-sticky');

menuButton.addEventListener('click', () => {
    menu.classList.toggle('hidden');
});

// Smooth Reveal on Scroll (Intersection Observer)
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in-up');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

document.querySelectorAll('section > div').forEach((el) => {
    // Add opacity-0 initially to prevent flash before animation
    // el.classList.add('opacity-0'); 
    // Note: Handling opacity in CSS/Tailwind classes for specific elements is better to avoid layout shift issues if JS fails
    // For now, we rely on the specific animated elements in HTML
});
