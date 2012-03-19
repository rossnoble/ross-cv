$(function() {	
	
	// Scroll to target element id
	$('#nav a').click(function(e) {
		e.preventDefault();
		var $target = $(this).attr('href');
		$.scrollTo($target, 400);
	});
	
	// Remove all links
	if (window.location.search == '?print=1') {
		$('a').contents().unwrap();
	}
});