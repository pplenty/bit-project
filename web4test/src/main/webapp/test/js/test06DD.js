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
	var canvas = $('section.present');
	var blockId = 100000;
	var block_zIndex = 1;

	// shape ADD
	$('.toolbar-add-block-option[data-block-type="shape"]').click(function() {
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
				'z-index': block_zIndex++
				})
			.appendTo(canvas);
	});
	
//	$(document).on('click', '.sl-block-content', function(event) {
//		console.log('blockCL');
//	});
//	
//	$('.canvas').on('click', function(event) {
//		console.log('canvasCL');
//	});
	
	
	
	
	// 바탕(.canvas) 이벤트 등록 drag selection
	$('.canvas').on('mousedown', function(event) {
		console.log('canvas.mousedown');
		$('.sl-block-content.isFocus').removeClass('isFocus');
		deletEditForm($('.sl-block-content'));

		var startX = event.pageX - 70;
		var startY = event.pageY;
		
		
		$('<div>')
		.addClass('sl-block-selection')
		.addClass('editing-ui')
		.css({
			'position': 'absolute',
			'border' : 'rgb(1, 199, 234) solid 2px',
			'background-color': 'rgb(1, 150, 200)',
			'left': startX + 'px',
			'top': startY + 'px',
			'opacity': '0.25',
//			'height': '200px',
//			'width': '200px',
			'z-index': block_zIndex++
			})
		.appendTo(canvas);
		
//		event.stopPropagation();
		$(document).on('mousemove', function(event) {
			var width = event.pageX - startX - 70;
			var height = event.pageY - startY;
			
			if(width < 0) {
				$('.sl-block-selection.editing-ui').css({
					'left' : event.pageX - 70 + 'px',
					'width':  -1 * width + 'px'
				});
			}
			if(height < 0) {
				$('.sl-block-selection.editing-ui').css({
					'top' : event.pageY + 'px',
					'height': -1 * height + 'px',
				});
			}
			if (width >= 0 && height >= 0) {
				$('.sl-block-selection.editing-ui').css({
					'height': height + 'px',
					'width': width + 'px'
				});
			}
			
			

		});
		

		$(this).on('mouseup', function(event) {
//			console.log($('.sl-block-selection.editing-ui').css('left'));
//			event.stopPropagation();
		    document.body.style.cursor = "auto";
		    $('.sl-block-selection.editing-ui').remove();
//		    console.log(this + ']des ->' + event.pageX+','+event.pageY);
		    
			$(document).off('mousemove');
			$(this).off('mouseup');
			
		});
	});
	
	// 콘텐츠 이벤트 등록
	$('.canvas').on('mousedown', '.sl-block-content', function(event) {
		// color input 도형 색 설정
		var rgbHex = rgb2hex($(this).css('background-color'));
		$('#colorinput').val(rgbHex);
		
		
		var FocusTarget = event.target;
	    var targetIdSelector = '[blockId=' + FocusTarget.getAttribute('blockId') + ']';
//	    console.log($(targetIdSelector));
	    console.log('src ->' + event.pageX+','+event.pageY);
		document.body.style.cursor = "move";
		
		// unFocus에 isFocus 클래스 제거 / focus에 isFocus 클래스 추가
//		$('.canvas').trigger('mousedown');
		$('.sl-block-content').not(targetIdSelector).removeClass('isFocus');
		deletEditForm($('.sl-block-content').not(targetIdSelector));
//		deletEditForm($('.sl-block-content').not(targetIdSelector));
		
		
		$('.sl-block-content' + targetIdSelector).addClass('isFocus');
		if($(this).children().length ==0){
			addEditForm($('.sl-block-content' + targetIdSelector));
		}
		
		event.stopPropagation();
		
		$(document).on('mousemove', function(event) {
			var top = event.pageY - 100;
			var left = event.pageX - 70 - 100;
			
			$('.sl-block-content' + targetIdSelector).css({
				'left': left + 'px',
				'top': top + 'px'
			});

		});
		

		$(this).on('mouseup', function(event) {
//			event.stopPropagation();
		    document.body.style.cursor = "auto";
//		    console.log(this + ']des ->' + event.pageX+','+event.pageY);
			$(document).off('mousemove');
			$(this).off('mouseup');
			
		});
		
		
		
	});
	
	
	$('.anchor').on('mousedown', function(event){
		event.stopPropagation();
		var currentX = event.pageX;
		var currentY = event.pageY;
		console.log(currentX + ',' + currentY);
		
		
		$(document).on('mousemove', function(event) {

			$('.sl-block-content.isFocus').css({
				'width': currentX - event.pageX + 'px',
				'height': currentY - event.pageY + 'px'
			});
		});
		
	});
	
	
	$('#colorinput').on('change', function() {
		$('.sl-block-content.isFocus').css('background-color', $(this).val());
	});
//
//	$('.sl-block-content').on('mouseup', function(event) {
//	    document.body.style.cursor = "auto";
//	    console.log('des ->' + event.pageX+','+event.pageY);
//		$(document).off('mousemove');
//	});
	
});

function addEditForm(selectorIsFocus) {
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
}

function deletEditForm(selectorIsFocus) {
	selectorIsFocus.children().last().detach();
}

function rgb2hex(rgb) {
    if (  rgb.search("rgb") == -1 ) {
         return rgb;
    } else {
         rgb = rgb.match(/^rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d+))?\)$/);
         function hex(x) {
              return ("0" + parseInt(x).toString(16)).slice(-2);
         }
         return "#" + hex(rgb[1]) + hex(rgb[2]) + hex(rgb[3]); 
    }
}


function square() {
	this.width = '10px';
	this.height = '10px';
}

