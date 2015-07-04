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

var $_old = $.noConflict(true);
$_old(document).ready(function() {
	var presentSection = $_old('section.present');
	//var presentSection = $_old('.sl-block-gird');
	var blockId = 100000;
	var block_zIndex = 10;



	 //shape ADD
	$_old('.toolbar-add-block-option[data-block-type="shape"]').click(function(e) {

		console.log(guid());
		console.log($('section.presnet'));

		var blockContentTag =
			$_old("<div>")
				.addClass("sl-block-content")
				.attr({
					'data-shape-type' : 'rect',
					'data-shape-stretch': 'false'
				})
				.css({
					'z-index' : 'auto'
				});

		var blockTag =
			$_old('<div>')
				.addClass('sl-block')
				.attr({
					'data-block-type': 'shape',
					'data-block-id': blockId++,
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

		//var Cwidth = blockTag.css('width').substring(0, this.length-2);
		//var Cheight = blockTag.css('height');
		var svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
		svg.setAttributeNS(null, 'version', '1.1');
		svg.setAttributeNS(null, 'width', '100%');
		svg.setAttributeNS(null, 'height', '100%');
		svg.setAttributeNS(null, 'preserveAspectRatio', 'xMidYMid');
		svg.setAttributeNS(null, 'viewBox', '0 0 32 32');
		var svgTag = $_old(svg);

		var svgNS = svg.namespaceURI;

//		var rect = document.createElementNS(svgNS,'rect');
//		rect.setAttributeNS(null, 'width', '300');
//		rect.setAttributeNS(null, 'height', '300');
//		rect.setAttributeNS(null, 'fill', 'rgb(186, 199, 234)');
		
		var g = document.createElementNS(svgNS,'g');
		g.setAttributeNS(null, 'fill', 'rgb(186, 199, 234)');
		var path = document.createElementNS(g.namespaceURI,'path');
		path.setAttributeNS(null, 'd', 'M27.314 4.686c3.022 3.022 4.686 7.040 4.686 11.314s-1.664 8.292-4.686 11.314c-3.022 3.022-7.040 4.686-11.314 4.686s-8.292-1.664-11.314-4.686c-3.022-3.022-4.686-7.040-4.686-11.314s1.664-8.292 4.686-11.314c3.022-3.022 7.040-4.686 11.314-4.686s8.292 1.664 11.314 4.686zM25.899 25.9c1.971-1.971 3.281-4.425 3.821-7.096-0.421 0.62-0.824 0.85-1.073-0.538-0.257-2.262-2.335-0.817-3.641-1.621-1.375 0.927-4.466-1.802-3.941 1.276 0.81 1.388 4.375-1.858 2.598 1.079-1.134 2.050-4.145 6.592-3.753 8.946 0.049 3.43-3.504 0.715-4.729-0.422-0.824-2.279-0.281-6.262-2.434-7.378-2.338-0.102-4.344-0.314-5.25-2.927-0.545-1.87 0.58-4.653 2.584-5.083 2.933-1.843 3.98 2.158 6.731 2.232 0.854-0.894 3.182-1.178 3.375-2.18-1.805-0.318 2.29-1.517-0.173-2.199-1.358 0.16-2.234 1.409-1.512 2.467-2.632 0.614-2.717-3.809-5.247-2.414-0.064 2.206-4.132 0.715-1.407 0.268 0.936-0.409-1.527-1.594-0.196-1.379 0.654-0.036 2.854-0.807 2.259-1.325 1.225-0.761 2.255 1.822 3.454-0.059 0.866-1.446-0.363-1.713-1.448-0.98-0.612-0.685 1.080-2.165 2.573-2.804 0.497-0.213 0.973-0.329 1.336-0.296 0.752 0.868 2.142 1.019 2.215-0.104-1.862-0.892-3.915-1.363-6.040-1.363-3.051 0-5.952 0.969-8.353 2.762 0.645 0.296 1.012 0.664 0.39 1.134-0.483 1.439-2.443 3.371-4.163 3.098-0.893 1.54-1.482 3.238-1.733 5.017 1.441 0.477 1.773 1.42 1.464 1.736-0.734 0.64-1.185 1.548-1.418 2.541 0.469 2.87 1.818 5.515 3.915 7.612 2.644 2.644 6.16 4.1 9.899 4.1s7.255-1.456 9.899-4.1z');

//		var svgContent = $_old(rect);
		var svgContent = $_old(g);
		
		svgContent.append($_old(path));


		svgTag.append(svgContent);
		blockContentTag.append(svgTag);
		blockTag.append(blockContentTag);
		//blockTag.append(svgTag);
		presentSection.append(blockTag);

	 //$_old(".toolbar-list").css('visibility', 'hidden');
	 //$_old(".text-list").css('visibility', 'visible');
		e.stopPropagation();
	});


	// text box ADD
	$_old('.toolbar-add-block-option[data-block-type="text"]').click(function(e) {
		var blockText = $_old('<div>')
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
			$_old("<div>")
			.addClass("sl-block-content")
//			.attr({
//				'data-placeholder-tag' : 'p',
//				'data-placeholder-text': 'Text'
//			})
			.css({
				'z-index' : '11'
			}).appendTo(blockText);

			var contentP = $_old("<p>")
				.attr("id", "true")
				.text("Text")
				.appendTo(blockContent);
		e.stopPropagation();

		});// 텍스트박스 생성 마지막 괄호



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
		}
	});

	// 컨텐츠박스 드래그 구현

	var blockOffsetX; // event offsetx from block
	var blockOffsetY;


	$_old(presentCanvas).on('mousedown', '.sl-block', function(event) {
		// color input 도형 색 설정
		var rgbHex = rgb2hex($_old(this).css('background-color'));
		$_old('#colorinput').val(rgbHex);

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

	$_old(document).on('click', '.sl-block', function(ev){
		//console.log('block.click!');

		
	
		//$_old(".toolbar-list").css('visibility', 'hidden');
		//$_old(".text-list").css('visibility', 'visible');

		var rgbHex = rgb2hex($_old('.sl-block.isFocus').find('svg').find('rect').attr('fill'));
		$_old('.back-colorinput').val(rgbHex);
		 
		 
		// color input 도형 색 설정
//		var rgbHex = rgb2hex($_old('.sl-block.isFocus').find('svg').find('rect').attr('fill'));
//		$_old('#colorinput').val(rgbHex);

		blockOffsetX = ev.offsetX;
		blockOffsetY = ev.offsetY;
		addEditForm($_old(this));
		$_old(this).addClass('isFocus');
		deletEditForm($_old('.sl-block').not(this));
		$_old('.sl-block').not(this).removeClass('isFocus');
		//ev.stopPropagation();
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
				selectContentsList.push($_old(this).attr('data-block-blockid'));
				selectCountFlag = selectContentsList.length - 1;
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
	$_old('.sl-block-grid').on('mousedown', function(event) {
		console.log('canvas.mousedown');
		$_old('.sl-block-content.isFocus').removeClass('isFocus');
		deletEditForm($_old('.sl-block-content'));

		var startX = event.pageX - 70;
		var startY = event.pageY;


		$_old('<div>')
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
		$_old(document).on('mousemove', function(event) {
			var width = event.pageX - startX - 70;
			var height = event.pageY - startY;

			if(width < 0) {
				$_old('.sl-block-selection.editing-ui').css({
					'left' : event.pageX - 70 + 'px',
					'width':  -1 * width + 'px'
				});
			}
			if(height < 0) {
				$_old('.sl-block-selection.editing-ui').css({
					'top' : event.pageY + 'px',
					'height': -1 * height + 'px',
				});
			}
			if (width >= 0 && height >= 0) {
				$_old('.sl-block-selection.editing-ui').css({
					'height': height + 'px',
					'width': width + 'px'
				});
			}



		});


		$_old(this).on('mouseup', function(event) {
//			console.log($_old('.sl-block-selection.editing-ui').css('left'));
//			event.stopPropagation();
		    document.body.style.cursor = "auto";
		    $_old('.sl-block-selection.editing-ui').remove();
//		    console.log(this + ']des ->' + event.pageX+','+event.pageY);

			$_old(document).off('mousemove');
			$_old(this).off('mouseup');

		});
	});
	
	
	$_old(document).on('dblclick','.sl-block', function(){
	    var content = $_old(this).children(".sl-block-content");
	    var contentP = content.children(" p");

	    //deletEditForm($_old(this)); //이건 빼도 되겠지만 나중에 deletEditForm div로 한정해야할 듯
	    $_old(contentP).html('');
	    contentP.attr('contenteditable','true').focus();
	    content.keypress(function(event){
	    	if(event.which == 13){
	    		event.preventDefault();
	    		var addP = $_old("<p>").attr("content editable", 'true');
	    		$_old(addP.appendTo(content)).focus();

	    	}// 엔터일 때 괄호 끝
	    });//keypress 괄호

	    content.keydown(function(event){
	    	if(event.which == 8){
	    		var textLength = $_old(event.target).text().length;
	    		if(textLength == 0){
	    			event.preventDefault();
	    			var prev = $_old($_old(event.target).prev());
	    			$_old(event.target).remove();
	    			$_old(prev).focus();

//	    			alert($_old(this).html());
//	    			//alert($_old($_old(this).children("p:last")).text());
	    		} // 길이 체크
	    	}// 백스페이스 입력
	    }); // 백스페이스 keydown
	    
	    //append($_old("<p>"));

	     
	    $_old(this).children(".sl-block-content").children(" p").attr({'content editable':'true'}).focus();

	    

		$_old(blockContent).keypress(function(event){
			if(event.which == 13){
				event.preventDefault();
				alert(this);
				$_old(this).last().after("<p>")
			}
		});
		$_old(this).attr({'content editable':'true'}).focus();

	
		$_old("p").empty();
		$_old("p").attr({
			'content editable' : 'true'
		}).focus()
		
		$_old("p").keypress(function(event){
			if(event.which == 13){
				event.preventDefault();
				$_old("p").clone().appendTo(slBlock).focus();
			}
		});//키프레스 이벤트
	});// 텍스트 박스 더블 클릭 마지막 괄호
	
	
	
	
	//$_old('.anchor').on('mousedown', function(event){
	//	event.stopPropagation();
	//	var currentX = event.pageX;
	//	var currentY = event.pageY;
	//	console.log(currentX + ',' + currentY);
	//
	//
	//	$_old(document).on('mousemove', function(event) {
    //
	//		$_old('.sl-block-content.isFocus').css({
	//			'width': currentX - event.pageX + 'px',
	//			'height': currentY - event.pageY + 'px'
	//		});
	//	});
	//
	//});
	
	
	$_old('.back-colorinput').on('change', function() {
		$_old('.sl-block.isFocus').find('svg').find('rect').attr('fill',  $_old(this).val())
	});
//
//	$_old('.sl-block-content').on('mouseup', function(event) {
//	    document.body.style.cursor = "auto";
//	    console.log('des ->' + event.pageX+','+event.pageY);
//		$_old(document).off('mousemove');
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

function guid() {
	function s4() {
		return Math.floor((1 + Math.random()) * 0x10000)
			.toString(16)
			.substring(1);
	}
	return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
		s4() + '-' + s4() + s4() + s4();
}

