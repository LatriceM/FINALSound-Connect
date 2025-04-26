/**
 * SoundConnect Website JavaScript
 * Handles responsive navigation and other functionality
 */

// DOM Elements
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');

// Toggle mobile navigation
navToggle.addEventListener('click', function() {
    navLinks.classList.toggle('active');
});

// Close mobile navigation when a link is clicked
const navItems = document.querySelectorAll('.nav-links a');
navItems.forEach(item => {
    item.addEventListener('click', () => {
        if (window.innerWidth <= 768) {
            navLinks.classList.remove('active');
        }
    });
});

// Handle window resize to reset navigation
window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
        navLinks.classList.remove('active');
    }
});