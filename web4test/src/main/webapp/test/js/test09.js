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

	var presentSection = $('section.present');
	var blockId = 100000;
	var block_zIndex = 10;


	 //shape ADD
	$('.toolbar-add-block-option[data-block-type="shape"]').click(function(e) {

		var svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
		var svgTag = $(svg)
						.attr({
							'version': '1.1',
							'width': '100%',
							'height': '100%',
							'preserveAspectRatio': 'xMidYMid',
							'viewBox': '0 0 300 300'
						});

		var svgNS = svg.namespaceURI;

		var rect = document.createElementNS(svgNS,'rect');
		var svgContent = $(rect)
							.attr({
								'width': '300',
								'fill': 'rgb(186, 199, 234)',
								'height': '300'
							})
							.addClass('shape-element');


		var blockContentTag =
			$("<div>")
				.addClass("sl-block-content")
			.attr({
				'data-shape-type' : 'rect',
				//'data-shape-fill-color': 'rgb(186, 199, 234)',
				'data-shape-stretch': 'false'
			})
			.css({
				'z-index' : 'auto'
			});

		var blockTag =
			$('<div>')
				.addClass('sl-block')
				.attr({
					'data-block-type': 'shape',
					'data-block-blockId': blockId++,
					'selectedDropStart': false,
					'selectedDrop': false
					//'draggable': true
				})
				.css({
					//'background-color': 'rgb(186, 199, 234)',
					'min-width': '4px',
					'min-height': '4px',
					'width': '300px',
					'height': '300px',
					'left': '200px',
					'top': '200px',
					'z-index': block_zIndex++
				});

		svgTag.append(svgContent);
		//blockContentTag.append(svgTag);
		//blockTag.append(blockContentTag);
		blockTag.append(svgTag);
		presentSection.append(blockTag);
		e.stopPropagation();
	});

	//$('.toolbar-add-block-option[data-block-type="shape"]').click(function() {
    //
	//	var svgContent =
	//		$('<rect>')
	//			.attr({
	//				'width': '248',
	//				'height': '248',
	//				'fill': '#000000'
	//			})
	//			.addClass('shape-element');
    //
	//	var svgTag =
	//		$('<svg>')
	//			.attr({
	//				'xmlns': 'http://www.w3.org/2000/svg',
	//				'version': '1.1',
	//				'width': '100%',
	//				'height': '100%',
	//				'preserveAspectRatio': 'xMidYMid',
	//				'viewBox': '0 0 248 248'
	//			});
    //
	//	var blockTag =
	//		$('<div>')
	//			.addClass('sl-block')
	//			.attr({
	//				'data-block-type': 'shape',
	//				'data-block-blockId': blockId++,
	//				'selectedDropStart': false,
	//				'selectedDrop': false
	//				//'draggable': true
	//			})
	//			.css({
	//				'background-color': 'rgb(186, 199, 234)',
	//				'min-width': '4px',
	//				'min-height': '4px',
	//				'width': '300px',
	//				'height': '300px',
	//				'left': '200px',
	//				'top': '200px',
	//				'z-index': block_zIndex++
	//			});
    //
	//	svgTag.append(svgContent);
	//	blockTag.append(svgTag);
	//	presentSection.append(blockTag);
	//});


	// text box ADD
	$('.toolbar-add-block-option[data-block-type="text"]').click(function(e) {
		var blockText = $('<div>')
				.addClass("sl-block")
				.attr({
						'data-block-type': 'text',
						'data-block-blockId': blockId++
						//'draggable': true
					})
				.css({
					'height' : 'auto',
					'min-width' : '30px',
					'min-height' : '30px',
					'width' : '600px',
					'left' : '80px',
					'top' : '191px',
					'border' : '1px solid black'
				}).appendTo(presentSection);

		var blockContent =
			$("<div>")
			.addClass("sl-block-content")
//			.attr({
//				'data-placeholder-tag' : 'p',
//				'data-placeholder-text': 'Text'
//			})
			.css({
				'z-index' : '11'
			}).appendTo(blockText);

			var contentP = $("<p>")
				.attr("id", "true")
				.text("Text")
				.appendTo(blockContent);
		e.stopPropagation();

		});// 텍스트박스 생성 마지막 괄호



	 // drag select(바탕 드래그)
	var presentCanvas = 'section.present';// 이벤트 등록 대상(바탕)

	$(presentCanvas).on('click', function(ev, dd){
		if (ev.target == this) {
			console.log('section.click');
			//$(presentCanvas).trigger('dragstart');
			//$(presentCanvas).trigger('drag');
			//$(presentCanvas).trigger('dragend');
			deletEditForm($('.isFocus'));
			if($('.isFocus').length != 0)
				$('.isFocus').removeClass('isFocus');
		}
	});

	var dragStartTarget;
	var selectContentsList = [];
	$(presentCanvas).on('dragstart', function(ev, dd){

		//console.log(dd.proxy);
		dragStartTarget = ev.target;
		if (ev.target == $(presentCanvas)[0]) {
			console.log('section_DS');
			//if($(presentCanvas).children().last().hasClass('.sl-block-selection'))
			//	return null;
			return $('<div>')
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
	
	$(presentCanvas).on('drag', function(ev, dd){
		if (dragStartTarget == $(presentCanvas)[0]) {
			$('div.sl-block-selection').css({
				top: Math.min( ev.pageY, dd.startY ) - presentSection.offset().top,
				left: Math.min( ev.pageX, dd.startX )- presentSection.offset().left,
				height: Math.abs( ev.pageY - dd.startY ),
				width: Math.abs( ev.pageX - dd.startX )
			});
			ev.stopPropagation();
		}
	});
	
	$(presentCanvas).on('dragend', function(ev, dd){
		if (dragStartTarget == $(presentCanvas)[0]) {
			//console.log('dragend');
			if (!ContentsDragFlag) {
				deletEditForm($('.isFocus'));
				if($('.isFocus').length != 0)
					$('.isFocus').removeClass('isFocus');
			}

			ContentsDragFlag = false; // contents 드래그 인지 바탕 드래그인지 체크 다시 초기화

			ev.stopPropagation();
			$(dd.proxy).remove();
		}
	});

	// 컨텐츠박스 드래그 구현

	var blockOffsetX; // event offsetx from block
	var blockOffsetY;
	

	$(presentCanvas).on('mousedown', '.sl-block', function(event) {
		// color input 도형 색 설정
		var rgbHex = rgb2hex($(this).css('background-color'));
		$('#colorinput').val(rgbHex);

		blockOffsetX = event.offsetX;
		blockOffsetY = event.offsetY;


		addEditForm($(this));
		$(this).addClass('isFocus');
		deletEditForm($('.sl-block').not(this));
		$('.sl-block').not(this).removeClass('isFocus');
		//event.stopPropagation();
		document.body.style.cursor = "move";

		// unFocus에 isFocus 클래스 제거 / focus에 isFocus 클래스 추가
//		$('.sl-block').not(targetIdSelector).removeClass('isFocus');
//		deletEditForm($('.sl-block').not(targetIdSelector));
//		deletEditForm($('.sl-block-content').not(targetIdSelector));

//
//		$('.sl-block' + targetIdSelector).addClass('isFocus');
//		if($(this).children().length ==0){
//			addEditForm($('.sl-block' + targetIdSelector));
//		}


		$(document).on('mousemove', function(event) {
			$('.sl-block.isFocus').css({
				top: event.pageY - blockOffsetY - presentSection.offset().top,
				left: event.pageX - blockOffsetX - presentSection.offset().left
			});
			event.stopPropagation();

		});

		$(this).on('mouseup', function(event) {
			event.stopPropagation();
		    document.body.style.cursor = "auto";
			//event.stopPropagation();
//		    console.log(this + ']des ->' + event.pageX+','+event.pageY);
			$(document).off('mousemove');
			$(this).off('mouseup');


		});



	});

	$(document).on('click', '.sl-block', function(ev){
		//console.log('block.click!');

		// color input 도형 색 설정
		var rgbHex = rgb2hex($('.sl-block.isFocus').find('svg').find('rect').attr('fill'));
		$('#colorinput').val(rgbHex);

		blockOffsetX = ev.offsetX;
		blockOffsetY = ev.offsetY;
		addEditForm($(this));
		$(this).addClass('isFocus');
		deletEditForm($('.sl-block').not(this));
		$('.sl-block').not(this).removeClass('isFocus');
		//ev.stopPropagation();
	});


	//drop
	//var selectedDropStart = false;//select box -drop event boolean 변수
	//var selectedDrop = false;
	//var selector_block = $('.sl-block').not($('.sl-block').children());
	var selectCountFlag = 0;
	var ContentsDragFlag = false;
	$(document).on('dropstart', '.sl-block', function(ev){
		//console.log($(this));
		//if ($(this) == $('.sl-block')){
			//console.log(ev.target);
		//console.log(document.getElementsByClassName("sl-block"));
		//console.log(ev.target);
		//console.log(document.getElementsByClassName(ev.currentTarget));
		if (dragStartTarget == $(presentCanvas)[0]) {
			if($(this).hasClass("selectActive")) return null;

				console.log('dragStartTarget');
				//selectedDropStart = true;
				$(this).attr('selectedDropStart', true);
				addEditForm($(this));
				$(this).addClass('isFocus');
				$(this).addClass('selectActive');
				//ev.stopPropagation();
		}
		//}

	});
	$(document).on('drop','.sl-block', function(ev){
		//console.log(ev.target);


		//addEditForm($(this));
		//$(this).addClass('isFocus');
		if (dragStartTarget == $(presentCanvas)[0]) {
			if(!$(this).hasClass("selectActive")) return null;
			console.log('drop');

			//selectedDrop = true;
			$(this).attr('selectedDrop', true);

			if ($(this).attr('selectedDropStart') == "true") {
				selectContentsList.push($(this).attr('data-block-blockid'));
				selectCountFlag = selectContentsList.length - 1;
				addEditForm($(this));
				$(this).addClass('isFocus');
				$(this).addClass('dropEndCall');
				$(this).removeClass('selectActive');
				//selectedDropStart = false;
				$(this).attr('selectedDropStart', false);
			} else {
				deletEditForm($(this));
				$(this).removeClass('isFocus');
				$(this).removeClass('selectActive');
			}
			//ev.stopPropagation();
		}

		$(this).removeClass('selectActive');

	});
	$(document).on('dropend', '.sl-block', function(ev) {
		if (dragStartTarget == $(presentCanvas)[0]) {
			if(!$(this).hasClass("dropEndCall") && !$(this).hasClass('selectActive')) {
				return null;
			}
			console.log('dropend');
			//console.log(ev);

			if ($(this).attr('selectedDrop') == "true") {
				selectContentsList.pop();
				//console.log(selectContentsList);
				if (selectCountFlag == selectContentsList.length) {
					var excludeSelector = $('.sl-block[selectedDrop=false]');
					//console.log(excludeSelector);
					deletEditForm(excludeSelector);
					excludeSelector.removeClass('isFocus');
					ContentsDragFlag = true; // contents 드래그 인지 바탕 드래그인지 체크
				}
			} else {
				deletEditForm($(this));
				$(this).removeClass('isFocus');
			}


			$(this).removeClass('selectActive');
			$(this).removeClass('dropEndCall');
			//selectedDropStart = false;
			//selectedDrop = false;
			$(this).attr('selectedDropStart', false);
			$(this).attr('selectedDrop', false);
		}
		ev.stopPropagation();
	});
	$.drop({ multi: true });// multi select







	// 바탕(.canvas) 이벤트 등록 drag selection
	$('.sl-block-grid').on('mousedown', function(event) {
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
		.appendTo(presentSection);

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
	
	
	$(document).on('dblclick','.sl-block', function(){
	    var content = $(this).children(".sl-block-content");
	    var contentP = content.children(" p");

	    //deletEditForm($(this)); //이건 빼도 되겠지만 나중에 deletEditForm div로 한정해야할 듯
	    $(contentP).html('');
	    contentP.attr('contenteditable','true').focus();
	    content.keypress(function(event){
	    	if(event.which == 13){
	    		event.preventDefault();
	    		var addP = $("<p>").attr("content editable", 'true');
	    		$(addP.appendTo(content)).focus();

	    	}// 엔터일 때 괄호 끝
	    });//keypress 괄호

	    content.keydown(function(event){
	    	if(event.which == 8){
	    		var textLength = $(event.target).text().length;
	    		if(textLength == 0){
	    			event.preventDefault();
	    			var prev = $($(event.target).prev());
	    			$(event.target).remove();
	    			$(prev).focus();

//	    			alert($(this).html());
//	    			//alert($($(this).children("p:last")).text());
	    		} // 길이 체크
	    	}// 백스페이스 입력
	    }); // 백스페이스 keydown
	    
	    //append($("<p>"));

	     
	    $(this).children(".sl-block-content").children(" p").attr({'content editable':'true'}).focus();

	    

		$(blockContent).keypress(function(event){
			if(event.which == 13){
				event.preventDefault();
				alert(this);
				$(this).last().after("<p>")
			}
		});
		$(this).attr({'content editable':'true'}).focus();

	
		$("p").empty();
		$("p").attr({
			'content editable' : 'true'
		}).focus()
		
		$("p").keypress(function(event){
			if(event.which == 13){
				event.preventDefault();
				$("p").clone().appendTo(slBlock).focus();
			}
		});//키프레스 이벤트
	});// 텍스트 박스 더블 클릭 마지막 괄호
	
	
	
	
	//$('.anchor').on('mousedown', function(event){
	//	event.stopPropagation();
	//	var currentX = event.pageX;
	//	var currentY = event.pageY;
	//	console.log(currentX + ',' + currentY);
	//
	//
	//	$(document).on('mousemove', function(event) {
    //
	//		$('.sl-block-content.isFocus').css({
	//			'width': currentX - event.pageX + 'px',
	//			'height': currentY - event.pageY + 'px'
	//		});
	//	});
	//
	//});
	
	
	$('#colorinput').on('change', function() {
		$('.sl-block.isFocus').find('svg').find('rect').attr('fill',  $(this).val())
	});
//
//	$('.sl-block-content').on('mouseup', function(event) {
//	    document.body.style.cursor = "auto";
//	    console.log('des ->' + event.pageX+','+event.pageY);
//		$(document).off('mousemove');
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

