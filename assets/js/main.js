var action = false, clicked = false;
var Owl = {

    init: function() {
      Owl.carousel();
    },

	carousel: function() {
		var owl;
		$(document).ready(function() {
			
			owl = $('.sales-slider').owlCarousel({
				items 	   : 3.5,
				
				nav        : false,
				dots       : true,
				loop       : true,
        rewind     : false, /* use rewind if you don't want loop */
				margin     : 15,
        autoplay   : true,
        responsiveClass: true,
        autoplayTimeout: 5000,
        smartSpeed: 1500,
				dotsContainer: '.sales-target-wrapper ul',
				navText: ['prev','next'],
        responsive: {
          0: {
            items: 2.5,
            center: true, 
          },
      
          600: {
            items: 3,
            center: true, 
          },
      
          1024: {
            items: 3.5,
            center: true, 
          },
      
          1366: {
            items: 3.5,
            center: true, 
          }
        },
			});

			  $('.owl-next').on('click',function(){
			  	action = 'next';
			  });

			  $('.owl-prev').on('click',function(){
			  	action = 'prev';
			  });

			 $('.sales-target-wrapper').on('click', 'li', function(e) {
			    owl.trigger('to.owl.carousel', [$(this).index(), 300]);
			  });
		});
	}
};

$(document).ready(function() {
  Owl.init();
});




$(document).ready(function(){
  $('.image-popup-vertical-fit').magnificPopup({
    type: 'image',
    mainClass: 'mfp-with-zoom', 
    gallery:{
        enabled:true
      },
  
    zoom: {
      enabled: true, 
  
      duration: 300, // duration of the effect, in milliseconds
      easing: 'ease-in-out', // CSS transition easing function
  
      opener: function(openerElement) {
  
        return openerElement.is('img') ? openerElement : openerElement.find('img');
    }
  }
  
  });
  
  });