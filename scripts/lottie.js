/* var animation = lottie.loadAnimation({
  container: document.getElementById('green-lottie'), // контейнер
  renderer: 'svg', // рендеринг (svg / canvas / html)
  loop: true, // зацикленность
  autoplay: false, // автозапуск
  path: 'lotties/green.json', // путь к файлу анимации
});

var animation2 = lottie.loadAnimation({
  container: document.getElementById('orange-lottie'), // контейнер
  renderer: 'svg', // рендеринг (svg / canvas / html)
  loop: true, // зацикленность
  autoplay: false, // автозапуск
  path: 'lotties/orange2.json', // путь к файлу анимации
});

var animation2 = lottie.loadAnimation({
  container: document.getElementById('green-lottie-2'), // контейнер
  renderer: 'svg', // рендеринг (svg / canvas / html)
  loop: true, // зацикленность
  autoplay: false, // автозапуск
  path: 'lotties/green2.json', // путь к файлу анимации
});
*/

const animations = [
  { id: 'green-lottie', path: 'lotties/green.json' },
  { id: 'orange-lottie', path: 'lotties/orange2.json' },
  { id: 'green-lottie-2', path: 'lotties/green2.json' },
  { id: 'orange-lottie-2', path: 'lotties/orange3.json' },

  { id: 'green-lottie-m', path: 'lotties/green.json' },
  { id: 'orange-lottie-m', path: 'lotties/orange2.json' },
  { id: 'green-lottie-2-m', path: 'lotties/green2.json' },
  { id: 'orange-lottie-2-m', path: 'lotties/orange3.json' },
];

const players = [];

animations.forEach(({ id, path }) => {
  const container = document.getElementById(id);
  if (!container) return;

  const player = lottie.loadAnimation({
    container,
    renderer: 'svg', // canvas быстрее, чем svg
    loop: true,
    autoplay: false,
    path,
  });

  players.push({ el: container, player });
});

const observer = new IntersectionObserver(
  entries => {
    entries.forEach(({ isIntersecting, target }) => {
      const p = players.find(p => p.el === target);
      if (p) {
        isIntersecting ? p.player.play() : p.player.pause();
      }
    });
  },
  {
    threshold: 0.2,
  }
);

players.forEach(({ el }) => observer.observe(el));
