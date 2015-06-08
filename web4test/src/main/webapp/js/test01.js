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
	// alert(1);
	var canvas = $('.canvas');
	var blockId = 100000;
	var block_zIndex = 1;
	$('body > div.page-wrapper > div.sidebar > div.primary > button.button.preview').click(function() {
		$('<div>')
			.addClass('sl-block-content')
			.attr('blockId', blockId++)
			.css({
				'position': 'absolute',
//				'border' : 'red solid 2px',
				'background-color': 'rgb(186, 199, 234)',
				'left': '100px',
				'top': '100px',
				'height': '200px',
				'width': '200px',
				'z-index': block_zIndex
				})
			.appendTo(canvas);
	});
	
	$(document).on('mousedown', this, function(event) {
		var FocusTarget = event.target;
	    var targetIdSelector = '[blockId=' + FocusTarget.getAttribute('blockId') + ']';
//	    console.log($(targetIdSelector));
	    console.log('src ->' + event.pageX+','+event.pageY);
		document.body.style.cursor = "move";
		
		// unFocus에 isFocus 클래스 제거 / focus에 isFocus 클래스 추가
		$('.sl-block-content').not(targetIdSelector).removeClass('isFocus');
		deletEditForm($('.sl-block-content').not(targetIdSelector));
		
		
		$('.sl-block-content' + targetIdSelector).addClass('isFocus');
		if($('.isFocus').children().length ==0){
			editForm($('.sl-block-content' + targetIdSelector));
		}
		
		$(document).on('mousemove', this, function(event) {
			var top = event.pageY - 100;
			var left = event.pageX - 70 - 100;

			// console.log(event.pageX+','+event.pageY);
			//$('.sl-block-content[blockId=100001]')
			$('.sl-block-content' + targetIdSelector).css({
				'left': left + 'px',
				'top': top + 'px'
			});

		});
	});

	$(document).on('mouseup', this, function(event) {
	    document.body.style.cursor = "auto";
	    console.log('des ->' + event.pageX+','+event.pageY);
		$(document).off('mousemove');
	});
	
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

