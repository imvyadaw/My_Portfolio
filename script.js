// Wait for the DOM to fully load
// Select all elements
const nav = document.querySelector('nav');
const header = document.querySelector('header');
const aboutSection = document.querySelector('.about');
const serviceSection = document.querySelector('.service');
const projectSection = document.querySelector('.project');
const footer = document.querySelector('footer');
const form = document.querySelector('.footer__form');

// Add event listeners
nav.addEventListener('mouseover', () => {
  nav.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
});

nav.addEventListener('mouseout', () => {
  nav.style.backgroundColor = 'transparent';
});

// Scroll to section on click
document.querySelectorAll('.nav__logo a').forEach((link) => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const sectionId = link.getAttribute('href').split('#')[1];
    const section = document.querySelector(`#${sectionId}`);
    section.scrollIntoView({ behavior: 'smooth' });
  });
});

// Form submission
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const formData = new FormData(form);
  const name = formData.get('Your Name');
  const email = formData.get('Your Email Address');
  const phoneNumber = formData.get('Your Phone Number');
  const message = formData.get('Your Idea');

  // Send data to server or perform other actions
  console.log(name, email, phoneNumber, message);
});

// Animate elements on scroll
window.addEventListener('scroll', () => {
  const scrollPosition = window.scrollY;
  const aboutSectionTop = aboutSection.offsetTop;
  const serviceSectionTop = serviceSection.offsetTop;
  const projectSectionTop = projectSection.offsetTop;

  if (scrollPosition >= aboutSectionTop - 200) {
    aboutSection.classList.add('animate');
  }

  if (scrollPosition >= serviceSectionTop - 200) {
    serviceSection.classList.add('animate');
  }

  if (scrollPosition >= projectSectionTop - 200) {
    projectSection.classList.add('animate');
  }
});

// Add animation class to elements
document.querySelectorAll('.animate').forEach((element) => {
  element.classList.add('animate');
});