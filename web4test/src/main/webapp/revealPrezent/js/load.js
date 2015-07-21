
//$(document).ready(function(){
	
	// 리모트 컨트롤을 위한 웹소켓 서버 연결.
	var email;
	var authNo;
    var socket;
    var isConnect = false;
    

//	email = userInfo.email;
	email = 'usikzzang7@gmail.com';

    socket = io.connect('http://121.138.120.67:3000', {'forceNew': true});
    // 접속과 동시에 user email 서버로 전송
    socket.emit('login',{
      'sender': 'web',
      'email': email
    });
 // 서버측에서 socket.send(msg); 한것을 받아 살행
    
$(document).ready(function(){
    socket.on('message', function (command) {
    	console.log('메시지!');
    	if(!isConnect) {
        	console.log(command);
        	authNo = command;
        	isConnect = true;
        	alert('인증번호: ' + authNo);
    	} else {
	        console.log(command);
	        if(command == 'next') Reveal.navigateNext();
	        else if(command == 'down') Reveal.navigateNext();
	        else if(command == 'up') Reveal.up();
	        else if(command == 'back') Reveal.left();
    	}
    });
    
});

