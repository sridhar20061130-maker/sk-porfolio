const navWrap = document.querySelector('.nav-wrap');
const menuBtn = document.querySelector('.menu-btn');
const navLinks = document.querySelector('.nav-links');
const cursorGlow = document.querySelector('.cursor-glow');

window.addEventListener('scroll', () => {
  navWrap.classList.toggle('scrolled', window.scrollY > 20);
});

menuBtn?.addEventListener('click', () => {
  const open = navLinks.classList.toggle('open');
  menuBtn.setAttribute('aria-expanded', String(open));
});

document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => navLinks.classList.remove('open'));
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

document.addEventListener('mousemove', (e) => {
  cursorGlow.style.left = `${e.clientX}px`;
  cursorGlow.style.top = `${e.clientY}px`;
});

const tiltCard = document.querySelector('.tilt-card');
if (tiltCard && window.matchMedia('(pointer:fine)').matches) {
  tiltCard.addEventListener('mousemove', (e) => {
    const r = tiltCard.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;
    tiltCard.style.transform = `perspective(900px) rotateY(${x * 8}deg) rotateX(${y * -8}deg) translateY(-3px)`;
  });
  tiltCard.addEventListener('mouseleave', () => {
    tiltCard.style.transform = '';
  });
}

document.getElementById('year').textContent = new Date().getFullYear();
