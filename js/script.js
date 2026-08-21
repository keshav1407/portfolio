const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

if (menuToggle && navLinks) {
  menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('open');
    menuToggle.innerHTML = navLinks.classList.contains('open')
      ? '<i class="fas fa-xmark"></i>'
      : '<i class="fas fa-bars"></i>';
  });

  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('open');
      menuToggle.innerHTML = '<i class="fas fa-bars"></i>';
    });
  });
}

const sections = document.querySelectorAll('main section[id]');
const links = document.querySelectorAll('.nav-links a');

const updateActiveLink = () => {
  let current = '';
  sections.forEach(section => {
    if (window.scrollY >= section.offsetTop - 140) current = section.id;
  });
  links.forEach(link => link.classList.toggle('active', link.getAttribute('href') === `#${current}`));
};

window.addEventListener('scroll', updateActiveLink, { passive: true });
updateActiveLink();