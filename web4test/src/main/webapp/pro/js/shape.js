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

var blockId = 100000;
var block_zIndex = 10;

$(document).ready(function() {
	var presentSection = $('section.present');
	//var presentSection = $('.sl-block-gird');



	 //shape ADD
	$('.toolbar-add-block-option[data-block-type=shape]').click(function(e) {

//		console.log(guid());
		var blockContentTag = createBlockContentTag();
		var blockTag = createBlockTag();
			

		
		var svgTag = addSvgTag('rect');
		
		blockContentTag.append(svgTag);
		blockTag.append(blockContentTag);
		//blockTag.append(svgTag);
		presentSection.append(blockTag);

	 //$(".toolbar-list").css('visibility', 'hidden');
	 //$(".text-list").css('visibility', 'visible');
		e.stopPropagation();
	});
	
	// 도형 바꾸기
	$('.toolbar-select-item').click(function(event){
		var clickedItem = event.currentTarget.getAttribute('data-value');
		switch (clickedItem) {
		case 'rect':
			reShape('.isFocus', 'rect');
			break;
		case 'circle':
			reShape('.isFocus', 'circle');
			break;
		case 'diamond':
			reShape('.isFocus', 'diamond');
			break;
		case 'octagon':
			reShape('.isFocus', 'octagon');
			break;
		case 'triangle-up':
			reShape('.isFocus', 'triangle-up');
			break;
		case 'triangle-down':
			reShape('.isFocus', 'triangle-down');
			break;
		case 'triangle-left':
			reShape('.isFocus', 'triangle-left');
			break;
		case 'triangle-right':
			reShape('.isFocus', 'triangle-right');
			break;
		case 'arrow-up':
			reShape('.isFocus', 'arrow-up');
			break;
		case 'arrow-down':
			reShape('.isFocus', 'arrow-down');
			break;
		case 'arrow-left':
			reShape('.isFocus', 'arrow-left');
			break;
		case 'arrow-right':
			reShape('.isFocus', 'arrow-right');
			break;
			
			
		case 'symbol-happy':
			reShape('.isFocus', 'symbol-happy');
			break;
		case 'symbol-smiley':
			reShape('.isFocus', 'symbol-smiley');
			break;
		case 'symbol-wondering':
			reShape('.isFocus', 'symbol-wondering');
			break;
		case 'symbol-sad':
			reShape('.isFocus', 'symbol-sad');
			break;
		case 'symbol-checkmark-circle':
			reShape('.isFocus', 'symbol-checkmark-circle');
			break;
		case 'symbol-plus-circle':
			reShape('.isFocus', 'symbol-plus-circle');
			break;
		case 'symbol-minus-circle':
			reShape('.isFocus', 'symbol-minus-circle');
			break;
		case 'symbol-x-circle':
			reShape('.isFocus', 'symbol-x-circle');
			break;
		case 'symbol-denied':
			reShape('.isFocus', 'symbol-denied');
			break;
		case 'symbol-clock':
			reShape('.isFocus', 'symbol-clock');
			break;
		case 'symbol-heart-stroke':
			reShape('.isFocus', 'symbol-heart-stroke');
			break;
		case 'symbol-heart-fill':
			reShape('.isFocus', 'symbol-heart-fill');
			break;
		case 'symbol-home':
			reShape('.isFocus', 'symbol-home');
			break;
		case 'symbol-pin':
			reShape('.isFocus', 'symbol-pin');
			break;
		case 'symbol-user':
			reShape('.isFocus', 'symbol-user');
			break;
		case 'symbol-mail':
			reShape('.isFocus', 'symbol-mail');
			break;
		case 'symbol-star':
			reShape('.isFocus', 'symbol-star');
			break;
			//////진행중
		case 'symbol-earth':
			reShape('.isFocus', 'symbol-earth');
			break;
		default:
			break;
		}
	});
	
	// 도형 색깔 바꾸기
	$('.shape-colorinput').on('change', function() {
		var rgbColor = $(this).val();
		var targetSelector = $('.sl-block.isFocus').find('.sl-block-content');
		targetSelector.attr('data-shape-fill',  rgbColor);
		changeShapeColor(targetSelector, rgbColor);
	});
	
	
	
});

function createBlockContentTag() {
	return $("<div>")
				.addClass("sl-block-content")
				.attr({
					'data-shape-type' : 'rect',
//					'data-shape-stretch': 'false',
					'data-shape-fill' : '#000000'
				})
				.css({
					'z-index' : 'auto'
				});
}

function createBlockTag () {
	return $('<div>')
				.addClass('sl-block')
				.attr({
					'data-block-type': 'shape',
					'data-block-id': blockId++,
					'selectedDropStart': false,
					'selectedDrop': false
					//'draggable': true
				})
				.css({
					'min-width': '4px',
					'min-height': '4px',
					'width': '300px',
					'height': '300px',
					'left': '200px',
					'top': '200px',
					'z-index': block_zIndex++
				});
}

function createSvg(viewBox) {
	var svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
	svg.setAttributeNS(null, 'version', '1.1');
	svg.setAttributeNS(null, 'width', '100%');
	svg.setAttributeNS(null, 'height', '100%');
	svg.setAttributeNS(null, 'preserveAspectRatio', 'xMidYMid');
	svg.setAttributeNS(null, 'viewBox', viewBox);
	return svg;
}

// svg태그 추가
function addSvgTag(shape, rgbColor) {
	var returnSvgTag;
	var svg, svgTag, svgContent;
	var shapeClass;

	if (shape.match('heart')) shapeClass = 'symbolHeartShape';
	else if (shape.match('pin')) shapeClass = 'symbolPinShape';
	else if (shape.match('symbol-')) shapeClass = 'symbolShape';
	else shapeClass = 'simpleShape';
		
	
	switch (shapeClass) {
	case 'simpleShape':
		svg = createSvg('0 0 300 300');
		svgTag = $(svg);
		svgContent = $(drawSvg(svg.namespaceURI, shape, rgbColor));
		svgTag.append(svgContent);
		returnSvgTag = svgTag;
		break;
	case 'symbolShape':
		svg = createSvg('0 0 32 32');
		svgTag = $(svg);
		svgContent = $(drawSvg(svg.namespaceURI, shape, rgbColor));
		svgTag.append(svgContent);
		returnSvgTag = svgTag;
		break;
	case 'symbolHeartShape':
		svg = createSvg('0 2 32 28');
		svgTag = $(svg);
		svgContent = $(drawSvg(svg.namespaceURI, shape, rgbColor));
		svgTag.append(svgContent);
		returnSvgTag = svgTag;
		break;
	case 'symbolPinShape':
		svg = createSvg('-1 -1 22 33');
		svgTag = $(svg);
		svgContent = $(drawSvg(svg.namespaceURI, shape, rgbColor));
		svgTag.append(svgContent);
		returnSvgTag = svgTag;
		break;//작업중
	}
	
	return returnSvgTag;
	
};

