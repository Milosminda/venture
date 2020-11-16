$(document).ready(function($) {

///// NAVIGATION SCROLL /////

// Select all links with hashes
$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });

// ANIMATION ON SCROLL

$('.js--wp-h2-1').waypoint(function(direction){
	$('.js--wp-h2-1').addClass('animate__animated animate__fadeInUp');
}, {
	offset: '70%'
})
$('.js--wp-h2-2').waypoint(function(direction){
	$('.js--wp-h2-2').addClass('animate__animated animate__fadeInUp');
}, {
	offset: '70%'
})
$('.js--wp-h2-3').waypoint(function(direction){
	$('.js--wp-h2-3').addClass('animate__animated animate__fadeInUp');
}, {
	offset: '70%'
})
$('.js--wp-h2-4').waypoint(function(direction){
	$('.js--wp-h2-4').addClass('animate__animated animate__fadeInUp');
}, {
	offset: '70%'
})
$('.js--wp-h2-5').waypoint(function(direction){
	$('.js--wp-h2-5').addClass('animate__animated animate__fadeInUp');
}, {
	offset: '70%'
})
$('.js--wp-h2-6').waypoint(function(direction){
	$('.js--wp-h2-6').addClass('animate__animated animate__fadeInUp');
}, {
	offset: '70%'
})


$('.js--wp-card').waypoint(function(direction){
	$('.js--wp-card').addClass('animate__animated animate__pulse');
}, {
	offset: '50%'
})

// Count numbers
var a = 0;
$(window).scroll(function() {

  var oTop = $('.widget').offset().top - window.innerHeight;
  if (a == 0 && $(window).scrollTop() > oTop) {
    $('.counter-value').each(function() {
      var $this = $(this),
        countTo = $this.attr('data-count');
      $({
        countNum: $this.text()
      }).animate({
          countNum: countTo
        },
        
        {
          duration: 2000,
          easing: 'swing',
          step: function() {
            $this.text(Math.floor(this.countNum));
          },
          complete: function() {
            $this.text(this.countNum);
            //alert('finished');
          }

        });
    });
    a = 1;
  }
});

});