
function Scroll(selector, target)
{	
	$(selector).click(function(event){

		event.preventDefault();
	
		$.scrollTo(
			$(target),
			/* 0, */
			800
			/* {queue: true} */
			/* {easing: 'swing'} */
		);
	});
}

$(function(){
	Scroll('#nav ul li a:first', '#education');
	Scroll('#nav ul li a:eq(1)', '#skills');
	Scroll('#nav ul li a:eq(2)', '#experience');
});