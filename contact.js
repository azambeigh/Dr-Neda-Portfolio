
const navbar = document.getElementById("navbar");
window.addEventListener("scroll",()=>{
  navbar.classList.toggle("scrolled",window.scrollY>60);
});

// Mobile Menu Toggle
const toggleMenu=document.getElementById("toggleMenu");
const menu=document.getElementById("menu");

toggleMenu.addEventListener("click",() => { menu.classList.toggle("open");
});


