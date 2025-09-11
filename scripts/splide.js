document.addEventListener( 'DOMContentLoaded', function() {
    var splide = new Splide( '.first-splide', {
      type   : 'loop',
    perPage: 3,
    autoScroll: { speed: 1 },
    });
    splide.mount(window.splide.Extensions);
    
    
  } );

  


  document.addEventListener( 'DOMContentLoaded', function() {
    var splide = new Splide( '.second-splide', {
      type   : 'loop',
    perPage: 3,
    autoScroll: { speed: -1 },
    });
    splide.mount(window.splide.Extensions);
    
    
  } );
