// Change typing text options
const words = ["Developer", "Designer", "Engineer"];
let i = 0;
let counter = 0;
const typingElement = document.querySelector(".typing");

// Optional: You can expand the typing effect to cycle through words here
// but currently, it stays on "Developer" as per your request.

// Navigation Active State on Scroll
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    if (pageYOffset >= sectionTop - 60) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("text-white");
    if (link.getAttribute("href").includes(current)) {
      link.classList.add("text-white");
    }
  });
});