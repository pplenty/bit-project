<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Insert title here</title>
</head>
<body>
	<form>
		<input id="textMessage" type="text">
		<input onclick="sendMessage()" value="Send" type="button">
		<input onclick="disconnect()" value="Disconnect" type="button">
	</form>
	<br />
	<textarea id="messageTextArea" rows="10" cols="50"></textarea>
	<script type="text/javascript">
		var webSocket = new WebSocket("ws://localhost:9999/web4test/websocket");
		var messageTextArea = document.getElementById("messageTextArea");
		webSocket.onopen = function(message){processOpen(message)};
		webSocket.onclose = function(message){processClose(message)};
		webSocket.onerror = function(message){processError(message)};
		webSocket.onmessage = function(message){processMessage(message)};
		function processOpen(message){
			messageTextArea.value += "Server connect...\n";
		}
		function processClose(message){
			messageTextArea.value += "Server Disconnect...\n";
		}
		function processError(message){
			messageTextArea.value += "error...\n"
		}
		function processMessage(message){
			messageTextArea.value += "Recieve From Server => "+message.data+"\n";
		}
		function sendMessage(){
			var message = document.getElementById("textMessage");
			messageTextArea.value += "Send to Server => "+message.value+"\n";
			webSocket.send(message.value);
			message.value = "";
		}
		function disconnect(){
			webSocket.close();
		}
	</script>
</body>
</html>