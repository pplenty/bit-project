var email;
var name;
var id_token;
var access_token;
var expires_in;


(function() {
	var po = document.createElement('script');
	po.type = 'text/javascript'; po.async = true;
	po.src = 'https://apis.google.com/js/client:plusone.js?onload=render';
	var s = document.getElementsByTagName('script')[0];
	s.parentNode.insertBefore(po, s);
})();


function render() {
	gapi.signin.render('customBtn', {
		'callback': 'signinCallback',
		'clientid': '3679365711-ilsb14e01shkrnbn2mag9jurhn9lsjnj.apps.googleusercontent.com',
		'cookiepolicy': 'single_host_origin',
		'requestvisibleactions': 'http://schemas.google.com/AddActivity',
		'scope': 'https://www.googleapis.com/auth/plus.login https://www.googleapis.com/auth/userinfo.email'

	});
}

function signinCallback(authResult) {
	if (authResult['access_token']) {
		// 승인 성공
		gapi.auth.setToken(authResult); // 반환된 토큰을 저장합니다.

		access_token = authResult['access_token'];
		getEmail();      
		// 이메일 주소 가져오기 요청을 실행합니다.
		id_token = authResult['id_token'];
		access_token = authResult['access_token'];
		expires_in = authResult['expires_in'];
		console.log('id_token: ' + authResult['id_token']);
		console.log('access_token: ' + authResult['access_token']);
		console.log('expires_in: ' + authResult['expires_in']);


	} else if (authResult['error']) {
		// 오류가 발생했습니다.
		// 가능한 오류 코드:
		//   "access_denied" - 사용자가 앱에 대한 액세스 거부
		//   "immediate_failed" - 사용자가 자동으로 로그인할 수 없음
		console.log('signinCallback 오류 발생: ' + authResult['error']);
	}
}



/*
 * userinfo 끝점에 대한 요청을 실행하여 사용자의 이메일
 * 주소를 가져옵니다. 이 함수에는 유효한 OAuth 액세스 토큰이 포함된 gapi.auth.setToken이
 *  필요합니다.
 *
 * 요청이 완료되면 getEmailCallback이 실행되고 요청의 결과가
 * 전달됩니다.
 */
function getEmail(){
	// userinfo 메소드를 사용할 수 있도록 oauth2 라이브러리를 로드합니다.
	gapi.client.load('oauth2', 'v2', function() {
		var request = gapi.client.oauth2.userinfo.get();
		request.execute(getEmailCallback);
	});
}

function getEmailCallback(obj){
	console.log(obj);   // 전체 개체를 검사하려면 주석을 해제합니다.


	console.log('호출전');
	googleCheckLogin(obj);
	//   location.href = '../mypage/mypage.html';
}

function disconnectUser() {
	var revokeUrl = 'https://accounts.google.com/o/oauth2/revoke?token=' +
	access_token;

	// 비동기 GET 요청을 수행합니다.
	$.ajax({
		type: 'GET',
		url: revokeUrl,
		async: false,
		contentType: "application/json",
		dataType: 'jsonp',
		success: function(nullResponse) {
			// 사용자가 연결 해제되었으므로 작업을 수행합니다.
			// 응답은 항상 정의되지 않음입니다.
			console.log('logout');
		},
		error: function(e) {
			// 오류 처리
			console.log(e);
			// 실패한 경우 사용자가 수동으로 연결 해제하게 할 수 있습니다.
			//https://plus.google.com/apps
		}
	});
}
// 버튼 클릭으로 연결 해제를 실행할 수 있습니다.
//$('#revokeButton').click(disconnectUser);


function googleCheckLogin(obj) {
	console.log('호출됨1');
	//var url = 'http://192.168.103.87:9999/web4test/checkLogin.do';
	var url = 'http://localhost:9999/web4test/checkLogin.do';
	email = obj['email'];
	name = obj['name'];

	$.ajax({
		method: 'POST',
		url: url,
		dataType: 'json',
		data: {
			'email' : email, 
			'name' : name,
			'id_token' : id_token,
			'accses_token' : access_token,
			'expries_in' : expires_in	  
		},
		success: function(data) {
			console.log(data);
//			location.href='../editMypage/mypage.html';
			location.href='../tryMypage/mypage.html';

		},
		error: function(e) {
			console.log(e);
		}
	});
}
