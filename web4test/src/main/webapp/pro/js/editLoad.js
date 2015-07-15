
$(document).ready(function(){
	var dataHTML;
	
	$.ajax({
		url: '/web4test/presentationInitLoad.do',
		method: 'GET',
		dataType: 'text',
//		data: {
//			content: JSON.stringify($('section').html())
//		},
		success: function(result) {
//			console.log('result: ' + result);
			dataHTML = $.parseHTML(result);
			$('.slides').append(dataHTML);
			
			

//			$.getScript('lib/js/head.min.js', function() {
//				console.log('head.min.js');
//				
//				$.getScript('js/reveal.js', function() {
//					console.log('reveal.js');
//					
//					$.getScript('js/revealInit.js', function() {
//						console.log('revealInit.js');
//					})
//				})
//			})

		},
		error: function(e) {
			console.error('init load 에러[ajax]: ' + e);
		}
	});
	
    
});
