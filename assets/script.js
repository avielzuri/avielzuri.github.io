// Navigation toggle
const navToggle = document.getElementById('nav-toggle');
const navList = document.getElementById('nav-list');
if (navToggle && navList) {
  navToggle.addEventListener('click', () => {
    const open = navList.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', String(open));
    navList.setAttribute('aria-hidden', String(!open));
    if (open) {
      const firstLink = navList.querySelector('a');
      firstLink?.focus();
    }
  });
  // Close menu on Escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && navList.classList.contains('open')) {
      navList.classList.remove('open');
      navToggle.setAttribute('aria-expanded', 'false');
      navList.setAttribute('aria-hidden', 'true');
      navToggle.focus();
    }
  });
  // Close after clicking a link (mobile UX)
  navList.querySelectorAll('a').forEach((a) => a.addEventListener('click', () => {
    if (navList.classList.contains('open')) {
      navList.classList.remove('open');
      navToggle.setAttribute('aria-expanded', 'false');
      navList.setAttribute('aria-hidden', 'true');
    }
  }));
}

// Current year in footer
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();

// Print resume button
document.getElementById('print-resume')?.addEventListener('click', () => {
  // Scroll resume section into view on screen; printing will use print CSS
  document.getElementById('resume')?.scrollIntoView({ behavior: 'smooth' });
  setTimeout(() => window.print(), 350);
});

// Simple lightbox for galleries
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-image');
const lightboxStrip = document.getElementById('lightbox-strip');
const lightboxCaption = document.getElementById('lightbox-caption');
const closeBtn = document.getElementById('lightbox-close');
let lastFocusedElement = null;

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

function trapFocus(e) {
  if (!lightbox.open) return;
  const focusable = lightbox.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
  if (focusable.length === 0) return;
  const first = focusable[0];
  const last = focusable[focusable.length - 1];
  if (e.key === 'Tab') {
    if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
    else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
  }
  if (e.key === 'Escape') closeLightbox();
}

function openGallery(name, index = 0) {
  if (!lightbox || !lightboxImg || !lightboxStrip) return;
  const imgs = galleries[name];
  if (!imgs || imgs.length === 0) return;

  lightboxStrip.innerHTML = '';
  imgs.forEach((src, i) => {
    const img = document.createElement('img');
    img.src = src;
    img.alt = `Gallery thumbnail ${i + 1} of ${imgs.length}`;
    img.className = 'lightbox-thumb';
    img.setAttribute('role', 'listitem');
    if (i === index) img.setAttribute('aria-current', 'true');
    img.addEventListener('click', () => showIndex(i));
    lightboxStrip.appendChild(img);
  });

  function showIndex(i) {
    const src = imgs[i];
    lightboxImg.src = src;
    if (lightboxCaption) lightboxCaption.textContent = src.split('/').pop() || 'Image';
    Array.from(lightboxStrip.children).forEach((el, idx) => {
      if (idx === i) el.setAttribute('aria-current', 'true');
      else el.removeAttribute('aria-current');
    });
  }

  showIndex(index);
  lastFocusedElement = document.activeElement;
  lightbox.showModal();
  closeBtn?.focus();
  document.addEventListener('keydown', trapFocus);
  document.addEventListener('keydown', arrowNav);
}

document.querySelectorAll('.thumb').forEach((btn) => {
  btn.addEventListener('click', (e) => {
    const name = btn.getAttribute('data-gallery');
    openGallery(name || '');
  });
});

function closeLightbox() {
  lightbox.close();
  document.removeEventListener('keydown', trapFocus);
  document.removeEventListener('keydown', arrowNav);
  lastFocusedElement?.focus();
}

if (closeBtn && lightbox) {
  closeBtn.addEventListener('click', () => closeLightbox());
  lightbox.addEventListener('click', (e) => {
    const rect = lightbox.querySelector('.lightbox-content')?.getBoundingClientRect();
    if (!rect) return;
    const inside = e.clientX >= rect.left && e.clientX <= rect.right && e.clientY >= rect.top && e.clientY <= rect.bottom;
    if (!inside) closeLightbox();
  });
}

