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
// HAMBURGER MENU (FIXED)
// ============================================
const toggleMenu = document.getElementById('toggleMenu'); // Changed from 'hamburger' to 'toggleMenu'
const menu = document.getElementById('menu');

if (toggleMenu && menu) {
  toggleMenu.addEventListener('click', () => {
    toggleMenu.classList.toggle('open');
    menu.classList.toggle('active');
  });
  
  // Close menu when clicking on a link
  const menuLinks = menu.querySelectorAll('a');
  menuLinks.forEach(link => {
    link.addEventListener('click', () => {
      toggleMenu.classList.remove('open');
      menu.classList.remove('active');
    });
  });
}

// ============================================
// CLOSE MENU WHEN CLICKING OUTSIDE
// ============================================
document.addEventListener('click', (e) => {
  if (toggleMenu && menu) {
    if (!toggleMenu.contains(e.target) && !menu.contains(e.target)) {
      toggleMenu.classList.remove('open');
      menu.classList.remove('active');
    }
  }
});

// ============================================
// FORM VALIDATION (BONUS)
// ============================================
const contactForm = document.querySelector('form');
if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Get form values
    const name = contactForm.querySelector('input[type="text"]').value;
    const email = contactForm.querySelector('input[type="email"]').value;
    const phone = contactForm.querySelectorAll('input[type="text"]')[1].value;
    const message = contactForm.querySelector('textarea').value;
    
    // Basic validation
    if (!name || !email || !phone || !message) {
      alert('Please fill in all fields');
      return;
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert('Please enter a valid email address');
      return;
    }
    
    // If validation passes
    alert('Thank you! Your message has been sent successfully.');
    contactForm.reset();
  });
}