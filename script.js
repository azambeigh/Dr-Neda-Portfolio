const cards = document.querySelectorAll(".card");

function handleScroll() {
    cards.forEach((card, index) => {
        if (index < cards.length - 1) {
            const nextCard = cards[index + 1];
            const rect = card.getBoundingClientRect();
            const nextRect = nextCard.getBoundingClientRect();

            // Check if the next card overlaps the current card
            if (nextRect.top <= rect.bottom - 20) {
                card.classList.add("blur"); // shrink + blur + gradient
            } else {
                card.classList.remove("blur"); // reset to original gradient
            }
        }
    });
}

window.addEventListener("scroll", handleScroll);
handleScroll();

// 1️⃣ Navbar scroll effect
const navbar = document.getElementById("navbar");
window.addEventListener("scroll", () => {
  navbar.classList.toggle("scrolled", window.scrollY > 60);
});

// 2️⃣ Hamburger mobile toggle
const hamburger = document.querySelector(".hamburger"); // your 4-line hamburger
const menu = document.querySelector(".nav-links");      // nav links ul

hamburger.addEventListener("click", () => {
  menu.classList.toggle("active");   // show/hide menu
  hamburger.classList.toggle("open"); // animate hamburger to X
});



// hero image animation 
window.addEventListener('load', () => {
  const heroImg = document.querySelector('.hero-img');

  // Animate image falling after page load
  requestAnimationFrame(() => {
    setTimeout(() => {
      heroImg.classList.add('show');
    }, 300); // small delay for fall effect
  });
});



//  SCROLL ANIMATION SCRIPT // 

document.addEventListener("DOMContentLoaded", () => {
  
  // Elements to animate
  const animatedElements = document.querySelectorAll("h1, h2, h3, p, img, li, button, .hero-btn, .cta-btn, nav");

  // Function to check if element is in viewport
  function isInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
      rect.top <= (window.innerHeight || document.documentElement.clientHeight) - 50
      && rect.bottom >= 0
    );
  }

  // Scroll event handler
  function scrollAnimate() {
    animatedElements.forEach(el => {
      if (isInViewport(el)) {
        el.classList.add("active");
      }
    });
  }

  // Trigger on load
  scrollAnimate();

  // Trigger on scroll
  window.addEventListener("scroll", scrollAnimate);
});


document.addEventListener("DOMContentLoaded", () => {
  const animatedElements = document.querySelectorAll("h1, h2, h3, p, img, li, button, .hero-btn, .cta-btn, nav");

  function isInViewport(el) {
    const rect = el.getBoundingClientRect();
    return rect.top <= (window.innerHeight || document.documentElement.clientHeight) - 50 &&
           rect.bottom >= 0;
  }

  function scrollAnimate() {
    animatedElements.forEach(el => {
      if (isInViewport(el)) {
        el.classList.add("active");
      } else {
        // Optional: remove active class when element leaves viewport
        // el.classList.remove("active");
      }
    });
  }

  // Trigger on scroll
  window.addEventListener("scroll", scrollAnimate);
  // Trigger on load
  scrollAnimate();
});


// new js for animations 
document.addEventListener("DOMContentLoaded", () => {
  // Select all elements you want animated
  const animatedElements = document.querySelectorAll("h1, h2, h3, p, img, li, button, .hero-btn, .cta-btn, nav");

  // Function to check if element is in the viewport
  function isInViewport(el) {
    const rect = el.getBoundingClientRect();
    return rect.top < window.innerHeight && rect.bottom > 0;
  }

  // Scroll event handler
  function scrollAnimate() {
    animatedElements.forEach(el => {
      if (isInViewport(el)) {
        el.classList.add("active");    // Enter viewport → animate
      } else {
        el.classList.remove("active"); // Leave viewport → reset
      }
    });
  }

  // Trigger animation on page load
  scrollAnimate();

  // Trigger animation on scroll
  window.addEventListener("scroll", scrollAnimate);
});

// about img animation
 
  const aboutImage = document.querySelector(".image-container");

  const imgObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          aboutImage.classList.add("show-image");
        } else {
          aboutImage.classList.remove("show-image");
        }
      });
    },
    { threshold: 0.3 }
  );

  imgObserver.observe(aboutImage);




// scroll animation for timeline

  const timelineItems = document.querySelectorAll(".timeline-item");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");   // animate when visible
        } else {
          entry.target.classList.remove("show"); // remove when leaving viewport
        }
      });
    },
    { threshold: 0.2 }
  );

  timelineItems.forEach((item) => observer.observe(item));

