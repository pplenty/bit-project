//$(window).load(function() {
	// alert(2);
//});
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

function screenshot(preNo) {
	$.ajax({
		url: '/web4test/screenshot.do',
		method: 'GET',
		dataType: 'json',
		data: {
			preNo: preNo
		},
		success: function(result) {
			console.log('good');
		},
		error: function(e) {
			console.error('screenshot ajax 에러: ' + e);
		}
	});
}

$_old(document).ready(function() {
	var presentSection = $_old('section.present');
	//var presentSection = $_old('.sl-block-gird');
	var blockId = 100000;
	var block_zIndex = 10;

	$('button.button.save').click(function(event) {
		console.log('save');
		var preNo;
		$.ajax({
			url: '/web4test/presentationSave.do',
			method: 'POST',
			dataType: 'json',
			data: {
//				content: JSON.stringify($('section').html())
				content: $('.slides').html()
			},
			success: function(result) {
				console.log(result.latestPreNo + 1);
				preNo = result.latestPreNo + 1;
//				screenshot(preNo);
			},
			error: function(e) {
				console.error('ajax 에러: ' + e);
			}
		});
	});
	
	$('button.undo').click(function(event) {
		//'channelmode'
		window.open('../reveal/index.html#/', 'scrollbars');
	});
	
	
	//contents delete
	$('.toolbar-multi-item[data-value=delete]').click(function(){
		$('.isFocus').detach();
	});
	
	
	
	
	
	 // drag select(바탕 드래그)
	var presentCanvas = 'section.present';// 이벤트 등록 대상(바탕)

	$_old(presentCanvas).on('click', function(ev, dd){
		if (ev.target == this) {
			console.log('section.click');
			//$_old(presentCanvas).trigger('dragstart');
			//$_old(presentCanvas).trigger('drag');
			//$_old(presentCanvas).trigger('dragend');
			deletEditForm($_old('.isFocus'));
			if($_old('.isFocus').length != 0)
				$_old('.isFocus').removeClass('isFocus');
		}
	});

	var dragStartTarget;
	var selectContentsList = [];
	$_old(presentCanvas).on('dragstart', function(ev, dd){

		//console.log(dd.proxy);
		dragStartTarget = ev.target;
		if (ev.target == $_old(presentCanvas)[0]) {
			console.log('section_DS');
			//if($_old(presentCanvas).children().last().hasClass('.sl-block-selection'))
			//	return null;
			return $_old('<div>')
				.addClass('sl-block-selection')
				.addClass('editing-ui')
				.css({
					'position': 'absolute',
					'border': 'rgb(1, 199, 234) solid 2px',
					'background-color': 'rgb(1, 150, 200)',
					'opacity': .25,
					'z-index': 9999
				}).appendTo(presentSection);
			//ev.stopPropagation();
		}
	});
	
	$_old(presentCanvas).on('drag', function(ev, dd){
		if (dragStartTarget == $_old(presentCanvas)[0]) {
			$_old('div.sl-block-selection').css({
				top: Math.min( ev.pageY, dd.startY ) - presentSection.offset().top,
				left: Math.min( ev.pageX, dd.startX )- presentSection.offset().left,
				height: Math.abs( ev.pageY - dd.startY ),
				width: Math.abs( ev.pageX - dd.startX )
			});
			ev.stopPropagation();
		}
	});
	
	$_old(presentCanvas).on('dragend', function(ev, dd){
		if (dragStartTarget == $_old(presentCanvas)[0]) {
			//console.log('dragend');
			if (!ContentsDragFlag) {
				deletEditForm($_old('.isFocus'));
				if($_old('.isFocus').length != 0)
					$_old('.isFocus').removeClass('isFocus');
			}

			ContentsDragFlag = false; // contents 드래그 인지 바탕 드래그인지 체크 다시 초기화

			ev.stopPropagation();
			$_old(dd.proxy).remove();
			$_old('.sl-block-selection.editing-ui').remove();
		}
	});

	// 컨텐츠박스 드래그 구현

	var blockOffsetX; // event offsetx from block
	var blockOffsetY;


	$_old(presentCanvas).on('mousedown', '.sl-block', function(event) {
		// color input 도형 색 설정
		if(event.currentTarget.getAttribute("data-block-type") == 'shape') {
			$(".toolbar-list").css('visibility', 'hidden');
			$(".shape-list").css('visibility', 'visible');
			
//			console.log($(event.currentTarget).find('.sl-block-content')[0].getAttribute("data-shape-fill"));
			var rgbHex = $(event.currentTarget).find('.sl-block-content')
							.attr('data-shape-fill')
			$('.shape-colorinput').val(rgbHex);
		}


		blockOffsetX = event.offsetX;
		blockOffsetY = event.offsetY;


		addEditForm($_old(this));
		$_old(this).addClass('isFocus');
		deletEditForm($_old('.sl-block').not(this));
		$_old('.sl-block').not(this).removeClass('isFocus');
		//event.stopPropagation();
		document.body.style.cursor = "move";


		$_old(document).on('mousemove', function(event) {
			$_old('.sl-block.isFocus').css({
				top: event.pageY - blockOffsetY - presentSection.offset().top,
				left: event.pageX - blockOffsetX - presentSection.offset().left
			});
			event.stopPropagation();

		});

		$_old(document).on('mouseup', function(event) {
			event.stopPropagation();
		    document.body.style.cursor = "auto";
			//event.stopPropagation();
//		    console.log(this + ']des ->' + event.pageX+','+event.pageY);
			$_old(document).off('mousemove');
			$_old(document).off('mouseup');


		});



	});

	$_old(document).on('click', '.sl-block', function(event){
		//console.log('block.click!');
		console.log(event.currentTarget.getAttribute("data-block-type"));
		
		// 이벤트타겟== shape
		if(event.currentTarget.getAttribute("data-block-type") == 'shape') {
			$(".toolbar-list").css('visibility', 'hidden');
			$(".shape-list").css('visibility', 'visible');
			
			var rgbColor = $(event.currentTarget).find('.sl-block-content').attr('data-shape-fill');
			$('.shape-colorinput').val(rgbColor);
		}

		
		blockOffsetX = event.offsetX;
		blockOffsetY = event.offsetY;
		addEditForm($_old(this));
		$_old(this).addClass('isFocus');
		deletEditForm($_old('.sl-block').not(this));
		$_old('.sl-block').not(this).removeClass('isFocus');
		//event.stopPropagation();
	});


	// 크기조절 구현
	$_old(presentCanvas).on('mousedown', '.anchor', function(event) {
		//console.log( $_old(this).parent().parent().height());
		event.stopPropagation();
		var editTargetSelector = $_old(this).parent().parent();
		var editDirection = $_old(this).attr('data-direction');
		var targetStyle = {
			'top'   : editTargetSelector.offset().top,
			'left'  : editTargetSelector.offset().left,
			'height': editTargetSelector.height(),
			'width' : editTargetSelector.width()
		};
		


		
		$_old(document).on('mousemove', function(event) {
			
			event.stopPropagation();

			switch (editDirection) {
				case 'n':
					if (event.pageY < targetStyle.top + targetStyle.height) {
						editTargetSelector.css({
							top: event.pageY - presentSection.offset().top,
							height: targetStyle.top - event.pageY + targetStyle.height
						}); break;
					}
				case 'e':
					editTargetSelector.css({
						width:  event.pageX - targetStyle.left
					}); break;
				case 's':
					editTargetSelector.css({
						height: event.pageY - targetStyle.top
					}); break;
				case 'w':
					if (event.pageX < targetStyle.left + targetStyle.width) {
						editTargetSelector.css({
							left: event.pageX - presentSection.offset().left,
							width: targetStyle.left - event.pageX + targetStyle.width,
						}); break;
					}
				case 'se':
					//$_old('rect').attr('width', event.pageX - targetStyle.left);
					editTargetSelector.css({
						width:  event.pageX - targetStyle.left ,
						height: event.pageY - targetStyle.top
					}); break;
				case 'nw':
					editTargetSelector.css({
						left:   event.pageX - presentSection.offset().left,
						top:    event.pageY - presentSection.offset().top,
						width:  targetStyle.left - event.pageX + targetStyle.width,
						height: targetStyle.top - event.pageY + targetStyle.height
					}); break;
				case 'ne':
					editTargetSelector.css({
						top:    event.pageY - presentSection.offset().top,
						width:  event.pageX - targetStyle.left ,
						height: targetStyle.top - event.pageY + targetStyle.height
					}); break;
				case 'sw':
					editTargetSelector.css({
						left:   event.pageX - presentSection.offset().left,
						width:  targetStyle.left - event.pageX + targetStyle.width,
						height: event.pageY - targetStyle.top
					}); break;
			}
			

			// 크기조절할때 svg viewbox 같이 변경되게 구현하려고 만듬(shape.js - 293 line)
			var editTargetSelectorType = editTargetSelector.attr('data-block-type');
			if (editTargetSelectorType == 'shape') {//조절대상이 shape 일 때
				var editTargetSelectorShapeType = 
					editTargetSelector.find('.sl-block-content').attr('data-shape-type');
				
//				reShape('.isFocus', editTargetSelectorShapeType, targetSize);
				reShape('.isFocus', editTargetSelectorShapeType);
			}
			var targetSize = {};
			targetSize.width = editTargetSelector.width();
			targetSize.height = editTargetSelector.height();


			
			//var setViewBox = '0 0 ' + targetStyle.width + ' ' + targetStyle.height;
			//editTargetSelector.find('svg')[0].setAttributeNS(null, 'viewBox', setViewBox);


		});

		$_old(document).on('mouseup', function(event) {
			event.stopPropagation();
			document.body.style.cursor = "auto";
			//event.stopPropagation();
//		    console.log(this + ']des ->' + event.pageX+','+event.pageY);
			$_old(document).off('mousemove');
			$_old(document).off('mouseup');


		});


	});


	//drop
	//var selectedDropStart = false;//select box -drop event boolean 변수
	//var selectedDrop = false;
	//var selector_block = $_old('.sl-block').not($_old('.sl-block').children());
	var selectCountFlag = 0;
	var ContentsDragFlag = false;
	$_old(document).on('dropstart', '.sl-block', function(ev){
		//console.log($_old(this));
		//if ($_old(this) == $_old('.sl-block')){
			//console.log(ev.target);
		//console.log(document.getElementsByClassName("sl-block"));
		//console.log(ev.target);
		//console.log(document.getElementsByClassName(ev.currentTarget));
		if (dragStartTarget == $_old(presentCanvas)[0]) {
			if($_old(this).hasClass("selectActive")) return null;

				console.log('dragStartTarget');
				//selectedDropStart = true;
				$_old(this).attr('selectedDropStart', true);
				addEditForm($_old(this));
				$_old(this).addClass('isFocus');
				$_old(this).addClass('selectActive');
				//ev.stopPropagation();
		}
		//}

	});
	$_old(document).on('drop','.sl-block', function(ev){
		//console.log(ev.target);


		//addEditForm($_old(this));
		//$_old(this).addClass('isFocus');
		if (dragStartTarget == $_old(presentCanvas)[0]) {
			if(!$_old(this).hasClass("selectActive")) return null;
			console.log('drop');

			//selectedDrop = true;
			$_old(this).attr('selectedDrop', true);

			if ($_old(this).attr('selectedDropStart') == "true") {
				selectContentsList.push($_old(this).attr('data-block-id'));
				selectCountFlag = selectContentsList.length - 1;
				// 셀렉된 리스트 로그
				if(selectContentsList.length > 1) {
					console.log(selectContentsList);
					
				}
				addEditForm($_old(this));
				$_old(this).addClass('isFocus');
				$_old(this).addClass('dropEndCall');
				$_old(this).removeClass('selectActive');
				//selectedDropStart = false;
				$_old(this).attr('selectedDropStart', false);
			} else {
				deletEditForm($_old(this));
				$_old(this).removeClass('isFocus');
				$_old(this).removeClass('selectActive');
			}
			//ev.stopPropagation();
		}

		$_old(this).removeClass('selectActive');

	});
	$_old(document).on('dropend', '.sl-block', function(ev) {
		if (dragStartTarget == $_old(presentCanvas)[0]) {
			if(!$_old(this).hasClass("dropEndCall") && !$_old(this).hasClass('selectActive')) {
				return null;
			}
			console.log('dropend');
			//console.log(ev);

			if ($_old(this).attr('selectedDrop') == "true") {
				selectContentsList.pop();
				//console.log(selectContentsList);
				if (selectCountFlag == selectContentsList.length) {
					var excludeSelector = $_old('.sl-block[selectedDrop=false]');
					//console.log(excludeSelector);
					deletEditForm(excludeSelector);
					excludeSelector.removeClass('isFocus');
					ContentsDragFlag = true; // contents 드래그 인지 바탕 드래그인지 체크
				}
			} else {
				deletEditForm($_old(this));
				$_old(this).removeClass('isFocus');
			}


			$_old(this).removeClass('selectActive');
			$_old(this).removeClass('dropEndCall');
			//selectedDropStart = false;
			//selectedDrop = false;
			$_old(this).attr('selectedDropStart', false);
			$_old(this).attr('selectedDrop', false);
		}
		ev.stopPropagation();
	});
	$_old.drop({ multi: true });// multi select


	// 바탕(.canvas) 이벤트 등록 drag selection
//	$_old('.sl-block-grid').on('mousedown', function(event) {
//		console.log('canvas.mousedown');
//		$_old('.sl-block-content.isFocus').removeClass('isFocus');
//		deletEditForm($_old('.sl-block-content'));
//
//		var startX = event.pageX - 70;
//		var startY = event.pageY;
//
//
//		$_old('<div>')
//		.addClass('sl-block-selection')
//		.addClass('editing-ui')
//		.css({
//			'position': 'absolute',
//			'border' : 'rgb(1, 199, 234) solid 2px',
//			'background-color': 'rgb(1, 150, 200)',
//			'left': startX + 'px',
//			'top': startY + 'px',
//			'opacity': '0.25',
////			'height': '200px',
////			'width': '200px',
//			'z-index': block_zIndex++
//			})
//		.appendTo(presentSection);
//
////		event.stopPropagation();
//		$_old(document).on('mousemove', function(event) {
//			var width = event.pageX - startX - 70;
//			var height = event.pageY - startY;
//
//			if(width < 0) {
//				$_old('.sl-block-selection.editing-ui').css({
//					'left' : event.pageX - 70 + 'px',
//					'width':  -1 * width + 'px'
//				});
//			}
//			if(height < 0) {
//				$_old('.sl-block-selection.editing-ui').css({
//					'top' : event.pageY + 'px',
//					'height': -1 * height + 'px',
//				});
//			}
//			if (width >= 0 && height >= 0) {
//				$_old('.sl-block-selection.editing-ui').css({
//					'height': height + 'px',
//					'width': width + 'px'
//				});
//			}
//
//
//
//		});
//
//
//		$_old(this).on('mouseup', function(event) {
////			console.log($_old('.sl-block-selection.editing-ui').css('left'));
////			event.stopPropagation();
//		    document.body.style.cursor = "auto";
//		    $_old('.sl-block-selection.editing-ui').remove();
////		    console.log(this + ']des ->' + event.pageX+','+event.pageY);
//
//			$_old(document).off('mousemove');
//			$_old(this).off('mouseup');
//
//		});
//	});
	
});

function addEditForm(selectorIsFocus) {
	if (selectorIsFocus.find('.editing-ui').length != 0) return null;
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
	if(selectorIsFocus != null)
		selectorIsFocus.find('.editing-ui').detach();
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

function changeShapeColor(selector, color) {//selector: '.sl-block-content'
	selector.find('svg').children().attr('fill', color);
}

function guid() {
	function s4() {
		return Math.floor((1 + Math.random()) * 0x10000)
			.toString(16)
			.substring(1);
	}
	return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
		s4() + '-' + s4() + s4() + s4();
}

