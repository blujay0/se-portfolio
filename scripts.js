const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelectorAll('.nav__link');
const logoImg = document.getElementById('#logo-img');

navToggle.addEventListener('click', () => {
  document.body.classList.toggle('nav-open');
});

navLinks.forEach(link => {
  link.addEventListener('click', () => {
    document.body.classList.remove('nav-open');
  })
})

// get date
let year = new Date().getFullYear();
document.getElementById("year").innerHTML = year;

logoImg.addEventListener('click', () => {
  if (window.location.pathname === '/' || '/#' || 'index.html') {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }
})