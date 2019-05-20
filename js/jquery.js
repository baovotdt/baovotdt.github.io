 $(function() {




     setTimeout(() => {
         setInterval(() => {
             var screenHeigt = $("html,body").height();
             var screenWidth = $("html,body").width();


             var startLeft = GetRanDom(0, screenWidth);
             var endLeft = GetRanDom(startLeft - 100, startLeft + 100);

             var timeRun = GetRanDom(40000, 60000);

             var opacity = Math.random() * (1 - 0.2) + 0.2;

             var size = GetRanDom(5, 20);

             var snow = document.createElement('i');

             $(snow).addClass('fas fa-heart').css({
                     'position': 'absolute',
                     'z-index': 'auto',
                     'color': '#ef2b64',
                     'display': 'block',
                     'top': 0,
                     'left': startLeft,
                     'opacity': opacity,
                     'font-size': size + 'px'
                 })
                 .appendTo('body')
                 .animate({
                     'top': screenHeigt - size,
                     'left': endLeft
                 }, {
                     duration: timeRun,
                     easing: 'linear',
                     complete: function() {
                         $(this).fadeOut('slow', function() {
                             $(this).remove();
                         });
                     }

                 });
         }, 500)
     }, 25000);


     $(".about").click(function() {
         $('body,html').animate({ scrollTop: $('#blockabout').offset().top }, 800);
         return false;
     })

     $(".skills").click(function() {
         $('body,html').animate({ scrollTop: $('#blockskills').offset().top }, 800);
         return false;
     })
     $(".project").click(function() {
         $('body,html').animate({ scrollTop: $('#blockproject').offset().top }, 800);
         return false;
     })
     $(".contact").click(function() {
         $('body,html').animate({ scrollTop: $('#blockcontact').offset().top }, 800);
         return false;
     })
 })