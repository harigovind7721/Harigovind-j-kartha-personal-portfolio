/* Toggle Icon Navbar */
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

/* Scroll Sections Active Link */
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });

    /* Sticky Navbar */
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);

    /* Remove Toggle Icon and Navbar when click navbar link (scroll) */
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};

/* Scroll Reveal Animations */
ScrollReveal({ 
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .skills-container, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img, .experience h2', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content, .certifications h2', { origin: 'right' });
ScrollReveal().reveal('.experience-timeline, .cert-container, .activities-grid', { origin: 'bottom' });

/* Typed.js for Auto Typing */
const typed = new Typed('.multiple-text', {
    strings: ['BCA Honours Student', 'AI Enthusiast', 'Data Analyst', 'Web Designer'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});

/* Google Form Submission Handling */
let submitted = false;
let contactForm = document.querySelector('#contact-form');
let hiddenIframe = document.querySelector('#hidden_iframe');

if (contactForm && hiddenIframe) {
    hiddenIframe.addEventListener('load', function() {
        if (submitted) {
            alert('Thank you! Your message has been sent successfully.');
            contactForm.reset();
            submitted = false;
        }
    });

    contactForm.addEventListener('submit', function() {
        submitted = true;
    });
}

/* Certificate Modal Logic */
const certModal = document.getElementById('certModal');
const certImage = document.getElementById('certImage');

window.openCertModal = function(imageSrc) {
    if (certModal && certImage) {
        certImage.src = imageSrc;
        certModal.classList.add('show');
        document.body.style.overflow = 'hidden'; // Prevent scrolling when modal is open
    }
}

window.closeCertModal = function() {
    if (certModal) {
        certModal.classList.remove('show');
        document.body.style.overflow = 'auto'; // Re-enable scroll
        setTimeout(() => { certImage.src = ''; }, 300); // Clear image after animation
    }
}
