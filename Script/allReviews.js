document.addEventListener("DOMContentLoaded", () => {
  const counters = document.querySelectorAll('.counter-box');
  const duration = 2000;
  const frameRate = 30;
  const activeTimers = new Map();

  const startCounting = (counterBox) => {
    const numberElement = counterBox.querySelector('.counter-value p');
    const plusElement = counterBox.querySelector('.plus-sign');
    let current = 0;
    const target = +counterBox.getAttribute('data-target');
    const step = Math.ceil(target / (duration / frameRate));

    if (activeTimers.get(counterBox)) {
      clearInterval(activeTimers.get(counterBox));
    }

    const interval = setInterval(() => {
      current += step;
      if (current >= target) {
        current = target;
        clearInterval(interval);
      }
      numberElement.textContent = current;
    }, 1000 / frameRate);

    activeTimers.set(counterBox, interval);
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      const el = entry.target;
      const numberElement = el.querySelector('.counter-value p');
      const plusElement = el.querySelector('.plus-sign');

      if (entry.isIntersecting) {
        el.classList.add('visible');
        startCounting(el);
      } else {
        el.classList.remove('visible');
        numberElement.textContent = '0';
        clearInterval(activeTimers.get(el));
        activeTimers.delete(el);
      }
    });
  }, {
    threshold: 0.5
  });

  counters.forEach(counter => observer.observe(counter));
});
