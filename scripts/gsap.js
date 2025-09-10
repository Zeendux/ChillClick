/*

const buttons = document.querySelector('button');

const buttonsHover = gsap.to('button', { x: 400, paused: true });

buttons.addEventListener('mouseenter', () => {
  buttonsHover.play();
});

*/

/*
const buttons = document.querySelectorAll('button');

buttons.forEach(function (button, index) {
  button = document.querySelector('.btn-wrap');

  const tl = gsap
    .timeline({ paused: true })
    .to(button.querySelector('button'), { x: 400 });

  button.addEventListener('mouseenter', () => {
    tl.play();
  });
});

*/

const buttons = document.querySelectorAll('button');

gsap.defaults({ duration: 0.2 });

buttons.forEach(btn => {
  const tl = gsap.timeline({ paused: true }).to(btn, {
    backgroundColor: '#1a174f',
    color: 'white',
    ease: 'power2.out',
  });

  btn.addEventListener('mouseenter', () => {
    tl.play();
  });

  btn.addEventListener('mouseleave', () => {
    tl.reverse();
  });
});
