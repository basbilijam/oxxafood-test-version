$(document).ready(function(){
//   $(window).resize(function(){
//
//     if($(window).width()<768){
//       $('.navbar.navbar-inverse').css('background-color','green');
//     }
//     else
//     {
//       $('.navbar-nav').css('background-color','#222');
//     }
//   });
// });
// navbar active item
 $(".navbar-nav a").on("click", function(){
  $(".navbar-nav").find(".active").removeClass("active");
  $(this).parent().addClass("active");
});

// collapse navbar after link is clicked
// $(".navbar-nav a").click(function(event) {
//    if (!$(this).parent().hasClass('dropdown'))
//        $(".navbar-collapse").collapse('hide');
//   });
});
