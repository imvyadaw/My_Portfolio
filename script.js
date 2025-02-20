// Wait for the DOM to fully load
document.addEventListener("DOMContentLoaded", function () {
  // Say Hello Button Click Event
  document.querySelector(".btn").addEventListener("click", function () {
    alert("Hello! Thanks for visiting my portfolio.");
  });

  // Smooth Scrolling for internal links
  document.querySelectorAll("a[href^='#']").forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth",
      });
    });
  });

  // Responsive Navbar Toggle (if needed)
  const navToggle = document.querySelector(".nav__toggle");
  const navMenu = document.querySelector(".nav__menu");
  if (navToggle) {
    navToggle.addEventListener("click", function () {
      navMenu.classList.toggle("active");
    });
  }
});
