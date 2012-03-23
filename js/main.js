var UI = {
	
	init : function () {
		
		navOffset = $('#nav').offset().top;

		this.toggleNav();
		this.fixNav();
		this.updateNav();
		this.hoverThumbnail();
	},
	
	toggleNav : function () {
		
		$('#main-menu li a').click(function(e) {
			e.preventDefault();
			
			var $target = $(this).attr('href');
			$.scrollTo($target, 400);
		});
	},
	
	fixNav : function () {
		
		$(window).scroll(function () {	
			var windowPos = $(window).scrollTop();
			
			if (windowPos > navOffset) {
				$('#nav').css({ position: 'fixed', top : '0', width: '100%', 'z-index': '50' });
			} else {
				$('#nav').css({ position: '', top : '', width: '', 'z-index': '' });
			}
			
			UI.updateNav('services', 200, 499);
			UI.updateNav('portfolio', 500, 1499);
			UI.updateNav('projects', 1500, 2899);
			UI.updateNav('contact', 2900, 3500);
			
		});
	},
	
	updateNav : function (target, min, max) {
		$(window).scroll(function () {
			
			var y = $(window).scrollTop();
			
			if (y < 201) {
				$('#nav').find('li.active').removeClass('active');
			}
			
			if (y > min && y <= max) {
				$nav = $('#nav');
				$item = $nav.find('a[href="#'+target+'"]').parent();
				$item.siblings().removeClass('active');
				$item.addClass('active');
			}
			
		});
	},
	
	hoverThumbnail : function () {
		$('.project .thumbnail').hover(function () {
			$(this).find('.hover-msg').show();
		}, function () {
			$(this).find('.hover-msg').hide();
		});
	}
	
}

$(function () {
	
	UI.init();
		
});