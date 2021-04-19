!(function($) {
  "use strict";

  // Preloader
  $(window).on('load', function() {
    if ($('#preloader').length) {
      $('#preloader').delay(100).fadeOut('slow', function() {
        $(this).remove();
      });
    }
  });

// Toggle .navbar-scrolled class to #navbar when page is scrolled
$(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
      $('#navbar').addClass('navbar-scrolled');
    } else {
      $('#navbar').removeClass('navbar-scrolled');
    }
});

if ($(window).scrollTop() > 100) {
    $('#navbar').addClass('navbar-scrolled');
}

// Navigation active state on scroll
var nav_sections = $('section');
var main_nav = $('.navbar, .mobile-nav');

$(window).on('scroll', function() {
    var cur_pos = $(this).scrollTop() + 200;

    nav_sections.each(function() {
      var top = $(this).offset().top,
        bottom = top + $(this).outerHeight();

      if (cur_pos >= top && cur_pos <= bottom) {
        if (cur_pos <= bottom) {
          main_nav.find('li').removeClass('active');
        }
        main_nav.find('a[href="#' + $(this).attr('id') + '"]').parent('li').addClass('active');
      }
      if (cur_pos < 300) {
        $(".navbar ul:first li:first").addClass('active');
      }
    });
});

// Back to top button
$(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
      $('.back-to-top').fadeIn('slow');
    } else {
      $('.back-to-top').fadeOut('slow');
    }
});

$('.back-to-top').click(function() {
$('html, body').animate({
  scrollTop: 0
}, 1500, 'easeInOutExpo');
return false;
});
})(jQuery);
