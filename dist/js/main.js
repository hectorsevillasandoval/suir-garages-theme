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


  $('.flexslider').flexslider({
      animation: "slide",
      controlNav: false
  });

});
