/*
 * Turns iPhone on
 */



/*
 * Makes all objects draggable, selectable and rotateable
 */ 
function make_selectable() {
	jQuery('.object').selectable();
}
function make_draggable() {
	jQuery('.object').draggable({ stack: '.object' });
}


function turn_ipod_on() {
	jQuery('#button_on').click(
		function() {
			//if ('#iphone').hasClass('iphone)
			jQuery('#iphone').toggleClass('iphone_on')/* .delay(2000).removeClass('iphone_on') */;
		}
	);
}

/*
 * Adds CSS rotation 
 */

function rotation_effect() {
   var lastPos = 0, rotate = 0, isMouseDown = false;
   jQuery('.object').bind('mousedown', function(e){
       isMouseDown = true;
   }).bind('mouseup', function(){
       isMouseDown = false;
   }).bind('mousemove', function(e){
       if(isMouseDown){
           if(e.pageX > lastPos)
              rotate+=0.5;
           else 
              rotate-=0.5;

           lastPos = e.pageX;
           this.style.webkitTransform = this.style.MozTransform  = "rotate(" + rotate + "deg)";
       }
   });
}

/*
 * Alternate version of draggable + rotate
 */

function object_animation_2() {
	jQuery('.section').draggable({
		drag: function(event, ui){
			var rotateCSS = 'rotate(' + ui.position.left + 'deg)';

	    jQuery(this).css({
			'-moz-transform': rotateCSS,
			'-webkit-transform': rotateCSS
	    });
	  }
	});
}

/*
 * Adds 'dragging' class to objects on mousedown
 * Makes selected object more prominent
 */

function dragging_on_click() {
	jQuery('.object').mousedown(function() {
		jQuery(this).addClass('ui-draggable-dragging').css({'z-index': '20'});
	}).mouseup(function() {
		jQuery(this).removeClass('ui-draggable-dragging');
	});
}

/*
 * Tooltips
 */

function blog_tooltip() {
	$('#mail, #coffee_mug').tooltip({
		//delay: true,
		track: true,
		showURL: false
	});
	//$('#tooltip').fadeIn(1000);
}

function dialog_test() {
	jQuery('#dialog_test').dialog({
		modal: true,
		//draggable: false
	
	});
}



/*
 * Document ready
 */

jQuery(document).ready(function() {
	make_draggable();
	make_selectable();
	turn_ipod_on();
	jQuery('.dialog').nyroModal();
	rotation_effect();
	dragging_on_click();
	dialog_test();
	//blog_tooltip();
	
	$('#coffee_mug').tooltip({
		//delay: true,
		//track: true,
		showURL: false
	});
	
});