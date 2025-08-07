// Navigation toggle
const navToggle = document.getElementById('nav-toggle');
const navList = document.getElementById('nav-list');
if (navToggle && navList) {
  navToggle.addEventListener('click', () => {
    const open = navList.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', String(open));
  });
}

// Current year in footer
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();

// Simple lightbox for galleries
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-image');
const lightboxStrip = document.getElementById('lightbox-strip');
const closeBtn = document.getElementById('lightbox-close');

const galleries = {
  orbit: [
    'images/OrbitDynSim/Image1.png',
    'images/OrbitDynSim/Image2.png',
    'images/OrbitDynSim/Image3.png',
  ],
  otv: [
    'images/OTV/CADFront.png',
    'images/OTV/CADBottom.png',
    'images/OTV/EngSchematic.png',
    'images/OTV/ArduinoSudoWiring.jpg',
    'images/OTV/Wiring.jpg',
    'images/OTV/image26.png',
  ],
};

function openGallery(name, index = 0) {
  if (!lightbox || !lightboxImg || !lightboxStrip) return;
  const imgs = galleries[name];
  if (!imgs || imgs.length === 0) return;

  lightboxStrip.innerHTML = '';
  imgs.forEach((src, i) => {
    const img = document.createElement('img');
    img.src = src;
    img.alt = 'Gallery thumbnail';
    img.className = 'lightbox-thumb';
    img.setAttribute('role', 'listitem');
    if (i === index) img.setAttribute('aria-current', 'true');
    img.addEventListener('click', () => showIndex(i));
    lightboxStrip.appendChild(img);
  });

  function showIndex(i) {
    const src = imgs[i];
    lightboxImg.src = src;
    Array.from(lightboxStrip.children).forEach((el, idx) => {
      if (idx === i) el.setAttribute('aria-current', 'true');
      else el.removeAttribute('aria-current');
    });
  }

  showIndex(index);
  lightbox.showModal();
}

document.querySelectorAll('.thumb').forEach((btn) => {
  btn.addEventListener('click', (e) => {
    const name = btn.getAttribute('data-gallery');
    openGallery(name || '');
  });
});

if (closeBtn && lightbox) {
  closeBtn.addEventListener('click', () => lightbox.close());
  lightbox.addEventListener('click', (e) => {
    const rect = lightbox.querySelector('.lightbox-content')?.getBoundingClientRect();
    if (!rect) return;
    const inside = e.clientX >= rect.left && e.clientX <= rect.right && e.clientY >= rect.top && e.clientY <= rect.bottom;
    if (!inside) lightbox.close();
  });
}


