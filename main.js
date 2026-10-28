// Las chapas se asientan al entrar en pantalla. Sin JS o sin IntersectionObserver todo queda visible.
(function () {
  var els = document.querySelectorAll('.plate, .rooms, .gallery__title, .frame');
  if (!('IntersectionObserver' in window)) return;
  var delay = 0;
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (!e.isIntersecting) return;
      var el = e.target;
      el.style.transitionDelay = delay + 'ms';
      delay = (delay + 70) % 280;
      el.classList.add('in');
      io.unobserve(el);
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -6% 0px' });
  els.forEach(function (el) {
    // lo que ya se ve en el primer viewport no se anima: el primer vistazo debe estar completo
    var r = el.getBoundingClientRect();
    if (r.top < window.innerHeight * 0.9) return;
    el.classList.add('settle');
    io.observe(el);
  });
})();

// Inclinación suave de la chapa de la portada siguiendo el puntero (solo mouse, sin reduced-motion)
(function () {
  var plate = document.querySelector('.plate--street');
  if (!plate || !window.matchMedia('(hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)').matches) return;
  var raf = 0, px = 0, py = 0;
  function apply() {
    raf = 0;
    plate.style.transform = 'perspective(900px) rotateY(' + (px * 4).toFixed(2) + 'deg) rotateX(' + (-py * 3).toFixed(2) + 'deg)';
    plate.style.setProperty('--mx', ((px + .5) * 100).toFixed(0) + '%');
    plate.style.setProperty('--my', ((py + .5) * 100).toFixed(0) + '%');
  }
  plate.addEventListener('pointermove', function (e) {
    var r = plate.getBoundingClientRect();
    px = (e.clientX - r.left) / r.width - .5;
    py = (e.clientY - r.top) / r.height - .5;
    plate.classList.add('is-tilting');
    if (!raf) raf = requestAnimationFrame(apply);
  });
  plate.addEventListener('pointerleave', function () {
    plate.classList.remove('is-tilting');
    plate.style.transform = '';
    plate.style.removeProperty('--mx');
    plate.style.removeProperty('--my');
  });
})();
