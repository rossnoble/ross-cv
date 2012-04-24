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
				$('#nav').addClass('active');
			} else {
				$('#nav').css({ position: '', top : '', width: '', 'z-index': '' });
				$('#nav').removeClass('active');
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
					// window.location.hash = id;
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
					$('#overlay').html('<img src="'+imageURL+'" />');
					$('#darkness').fadeIn(300, function () {
						$('#overlay').fadeIn(300);
					});
				}
			});
			
		});
	},
	
	closeLightbox : function () {
		$('.close').click(function () {
			$('#darkness').fadeOut(300);
		});
	}
	
}

$(function () {
	
	UI.init();
		
});