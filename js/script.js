// Mobile menu toggle
const menuBtn = document.querySelector('.menu-btn');
const navLinks = document.querySelector('.nav-links');

let menuOpen = false;
menuBtn.addEventListener('click', () => {
    if(!menuOpen) {
        menuBtn.classList.add('open');
        navLinks.classList.add('active');
        menuOpen = true;
    } else {
        menuBtn.classList.remove('open');
        navLinks.classList.remove('active');
        menuOpen = false;
    }
});

// Close mobile menu when a link is clicked
const navItems = document.querySelectorAll('.nav-links li a');
navItems.forEach(item => {
    item.addEventListener('click', () => {
        if (menuOpen) {
            menuBtn.classList.remove('open');
            navLinks.classList.remove('active');
            menuOpen = false;
        }
    });
});

// Scroll reveal animation
window.addEventListener('scroll', reveal);

function reveal() {
    const reveals = document.querySelectorAll('.section-header, .about-content, .project-card, .contact-content');
    
    for (let i = 0; i < reveals.length; i++) {
        const windowHeight = window.innerHeight;
        const revealTop = reveals[i].getBoundingClientRect().top;
        const revealPoint = 150;
        
        if (revealTop < windowHeight - revealPoint) {
            reveals[i].classList.add('active');
        }
    }
}

// Header scroll effect
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    header.classList.toggle('scrolled', window.scrollY > 0);
});

// Add active class to the current section in the navigation menu
const sections = document.querySelectorAll('section');
const navLinks2 = document.querySelectorAll('.nav-links li a');

window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= (sectionTop - sectionHeight / 3)) {
            current = section.getAttribute('id');
        }
    });

    navLinks2.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').substring(1) === current) {
            link.classList.add('active');
        }
    });
});

// Add CSS for the additional classes
document.head.insertAdjacentHTML('beforeend', `
<style>
.nav-links a.active {
    color: var(--primary-color);
}

.scrolled {
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
}

.menu-btn.open .menu-btn__burger {
    transform: rotate(45deg);
    background: transparent;
}

.menu-btn.open .menu-btn__burger::before {
    transform: rotate(45deg);
}

.menu-btn.open .menu-btn__burger::after {
    transform: rotate(-45deg);
}

.section-header, .about-content, .project-card, .contact-content {
    opacity: 0;
    transform: translateY(30px);
    transition: opacity 0.5s ease, transform 0.5s ease;
}

.section-header.active, .about-content.active, .project-card.active, .contact-content.active {
    opacity: 1;
    transform: translateY(0);
}
</style>
`);
