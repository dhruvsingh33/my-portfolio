// Back to Top Button
const backToTop = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        backToTop.classList.remove('opacity-0');
        backToTop.classList.add('opacity-100');
    } else {
        backToTop.classList.remove('opacity-100');
        backToTop.classList.add('opacity-0');
    }
});

backToTop.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Mobile Menu Toggle
const menuButton = document.querySelector('button.md\\:hidden');
const mobileMenu = document.createElement('div');
mobileMenu.className = 'fixed inset-0 bg-dark-primary transform translate-x-full transition-transform duration-300 ease-in-out';
document.body.appendChild(mobileMenu);

menuButton.addEventListener('click', () => {
    mobileMenu.classList.toggle('translate-x-full');
});

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe all sections
document.querySelectorAll('section').forEach(section => {
    observer.observe(section);
}); 