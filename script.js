// ============================================
// CONSISTENCY AI - LANDING PAGE SCRIPTS
// ============================================

/**
 * Mobile Navigation Toggle
 */
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');

if (navToggle && navMenu) {
    navToggle.addEventListener('click', function() {
        navToggle.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Close menu when a link is clicked
    navMenu.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', function() {
            navToggle.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });
}

/**
 * Scroll to a specific section smoothly
 * @param {string} sectionId - The ID of the section to scroll to
 */
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}

/**
 * Open Calendly booking page
 * Replace with your actual Calendly URL
 */
function openCalendly() {
    // Replace with your Calendly URL
    const calendlyUrl = 'https://calendly.com/consistency-ai/clarity-meet';
    window.open(calendlyUrl, '_blank');
}

/**
 * Open WhatsApp direct message
 * Replace with your actual WhatsApp number
 */
function openWhatsApp() {
    // Replace with your actual WhatsApp number (include country code)
    const phoneNumber = '919346315298'; // Example: +91 XXXXX XXXXX
    const message = encodeURIComponent('Hi! I want to book a free clarity meet with Consistency AI.');
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(whatsappUrl, '_blank');
}

/**
 * Add smooth scroll behavior to all anchor links
 */
document.addEventListener('DOMContentLoaded', function() {
    // Smooth scroll for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href !== '#' && document.querySelector(href)) {
                e.preventDefault();
                document.querySelector(href).scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Add animation observer for elements coming into view
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe feature cards and benefit items
    document.querySelectorAll('.feature-card, .who-card, .benefit-item').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        observer.observe(el);
    });

    // Update active nav link on scroll
    window.addEventListener('scroll', updateActiveNavLink);
});

/**
 * Update active navigation link based on current scroll position
 */
function updateActiveNavLink() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-links a[href^="#"]');

    let currentSection = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.pageYOffset >= sectionTop - 200) {
            currentSection = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${currentSection}`) {
            link.classList.add('active');
        }
    });
}

/**
 * Add visual feedback on button clicks
 */
document.addEventListener('click', function(e) {
    if (e.target.classList.contains('btn')) {
        // Add ripple effect
        const ripple = document.createElement('span');
        ripple.classList.add('ripple');
        e.target.appendChild(ripple);

        setTimeout(() => {
            ripple.remove();
        }, 600);
    }
});

// ============================================
// UTILITY FUNCTIONS
// ============================================

/**
 * Check if an element is in viewport
 * @param {Element} element - The element to check
 * @returns {boolean} - True if element is in viewport
 */
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

/**
 * Animate counter numbers
 * @param {Element} element - The element containing the number
 * @param {number} target - The target number
 * @param {number} duration - Duration in milliseconds
 */
function animateCounter(element, target, duration = 2000) {
    let current = 0;
    const increment = target / (duration / 16);
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = target;
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current);
        }
    }, 16);
}
