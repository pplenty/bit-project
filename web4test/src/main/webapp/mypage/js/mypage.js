$(window).load(function(){

	var url = '../getUser.do';
	$.ajax({
		method: 'POST',
		url: url,
		dataType: 'json',
//		data: {
//			'email' : email, 
//			'name' : name,
//			'id_token' : id_token,
//			'accses_token' : access_token,
//			'expries_in' : expires_in	  
//		},
		success: function(data) {
			console.log(data);
			alert(data);
//			location.href='./mypage/mypage.html';
		},
		error: function(e) {
			console.log(e);
		}
	});
});