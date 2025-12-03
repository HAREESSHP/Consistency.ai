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
    const phoneNumber = '919346315298'; // Consistency AI WhatsApp
    const message = encodeURIComponent('Hi! I want to get clarity on my learning goals with Consistency AI. Can you help me?');
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

    // ============================================
    // CAROUSEL INITIALIZATION
    // ============================================
    const carouselTrack = document.querySelector('.carousel-track');
    const carouselContainer = document.querySelector('.carousel-container');
    
    if (carouselTrack && carouselContainer) {
        // Set initial active indicator
        updateCarouselPosition();

        // Start auto-scroll
        startAutoScroll();

        // Pause auto-scroll on hover
        carouselContainer.addEventListener('mouseenter', stopAutoScroll);
        carouselContainer.addEventListener('mouseleave', startAutoScroll);

        // For mobile - pause on touch
        carouselContainer.addEventListener('touchstart', stopAutoScroll);
        carouselContainer.addEventListener('touchend', startAutoScroll);
    }
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

// ============================================
// CAROUSEL FUNCTIONALITY
// ============================================

let currentSlide = 0;
let autoScrollInterval = null;
const TOTAL_ORIGINAL_SLIDES = 6; // Number of original cards

/**
 * Scroll carousel to the specified direction
 * @param {number} direction - Direction to scroll (-1 for previous, 1 for next)
 */
function scrollCarousel(direction) {
    const carouselTrack = document.querySelector('.carousel-track');
    const indicators = document.querySelectorAll('.indicator');
    const totalSlides = document.querySelectorAll('.student-card').length;
    
    currentSlide += direction;

    // Update position immediately
    updateCarouselPosition();

    // Check if we need to loop back to start
    if (currentSlide >= TOTAL_ORIGINAL_SLIDES) {
        setTimeout(() => {
            carouselTrack.style.transition = 'none';
            currentSlide = 0;
            updateCarouselPosition();
            // Re-enable transition after a brief delay
            setTimeout(() => {
                carouselTrack.style.transition = 'transform 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
            }, 50);
        }, 600);
    } else if (currentSlide < 0) {
        setTimeout(() => {
            carouselTrack.style.transition = 'none';
            currentSlide = TOTAL_ORIGINAL_SLIDES - 1;
            updateCarouselPosition();
            // Re-enable transition after a brief delay
            setTimeout(() => {
                carouselTrack.style.transition = 'transform 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
            }, 50);
        }, 600);
    }
}

/**
 * Go to a specific slide
 * @param {number} index - The slide index to navigate to
 */
function goToSlide(index) {
    const carouselTrack = document.querySelector('.carousel-track');
    carouselTrack.style.transition = 'transform 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
    currentSlide = index;
    updateCarouselPosition();
    // Reset auto-scroll when manually selecting
    clearInterval(autoScrollInterval);
    startAutoScroll();
}

/**
 * Update carousel position and indicators
 */
function updateCarouselPosition() {
    const carouselTrack = document.querySelector('.carousel-track');
    const indicators = document.querySelectorAll('.indicator');
    
    if (carouselTrack) {
        const offset = currentSlide * 100;
        carouselTrack.style.transform = `translateX(-${offset}%)`;
    }

    // Update indicators - only for original slides
    indicators.forEach((indicator, index) => {
        if (index === (currentSlide % TOTAL_ORIGINAL_SLIDES)) {
            indicator.classList.add('active');
        } else {
            indicator.classList.remove('active');
        }
    });
}

/**
 * Start auto-scroll carousel
 */
function startAutoScroll() {
    autoScrollInterval = setInterval(() => {
        scrollCarousel(1);
    }, 5000); // 5 seconds
}

/**
 * Stop auto-scroll carousel
 */
function stopAutoScroll() {
    clearInterval(autoScrollInterval);
}