// svg 하위 태그 그리기
function drawSvg(svgNS, shape, rgbColor) {
	
	var returnTag;
	
	switch (shape) {
	case 'rect':
		var rect = document.createElementNS(svgNS,'rect');
		rect.setAttributeNS(null, 'width', '300');
		rect.setAttributeNS(null, 'height', '300');
		rect.setAttributeNS(null, 'fill', rgbColor);
		returnTag = rect;
		break;

	case 'circle':
		var circle = document.createElementNS(svgNS,'ellipse');
		circle.setAttributeNS(null, 'rx', '150');
		circle.setAttributeNS(null, 'ry', '150');
		circle.setAttributeNS(null, 'cx', '150');
		circle.setAttributeNS(null, 'cy', '150');
		circle.setAttributeNS(null, 'fill', rgbColor);
		returnTag = circle;
		break;
		
	case 'diamond':
		var diamond = document.createElementNS(svgNS,'polygon');
		diamond.setAttributeNS(null, 'points', '300,150 150,300 0,150 150,0');
		diamond.setAttributeNS(null, 'fill', rgbColor);
		returnTag = diamond;
		break;

	case 'octagon':
		var octagon = document.createElementNS(svgNS,'polygon');
		octagon.setAttributeNS(null, 'points', '300,150 256.1,256.1 150,300 43.9,256.1 0,150 43.9,43.9 150,0 256.1,43.9');
		octagon.setAttributeNS(null, 'fill', rgbColor);
		returnTag = octagon;
		break;
		
	case 'triangle-up':
		var triangle_up = document.createElementNS(svgNS,'polygon');
		triangle_up.setAttributeNS(null, 'points', '150,0 300,300 0,300');
		triangle_up.setAttributeNS(null, 'fill', rgbColor);
		returnTag = triangle_up;
		break;
	case 'triangle-down':
		var triangle_down = document.createElementNS(svgNS,'polygon');
		triangle_down.setAttributeNS(null, 'points', '0,0 300,0 150,300');
		triangle_down.setAttributeNS(null, 'fill', rgbColor);
		returnTag = triangle_down;
		break;
	case 'triangle-left':
		var triangle_left = document.createElementNS(svgNS,'polygon');
		triangle_left.setAttributeNS(null, 'points', '0,150 300,0 300,300');
		triangle_left.setAttributeNS(null, 'fill', rgbColor);
		returnTag = triangle_left;
		break;
	case 'triangle-right':
		var triangle_right = document.createElementNS(svgNS,'polygon');
		triangle_right.setAttributeNS(null, 'points', '300,150 0,300 0,0');
		triangle_right.setAttributeNS(null, 'fill', rgbColor);
		returnTag = triangle_right;
		break;
		
	case 'arrow-up':
		var arrow_up = document.createElementNS(svgNS,'polygon');
		arrow_up.setAttributeNS(null, 'points', '150,0 300,150 210,150 210,300 90,300 90,150 0,150 150,0');
		arrow_up.setAttributeNS(null, 'fill', rgbColor);
		returnTag = arrow_up;
		break;
	case 'arrow-down':
		var arrow_down = document.createElementNS(svgNS,'polygon');
		arrow_down.setAttributeNS(null, 'points', '150,300 300,150 210,150 210,0 90,0 90,150 0,150 150,300');
		arrow_down.setAttributeNS(null, 'fill', rgbColor);
		returnTag = arrow_down;
		break;
	case 'arrow-left':
		var arrow_left = document.createElementNS(svgNS,'polygon');
		arrow_left.setAttributeNS(null, 'points', '300,90 150,90 150,0 0,150 150,300 150,210 300,210 300,90');
		arrow_left.setAttributeNS(null, 'fill', rgbColor);
		returnTag = arrow_left;
		break;
	case 'arrow-right':
		var arrow_right = document.createElementNS(svgNS,'polygon');
		arrow_right.setAttributeNS(null, 'points', '0,90 150,90 150,0 300,150 150,300 150,210 0,210');
		arrow_right.setAttributeNS(null, 'fill', rgbColor);
		returnTag = arrow_right;
		break;
		////////////////////////symbol
	case 'symbol-happy':
		var g = document.createElementNS(svgNS,'g');
		g.setAttributeNS(null, 'fill', rgbColor);
		var path = document.createElementNS(g.namespaceURI,'path');
		path.setAttributeNS(null, 'd', 'M16 32c8.837 0 16-7.163 16-16s-7.163-16-16-16-16 7.163-16 16 7.163 16 16 16zM16 3c7.18 0 13 5.82 13 13s-5.82 13-13 13-13-5.82-13-13 5.82-13 13-13zM16 18.711c3.623 0 7.070-0.963 10-2.654-0.455 5.576-4.785 9.942-10 9.942-5.215 0-9.544-4.371-10-9.947 2.93 1.691 6.377 2.658 10 2.658zM8 11c0-1.657 0.895-3 2-3s2 1.343 2 3c0 1.657-0.895 3-2 3-1.105 0-2-1.343-2-3zM20 11c0-1.657 0.895-3 2-3s2 1.343 2 3c0 1.657-0.895 3-2 3-1.105 0-2-1.343-2-3z');
		$(g).append($(path));
		returnTag = g;
		break;
	case 'symbol-smiley':
		var g = document.createElementNS(svgNS,'g');
		g.setAttributeNS(null, 'fill', rgbColor);
		var path = document.createElementNS(g.namespaceURI,'path');
		path.setAttributeNS(null, 'd', 'M16 32c8.837 0 16-7.163 16-16s-7.163-16-16-16-16 7.163-16 16 7.163 16 16 16zM16 3c7.18 0 13 5.82 13 13s-5.82 13-13 13-13-5.82-13-13 5.82-13 13-13zM8 10c0-1.105 0.895-2 2-2s2 0.895 2 2c0 1.105-0.895 2-2 2-1.105 0-2-0.895-2-2zM20 10c0-1.105 0.895-2 2-2s2 0.895 2 2c0 1.105-0.895 2-2 2-1.105 0-2-0.895-2-2zM22.003 19.602l2.573 1.544c-1.749 2.908-4.935 4.855-8.576 4.855s-6.827-1.946-8.576-4.855l2.573-1.544c1.224 2.036 3.454 3.398 6.003 3.398s4.779-1.362 6.003-3.398z');
		$(g).append($(path));
		returnTag = g;
		break;
	case 'symbol-wondering':
		var g = document.createElementNS(svgNS,'g');
		g.setAttributeNS(null, 'fill', rgbColor);
		var path = document.createElementNS(g.namespaceURI,'path');
		path.setAttributeNS(null, 'd', 'M16 32c8.837 0 16-7.163 16-16s-7.163-16-16-16-16 7.163-16 16 7.163 16 16 16zM16 3c7.18 0 13 5.82 13 13s-5.82 13-13 13-13-5.82-13-13 5.82-13 13-13zM23.304 18.801l0.703 2.399-13.656 4-0.703-2.399zM8 10c0-1.105 0.895-2 2-2s2 0.895 2 2c0 1.105-0.895 2-2 2-1.105 0-2-0.895-2-2zM20 10c0-1.105 0.895-2 2-2s2 0.895 2 2c0 1.105-0.895 2-2 2-1.105 0-2-0.895-2-2z');
		$(g).append($(path));
		returnTag = g;
		break;
	case 'symbol-sad':
		var g = document.createElementNS(svgNS,'g');
		g.setAttributeNS(null, 'fill', rgbColor);
		var path = document.createElementNS(g.namespaceURI,'path');
		path.setAttributeNS(null, 'd', 'M16 32c8.837 0 16-7.163 16-16s-7.163-16-16-16-16 7.163-16 16 7.163 16 16 16zM16 3c7.18 0 13 5.82 13 13s-5.82 13-13 13-13-5.82-13-13 5.82-13 13-13zM8 10c0-1.105 0.895-2 2-2s2 0.895 2 2c0 1.105-0.895 2-2 2-1.105 0-2-0.895-2-2zM20 10c0-1.105 0.895-2 2-2s2 0.895 2 2c0 1.105-0.895 2-2 2-1.105 0-2-0.895-2-2zM9.997 24.398l-2.573-1.544c1.749-2.908 4.935-4.855 8.576-4.855 3.641 0 6.827 1.946 8.576 4.855l-2.573 1.544c-1.224-2.036-3.454-3.398-6.003-3.398-2.549 0-4.779 1.362-6.003 3.398z');
		$(g).append($(path));
		returnTag = g;
		break;
	case 'symbol-checkmark-circle':
		var g = document.createElementNS(svgNS,'g');
		g.setAttributeNS(null, 'fill', rgbColor);
		var path = document.createElementNS(g.namespaceURI,'path');
		path.setAttributeNS(null, 'd', 'M16 0c-8.836 0-16 7.164-16 16s7.164 16 16 16 16-7.164 16-16-7.164-16-16-16zM13.52 23.383l-7.362-7.363 2.828-2.828 4.533 4.535 9.617-9.617 2.828 2.828-12.444 12.445z');
		$(g).append($(path));
		returnTag = g;
		break;
	case 'symbol-plus-circle':
		var g = document.createElementNS(svgNS,'g');
		g.setAttributeNS(null, 'fill', rgbColor);
		var path = document.createElementNS(g.namespaceURI,'path');
		path.setAttributeNS(null, 'd', 'M16 0c-8.836 0-16 7.164-16 16s7.164 16 16 16 16-7.164 16-16-7.164-16-16-16zM24 18h-6v6h-4v-6h-6v-4h6v-6h4v6h6v4z');
		$(g).append($(path));
		returnTag = g;
		break;
	case 'symbol-minus-circle':
		var g = document.createElementNS(svgNS,'g');
		g.setAttributeNS(null, 'fill', rgbColor);
		var path = document.createElementNS(g.namespaceURI,'path');
		path.setAttributeNS(null, 'd', 'M16 0c-8.836 0-16 7.164-16 16s7.164 16 16 16 16-7.164 16-16-7.164-16-16-16zM24 18h-16v-4h16v4z');
		$(g).append($(path));
		returnTag = g;
		break;
	case 'symbol-x-circle':
		var g = document.createElementNS(svgNS,'g');
		g.setAttributeNS(null, 'fill', rgbColor);
		var path = document.createElementNS(g.namespaceURI,'path');
		path.setAttributeNS(null, 'd', 'M16 0c-8.836 0-16 7.164-16 16s7.164 16 16 16 16-7.164 16-16-7.164-16-16-16zM23.914 21.086l-2.828 2.828-5.086-5.086-5.086 5.086-2.828-2.828 5.086-5.086-5.086-5.086 2.828-2.828 5.086 5.086 5.086-5.086 2.828 2.828-5.086 5.086 5.086 5.086z');
		$(g).append($(path));
		returnTag = g;
		break;
	case 'symbol-denied':
		var g = document.createElementNS(svgNS,'g');
		g.setAttributeNS(null, 'fill', rgbColor);
		var path = document.createElementNS(g.namespaceURI,'path');
		path.setAttributeNS(null, 'd', 'M16 0c-8.836 0-16 7.164-16 16s7.164 16 16 16 16-7.164 16-16-7.164-16-16-16zM16 4c2.59 0 4.973 0.844 6.934 2.242l-16.696 16.688c-1.398-1.961-2.238-4.344-2.238-6.93 0-6.617 5.383-12 12-12zM16 28c-2.59 0-4.973-0.844-6.934-2.242l16.696-16.688c1.398 1.961 2.238 4.344 2.238 6.93 0 6.617-5.383 12-12 12z');
		$(g).append($(path));
		returnTag = g;
		break;
	case 'symbol-clock':
		var g = document.createElementNS(svgNS,'g');
		g.setAttributeNS(null, 'fill', rgbColor);
		var path = document.createElementNS(g.namespaceURI,'path');
		path.setAttributeNS(null, 'd', 'M16 4c6.617 0 12 5.383 12 12s-5.383 12-12 12-12-5.383-12-12 5.383-12 12-12zM16 0c-8.836 0-16 7.164-16 16s7.164 16 16 16 16-7.164 16-16-7.164-16-16-16v0zM21.422 18.578l-3.422-3.426v-7.152h-4.023v7.992c0 0.602 0.277 1.121 0.695 1.492l3.922 3.922 2.828-2.828z');
		$(g).append($(path));
		returnTag = g;
		break;
	case 'symbol-heart-stroke':
		var g = document.createElementNS(svgNS,'g');
		g.setAttributeNS(null, 'fill', rgbColor);
		var path = document.createElementNS(g.namespaceURI,'path');
		path.setAttributeNS(null, 'd', 'M23.113 6c2.457 0 4.492 1.82 4.836 4.188l-11.945 13.718-11.953-13.718c0.344-2.368 2.379-4.188 4.836-4.188 2.016 0 3.855 2.164 3.855 2.164l3.258 3.461 3.258-3.461c0 0 1.84-2.164 3.855-2.164zM23.113 2c-2.984 0-5.5 1.578-7.113 3.844-1.613-2.266-4.129-3.844-7.113-3.844-4.903 0-8.887 3.992-8.887 8.891v0.734l16.008 18.375 15.992-18.375v-0.734c0-4.899-3.984-8.891-8.887-8.891v0z');
		$(g).append($(path));
		returnTag = g;
		break;
	case 'symbol-heart-fill':
		var g = document.createElementNS(svgNS,'g');
		g.setAttributeNS(null, 'fill', rgbColor);
		var path = document.createElementNS(g.namespaceURI,'path');
		path.setAttributeNS(null, 'd', 'M16 5.844c-1.613-2.266-4.129-3.844-7.113-3.844-4.903 0-8.887 3.992-8.887 8.891v0.734l16.008 18.375 15.992-18.375v-0.734c0-4.899-3.984-8.891-8.887-8.891-2.984 0-5.5 1.578-7.113 3.844z');
		$(g).append($(path));
		returnTag = g;
		break;
	case 'symbol-home':
		var g = document.createElementNS(svgNS,'g');
		g.setAttributeNS(null, 'fill', rgbColor);
		var path = document.createElementNS(g.namespaceURI,'path');
		path.setAttributeNS(null, 'd', 'M16 0l-16 16h4v16h24v-16h4l-16-16zM24 28h-6v-6h-4v6h-6v-14.344l8-5.656 8 5.656v14.344z');
		$(g).append($(path));
		returnTag = g;
		break;
	case 'symbol-pin':
		var g = document.createElementNS(svgNS,'g');
		g.setAttributeNS(null, 'fill', rgbColor);
		var path = document.createElementNS(g.namespaceURI,'path');
		path.setAttributeNS(null, 'd', 'M17.070 2.93c-3.906-3.906-10.234-3.906-14.141 0-3.906 3.904-3.906 10.238 0 14.14 0.001 0 7.071 6.93 7.071 14.93 0-8 7.070-14.93 7.070-14.93 3.907-3.902 3.907-10.236 0-14.14zM10 14c-2.211 0-4-1.789-4-4s1.789-4 4-4 4 1.789 4 4-1.789 4-4 4z');
		$(g).append($(path));
		returnTag = g;
		break;
	case 'symbol-user':
		var g = document.createElementNS(svgNS,'g');
		g.setAttributeNS(null, 'fill', rgbColor);
		var path = document.createElementNS(g.namespaceURI,'path');
		path.setAttributeNS(null, 'd', 'M12 16c-6.625 0-12 5.375-12 12 0 2.211 1.789 4 4 4h16c2.211 0 4-1.789 4-4 0-6.625-5.375-12-12-12zM6 6c0-3.314 2.686-6 6-6s6 2.686 6 6c0 3.314-2.686 6-6 6-3.314 0-6-2.686-6-6z');
		$(g).append($(path));
		returnTag = g;
		break;
	case 'symbol-mail':
		var g = document.createElementNS(svgNS,'g');
		g.setAttributeNS(null, 'fill', rgbColor);
		var path = document.createElementNS(g.namespaceURI,'path');
		path.setAttributeNS(null, 'd', 'M15.996 15.457l16.004-7.539v-3.918h-32v3.906zM16.004 19.879l-16.004-7.559v15.68h32v-15.656z');
		$(g).append($(path));
		returnTag = g;
		break;
	case 'symbol-star':
		var g = document.createElementNS(svgNS,'g');
		g.setAttributeNS(null, 'fill', rgbColor);
		var path = document.createElementNS(g.namespaceURI,'path');
		path.setAttributeNS(null, 'd', 'M22.137 19.625l9.863-7.625h-12l-4-12-4 12h-12l9.875 7.594-3.875 12.406 10.016-7.68 9.992 7.68z');
		$(g).append($(path));
		returnTag = g;
		break;
	case 'symbol-bolt':
		var g = document.createElementNS(svgNS,'g');
		g.setAttributeNS(null, 'fill', rgbColor);
		var path = document.createElementNS(g.namespaceURI,'path');
		path.setAttributeNS(null, 'd', 'M32 0l-24 16 6 4-14 12 24-12-6-4z');
		$(g).append($(path));
		returnTag = g;
		break;
	case 'symbol-sun':
		var g = document.createElementNS(svgNS,'g');
		g.setAttributeNS(null, 'fill', rgbColor);
		var path = document.createElementNS(g.namespaceURI,'path');
		path.setAttributeNS(null, 'd', 'M16.001 8c-4.418 0-8 3.582-8 8s3.582 8 8 8c4.418 0 7.999-3.582 7.999-8s-3.581-8-7.999-8v0zM14 2c0-1.105 0.895-2 2-2s2 0.895 2 2c0 1.105-0.895 2-2 2-1.105 0-2-0.895-2-2zM4 6c0-1.105 0.895-2 2-2s2 0.895 2 2c0 1.105-0.895 2-2 2-1.105 0-2-0.895-2-2zM2 14c1.105 0 2 0.895 2 2 0 1.107-0.895 2-2 2s-2-0.893-2-2c0-1.105 0.895-2 2-2zM4 26c0-1.105 0.895-2 2-2s2 0.895 2 2c0 1.105-0.895 2-2 2-1.105 0-2-0.895-2-2zM14 30c0-1.109 0.895-2 2-2 1.108 0 2 0.891 2 2 0 1.102-0.892 2-2 2-1.105 0-2-0.898-2-2zM24 26c0-1.105 0.895-2 2-2s2 0.895 2 2c0 1.105-0.895 2-2 2-1.105 0-2-0.895-2-2zM30 18c-1.104 0-2-0.896-2-2 0-1.107 0.896-2 2-2s2 0.893 2 2c0 1.104-0.896 2-2 2zM24 6c0-1.105 0.895-2 2-2s2 0.895 2 2c0 1.105-0.895 2-2 2-1.105 0-2-0.895-2-2z');
		$(g).append($(path));
		returnTag = g;
		break;
	case 'symbol-moon':
		var g = document.createElementNS(svgNS,'g');
		g.setAttributeNS(null, 'fill', rgbColor);
		var path = document.createElementNS(g.namespaceURI,'path');
		path.setAttributeNS(null, 'd', 'M24.633 22.184c-8.188 0-14.82-6.637-14.82-14.82 0-2.695 0.773-5.188 2.031-7.363-6.824 1.968-11.844 8.187-11.844 15.644 0 9.031 7.32 16.355 16.352 16.355 7.457 0 13.68-5.023 15.648-11.844-2.18 1.254-4.672 2.028-7.367 2.028z');
		$(g).append($(path));
		returnTag = g;
		break;
	case 'symbol-cloud':
		var g = document.createElementNS(svgNS,'g');
		g.setAttributeNS(null, 'fill', rgbColor);
		var path = document.createElementNS(g.namespaceURI,'path');
		path.setAttributeNS(null, 'd', 'M24 10c-0.379 0-0.738 0.061-1.102 0.111-1.394-2.465-3.972-4.111-6.898-4.111-2.988 0-5.566 1.666-6.941 4.1-0.352-0.047-0.704-0.1-1.059-0.1-4.41 0-8 3.588-8 8 0 4.414 3.59 8 8 8h16c4.41 0 8-3.586 8-8 0-4.412-3.59-8-8-8zM24 22h-16c-2.207 0-4-1.797-4-4 0-2.193 1.941-3.885 4.004-3.945 0.008 0.943 0.172 1.869 0.5 2.744l3.746-1.402c-0.168-0.444-0.25-0.915-0.25-1.397 0-2.205 1.793-4 4-4 1.293 0 2.465 0.641 3.199 1.639-1.929 1.461-3.199 3.756-3.199 6.361h4c0-2.205 1.793-4 4-4s4 1.795 4 4c0 2.203-1.793 4-4 4z');
		$(g).append($(path));
		returnTag = g;
		break;
	case 'symbol-rain':
		var g = document.createElementNS(svgNS,'g');
		g.setAttributeNS(null, 'fill', rgbColor);
		var path = document.createElementNS(g.namespaceURI,'path');
		path.setAttributeNS(null, 'd', 'M23.998 6c-0.375 0-0.733 0.061-1.103 0.111-1.389-2.465-3.969-4.111-6.895-4.111-2.987 0-5.565 1.666-6.94 4.1-0.353-0.047-0.705-0.1-1.060-0.1-4.41 0-8 3.588-8 8s3.59 8 8 8h15.998c4.414 0 8-3.588 8-8s-3.586-8-8-8zM23.998 18h-15.998c-2.207 0-4-1.795-4-4 0-2.193 1.941-3.885 4.004-3.945 0.009 0.943 0.172 1.869 0.5 2.744l3.746-1.402c-0.168-0.444-0.25-0.915-0.25-1.397 0-2.205 1.793-4 4-4 1.293 0 2.465 0.641 3.199 1.639-1.928 1.461-3.199 3.756-3.199 6.361h4c0-2.205 1.795-4 3.998-4 2.211 0 4 1.795 4 4s-1.789 4-4 4zM3.281 29.438c-0.75 0.75-1.969 0.75-2.719 0s-0.75-1.969 0-2.719 5.438-2.719 5.438-2.719-1.969 4.688-2.719 5.438zM11.285 29.438c-0.75 0.75-1.965 0.75-2.719 0-0.75-0.75-0.75-1.969 0-2.719 0.754-0.75 5.438-2.719 5.438-2.719s-1.965 4.688-2.719 5.438zM19.28 29.438c-0.75 0.75-1.969 0.75-2.719 0s-0.75-1.969 0-2.719 5.437-2.719 5.437-2.719-1.968 4.688-2.718 5.438z');
		$(g).append($(path));
		returnTag = g;
		break;
	case 'symbol-umbrella':
		var g = document.createElementNS(svgNS,'g');
		g.setAttributeNS(null, 'fill', rgbColor);
		var path = document.createElementNS(g.namespaceURI,'path');
		path.setAttributeNS(null, 'd', 'M16 0c-8.82 0-16 7.178-16 16h4c0-0.826 0.676-1.5 1.5-1.5 0.828 0 1.5 0.674 1.5 1.5h4c0-0.826 0.676-1.5 1.5-1.5 0.828 0 1.5 0.674 1.5 1.5v10c0 1.102-0.895 2-2 2-1.102 0-2-0.898-2-2h-4c0 3.309 2.695 6 6 6 3.312 0 6-2.691 6-6v-10c0-0.826 0.676-1.5 1.5-1.5 0.828 0 1.498 0.674 1.498 1.5h4c0-0.826 0.68-1.5 1.5-1.5 0.828 0 1.5 0.674 1.5 1.5h4c0-8.822-7.172-16-15.998-16z');
		$(g).append($(path));
		returnTag = g;
		break;
	case 'symbol-eye':
		var g = document.createElementNS(svgNS,'g');
		g.setAttributeNS(null, 'fill', rgbColor);
		var path = document.createElementNS(g.namespaceURI,'path');
		path.setAttributeNS(null, 'd', 'M16 4c-8.836 0-16 11.844-16 11.844s7.164 12.156 16 12.156 16-12.156 16-12.156-7.164-11.844-16-11.844zM16 24c-4.418 0-8-3.582-8-8s3.582-8 8-8 8 3.582 8 8-3.582 8-8 8zM12 16c0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.209-1.791 4-4 4-2.209 0-4-1.791-4-4z');
		$(g).append($(path));
		returnTag = g;
		break;
	case 'symbol-ribbon':
		var g = document.createElementNS(svgNS,'g');
		g.setAttributeNS(null, 'fill', rgbColor);
		var path = document.createElementNS(g.namespaceURI,'path');
		path.setAttributeNS(null, 'd', 'M8 20c-1.41 0-2.742-0.289-4-0.736v12.736l4-4 4 4v-12.736c-1.258 0.447-2.59 0.736-4 0.736zM0 8c0-4.418 3.582-8 8-8s8 3.582 8 8c0 4.418-3.582 8-8 8-4.418 0-8-3.582-8-8z');
		$(g).append($(path));
		returnTag = g;
		break;
	case 'symbol-iphone':
		var g = document.createElementNS(svgNS,'g');
		g.setAttributeNS(null, 'fill', rgbColor);
		var path = document.createElementNS(g.namespaceURI,'path');
		path.setAttributeNS(null, 'd', 'M16 0h-8c-4.418 0-8 3.582-8 8v16c0 4.418 3.582 8 8 8h8c4.418 0 8-3.582 8-8v-16c0-4.418-3.582-8-8-8zM12 30.062c-1.139 0-2.062-0.922-2.062-2.062s0.924-2.062 2.062-2.062 2.062 0.922 2.062 2.062-0.923 2.062-2.062 2.062zM20 24h-16v-16c0-2.203 1.795-4 4-4h8c2.203 0 4 1.797 4 4v16z');
		$(g).append($(path));
		returnTag = g;
		break;
	case 'symbol-camera':
		var g = document.createElementNS(svgNS,'g');
		g.setAttributeNS(null, 'fill', rgbColor);
		var path = document.createElementNS(g.namespaceURI,'path');
		path.setAttributeNS(null, 'd', 'M16 20c0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.209-1.791 4-4 4-2.209 0-4-1.791-4-4zM28 8l-3.289-6.643c-0.27-0.789-1.016-1.357-1.899-1.357h-5.492c-0.893 0-1.646 0.582-1.904 1.385l-3.412 6.615h-8.004c-2.209 0-4 1.791-4 4v20h32v-20c0-2.209-1.789-4-4-4zM6 16c-1.105 0-2-0.895-2-2s0.895-2 2-2 2 0.895 2 2-0.895 2-2 2zM20 28c-4.418 0-8-3.582-8-8s3.582-8 8-8 8 3.582 8 8-3.582 8-8 8z');
		$(g).append($(path));
		returnTag = g;
		break;
	case 'symbol-cog':
		var g = document.createElementNS(svgNS,'g');
		g.setAttributeNS(null, 'fill', rgbColor);
		var path = document.createElementNS(g.namespaceURI,'path');
		path.setAttributeNS(null, 'd', 'M32 17.969v-4l-4.781-1.992c-0.133-0.375-0.273-0.738-0.445-1.094l1.93-4.805-2.829-2.828-4.762 1.961c-0.363-0.176-0.734-0.324-1.117-0.461l-2.027-4.75h-4l-1.977 4.734c-0.398 0.141-0.781 0.289-1.16 0.469l-4.754-1.91-2.828 2.828 1.938 4.711c-0.188 0.387-0.34 0.781-0.485 1.188l-4.703 2.011v4l4.707 1.961c0.145 0.406 0.301 0.801 0.488 1.188l-1.902 4.742 2.828 2.828 4.723-1.945c0.379 0.18 0.766 0.324 1.164 0.461l2.023 4.734h4l1.98-4.758c0.379-0.141 0.754-0.289 1.113-0.461l4.797 1.922 2.828-2.828-1.969-4.773c0.168-0.359 0.305-0.723 0.438-1.094l4.782-2.039zM15.969 22c-3.312 0-6-2.688-6-6s2.688-6 6-6 6 2.688 6 6-2.688 6-6 6z');
		$(g).append($(path));
		returnTag = g;
		break;
	case 'symbol-lock':
		var g = document.createElementNS(svgNS,'g');
		g.setAttributeNS(null, 'fill', rgbColor);
		var path = document.createElementNS(g.namespaceURI,'path');
		path.setAttributeNS(null, 'd', 'M14 0c-5.508 0-9.996 4.484-9.996 10v2h-4.004v14c0 3.309 2.691 6 6 6h12c3.309 0 6-2.691 6-6v-16c0-5.516-4.488-10-10-10zM11.996 24c-1.101 0-1.996-0.895-1.996-2s0.895-2 1.996-2c1.105 0 2 0.895 2 2s-0.894 2-2 2zM20 12h-11.996v-2c0-3.309 2.691-6 5.996-6 3.309 0 6 2.691 6 6v2z');
		$(g).append($(path));
		returnTag = g;
		break;
	case 'symbol-unlock':
		var g = document.createElementNS(svgNS,'g');
		g.setAttributeNS(null, 'fill', rgbColor);
		var path = document.createElementNS(g.namespaceURI,'path');
		path.setAttributeNS(null, 'd', 'M14.004 0c-5.516 0-9.996 4.484-9.996 10h3.996c0-3.309 2.688-6 6-6 3.305 0 5.996 2.691 5.996 6v2h-20v14c0 3.309 2.695 6 6 6h12c3.305 0 6-2.691 6-6v-16c0-5.516-4.488-10-9.996-10zM12 24c-1.102 0-2-0.895-2-2s0.898-2 2-2c1.109 0 2 0.895 2 2s-0.891 2-2 2z');
		$(g).append($(path));
		returnTag = g;
		break;
	case 'symbol-fork':
		var g = document.createElementNS(svgNS,'g');
		g.setAttributeNS(null, 'fill', rgbColor);
		var path = document.createElementNS(g.namespaceURI,'path');
		path.setAttributeNS(null, 'd', 'M20 0v3.875c0 1.602-0.625 3.109-1.754 4.238l-11.316 11.254c-1.789 1.785-2.774 4.129-2.883 6.633h-4.047l6 6 6-6h-3.957c0.105-1.438 0.684-2.773 1.711-3.805l11.316-11.25c1.891-1.89 2.93-4.398 2.93-7.070v-3.875h-4zM23.953 26c-0.109-2.504-1.098-4.848-2.887-6.641l-2.23-2.215-2.836 2.821 2.242 2.23c1.031 1.027 1.609 2.367 1.715 3.805h-3.957l6 6 6-6h-4.047z');
		$(g).append($(path));
		returnTag = g;
		break;
	case 'symbol-paperclip':
		var g = document.createElementNS(svgNS,'g');
		g.setAttributeNS(null, 'fill', rgbColor);
		var path = document.createElementNS(g.namespaceURI,'path');
		path.setAttributeNS(null, 'd', 'M17.293 15.292l-2.829-2.829-4 4c-1.953 1.953-1.953 5.119 0 7.071 1.953 1.953 5.118 1.953 7.071 0l10.122-9.879c3.123-3.124 3.123-8.188 0-11.313-3.125-3.124-8.19-3.124-11.313 0l-11.121 10.88c-4.296 4.295-4.296 11.26 0 15.557 4.296 4.296 11.261 4.296 15.556 0l6-6-2.829-2.829-5.999 6c-2.733 2.732-7.166 2.732-9.9 0-2.733-2.732-2.733-7.166 0-9.899l11.121-10.881c1.562-1.562 4.095-1.562 5.656 0 1.563 1.563 1.563 4.097 0 5.657l-10.121 9.879c-0.391 0.391-1.023 0.391-1.414 0s-0.391-1.023 0-1.414l4-4z');
		$(g).append($(path));
		returnTag = g;
		break;
	case 'symbol-facebook':
		var g = document.createElementNS(svgNS,'g');
		g.setAttributeNS(null, 'fill', rgbColor);
		var path = document.createElementNS(g.namespaceURI,'path');
		path.setAttributeNS(null, 'd', 'M17.996 32h-5.996v-16h-4v-5.514l4-0.002-0.007-3.248c0-4.498 1.22-7.236 6.519-7.236h4.412v5.515h-2.757c-2.064 0-2.163 0.771-2.163 2.209l-0.008 2.76h4.959l-0.584 5.514-4.37 0.002-0.004 16z');
		$(g).append($(path));
		returnTag = g;
		break;
	case 'symbol-twitter':
		var g = document.createElementNS(svgNS,'g');
		g.setAttributeNS(null, 'fill', rgbColor);
		var path = document.createElementNS(g.namespaceURI,'path');
		path.setAttributeNS(null, 'd', 'M32 6.076c-1.177 0.522-2.443 0.875-3.771 1.034 1.355-0.813 2.396-2.099 2.887-3.632-1.269 0.752-2.674 1.299-4.169 1.593-1.198-1.276-2.904-2.073-4.792-2.073-3.626 0-6.565 2.939-6.565 6.565 0 0.515 0.058 1.016 0.17 1.496-5.456-0.274-10.294-2.888-13.532-6.86-0.565 0.97-0.889 2.097-0.889 3.301 0 2.278 1.159 4.287 2.921 5.465-1.076-0.034-2.088-0.329-2.974-0.821-0.001 0.027-0.001 0.055-0.001 0.083 0 3.181 2.263 5.834 5.266 6.437-0.551 0.15-1.131 0.23-1.73 0.23-0.423 0-0.834-0.041-1.235-0.118 0.835 2.608 3.26 4.506 6.133 4.559-2.247 1.761-5.078 2.81-8.154 2.81-0.53 0-1.052-0.031-1.566-0.092 2.905 1.863 6.356 2.95 10.064 2.95 12.076 0 18.679-10.004 18.679-18.68 0-0.285-0.006-0.568-0.019-0.849 1.283-0.926 2.396-2.082 3.276-3.398z');
		$(g).append($(path));
		returnTag = g;
		break;
	case 'symbol-earth':
		var g = document.createElementNS(svgNS,'g');
		g.setAttributeNS(null, 'fill', rgbColor);
		var path = document.createElementNS(g.namespaceURI,'path');
		path.setAttributeNS(null, 'd', 'M27.314 4.686c3.022 3.022 4.686 7.040 4.686 11.314s-1.664 8.292-4.686 11.314c-3.022 3.022-7.040 4.686-11.314 4.686s-8.292-1.664-11.314-4.686c-3.022-3.022-4.686-7.040-4.686-11.314s1.664-8.292 4.686-11.314c3.022-3.022 7.040-4.686 11.314-4.686s8.292 1.664 11.314 4.686zM25.899 25.9c1.971-1.971 3.281-4.425 3.821-7.096-0.421 0.62-0.824 0.85-1.073-0.538-0.257-2.262-2.335-0.817-3.641-1.621-1.375 0.927-4.466-1.802-3.941 1.276 0.81 1.388 4.375-1.858 2.598 1.079-1.134 2.050-4.145 6.592-3.753 8.946 0.049 3.43-3.504 0.715-4.729-0.422-0.824-2.279-0.281-6.262-2.434-7.378-2.338-0.102-4.344-0.314-5.25-2.927-0.545-1.87 0.58-4.653 2.584-5.083 2.933-1.843 3.98 2.158 6.731 2.232 0.854-0.894 3.182-1.178 3.375-2.18-1.805-0.318 2.29-1.517-0.173-2.199-1.358 0.16-2.234 1.409-1.512 2.467-2.632 0.614-2.717-3.809-5.247-2.414-0.064 2.206-4.132 0.715-1.407 0.268 0.936-0.409-1.527-1.594-0.196-1.379 0.654-0.036 2.854-0.807 2.259-1.325 1.225-0.761 2.255 1.822 3.454-0.059 0.866-1.446-0.363-1.713-1.448-0.98-0.612-0.685 1.080-2.165 2.573-2.804 0.497-0.213 0.973-0.329 1.336-0.296 0.752 0.868 2.142 1.019 2.215-0.104-1.862-0.892-3.915-1.363-6.040-1.363-3.051 0-5.952 0.969-8.353 2.762 0.645 0.296 1.012 0.664 0.39 1.134-0.483 1.439-2.443 3.371-4.163 3.098-0.893 1.54-1.482 3.238-1.733 5.017 1.441 0.477 1.773 1.42 1.464 1.736-0.734 0.64-1.185 1.548-1.418 2.541 0.469 2.87 1.818 5.515 3.915 7.612 2.644 2.644 6.16 4.1 9.899 4.1s7.255-1.456 9.899-4.1z');
		$(g).append($(path));
		returnTag = g;
		break;
	case 'symbol-globe':
		var g = document.createElementNS(svgNS,'g');
		g.setAttributeNS(null, 'fill', rgbColor);
		var path = document.createElementNS(g.namespaceURI,'path');
		path.setAttributeNS(null, 'd', 'M15 2c-8.284 0-15 6.716-15 15s6.716 15 15 15c8.284 0 15-6.716 15-15s-6.716-15-15-15zM23.487 22c0.268-1.264 0.437-2.606 0.492-4h3.983c-0.104 1.381-0.426 2.722-0.959 4h-3.516zM6.513 12c-0.268 1.264-0.437 2.606-0.492 4h-3.983c0.104-1.381 0.426-2.722 0.959-4h3.516zM21.439 12c0.3 1.28 0.481 2.62 0.54 4h-5.979v-4h5.439zM16 10v-5.854c0.456 0.133 0.908 0.355 1.351 0.668 0.831 0.586 1.625 1.488 2.298 2.609 0.465 0.775 0.867 1.638 1.203 2.578h-4.852zM10.351 7.422c0.673-1.121 1.467-2.023 2.298-2.609 0.443-0.313 0.895-0.535 1.351-0.668v5.854h-4.852c0.336-0.94 0.738-1.803 1.203-2.578zM14 12v4h-5.979c0.059-1.38 0.24-2.72 0.54-4h5.439zM2.997 22c-0.533-1.278-0.854-2.619-0.959-4h3.983c0.055 1.394 0.224 2.736 0.492 4h-3.516zM8.021 18h5.979v4h-5.439c-0.3-1.28-0.481-2.62-0.54-4zM14 24v5.854c-0.456-0.133-0.908-0.355-1.351-0.668-0.831-0.586-1.625-1.488-2.298-2.609-0.465-0.775-0.867-1.638-1.203-2.578h4.852zM19.649 26.578c-0.673 1.121-1.467 2.023-2.298 2.609-0.443 0.312-0.895 0.535-1.351 0.668v-5.854h4.852c-0.336 0.94-0.738 1.802-1.203 2.578zM16 22v-4h5.979c-0.059 1.38-0.24 2.72-0.54 4h-5.439zM23.98 16c-0.055-1.394-0.224-2.736-0.492-4h3.516c0.533 1.278 0.855 2.619 0.959 4h-3.983zM25.958 10h-2.997c-0.582-1.836-1.387-3.447-2.354-4.732 1.329 0.636 2.533 1.488 3.585 2.54 0.671 0.671 1.261 1.404 1.766 2.192zM5.808 7.808c1.052-1.052 2.256-1.904 3.585-2.54-0.967 1.285-1.771 2.896-2.354 4.732h-2.997c0.504-0.788 1.094-1.521 1.766-2.192zM4.042 24h2.997c0.583 1.836 1.387 3.447 2.354 4.732-1.329-0.636-2.533-1.488-3.585-2.54-0.671-0.671-1.261-1.404-1.766-2.192zM24.192 26.192c-1.052 1.052-2.256 1.904-3.585 2.54 0.967-1.285 1.771-2.896 2.354-4.732h2.997c-0.504 0.788-1.094 1.521-1.766 2.192z');
		$(g).append($(path));
		returnTag = g;
		break;
	case 'symbol-thin-arrow-up':
		var g = document.createElementNS(svgNS,'g');
		g.setAttributeNS(null, 'fill', rgbColor);
		var path = document.createElementNS(g.namespaceURI,'path');
		path.setAttributeNS(null, 'd', 'M27.414 12.586l-10-10c-0.781-0.781-2.047-0.781-2.828 0l-10 10c-0.781 0.781-0.781 2.047 0 2.828s2.047 0.781 2.828 0l6.586-6.586v19.172c0 1.105 0.895 2 2 2s2-0.895 2-2v-19.172l6.586 6.586c0.39 0.39 0.902 0.586 1.414 0.586s1.024-0.195 1.414-0.586c0.781-0.781 0.781-2.047 0-2.828z');
		$(g).append($(path));
		returnTag = g;
		break;
	case 'symbol-thin-arrow-down':
		var g = document.createElementNS(svgNS,'g');
		g.setAttributeNS(null, 'fill', rgbColor);
		var path = document.createElementNS(g.namespaceURI,'path');
		path.setAttributeNS(null, 'd', 'M4.586 19.414l10 10c0.781 0.781 2.047 0.781 2.828 0l10-10c0.781-0.781 0.781-2.047 0-2.828s-2.047-0.781-2.828 0l-6.586 6.586v-19.172c0-1.105-0.895-2-2-2s-2 0.895-2 2v19.172l-6.586-6.586c-0.391-0.39-0.902-0.586-1.414-0.586s-1.024 0.195-1.414 0.586c-0.781 0.781-0.781 2.047 0 2.828z');
		$(g).append($(path));
		returnTag = g;
		break;
	case 'symbol-thin-arrow-up-left':
		var g = document.createElementNS(svgNS,'g');
		g.setAttributeNS(null, 'fill', rgbColor);
		var path = document.createElementNS(g.namespaceURI,'path');
		path.setAttributeNS(null, 'd', 'M4 18c0 1.105 0.895 2 2 2s2-0.895 2-2v-7.172l16.586 16.586c0.781 0.781 2.047 0.781 2.828 0 0.391-0.391 0.586-0.902 0.586-1.414s-0.195-1.024-0.586-1.414l-16.586-16.586h7.172c1.105 0 2-0.895 2-2s-0.895-2-2-2h-14v14z');
		$(g).append($(path));
		returnTag = g;
		break;
	case 'symbol-thin-arrow-up-right':
		var g = document.createElementNS(svgNS,'g');
		g.setAttributeNS(null, 'fill', rgbColor);
		var path = document.createElementNS(g.namespaceURI,'path');
		path.setAttributeNS(null, 'd', 'M26.001 4c-0 0-0.001 0-0.001 0h-11.999c-1.105 0-2 0.895-2 2s0.895 2 2 2h7.172l-16.586 16.586c-0.781 0.781-0.781 2.047 0 2.828 0.391 0.391 0.902 0.586 1.414 0.586s1.024-0.195 1.414-0.586l16.586-16.586v7.172c0 1.105 0.895 2 2 2s2-0.895 2-2v-14h-1.999z');
		$(g).append($(path));
		returnTag = g;
		break;
	case 'symbol-thin-arrow-left':
		var g = document.createElementNS(svgNS,'g');
		g.setAttributeNS(null, 'fill', rgbColor);
		var path = document.createElementNS(g.namespaceURI,'path');
		path.setAttributeNS(null, 'd', 'M12.586 4.586l-10 10c-0.781 0.781-0.781 2.047 0 2.828l10 10c0.781 0.781 2.047 0.781 2.828 0s0.781-2.047 0-2.828l-6.586-6.586h19.172c1.105 0 2-0.895 2-2s-0.895-2-2-2h-19.172l6.586-6.586c0.39-0.391 0.586-0.902 0.586-1.414s-0.195-1.024-0.586-1.414c-0.781-0.781-2.047-0.781-2.828 0z');
		$(g).append($(path));
		returnTag = g;
		break;
	case 'symbol-thin-arrow-right':
		var g = document.createElementNS(svgNS,'g');
		g.setAttributeNS(null, 'fill', rgbColor);
		var path = document.createElementNS(g.namespaceURI,'path');
		path.setAttributeNS(null, 'd', 'M19.414 27.414l10-10c0.781-0.781 0.781-2.047 0-2.828l-10-10c-0.781-0.781-2.047-0.781-2.828 0s-0.781 2.047 0 2.828l6.586 6.586h-19.172c-1.105 0-2 0.895-2 2s0.895 2 2 2h19.172l-6.586 6.586c-0.39 0.39-0.586 0.902-0.586 1.414s0.195 1.024 0.586 1.414c0.781 0.781 2.047 0.781 2.828 0z');
		$(g).append($(path));
		returnTag = g;
		break;
	case 'symbol-thin-arrow-down-left':
		var g = document.createElementNS(svgNS,'g');
		g.setAttributeNS(null, 'fill', rgbColor);
		var path = document.createElementNS(g.namespaceURI,'path');
		path.setAttributeNS(null, 'd', 'M18 28c1.105 0 2-0.895 2-2s-0.895-2-2-2h-7.172l16.586-16.586c0.781-0.781 0.781-2.047 0-2.828-0.391-0.391-0.902-0.586-1.414-0.586s-1.024 0.195-1.414 0.586l-16.586 16.586v-7.172c0-1.105-0.895-2-2-2s-2 0.895-2 2v14h14z');
		$(g).append($(path));
		returnTag = g;
		break;
	case 'symbol-thin-arrow-down-right':
		var g = document.createElementNS(svgNS,'g');
		g.setAttributeNS(null, 'fill', rgbColor);
		var path = document.createElementNS(g.namespaceURI,'path');
		path.setAttributeNS(null, 'd', 'M28 14c0-1.105-0.895-2-2-2s-2 0.895-2 2v7.172l-16.586-16.586c-0.781-0.781-2.047-0.781-2.828 0-0.391 0.391-0.586 0.902-0.586 1.414s0.195 1.024 0.586 1.414l16.586 16.586h-7.172c-1.105 0-2 0.895-2 2s0.895 2 2 2h14v-14z');
		$(g).append($(path));
		returnTag = g;
		break;
		
	default:
		break;
	}
	
	return returnTag;
}

// svg 도형 변경
function reShape(selector, shape) {
	var blockContentTag = $(selector).find('.sl-block-content');
	var rgbColor = blockContentTag.attr('data-shape-fill');

	blockContentTag.children().detach();
	
	var svgTag = addSvgTag(shape, rgbColor);
	blockContentTag.append(svgTag);
}

