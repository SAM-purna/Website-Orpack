// =====================
// Smooth Scroll
// =====================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// =====================
// Scroll-triggered Fade-In
// =====================
const fadeObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.product-card, .step, .testi-card, .stat-item').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(24px)';
  el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
  fadeObserver.observe(el);
});

// =====================
// Product Button — Pesan via WhatsApp
// =====================
document.querySelectorAll('.product-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const productName = btn.closest('.product-card').querySelector('.product-name').textContent;
    const message = encodeURIComponent(`Halo ORPACK, saya ingin pesan ${productName}`);
    window.open(`https://wa.me/6281234567890?text=${message}`, '_blank');
  });
});
