jQuery(function($){


  $("#nav").mmenu({
               "extensions": [
                 "effect-panels-zoom",
                  "theme-dark"
               ],
               "navbars": [
                  {
                     "position": "top",
                     "content": [
                        "searchfield"
                     ]
                  }
               ]
            });


  $('.slider__main').flexslider({
      animation: "slide",
      controlNav: false
  });

  // The slider being synced must be initialized first
  $('.product__carousel').flexslider({
    animation: "slide",
    controlNav: false,
    animationLoop: false,
    slideshow: false,
    itemWidth: 210,
    itemMargin: 5,
    asNavFor: '.product__mainPhoto'
  });

  $('.product__mainPhoto').flexslider({
    animation: "slide",
    controlNav: false,
    animationLoop: false,
    slideshow: false,
    sync: ".product__carousel"
  });

  $("#tabs").tabs();

/*
  $('.carousel').flexslider({
    animation: "slide",
    animationLoop: false,
    itemWidth: 210,
    itemMargin: 5,
    minItems: 2,
    maxItems: 4
  });
*/
});
