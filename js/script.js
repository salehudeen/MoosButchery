$(document).ready(function(){
	var introHeight = $(window).height()*0.9 - $('#header').height();
	$('.intro').height(introHeight);

	var productsIndex = $('.shape').height + 40;
	$('.to-products').height(productsIndex);

	var productimage = $('.product-image').width();
	$('.product-image').height(productimage);

	setTimeout(function(){
        $('body').addClass('loaded');
    }, 1000);

    $(".mobile-menu").click(function () {
	    $(".overlay").toggleClass('view-overlay');
	    $(".burger-menu").toggleClass('change');
	});
});



/* Open when someone clicks on the span element */
function openNav() {
	console.log("open");
    $("#myNav").width("100%");
}

/* Close when someone clicks on the "x" symbol inside the overlay */
function closeNav() {
    $("#myNav").width("0%");
}

window.sr = ScrollReveal();
sr.reveal('.from-bottom', { duration: 1200, delay: 1000 });
sr.reveal('.from-top', { duration: 1200, delay: 1000 });
sr.reveal('.from-right', { origin: 'right', duration: 1200, distance: '100px', delay: 1000 });
sr.reveal('.from-left', { origin: 'left', duration: 1200, distance: '100px', delay: 1000 });
sr.reveal('.desc-from-bottom', { duration: 1200 }, 350 );
sr.reveal('.step-from-bottom', { duration: 1200 }, 350 );
sr.reveal('.step-from-left', { origin: 'left', duration: 1800, distance: '100px' }, 550 );
sr.reveal('.square-from-left', { origin: 'left', duration: 1800, distance: '100px' }, 350 );