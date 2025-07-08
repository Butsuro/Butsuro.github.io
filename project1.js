const counters = document.querySelectorAll('.counter');

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const counter = entry.target;
        const target = +counter.dataset.target;
        const prefix = counter.dataset.prefix || '';
        const suffix = counter.dataset.suffix || '';
        const speed = +counter.dataset.speed || 20;

        let current = 0;

        const update = () => {
          const increment = Math.ceil(target / speed);
          current += increment;

          if (current < target) {
            counter.textContent = prefix + current.toLocaleString() + suffix;
            requestAnimationFrame(update);
          } else {
            counter.textContent = prefix + target.toLocaleString() + suffix;
          }
        };

        update();
        observer.unobserve(counter);
      }
    });
  }, {
    threshold: 0.5
  });

  counters.forEach(counter => observer.observe(counter));