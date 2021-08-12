 $(function () {
     var owlOption = {
         loop: true,
         dots: true,
         margin: 10,
         autoplay: true,
         autoplayTimeout: 3000,
         responsiveClass: true,
         slideTransition: 'ease-out',
         responsive: {
             0: {
                 items: 1,
                 nav: false
             },
             600: {
                 items: 1,
                 nav: false
             },
             1000: {
                 items: 2,
                 nav: false,

             }


         }
     }


     function carregarSlide() {
         var windowSize = $(window).width();
         var slide = $('.slide');
         slide.owlCarousel('destroy');
         if (windowSize < 768) {
             slide.addClass('owl-carousel owl-theme');
             slide.owlCarousel(owlOption);
         } else {
             slide.removeClass('owl-carousel owl-theme');
         }
     }
     carregarSlide();
     $(window).on('resize', function () {
         carregarSlide();
     });

     function carregarSlideDois() {
         var slide2 = $('.slide2');

         slide2.addClass('owl-carousel owl-theme');
         slide2.owlCarousel(owlOption);

     }
     carregarSlideDois();
 });


 //******EFEITO DO SCROLL*******/

 $('nav a').click(function (e) {
     e.preventDefault();
     var atributoID = $(this).attr('href'),
         targetOffset = $(atributoID).offset().top;
     $('html, body').animate({
         scrollTop: targetOffset
     }, 500);
 })