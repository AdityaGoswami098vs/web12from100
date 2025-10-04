// Navbar box-shadow
const navbar = document.getElementById("navbar");
window.addEventListener("scroll", function () {
    if (window.scrollY > 0) {
        navbar.classList.add("shadow");
    } else {
        navbar.classList.remove("shadow");
    }
});

// Animation
const scrollRevealOption = {
    distance: "50px",
    origin: "bottom",
    duration: 1000
}

ScrollReveal().reveal(".left h1", {
    ...scrollRevealOption,
    delay: 500
});
ScrollReveal().reveal(".left p", {
    ...scrollRevealOption,
    delay: 1000
});
ScrollReveal().reveal(".main-btn", {
    ...scrollRevealOption,
    delay: 1500
});
ScrollReveal().reveal(".right img", {
    ...scrollRevealOption,
    origin: "right"
});
ScrollReveal().reveal(".top-heading", {
    ...scrollRevealOption,
    delay: 500
});
ScrollReveal().reveal(".heading", {
    ...scrollRevealOption,
    delay: 500
});
ScrollReveal().reveal(".para", {
    ...scrollRevealOption,
    delay: 500
});
ScrollReveal().reveal(".box", {
    ...scrollRevealOption,
    delay: 1000
});
ScrollReveal().reveal(".right-box li", {
    ...scrollRevealOption,
    delay: 500
});
ScrollReveal().reveal(".box1 .boxes", {
    ...scrollRevealOption,
    delay: 500
});
ScrollReveal().reveal(".footer-col", {
    ...scrollRevealOption,
    delay: 500
});


































const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const closeBtn = document.getElementById("close-btn");

// open sidebar
menuBtn.addEventListener("click", function() {
  navLinks.classList.add("active");
});

// close sidebar
closeBtn.addEventListener("click", function() {
  navLinks.classList.remove("active");
});

// optional: close menu when link clicked
document.querySelectorAll(".nav-items a").forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("active");
  });
});