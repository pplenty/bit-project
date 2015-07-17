var watchID;
var intervalID;
var i = 0;
var maxX = 0;
var maxY = 0;
var maxZ = 0;
var x;
var y;
var z;
function onSuccess(acceleration) {
	x = acceleration.x;
	y = acceleration.y;
	z = acceleration.z;

	/*                   if (Math.abs(x) > Math.abs(maxX)) {
                    maxX = x.toFixed(3);
                    $('#mX').html('maxX: ' + maxX);
                  }
                  if (Math.abs(y) > Math.abs(maxY)) {
                      maxY = y.toFixed(3);
                      $('#mY').html('maxY: ' + maxY);
                    }
                  if (Math.abs(z) > Math.abs(maxZ)) {
                      maxZ = z.toFixed(3);
                      $('#mZ').html('maxZ: ' + maxZ);
                    }
                  $('#accelX').html('X: ' + x.toFixed(3));
                  $('#accelY').html('Y: ' + y.toFixed(3));
                  $('#accelZ').html('Z: ' + z.toFixed(3)); */

//	if(x < -5.) socket.emit('fromclient',{msg: 'right'});
//	if(x > 5.) socket.emit('fromclient',{msg: 'left'});
	if(!forceDelay) {
		if(x < -15.) {
			send('next');
			doDelay(3000, 'next');
		} else if(x > 15.) {
			send('back');
			doDelay(3000, 'back');
		}
	}

};

function onError() {
	console.log('onError!');
};

var options = {
		frequency : 50
}; // Update every 0.05 seconds

function startAccel() {
	watchID = navigator.accelerometer.watchAcceleration(onSuccess, onError, options);
}
function endAccel() {
	clearInterval(intervalID);
	navigator.accelerometer.clearWatch(watchID);
}
function resetMax() {
	maxX = 0;
	maxY = 0;
	maxZ = 0;
	$('#mX').html('maxX: ' + maxX);
	$('#mY').html('maxY: ' + maxY);
	$('#mZ').html('maxZ: ' + maxZ);
}