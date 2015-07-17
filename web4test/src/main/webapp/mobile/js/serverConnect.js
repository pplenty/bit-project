var socket;
var isConnect = false;
var targetUid;

$('.conBtn2').click(function() {
	$('.conBtn').toggle();
	$('.disBtn').toggle();
	if (!isConnect) {
		isConnect = true;
		socket = io.connect('http://121.166.177.31:3000', {'forceNew' : true});
		// 접속과 동시에 user email 서버로 전송
		socket.emit('login', {
			'sender' : 'mobile',
			'authNo' : $('#authNo').val()
		});

		socket.on('message', function(msg) {
			$('#msgs').append(msg + '<BR>');
			targetUid = msg;
		});
	}

});

$('#disconnectBtn').click(function() {
	if (isConnect) {
		socket.disconnect();
		targetUid = '';
		isConnect = false;
	}
});


function send(command) {
	socket.emit('message special user', {
		uid : targetUid,
		msg : command
	});
};

var forceDelay = false;
function doDelay(miliSec, command) {
	var commandOK = command + '  OK';
	forceDelay = true;
	$('#msgbox').val(command);
	setTimeout("forceDelay = false;$('#msgbox').val(commandOK)", miliSec);
};