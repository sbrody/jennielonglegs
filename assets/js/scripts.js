jQuery(function($) {
//mobile menu
  var mobileNav = $('.menu-main-menu-container');
  $('#mobile-nav-button').click(function(){
	mobileNav.slideToggle("slow");
});
  $(window).resize(function(){
	var width = $(window).width();
	if (width > 700 && mobileNav.is(':hidden')){
		mobileNav.removeAttr('style');
		}
          });
//home page animation:
$(".wp-image-33").animate({
        height: '300px'},1200); 
	$(".wp-image-29").animate({
        height: '100px',
		right: '25%'
		},800);

$(".wp-image-31").animate({
		right: '30%',
  opacity:'1'
		},1000);

$(".wp-image-30").animate({
		left: '25%'
		},600);

$(".wp-image-28").animate({
        height: '50px',
		top: '350px'
		},1300);
        });
