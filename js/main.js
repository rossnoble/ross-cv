var UI = {
	
	init : function () {

		this.jumpToSection();
		this.fixNav();
		this.updateNav();
		this.hoverThumbnail();
		
		this.updateNav('.bookmark');
		
	},
	
	jumpToSection : function () {
		
		$('#main-menu li a').click(function(e) {
			e.preventDefault();
			
			var $target = $(this).attr('href');
			$.scrollTo($target, 400);
		});
	},
	
	fixNav : function () {
		
		navOffset = $('#nav').offset().top;
		
		$(window).scroll(function () {	
			var windowPos = $(window).scrollTop();
			
			if (windowPos > navOffset) {
				$('#nav').css({ position: 'fixed', top : '0', width: '100%', 'z-index': '50' });
			} else {
				$('#nav').css({ position: '', top : '', width: '', 'z-index': '' });
			}
		});
	},
	
	updateNav : function (selector) {
		
		$(window).scroll(function () {
			$(selector).each(function () {
			
				var min = $(this).offset().top;
				var max = $(this).height() + min;
				var distFromTop = $(window).scrollTop();
				var id = $(this).attr('id');

				if (distFromTop > min && distFromTop <= max) {
					$item = $('#nav').find('a[href="#'+id+'"]').parent();
					$item.siblings().removeClass('active');
					$item.addClass('active');
				}
			});
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