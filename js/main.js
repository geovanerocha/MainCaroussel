$(document).ready(function(){
var MainCaroussel = {

	_init: function(){
		MainCaroussel._nav();
	},

	_next: function(){
		caroussel.animate({left: "-="+widthLi}, 500);
		arrowPrevious.show();
		index++;
		if(index == carousselLimit){
		    arrowNext.hide();
		}else{
		    arrowNext.show();
		}
	},

	_previous: function(){
		caroussel.animate({left: "+="+widthLi}, 500);
		index--;
		if(index == 1){
			arrowPrevious.hide();
		}else{
			arrowPrevious.show();
			arrowNext.show();
		}
	},

	_nav: function() {

		caroussel      = $('#caroussel-list');
		carousselLeft  = parseInt(caroussel.css('left'));
		carousselItem  = caroussel.find('li');
		widthLi        = carousselItem.width();
		carousselLimit = carousselItem.length;
		index          = 1;
		arrowNext      = $('.arrow-next');
		arrowPrevious  = $('.arrow-previous');

		arrowNext.on('click', MainCaroussel._next);
		arrowPrevious.on('click', MainCaroussel._previous);


	}
}

	MainCaroussel._init();

});