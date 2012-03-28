var UI = {
	
	init : function () {

		this.jumpToSection();
		this.fixNav();
		this.updateNav();
		// this.hoverThumbnail();
		
		this.lightbox();
		this.closeLightbox();
		
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

				if (distFromTop >= min - 1 && distFromTop < max) {
					$item = $('#nav').find('a[href="#'+id+'"]').parent();
					$item.siblings().removeClass('active');
					$item.addClass('active');
				}
			});
		});
	},
		
	lightbox : function () {
		$('.thumbnail').click(function (e) {
			e.preventDefault();
			var imageURL = $(this).find('img').attr('src');
			
			$.ajax({
				type: 'POST',
				url: imageURL,
				success: function (data) {
					$('#darkness').show();
					$('#overlay').html('<img src="'+imageURL+'" />');
					$('#overlay').show();
				}
			});
			
		});
	},
	
	closeLightbox : function () {
		$('.close').click(function () {
			$('#darkness').hide();
		});
	}
	
}

$(function () {
	
	UI.init();
		
});