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

	$('#contact').click(function(event) {
	    // document.location = 'http://bjmendy.wordpress.com';
	    window.open('mailto:bjmendy@gmail.com/', '_blank')
	});
	
	$('#blog').click(function(event) {
	    // document.location = 'http://bjmendy.wordpress.com';
	    window.open('http://bjmendy.wordpress.com/', '_blank')
	});
};

$(document).ready(ready);
$(document).on('page:load', ready);