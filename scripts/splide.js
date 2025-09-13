document.addEventListener( 'DOMContentLoaded', function() {
    var splide = new Splide( '.first-splide', {
      type   : 'loop',
      
    perPage: 3,
    breakpoints: {
		640: {
			perPage: 1,
      gap: '10px',
		},
  },
    autoScroll: { speed: 1 },

    gap: '15px',        // расстояние между ними (0 уберёт зазоры)
  pagination: false,
  arrows: false,
    });
    splide.mount(window.splide.Extensions);
    
    
  } );

  


  document.addEventListener( 'DOMContentLoaded', function() {
    var splide = new Splide( '.second-splide', {
      type   : 'loop',
      
    perPage: 3,
    breakpoints: {
		640: {
			perPage: 1,
      gap: '10px',
		},
  },
    
    autoScroll: { speed: -1 },
    

    gap: '15px',        // расстояние между ними (0 уберёт зазоры)
  pagination: false,
  arrows: false,
    });
    splide.mount(window.splide.Extensions);
    
    
  } );


   console.log('Has Splide?', !!window.Splide);
  console.log('Has Ext?', window.splide && window.splide.Extensions);