// Arrow navigation inside lightbox
function arrowNav(e) {
  if (!lightbox.open) return;
  const thumbs = Array.from(lightboxStrip.children);
  const currentIndex = thumbs.findIndex((el) => el.getAttribute('aria-current') === 'true');
  if (currentIndex === -1) return;
  if (e.key === 'ArrowRight') {
    const next = Math.min(currentIndex + 1, thumbs.length - 1);
    thumbs[next].click();
  } else if (e.key === 'ArrowLeft') {
    const prev = Math.max(currentIndex - 1, 0);
    thumbs[prev].click();
  }
}

// Generic modals (project details)
function setupModals() {
  const openers = document.querySelectorAll('.open-modal[data-target]');
  openers.forEach((opener) => {
    opener.addEventListener('click', () => {
      const sel = opener.getAttribute('data-target');
      const dlg = sel ? document.querySelector(sel) : null;
      if (dlg && typeof dlg.showModal === 'function') {
        dlg.showModal();
        opener.setAttribute('aria-expanded', 'true');
        const closeBtn = dlg.querySelector('[data-close]');
        closeBtn?.focus();
        const escClose = (e) => { if (e.key === 'Escape') { dlg.close(); document.removeEventListener('keydown', escClose); } };
        document.addEventListener('keydown', escClose);
        // Trap focus inside modal
        const trap = (e) => {
          const focusable = dlg.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
          if (!focusable.length) return;
          const first = focusable[0];
          const last = focusable[focusable.length - 1];
          if (e.key === 'Tab') {
            if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
            else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
          }
        };
        document.addEventListener('keydown', trap);
        dlg.addEventListener('click', (e) => {
          const rect = dlg.getBoundingClientRect();
          const inside = e.clientX >= rect.left && e.clientX <= rect.right && e.clientY >= rect.top && e.clientY <= rect.bottom;
          if (!inside) dlg.close();
        });
        const cleanup = () => {
          document.removeEventListener('keydown', escClose);
          document.removeEventListener('keydown', trap);
          opener.setAttribute('aria-expanded', 'false');
          opener.focus();
        };
        closeBtn?.addEventListener('click', () => { dlg.close(); cleanup(); });
        dlg.addEventListener('close', cleanup, { once: true });
      }
    });
  });
}

setupModals();

// Theme toggle (basic light/dark via class on body)
const themeToggle = document.getElementById('theme-toggle');
if (themeToggle) {
  themeToggle.addEventListener('click', () => {
    document.documentElement.classList.toggle('light');
    try { localStorage.setItem('theme', document.documentElement.classList.contains('light') ? 'light' : 'dark'); } catch {}
  });
  try {
    const saved = localStorage.getItem('theme');
    if (saved === 'light') document.documentElement.classList.add('light');
  } catch {}
}

// Scroll spy for nav active state
const sectionIds = ['projects','about','education','experience','skills','contact'];
const linkMap = new Map();
document.querySelectorAll('.nav-list a[href^="#"]').forEach((a) => {
  const id = a.getAttribute('href')?.slice(1);
  if (id) linkMap.set(id, a);
});

function updateActiveNav() {
  let current = null;
  for (const id of sectionIds) {
    const el = document.getElementById(id);
    if (!el) continue;
    const rect = el.getBoundingClientRect();
    if (rect.top <= 120 && rect.bottom >= 120) { current = id; break; }
  }
  linkMap.forEach((a, id) => {
    if (id === current) a.setAttribute('aria-current', 'page');
    else a.removeAttribute('aria-current');
  });
}

document.addEventListener('scroll', () => { window.requestAnimationFrame(updateActiveNav); }, { passive: true });
window.addEventListener('load', updateActiveNav);
window.addEventListener('hashchange', updateActiveNav);

// Back to top button
const backToTop = document.getElementById('back-to-top');
if (backToTop) {
  window.addEventListener('scroll', () => {
    if (window.scrollY > 600) backToTop.classList.add('show');
    else backToTop.classList.remove('show');
  }, { passive: true });
  backToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}


