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
			

//		var svg = createSvg('0 0 300 300');
//		var svgTag = $(svg);
//		var rect = drawSvg(svg.namespaceURI, 'rect');
//		var svgContent = $(rect);
		var svg = createSvg('0 0 32 32');
		var svgTag = $(svg);
		var rect = drawSvg(svg.namespaceURI, 'symbol-earth');
		var svgContent = $(rect);



		svgTag.append(svgContent);
		blockContentTag.append(svgTag);
		blockTag.append(blockContentTag);
		//blockTag.append(svgTag);
		presentSection.append(blockTag);

	 //$(".toolbar-list").css('visibility', 'hidden');
	 //$(".text-list").css('visibility', 'visible');
		e.stopPropagation();
	});
});

function createBlockContentTag() {
	return $("<div>")
				.addClass("sl-block-content")
				.attr({
					'data-shape-type' : 'rect',
					'data-shape-stretch': 'false'
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

function drawSvg(svgNS, shape) {
	
	var returnTag;
	
	switch (shape) {
	case 'rect':
		var rect = document.createElementNS(svgNS,'rect');
		rect.setAttributeNS(null, 'width', '300');
		rect.setAttributeNS(null, 'height', '300');
		rect.setAttributeNS(null, 'fill', 'rgb(186, 199, 234)');
		returnTag = rect;
		break;
		
	case 'symbol-earth':
		var g = document.createElementNS(svgNS,'g');
		g.setAttributeNS(null, 'fill', 'rgb(186, 199, 234)');
		var path = document.createElementNS(g.namespaceURI,'path');
		path.setAttributeNS(null, 'd', 'M27.314 4.686c3.022 3.022 4.686 7.040 4.686 11.314s-1.664 8.292-4.686 11.314c-3.022 3.022-7.040 4.686-11.314 4.686s-8.292-1.664-11.314-4.686c-3.022-3.022-4.686-7.040-4.686-11.314s1.664-8.292 4.686-11.314c3.022-3.022 7.040-4.686 11.314-4.686s8.292 1.664 11.314 4.686zM25.899 25.9c1.971-1.971 3.281-4.425 3.821-7.096-0.421 0.62-0.824 0.85-1.073-0.538-0.257-2.262-2.335-0.817-3.641-1.621-1.375 0.927-4.466-1.802-3.941 1.276 0.81 1.388 4.375-1.858 2.598 1.079-1.134 2.050-4.145 6.592-3.753 8.946 0.049 3.43-3.504 0.715-4.729-0.422-0.824-2.279-0.281-6.262-2.434-7.378-2.338-0.102-4.344-0.314-5.25-2.927-0.545-1.87 0.58-4.653 2.584-5.083 2.933-1.843 3.98 2.158 6.731 2.232 0.854-0.894 3.182-1.178 3.375-2.18-1.805-0.318 2.29-1.517-0.173-2.199-1.358 0.16-2.234 1.409-1.512 2.467-2.632 0.614-2.717-3.809-5.247-2.414-0.064 2.206-4.132 0.715-1.407 0.268 0.936-0.409-1.527-1.594-0.196-1.379 0.654-0.036 2.854-0.807 2.259-1.325 1.225-0.761 2.255 1.822 3.454-0.059 0.866-1.446-0.363-1.713-1.448-0.98-0.612-0.685 1.080-2.165 2.573-2.804 0.497-0.213 0.973-0.329 1.336-0.296 0.752 0.868 2.142 1.019 2.215-0.104-1.862-0.892-3.915-1.363-6.040-1.363-3.051 0-5.952 0.969-8.353 2.762 0.645 0.296 1.012 0.664 0.39 1.134-0.483 1.439-2.443 3.371-4.163 3.098-0.893 1.54-1.482 3.238-1.733 5.017 1.441 0.477 1.773 1.42 1.464 1.736-0.734 0.64-1.185 1.548-1.418 2.541 0.469 2.87 1.818 5.515 3.915 7.612 2.644 2.644 6.16 4.1 9.899 4.1s7.255-1.456 9.899-4.1z');
		$(g).append($(path));
		returnTag = g;
		
//	case 'symbol-earth':
//		var g = document.createElementNS(svgNS,'g');
//		g.setAttributeNS(null, 'fill', 'rgb(186, 199, 234)');
//		var path = document.createElementNS(g.namespaceURI,'path');
//		path.setAttributeNS(null, 'd', 'M27.314 4.686c3.022 3.022 4.686 7.040 4.686 11.314s-1.664 8.292-4.686 11.314c-3.022 3.022-7.040 4.686-11.314 4.686s-8.292-1.664-11.314-4.686c-3.022-3.022-4.686-7.040-4.686-11.314s1.664-8.292 4.686-11.314c3.022-3.022 7.040-4.686 11.314-4.686s8.292 1.664 11.314 4.686zM25.899 25.9c1.971-1.971 3.281-4.425 3.821-7.096-0.421 0.62-0.824 0.85-1.073-0.538-0.257-2.262-2.335-0.817-3.641-1.621-1.375 0.927-4.466-1.802-3.941 1.276 0.81 1.388 4.375-1.858 2.598 1.079-1.134 2.050-4.145 6.592-3.753 8.946 0.049 3.43-3.504 0.715-4.729-0.422-0.824-2.279-0.281-6.262-2.434-7.378-2.338-0.102-4.344-0.314-5.25-2.927-0.545-1.87 0.58-4.653 2.584-5.083 2.933-1.843 3.98 2.158 6.731 2.232 0.854-0.894 3.182-1.178 3.375-2.18-1.805-0.318 2.29-1.517-0.173-2.199-1.358 0.16-2.234 1.409-1.512 2.467-2.632 0.614-2.717-3.809-5.247-2.414-0.064 2.206-4.132 0.715-1.407 0.268 0.936-0.409-1.527-1.594-0.196-1.379 0.654-0.036 2.854-0.807 2.259-1.325 1.225-0.761 2.255 1.822 3.454-0.059 0.866-1.446-0.363-1.713-1.448-0.98-0.612-0.685 1.080-2.165 2.573-2.804 0.497-0.213 0.973-0.329 1.336-0.296 0.752 0.868 2.142 1.019 2.215-0.104-1.862-0.892-3.915-1.363-6.040-1.363-3.051 0-5.952 0.969-8.353 2.762 0.645 0.296 1.012 0.664 0.39 1.134-0.483 1.439-2.443 3.371-4.163 3.098-0.893 1.54-1.482 3.238-1.733 5.017 1.441 0.477 1.773 1.42 1.464 1.736-0.734 0.64-1.185 1.548-1.418 2.541 0.469 2.87 1.818 5.515 3.915 7.612 2.644 2.644 6.16 4.1 9.899 4.1s7.255-1.456 9.899-4.1z');
//		$(g).append($(path));
//		returnTag = g;	
		
	default:
		break;
	}
	
	return returnTag;
//	var g = document.createElementNS(svgNS,'g');
//	g.setAttributeNS(null, 'fill', 'rgb(186, 199, 234)');
//	var path = document.createElementNS(g.namespaceURI,'path');
//	g.setAttributeNS(null, 'fill', 'rgb(186, 199, 234)');
//	return rect;
}


