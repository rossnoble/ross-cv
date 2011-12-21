
/*
 *  
 *
 */
 
function PortfolioLink(select, target) 
{	

	// Display hidden div and scroll to said section
	$(select).click(function() {
		 
		$.scrollTo(
			$('#portfolio'), 800
		);
		$(select).css({bottom: 'auto', position: 'relative'}); // Remove absolute starting position
		
	});
}

function HomeLink()
{
	$('#home_link').click(function(){
		$('#main').fadeIn(800);
	});
}
	
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
	/*
Scroll('#nav ul li a:first', '#education');
	Scroll('#nav ul li a:eq(1)', '#skills');
	Scroll('#nav ul li a:eq(2)', '#experience');
*/
	//HomeLink();
	PortfolioLink('#portfolio_link', '#portfolio_link');
});