  document.addEventListener("DOMContentLoaded", () => {
    const counters = document.querySelectorAll('.counter-box');
    const duration = 2000;
    const frameRate = 30;

    const startCounting = (counter) => {
      let current = 0;
      const target = +counter.getAttribute('data-target');
      const step = Math.ceil(target / (duration / frameRate));

      const interval = setInterval(() => {
        current += step;
        if (current >= target) {
          current = target;
          clearInterval(interval);
        }
        counter.textContent = current;
      }, 1000 / frameRate);
    };

    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const el = entry.target;
          el.classList.add('visible');
          startCounting(el);
          obs.unobserve(el); // count only once
        }
      });
    }, {
      threshold: 0.5
    });

    counters.forEach(counter => observer.observe(counter));
  });
