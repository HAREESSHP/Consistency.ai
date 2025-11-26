/**
 * CONSISTENCY AI - CONFIGURATION TEMPLATE
 * 
 * Edit this file to customize your landing page
 * Then copy-paste the values into your HTML/CSS/JS files
 */

// ============================================
// 1. BRAND CONFIGURATION
// ============================================

const BRAND_CONFIG = {
    // Company Details
    companyName: "Consistency AI",
    tagline: "Clarity. Consistency. Career Growth.",
    description: "Consistency AI is a student-focused skill-growth platform created to eliminate confusion and help students build strong technical abilities with the right roadmap and consistency.",
    
    // Hero Section
    heroTitle: "Clarity & Consistency for Students",
    heroSubtitle: "A platform helping students build real skills through clarity, roadmaps, and consistent execution.",
    heroSupporting: "A 15-minute call to understand your goals & guide your roadmap.",
    
    // Contact Methods (Choose ONE as primary)
    contacts: {
        calendly: {
            enabled: true,
            url: "https://calendly.com/consistency-ai/clarity-meet" // UPDATE WITH YOUR CALENDLY URL
        },
        whatsapp: {
            enabled: false,
            phoneNumber: "919876543210" // UPDATE WITH YOUR PHONE NUMBER (include country code)
        },
        googleForm: {
            enabled: false,
            url: "YOUR_GOOGLE_FORM_URL" // UPDATE WITH YOUR GOOGLE FORM URL
        },
        email: {
            enabled: false,
            address: "hello@consistency-ai.com" // UPDATE WITH YOUR EMAIL
        }
    }
};

// ============================================
// 2. DESIGN CONFIGURATION
// ============================================

const DESIGN_CONFIG = {
    colors: {
        primaryBlue: "#2563eb",
        primaryPurple: "#7c3aed",
        lightBackground: "#f8fafc",
        darkText: "#1e293b",
        lightText: "#64748b",
        white: "#ffffff",
        accent: "#ec4899"
    },
    fonts: {
        headings: "'Poppins', sans-serif",
        body: "'Inter', sans-serif"
    },
    animations: {
        transition: "all 0.3s ease",
        floatDuration: "3s"
    }
};

// ============================================
// 3. CONTENT CONFIGURATION
// ============================================

const CONTENT_CONFIG = {
    // Features/What We Do
    features: [
        {
            icon: "🗺️",
            title: "Clear Career Roadmaps",
            description: "Web Dev, ML/AI, DSA, and more. Get structured learning paths tailored to your goals."
        },
        {
            icon: "⚡",
            title: "Daily Consistency System",
            description: "Build streaks, track habits & progress. Stay accountable with our habit-building framework."
        },
        {
            icon: "🤖",
            title: "AI-Based Guidance",
            description: "Get instant clarity on your next steps. Personalized recommendations powered by AI."
        },
        {
            icon: "💼",
            title: "Portfolio & Resume Support",
            description: "Build impressive projects, showcase your GitHub, and polish your professional branding."
        }
    ],

    // Who Should Join
    targetAudience: [
        {
            icon: "❓",
            text: "Students confused about where to start"
        },
        {
            icon: "🔀",
            text: "Students learning too many skills with no direction"
        },
        {
            icon: "📉",
            text: "Students struggling with consistency"
        },
        {
            icon: "🎓",
            text: "Students preparing for internships/placements"
        }
    ],

    // Why Book a Meet
    benefits: [
        {
            title: "Get Personalized Roadmap",
            description: "We understand your goals and create a customized learning path just for you."
        },
        {
            title: "Remove Confusion Instantly",
            description: "Cut through the noise and focus on what actually matters for your career."
        },
        {
            title: "Improve Productivity",
            description: "Build consistency with proven habit-building systems and daily tracking."
        },
        {
            title: "Understand Industry Expectations",
            description: "Learn what top companies are looking for in candidates today."
        },
        {
            title: "Pure Guidance",
            description: "No sales pitch — just genuine guidance to help you succeed."
        },
        {
            title: "Start Your Journey",
            description: "Leave the call with a clear direction and actionable next steps."
        }
    ]
};

// ============================================
// 4. SOCIAL MEDIA CONFIGURATION
// ============================================

const SOCIAL_CONFIG = {
    linkedin: "https://linkedin.com/company/consistency-ai",
    twitter: "https://twitter.com/consistency_ai",
    instagram: "https://instagram.com/consistency_ai",
    youtube: "https://youtube.com/@consistency_ai",
    facebook: "https://facebook.com/consistency.ai"
};

// ============================================
// 5. ANALYTICS CONFIGURATION
// ============================================

const ANALYTICS_CONFIG = {
    // Google Analytics 4
    googleAnalyticsId: "G-XXXXXXXXXX", // UPDATE WITH YOUR GA4 ID
    
    // Event tracking
    events: {
        heroCtaClick: "hero_cta_click",
        bookMeetClick: "book_meet_click",
        whatsappClick: "whatsapp_click",
        navLinkClick: "nav_link_click"
    }
};

// ============================================
// 6. SEO CONFIGURATION
// ============================================

const SEO_CONFIG = {
    title: "Consistency AI - Clarity & Consistency for Students",
    description: "Build real skills with clarity, roadmaps, and consistent execution. Join Consistency AI to achieve your learning goals.",
    keywords: "student, learning, roadmap, consistency, skill-building, internship, placement",
    ogImage: "assets/og-image.png", // Social media preview image
    ogUrl: "https://consistency-ai.com"
};

// ============================================
// 7. DEPLOYMENT CONFIGURATION
// ============================================

const DEPLOYMENT_CONFIG = {
    // Environment (development, staging, production)
    environment: "production",
    
    // API endpoints
    api: {
        bookingEndpoint: null, // If using custom backend
        analyticsEndpoint: null
    },
    
    // Feature flags
    features: {
        newsletter: false,
        testimonials: false,
        blog: false,
        chatbot: false
    }
};

// ============================================
// HOW TO USE THIS CONFIG
// ============================================

/*
1. UPDATING CONTACT METHOD:
   
   For Calendly:
   - Set calendly.enabled = true
   - Set others to false
   - Update calendly.url with your Calendly link
   
   For WhatsApp:
   - Set whatsapp.enabled = true
   - Set others to false
   - Update whatsapp.phoneNumber with your number

2. UPDATING COLORS:
   Edit DESIGN_CONFIG.colors and copy to styles.css :root section
   
3. ADDING GOOGLE ANALYTICS:
   Copy ANALYTICS_CONFIG.googleAnalyticsId and add to HTML <head>:
   <script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
   <script>
     window.dataLayer = window.dataLayer || [];
     function gtag(){dataLayer.push(arguments);}
     gtag('js', new Date());
     gtag('config', 'G-XXXXXXXXXX');
   </script>

4. UPDATING CONTENT:
   Modify arrays in CONTENT_CONFIG and update HTML accordingly

5. DEPLOYMENT:
   Update DEPLOYMENT_CONFIG.environment when deploying to production
*/

// ============================================
// EXPORT FOR USE IN SCRIPTS
// ============================================

// If using modules, export:
// export { BRAND_CONFIG, DESIGN_CONFIG, CONTENT_CONFIG, SOCIAL_CONFIG, ANALYTICS_CONFIG, SEO_CONFIG, DEPLOYMENT_CONFIG };

// For browser use, these are available globally as window.BRAND_CONFIG, etc.
