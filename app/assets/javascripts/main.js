var ready = function() {
	$('.content, .list').hide();
	
	$('#experience').click(function() {
	    $('#content1').slideToggle('slow');
	});
	
	$('#projects').click(function() {
	    $('#content2').slideToggle('slow');
	});
	
	$('#education').click(function() {
	    $('#content3').slideToggle('slow');
	});
	
	$('#skills').click(function() {
	    $('#skills-list').slideToggle('slow');
	});
	
	$('#languages').click(function() {
	    $('#languages-list').slideToggle('slow');
	});
};

$(document).ready(ready);
$(document).on('page:load', ready);