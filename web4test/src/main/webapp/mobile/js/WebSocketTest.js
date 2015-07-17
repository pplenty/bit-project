function WebSocketTest()
{
  if ("WebSocket" in window)
  {
    // Google example code
    //  var ws = new WebSocket("ws://example.com/service");
    //  ws.onopen = function()
    //  {
    //    // WebSocket is connected. You can send data by send() method
    //    ws.send("message to send"); ....
    //  };
    //  ws.onmessage = function (evt) { var received_msg = evt.data; ... };
    //  ws.onclose = function() { // websocket is closed. };
    alert("WebSockets supported here!\r\n\r\nBrowser: " + navigator.userAgent + "\r\n\r\ntest by jimbergman.net (based on Google sample code)");
  }
  else
  {
    // the browser doesn't support WebSockets
    alert("WebSockets NOT supported here!\r\n\r\nBrowser: " + navigator.userAgent + "\r\n\r\ntest by jimbergman.net (based on Google sample code)");
  }
}