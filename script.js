/* ============================================================
   IMPERIUM PRIVATE PROTECTION – JavaScript
   ============================================================ */

(function () {
  'use strict';

  /* ── Navbar scroll effect ── */
  const navbar = document.getElementById('navbar');
  function onScroll() {
    navbar.classList.toggle('scrolled', window.scrollY > 60);
    backTop.classList.toggle('visible', window.scrollY > 400);
  }
  window.addEventListener('scroll', onScroll, { passive: true });

  /* ── Mobile burger menu ── */
  const burger   = document.getElementById('burger');
  const navLinks = document.getElementById('navLinks');
  burger.addEventListener('click', () => {
    burger.classList.toggle('open');
    navLinks.classList.toggle('open');
  });
  navLinks.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      burger.classList.remove('open');
      navLinks.classList.remove('open');
    });
  });

  /* ── Back to top ── */
  const backTop = document.getElementById('backTop');
  backTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

  /* ── Intersection Observer – fade-in-up ── */
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('visible');
          observer.unobserve(e.target);
        }
      });
    },
    { threshold: 0.12 }
  );

  // Add animation class to elements
  document.querySelectorAll(
    '.service-card, .why-card, .team-card, .testi-card, .cov-item, .about-content, .about-img-wrap'
  ).forEach(el => {
    el.classList.add('anim-fade');
    observer.observe(el);
  });

  /* ── Counter animation ── */
  function animateCounter(el, target, duration) {
    const start  = performance.now();
    const from   = 0;
    function update(now) {
      const t   = Math.min((now - start) / duration, 1);
      const val = Math.floor(from + (target - from) * easeOut(t));
      el.textContent = val + (el.dataset.suffix || '');
      if (t < 1) requestAnimationFrame(update);
    }
    requestAnimationFrame(update);
  }
  function easeOut(t) { return 1 - Math.pow(1 - t, 3); }

  const counterObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          const num = e.target;
          const val = parseInt(num.textContent, 10);
          num.dataset.suffix = num.textContent.replace(/\d/g, '');
          animateCounter(num, val, 1800);
          counterObserver.unobserve(num);
        }
      });
    },
    { threshold: 0.5 }
  );
  document.querySelectorAll('.badge-num').forEach(el => counterObserver.observe(el));

  /* ── Contact form ── */
  const form  = document.getElementById('contactForm');
  const toast = document.getElementById('toast');

  function showToast(msg, ok = true) {
    toast.textContent = msg;
    toast.style.borderColor = ok ? 'var(--gold-dk)' : '#c0392b';
    toast.classList.add('show');
    setTimeout(() => toast.classList.remove('show'), 4000);
  }

  form.addEventListener('submit', async function (e) {
    e.preventDefault();
    const required = form.querySelectorAll('[required]');
    let valid = true;
    required.forEach(f => {
      if (!f.value.trim() && f.type !== 'checkbox') { valid = false; f.style.borderColor = '#c0392b'; }
      else if (f.type === 'checkbox' && !f.checked)  { valid = false; }
      else f.style.borderColor = '';
    });
    if (!valid) { showToast('Veuillez remplir tous les champs obligatoires.', false); return; }

    const btn = form.querySelector('button[type=submit]');
    const originalText = btn.textContent;
    btn.textContent = 'Envoi en cours…';
    btn.disabled = true;

    try {
      const data = new FormData(form);
      data.append('_subject', 'Nouvelle demande de protection – Imperium Private Protection');
      data.append('_template', 'table');
      data.append('_captcha', 'false');

      const res = await fetch('https://formsubmit.co/ajax/imperiumsecuritegroupe@gmail.com', {
        method: 'POST',
        headers: { 'Accept': 'application/json' },
        body: data
      });

      if (res.ok) {
        showToast('✓ Votre demande a été envoyée. Nous vous contacterons dans les plus brefs délais.');
        form.reset();
      } else {
        showToast('Une erreur est survenue. Veuillez réessayer ou nous appeler directement.', false);
      }
    } catch (_) {
      showToast('Une erreur est survenue. Veuillez réessayer ou nous appeler directement.', false);
    }

    btn.textContent = originalText;
    btn.disabled = false;
  });

  /* ── Smooth active nav highlight on scroll ── */
  const sections = document.querySelectorAll('section[id]');
  const navAs    = document.querySelectorAll('.nav-links a');

  const secObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          navAs.forEach(a => a.classList.remove('active'));
          const active = document.querySelector(`.nav-links a[href="#${e.target.id}"]`);
          if (active) active.classList.add('active');
        }
      });
    },
    { threshold: 0.4 }
  );
  sections.forEach(s => secObserver.observe(s));

})();
