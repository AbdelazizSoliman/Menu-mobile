// Hamburger menu
const menuIcon = document.querySelector('.menu-icon');
const navMenu = document.querySelector('.nav-items');
const navLinks = document.querySelectorAll('.nav-link');
const blurs = document.getElementById('blur');
// const blurs = document.querySelectorAll('.blur');
menuIcon.addEventListener('click', () => {
  menuIcon.classList.toggle('active');
  navMenu.classList.toggle('active');
  blurs.classList.toggle('blur');
//   blurs.classList.create('active');
});

navLinks.forEach((navLink) => {
  navLink.addEventListener('click', () => {
    menuIcon.classList.remove('active');
    navMenu.classList.remove('active');
  });
});
