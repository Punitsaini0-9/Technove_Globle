
  document.addEventListener("DOMContentLoaded", () => {
    const counters = document.querySelectorAll('.counter-box');
    const duration = 2000;
    const frameRate = 30;
    const activeTimers = new Map();

    const startCounting = (counter) => {
      let current = 0;
      const target = +counter.getAttribute('data-target');
      const step = Math.ceil(target / (duration / frameRate));

      if (activeTimers.get(counter)) {
        clearInterval(activeTimers.get(counter)); // clear old timer if any
      }

      const interval = setInterval(() => {
        current += step;
        if (current >= target) {
          current = target;
          clearInterval(interval);
        }
        counter.textContent = current;
      }, 1000 / frameRate);

      activeTimers.set(counter, interval);
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        const el = entry.target;

        if (entry.isIntersecting) {
          el.classList.add('visible');
          startCounting(el);
        } else {
          el.classList.remove('visible');
          el.textContent = '0'; // Reset to zero
          clearInterval(activeTimers.get(el));
          activeTimers.delete(el);
        }
      });
    }, {
      threshold: 0.5
    });

    counters.forEach(counter => observer.observe(counter));
  });

