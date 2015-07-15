
$(document).ready(function(){
	var dataHTML;
	
	$.ajax({
		url: '/web4test/presentationInitLoad.do',
		method: 'GET',
		contentType: "application/x-www-form-urlencoded; charset=UTF-8",
		dataType: 'json',
//		data: {
//			content: JSON.stringify($('section').html())
//		},
		success: function(data) {
			if (data.result = 'success') {
				console.log('result: ' + data);
				dataHTML = $.parseHTML(data.content);
				$('.slides').append(dataHTML);
			}
			

		},
		error: function(e) {
			console.error('init load 에러[ajax]: ' + e);
		}
	});
	
    
});
