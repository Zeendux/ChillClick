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


/*
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
*/




// NAV 

const burger = document.querySelector(".burger-button");

const logo = document.querySelector(".logo");

const navLink = document.querySelectorAll(".menu-link");



// gsap timeline
document.addEventListener("DOMContentLoaded", () => {
  let tl = gsap.timeline({paused: true});

  tl.from (".menu-overlay", {
    yPercent: -100,
    duration: .5,
    
    ease: "power2.out",
  })
    .to (logo, {
    duration: .2,
    ease: "power2.out",
    opacity: 0,
  }, 0);



burger.addEventListener("click", () => {
    console.log("clicked")

    

    if (!burger.classList.contains("burger-active")) {
        burger.classList.toggle('burger-active'); // Добавить класс active, если он не содержится в списке классов
      tl.play()
    

    } else {
        burger.classList.toggle('burger-active'); // Удалить класс active, если содержится в списке классов
        tl.reverse()
      }
});






navLink.forEach(link => {
  link.addEventListener("click", () => {
    console.log("clicked")
    tl.reverse()

    if (!burger.classList.contains("burger-active")) {
        burger.classList.toggle('burger-active'); // Добавить класс active, если он не содержится в списке классов
      tl.play()
    

    } else {
        burger.classList.toggle('burger-active'); // Удалить класс active, если содержится в списке классов
        tl.reverse()
      }
  })
});



// DOMloaded
});







