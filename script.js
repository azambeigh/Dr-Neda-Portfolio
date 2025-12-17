// ============================================
// NAVBAR SCROLL EFFECT
// ============================================
const navbar = document.getElementById('navbar');
if (navbar) {
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });
}

// ============================================
// HAMBURGER MENU
// ============================================
const hamburger = document.getElementById('hamburger');
const menu = document.getElementById('menu');

if (hamburger && menu) {
  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('open');
    menu.classList.toggle('active');
  });
}

// ============================================
// HERO IMAGE ANIMATION
// ============================================
const heroContainer = document.querySelector('.hero-container');
if (heroContainer) {
  window.addEventListener('load', () => {
    heroContainer.classList.add('show'); // Make sure you have .show in CSS
  });
}


const heroText = document.querySelector('.hero-text');
if (heroText) {
  window.addEventListener('load', () => {
    heroText.classList.add('show-text');
  });
}


// ============================================
// CARD BLUR EFFECT - GUARANTEED WORKING
// ============================================
function updateCardBlur() {
  const cards = document.querySelectorAll('.card');
  
  if (cards.length === 0) return;
  
  cards.forEach((card, index) => {
    // Don't blur the last card
    if (index === cards.length - 1) {
      card.classList.remove('blur');
      return;
    }
    
    const cardRect = card.getBoundingClientRect();
    const nextCard = cards[index + 1];
    
    if (!nextCard) return;
    
    const nextCardRect = nextCard.getBoundingClientRect();
    const threshold = 100; // Adjust this value if needed
    
    // If next card is overlapping current card
    if (nextCardRect.top < cardRect.bottom - threshold) {
      card.classList.add('blur');
    } else {
      card.classList.remove('blur');
    }
  });
}

// Run card blur on multiple events
let scrollTimeout;
window.addEventListener('scroll', () => {
  clearTimeout(scrollTimeout);
  scrollTimeout = setTimeout(updateCardBlur, 10);
});

window.addEventListener('load', () => {
  setTimeout(updateCardBlur, 500);
});

window.addEventListener('resize', () => {
  setTimeout(updateCardBlur, 100);
});

// Initial check
document.addEventListener('DOMContentLoaded', () => {
  setTimeout(updateCardBlur, 500);
});

// ============================================
// ABOUT IMAGE SLIDE-IN ANIMATION
// ============================================
const imageContainer = document.querySelector('.image-container');
if (imageContainer) {
  const imageObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
  entry.target.classList.add('show-image');
} else {
  entry.target.classList.remove('show-image'); // allows re-trigger
}
    });
  }, { threshold: 0.2 });
  
  imageObserver.observe(imageContainer);
}

// ============================================
// TIMELINE SCROLL ANIMATION
// ============================================
const timelineItems = document.querySelectorAll('.timeline-item');
if (timelineItems.length > 0) {
  const timelineObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
  entry.target.classList.add('show');
} else {
  entry.target.classList.remove('show'); // allows re-trigger
}
    });
  }, { threshold: 0.1 });
  
  timelineItems.forEach(item => {
    timelineObserver.observe(item);
  });
}

// ============================================
// DEBUG: Check if cards exist (remove after testing)
// ============================================
console.log('Cards found:', document.querySelectorAll('.card').length);
console.log('Script loaded successfully');