$(document).ready(function(){
	$('.js-menu').hide();
	console.log('recipe.html listo');
	$('.js-show-recipe').click(function(){
		$('.page').removeClass('make');
		$('a.active').removeClass('active');
		$(this).addClass('active');
	});
	$('.js-show-make').click(function(){
		$('.page').addClass('make');
		$('a.active').removeClass('active');
		$(this).addClass('active');
	});
});