$(window).load(function() {
	// alert(2);
});


// document.body.style.cursor = "?";
// Auto:	브라우저가 현재의 컨텍스트에 맞는 마우스 커서를 결정한다.
// Crosshair	십자가 모양
// Default	플랫폼의 기본 커서 모양(대부분 화살표)
// Hand	손모양
// Help	도움말을 나타내는 물음표 모양
// Move	이동할 때 나타나는 Crossed Arrow
// Resize	끝부분을 나타내는 양방향 화살표 모양으로 지정될 수 있는 값은 방향에 따라 n, ne, nw, s, se, sw, e, w
// Text	I바
// Wait	모래시계

$(document).ready(function() {
	  var canvas = this.__canvas = new fabric.Canvas('c');

	  var rect = new fabric.Rect({
	    left: 150,
	    top: 200,
	    originX: 'left',
	    originY: 'top',
	    width: 150,
	    height: 120,
	    angle: 0,
	    fill: 'rgba(255,0,0,0.5)',
	    transparentCorners: false
	  });
	  
	  var rect2 = new fabric.Rect({
		    width: 100, height: 100, left: 350, top: 250, angle: -10,
		    fill: 'rgba(0,200,0,0.5)'
	  });

	  var rect3 = new fabric.Rect({
	    width: 50, height: 100, left: 275, top: 350, angle: 45,
	    stroke: '#eee', strokeWidth: 10,
	    fill: 'rgba(0,0,200,0.5)'
	  });

	  var circle = new fabric.Circle({
	    radius: 50, left: 275, top: 75, fill: '#aac'
	  });

	  var triangle = new fabric.Triangle({
	    width: 100, height: 100, left: 50, top: 300, fill: '#cca'
	  });

	  canvas.add(rect).setActiveObject(rect);
	  canvas.add(rect2).setActiveObject(rect2);
	  canvas.add(rect3).setActiveObject(rect3);
	
});

function editForm(selectorIsFocus) {
	selectorIsFocus.append('<div>')
		.children().last()
		.addClass('sl-block-transform editing-ui visible')
		.append('<div>')
			.children().last()
			.addClass('anchor')
			.attr('data-direction', 'n')
			.parent()
		.append('<div>')
			.children().last()
			.addClass('anchor')
			.attr('data-direction', 'e')
			.parent()
		.append('<div>')
			.children().last()
			.addClass('anchor')
			.attr('data-direction', 's')
			.parent()
		.append('<div>')
			.children().last()
			.addClass('anchor')
			.attr('data-direction', 'w')
			.parent()
		.append('<div>')
			.children().last()
			.addClass('anchor')
			.attr('data-direction', 'nw')
			.parent()
		.append('<div>')
			.children().last()
			.addClass('anchor')
			.attr('data-direction', 'ne')
			.parent()
		.append('<div>')
			.children().last()
			.addClass('anchor')
			.attr('data-direction', 'se')
			.parent()
		.append('<div>')
			.children().last()
			.addClass('anchor')
			.attr('data-direction', 'sw');
	
//	var anchorWrapSelector = 
//		$('<div>')
//			.addClass('sl-block-transform editing-ui visible')
//			.appendTo(selectorIsFocus);
//		
//	$('<div>')
//		.addClass('anchor')
//		.attr('data-direction', 'n')
//		.appendTo(anchorWrapSelector);
}

function deletEditForm(selectorIsFocus) {
	selectorIsFocus.children().last().detach();
}


function square() {
	this.width = '10px';
	this.height = '10px';
}

