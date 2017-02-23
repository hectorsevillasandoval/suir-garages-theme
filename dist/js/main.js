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
