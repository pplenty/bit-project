//$(function(){
//
//	
//	$(".global-header").on('mouseover', function(){
//		$("div.nav-item").show();
//		
//	});
//	
//	$(".global-header").on('mouseout', function(){
//		$("div.nav-item").hide();
//	});
//		
//});

//$(function(){
//
//	$(".wrapper").on('mouseover', function(){
//		$("div.nav-item").css('visibility', 'visible');
//		
//	});
//	
//	$(".wrapper").on('mouseout', function() {
//		$("div.nav-item").css('visibility', 'hidden');
//	});
//		
//});
//$( document ).on( "mousemove", function( event ) {
//  $( "#log" ).text( "pageX: " + event.pageX + ", pageY: " + event.pageY );
//});

// - font-size 관리 변수
var fontSizeInput;

// -font-size 스크롤 조정
$(".font.size-scroll").on("mousemove", function(ev) {
	fontSizeInput = $(ev.target).val();
	$(".font.size-box").val(fontSizeInput);
});

// TEXT - font 사이즈 관리
// -font-size 스크롤 완료
$(".font.size-scroll").on("mouseup", function() {
	$(".font.size-box").val(fontSizeInput);

});
// - font size 직접 입력받기
$(".font.size-scroll").on("dblclick", function(ev) {
	$(this).css("z-index", "0");
	$(this).addClass("back");
	$(".font.size-box").focus();
	fontSizeInput = $(".font.size-box").val();
});
// - font size 입력 완료
$(document).not($(".font.size-box")).click(function() {
	$(".font.size-scroll").css("z-index", "2");
	$(".font.size-scroll").removeClass("back");
});

//	
$(function() {

	$(".wrapper").hover(function() {
		$("div.nav-item").css('visibility', 'visible');
	}, function() {
		$("div.nav-item").css('visibility', 'hidden');
	});

	$("div.nav-item").hover(function() {
		$("div.nav-item").css('visibility', 'visible');
	}, function() {
		$("div.nav-item").css('visibility', 'hidden');
	});

	// text
	$(".toolbar-text").click(function() {
		$(".toolbar-list").css('visibility', 'hidden');
		$(".text-list").css('visibility', 'visible');
	});

	$(".page-wrapper").not($(".text-list")).click(function() {
		$(".text-list").css('visibility', 'hidden');
		$(".toolbar-list").css('visibility', 'visible');
	});

	$(".text-toolbar-group-trigger").click(function() {
		if (!$(this).hasClass("open")) {
			$(".text-toolbar-group-options").css({
				'height' : '274px',
				'visibility' : 'visible',
				'opacity' : '1'
			});
			$(this).addClass("open");
		} else if ($(this).hasClass("open")) {
			$(".text-toolbar-group-options").css({
				'height' : '0px',
				'visibility' : 'hidden',
				'opacity' : '0'
			});
			$(this).removeClass("open");
		}
	});
	$(".text-list .toolbar-select .text-toolbar-select-trigger").hover(
			function() {
				if (!$(".text-toolbar-panel").hasClass("open")) {
					$(".text-toolbar-panel").css({
						'visibility' : 'visible',
						'top' : (event.pageY - 10)
					});
					$(".text-toolbar-panel").addClass("open");

				}
			}, function() {
				$(".text-toolbar-panel").css('visibility', 'hidden');
				$(".text-toolbar-panel").removeClass("open");
			});

	$(".text-toolbar-select-item1").click(
			function() {
				$(".text-toolbar-select-trigger").text(
						$(".text-toolbar-select-item1").text());
			});
	$(".text-toolbar-select-item2").click(
			function() {
				$(".text-toolbar-select-trigger").text(
						$(".text-toolbar-select-item2").text());
			});
	$(".text-toolbar-select-item3").click(
			function() {
				$(".text-toolbar-select-trigger").text(
						$(".text-toolbar-select-item3").text());
			});

	$(".text-toolbar-panel").hover(function() {
		$(".text-toolbar-panel").css('visibility', 'visible');
	}, function() {
		$(".text-toolbar-panel").css('visibility', 'hidden');
	});

	$(".page-wrapper").not($(".text-toolbar-panel")).click(function() {
		if ($(".text-toolbar-panel").hasClass("open")) {
			$(".text-toolbar-panel").css({
				'visibility' : 'hidden',
			});
			$(".text-toolbar-panel").removeClass("open");
		}
	});

	$(".page-wrapper").not($(".text-list")).click(function() {
		$(".text-list").css('visibility', 'hidden');
		$(".text-toolbar-group-options").css({
			'height' : '0px',
			'visibility' : 'hidden',
			'opacity' : '0'
		});
		$(this).removeClass("open");
	});

	// image
	$(".toolbar-image").click(function() {
		$(".toolbar-list").css('visibility', 'hidden');
		$(".image-list").css('visibility', 'visible');
	});

	$(".page-wrapper").not($(".image-list")).click(function() {
		$(".image-list").css('visibility', 'hidden');
		$(".toolbar-list").css('visibility', 'visible');
	});

	$(".image-toolbar-group-trigger").click(function() {
		if (!$(this).hasClass("open")) {
			$(".image-toolbar-group-options").css({
				'height' : '274px',
				'visibility' : 'visible',
				'opacity' : '1'
			});
			$(this).addClass("open");
		} else if ($(this).hasClass("open")) {
			$(".image-toolbar-group-options").css({
				'height' : '0px',
				'visibility' : 'hidden',
				'opacity' : '0'
			});
			$(this).removeClass("open");
		}
	});
	$(".image-list .toolbar-select .image-toolbar-select-trigger").hover(
			function() {
				if (!$(".image-toolbar-panel").hasClass("open")) {
					$(".image-toolbar-panel").css({
						'visibility' : 'visible',
						'top' : (event.pageY - 10)
					});
					$(".image-toolbar-panel").addClass("open");

				}
			}, function() {
				$(".image-toolbar-panel").css('visibility', 'hidden');
				$(".image-toolbar-panel").removeClass("open");
			});

	$(".image-toolbar-select-item1").click(
			function() {
				$(".image-toolbar-select-trigger").text(
						$(".image-toolbar-select-item1").text());
			});
	$(".image-toolbar-select-item2").click(
			function() {
				$(".image-toolbar-select-trigger").text(
						$(".image-toolbar-select-item2").text());
			});
	$(".image-toolbar-select-item3").click(
			function() {
				$(".image-toolbar-select-trigger").text(
						$(".image-toolbar-select-item3").text());
			});

	$(".image-toolbar-panel").hover(function() {
		$(".image-toolbar-panel").css('visibility', 'visible');
	}, function() {
		$(".image-toolbar-panel").css('visibility', 'hidden');
	});

	$(".page-wrapper").not($(".image-toolbar-panel")).click(function() {
		if ($(".image-toolbar-panel").hasClass("open")) {
			$(".image-toolbar-panel").css({
				'visibility' : 'hidden',
			});
			$(".image-toolbar-panel").removeClass("open");
		}
	});

	$(".page-wrapper").not($(".image-list")).click(function() {
		$(".image-list").css('visibility', 'hidden');
		$(".image-toolbar-group-options").css({
			'height' : '0px',
			'visibility' : 'hidden',
			'opacity' : '0'
		});
		$(this).removeClass("open");
	});

	// shape
	$(".toolbar-shape").click(function() {
		$(".toolbar-list").css('visibility', 'hidden');
		$(".shape-list").css('visibility', 'visible');
	});

	$(".page-wrapper").not($(".shape-list")).click(function() {
		$(".shape-list").css('visibility', 'hidden');
		$(".toolbar-list").css('visibility', 'visible');
	});

	$(".shape-toolbar-group-trigger-border").click(function() {
		if (!$(this).hasClass("open")) {
			$(".shape-toolbar-group-options-border").css({
				'height' : '145px',
				'visibility' : 'visible',
				'opacity' : '1'
			});
			$(this).addClass("open");
		} else if ($(this).hasClass("open")) {
			$(".shape-toolbar-group-options-border").css({
				'height' : '0px',
				'visibility' : 'hidden',
				'opacity' : '0'
			});
			$(this).removeClass("open");
		}
	});

	$(".shape-toolbar-group-trigger-link").click(function() {
		if (!$(this).hasClass("open")) {
			$(".shape-toolbar-group-options-link").css({
				'height' : '50px',
				'visibility' : 'visible',
				'opacity' : '1'
			});
			$(this).addClass("open");
		} else if ($(this).hasClass("open")) {
			$(".shape-toolbar-group-options-link").css({
				'height' : '0px',
				'visibility' : 'hidden',
				'opacity' : '0'
			});
			$(this).removeClass("open");
		}
	});

	$(".shape-toolbar-select-item1").click(
			function() {
				$(".shape-toolbar-select-trigger").text(
						$(".shape-toolbar-select-item1").text());
			});
	$(".shape-toolbar-select-item2").click(
			function() {
				$(".shape-toolbar-select-trigger").text(
						$(".shape-toolbar-select-item2").text());
			});
	$(".shape-toolbar-select-item3").click(
			function() {
				$(".shape-toolbar-select-trigger").text(
						$(".shape-toolbar-select-item3").text());
			});

	$(".page-wrapper").not($(".shape-list")).click(function() {
		$(".shape-list").css('visibility', 'hidden');
		$(".shape-toolbar-group-options-border").css({
			'height' : '0px',
			'visibility' : 'hidden',
			'opacity' : '0'
		});
		$(".shape-toolbar-group-options-link").css({
			'height' : '0px',
			'visibility' : 'hidden',
			'opacity' : '0'
		});
		$(this).removeClass("open");
	});

	// 가자
	$(".shape-list .toolbar-select-trigger").click(function() {
		if (!$(".shape-toolbar-panel").hasClass("open")) {
			$(".shape-toolbar-panel").css({
				'visibility' : 'visible',
			});
			$(".shape-toolbar-panel").addClass("open");
		} else if ($(".shape-toolbar-panel").hasClass("open")) {
			$(".shape-toolbar-panel").css({
				'visibility' : 'hidden'
			});
			$(".shape-toolbar-panel").removeClass("open");
		}
	});

	$(".page-wrapper").not($(".shape-toolbar-panel")).click(function() {
		if ($(".shape-toolbar-panel").hasClass("open")) {
			$(".shape-toolbar-panel").css({
				'visibility' : 'hidden',
			});
			$(".shape-toolbar-panel").removeClass("open");
		}
	});

	// iframe

	$(".toolbar-iframe").click(function() {
		$(".toolbar-list").css('visibility', 'hidden');
		$(".iframe-list").css('visibility', 'visible');
	});

	$(".page-wrapper").not($(".iframe-list")).click(function() {
		$(".iframe-list").css('visibility', 'hidden');
		$(".toolbar-list").css('visibility', 'visible');
	});

	$(".iframe-toolbar-group-trigger-border").click(function() {
		if (!$(this).hasClass("open")) {
			$(".iframe-toolbar-group-options-border").css({
				'height' : '145px',
				'visibility' : 'visible',
				'opacity' : '1'
			});
			$(this).addClass("open");
		} else if ($(this).hasClass("open")) {
			$(".iframe-toolbar-group-options-border").css({
				'height' : '0px',
				'visibility' : 'hidden',
				'opacity' : '0'
			});
			$(this).removeClass("open");
		}
	});

	$(".iframe-toolbar-group-trigger-link").click(function() {
		if (!$(this).hasClass("open")) {
			$(".iframe-toolbar-group-options-link").css({
				'height' : '50px',
				'visibility' : 'visible',
				'opacity' : '1'
			});
			$(this).addClass("open");
		} else if ($(this).hasClass("open")) {
			$(".iframe-toolbar-group-options-link").css({
				'height' : '0px',
				'visibility' : 'hidden',
				'opacity' : '0'
			});
			$(this).removeClass("open");
		}
	});

	$(".iframe-toolbar-select-item1").click(
			function() {
				$(".iframe-toolbar-select-trigger").text(
						$(".iframe-toolbar-select-item1").text());
			});
	$(".iframe-toolbar-select-item2").click(
			function() {
				$(".iframe-toolbar-select-trigger").text(
						$(".iframe-toolbar-select-item2").text());
			});
	$(".iframe-toolbar-select-item3").click(
			function() {
				$(".iframe-toolbar-select-trigger").text(
						$(".iframe-toolbar-select-item3").text());
			});

	$(".page-wrapper").not($(".iframe-list")).click(function() {
		$(".iframe-list").css('visibility', 'hidden');
		$(".iframe-toolbar-group-options-border").css({
			'height' : '0px',
			'visibility' : 'hidden',
			'opacity' : '0'
		});
		$(".iframe-toolbar-group-options-link").css({
			'height' : '0px',
			'visibility' : 'hidden',
			'opacity' : '0'
		});
		$(this).removeClass("open");
	});

	$(".iframe-list .toolbar-select-trigger").click(function() {
		if (!$(".iframe-toolbar-panel").hasClass("open")) {
			$(".iframe-toolbar-panel").css({
				'visibility' : 'visible',
			});
			$(".iframe-toolbar-panel").addClass("open");
		} else if ($(".iframe-toolbar-panel").hasClass("open")) {
			$(".iframe-toolbar-panel").css({
				'visibility' : 'hidden'
			});
			$(".iframe-toolbar-panel").removeClass("open");
		}
	});

	$(".page-wrapper").not($(".iframe-toolbar-panel")).click(function() {
		if ($(".iframe-toolbar-panel").hasClass("open")) {
			$(".iframe-toolbar-panel").css({
				'visibility' : 'hidden',
			});
			$(".iframe-toolbar-panel").removeClass("open");
		}
	});

	// code
	$(".toolbar-code").click(function() {
		$(".toolbar-list").css('visibility', 'hidden');
		$(".code-list").css('visibility', 'visible');
	});

	$(".page-wrapper").not($(".code-list")).click(function() {
		$(".code-list").css('visibility', 'hidden');
		$(".toolbar-list").css('visibility', 'visible');
	});

	$(".code-toolbar-group-trigger").click(function() {
		if (!$(this).hasClass("open")) {
			$(".code-toolbar-group-options").css({
				'height' : '274px',
				'visibility' : 'visible',
				'opacity' : '1'
			});
			$(this).addClass("open");
		} else if ($(this).hasClass("open")) {
			$(".code-toolbar-group-options").css({
				'height' : '0px',
				'visibility' : 'hidden',
				'opacity' : '0'
			});
			$(this).removeClass("open");
		}
	});
	$(".code-list .toolbar-select .code-toolbar-select-trigger").hover(
			function() {
				if (!$(".code-toolbar-panel").hasClass("open")) {
					$(".code-toolbar-panel").css({
						'visibility' : 'visible',
						'top' : (event.pageY - 10)
					});
					$(".code-toolbar-panel").addClass("open");

				}
			}, function() {
				$(".code-toolbar-panel").css('visibility', 'hidden');
				$(".code-toolbar-panel").removeClass("open");
			});

	$(".code-toolbar-select-item1").click(
			function() {
				$(".code-toolbar-select-trigger").text(
						$(".code-toolbar-select-item1").text());
			});
	$(".code-toolbar-select-item2").click(
			function() {
				$(".code-toolbar-select-trigger").text(
						$(".code-toolbar-select-item2").text());
			});
	$(".code-toolbar-select-item3").click(
			function() {
				$(".code-toolbar-select-trigger").text(
						$(".code-toolbar-select-item3").text());
			});

	$(".code-toolbar-panel").hover(function() {
		$(".code-toolbar-panel").css('visibility', 'visible');
	}, function() {
		$(".code-toolbar-panel").css('visibility', 'hidden');
	});

	$(".page-wrapper").not($(".code-toolbar-panel")).click(function() {
		if ($(".code-toolbar-panel").hasClass("open")) {
			$(".code-toolbar-panel").css({
				'visibility' : 'hidden',
			});
			$(".code-toolbar-panel").removeClass("open");
		}
	});

	$(".page-wrapper").not($(".code-list")).click(function() {
		$(".code-list").css('visibility', 'hidden');
		$(".code-toolbar-group-options").css({
			'height' : '0px',
			'visibility' : 'hidden',
			'opacity' : '0'
		});
		$(this).removeClass("open");
	});

	// math
	$(".toolbar-math").click(function() {
		$(".toolbar-list").css('visibility', 'hidden');
		$(".math-list").css('visibility', 'visible');
	});

	$(".page-wrapper").not($(".math-list")).click(function() {
		$(".math-list").css('visibility', 'hidden');
		$(".toolbar-list").css('visibility', 'visible');
	});

	$(".math-toolbar-group-trigger").click(function() {
		if (!$(this).hasClass("open")) {
			$(".math-toolbar-group-options").css({
				'height' : '274px',
				'visibility' : 'visible',
				'opacity' : '1'
			});
			$(this).addClass("open");
		} else if ($(this).hasClass("open")) {
			$(".math-toolbar-group-options").css({
				'height' : '0px',
				'visibility' : 'hidden',
				'opacity' : '0'
			});
			$(this).removeClass("open");
		}
	});
	$(".math-list .toolbar-select .math-toolbar-select-trigger").hover(
			function() {
				if (!$(".math-toolbar-panel").hasClass("open")) {
					$(".math-toolbar-panel").css({
						'visibility' : 'visible',
						'top' : (event.pageY - 10)
					});
					$(".math-toolbar-panel").addClass("open");

				}
			}, function() {
				$(".math-toolbar-panel").css('visibility', 'hidden');
				$(".math-toolbar-panel").removeClass("open");
			});

	$(".math-toolbar-select-item1").click(
			function() {
				$(".math-toolbar-select-trigger").text(
						$(".math-toolbar-select-item1").text());
			});
	$(".math-toolbar-select-item2").click(
			function() {
				$(".math-toolbar-select-trigger").text(
						$(".math-toolbar-select-item2").text());
			});
	$(".math-toolbar-select-item3").click(
			function() {
				$(".math-toolbar-select-trigger").text(
						$(".math-toolbar-select-item3").text());
			});

	$(".math-toolbar-panel").hover(function() {
		$(".math-toolbar-panel").css('visibility', 'visible');
	}, function() {
		$(".math-toolbar-panel").css('visibility', 'hidden');
	});

	$(".page-wrapper").not($(".math-toolbar-panel")).click(function() {
		if ($(".math-toolbar-panel").hasClass("open")) {
			$(".math-toolbar-panel").css({
				'visibility' : 'hidden',
			});
			$(".math-toolbar-panel").removeClass("open");
		}
	});

	$(".page-wrapper").not($(".math-list")).click(function() {
		$(".math-list").css('visibility', 'hidden');
		$(".math-toolbar-group-options").css({
			'height' : '0px',
			'visibility' : 'hidden',
			'opacity' : '0'
		});
		$(this).removeClass("open");
	});

	// view

	$(".primary-button").click(function() {
		$(".toolbars").css('display', 'none');
		$(".sidebar").css('display', 'none');
		$(".page-wrapper").css('padding', '0');
		$(".preview-ep").css({
			'visibility' : "visible",
			'display' : 'block'
		});
		$(".slid-plus-hor").css({
			'visibility' : "hidden",
			'display' : 'none'
		});
		$(".slid-plus-ver").css({
			'visibility' : "hidden",
			'display' : 'none'
		});
	});

	$('.preview-edi').click(function() {
		$(".toolbars").css('display', 'block');
		$(".sidebar").css('display', 'block');
		$(".page-wrapper").css('padding', '0 0 0 240px');
		$(".preview-ep").css({
			'visibility' : "hidden",
			'display' : 'none'
		});
		$(".slid-plus-hor").css({
			'visibility' : "visible",
			'display' : 'block'
		});
		$(".slid-plus-ver").css({
			'visibility' : "visible",
			'display' : 'block'
		});
	});

	$('.preview-ep .preview-pre').click(function() {
		$(".preview-ep").css({
			'visibility' : "hidden",
			'display' : 'none'
		});
		$(".pres-exit").css({
			'visibility' : "visible",
			'display' : 'block'
		})
	});

	$(".pres-exit").hover(function() {
		$(".pres-exit").css('color', 'black');
	}, function() {
		$(".pres-exit").css('color', '#bbb6b8');
	});

	$('.pres-exit').click(function() {
		$(".pres-exit").css({
			'visibility' : "hidden",
			'display' : 'none'
		})
		$(".preview-ep").css({
			'visibility' : "visible",
			'display' : 'block'
		});
	});

	// 3번 추가
	// slide 추가 해보자

	var x = 0;
	var y = 0;
	var countX = 0;
	var countY = 0;

	$(".slid-plus-hor").hover(function() {
		$(".slid-plus-hor").css('color', 'black');
	}, function() {
		$(".slid-plus-hor").css('color', '#bbb6b8');
	});

	$('.slid-plus-hor').click(
			function() {
				countX = countX + 1;
				var hereX = parseInt($('.present').attr('x'));
				var hereY = parseInt($('.present').attr('y'));
				var nextX = parseInt(hereX) + 1;
				y = 0;
				if (nextX == countX) {
					$("section").removeClass("present").removeClass("future")
							.addClass("past")

					$('.past').css({
						'transform' : 'translate(-150%, 0)',
						'display' : 'none',
						'visible' : 'hidden'
					})
					$("<section>").addClass('present')
							.appendTo($('div.slides')).css('display', 'block')
							.attr({
								// 'hidden'
								'aria-hidden' : 'true'
							}).attr('x', nextX).attr('y', 0).attr('maxY', 1);
				}

				// 가운데 삽입
				if (nextX != countX) {
					var futureX = countX;

					for (futureX; futureX > nextX; futureX--) {
						var preFutureX = futureX - 1;
						var selector = 'section.past[x=' + preFutureX + ']';
						$(selector).attr('x', futureX);
						var selector = 'section.future[x=' + preFutureX + ']';
						$(selector).attr('x', futureX);
					}

					// 맨위에서 생성
					if (hereY = 0) {
						if ($("section").hasClass("present")) {
							$(".present").removeClass("present").addClass(
									"past")
						}

						$('.past').css({
							'transform' : 'translate(-150%, 0)',
							'display' : 'none',
							'visible' : 'hidden'
						})
						$("<section>").addClass('present').appendTo(
								$('div.slides')).css('display', 'block').attr({
							// 'hidden'
							'aria-hidden' : 'true'
						}).attr('x', nextX).attr('y', 0).attr('maxY', 1);
						$('.pres-b').css('color', 'black');
					}

					else {
						var selector = 'section.future[x=' + hereX
								+ '].future[y=' + 0 + ']';

						$(selector).addClass('past').removeClass("future")
						// 추가

						var futureX = countX;
						for (futureX; futureX > nextX; futureX--) {
							var preFutureX = futureX - 1;
							var selector = 'section.future[x=' + preFutureX
									+ ']';
							$(selector).attr('x', futureX);
						}
						if ($("section").hasClass("present")) {
							$(".present").removeClass("present").addClass(
									"past")
						}

						$('.past').css({
							'transform' : 'translate(-150%, 0)',
							'display' : 'none',
							'visible' : 'hidden'
						})
						$("<section>").addClass('present').appendTo(
								$('div.slides')).css('display', 'block').attr({
							// 'hidden'
							'aria-hidden' : 'true'
						}).attr('x', nextX).attr('y', 0).attr('maxY', 1);
						$('.pres-b').css('color', 'black');

					}
				}

				presf();
				presb();
				prest();
				presbb();
				sectionDel();
			});

	// 앞뒤 생성 끝

	// 위 아래 위위 아래 생성!
	$(".slid-plus-ver").hover(function() {
		$(".slid-plus-ver").css('color', 'black');
	}, function() {
		$(".slid-plus-ver").css('color', '#bbb6b8');
	});

	$('.slid-plus-ver').click(
			function() {
				var hereX = parseInt($('.present').attr('x'));
				var hereY = parseInt($('.present').attr('y'));
				var nextY = hereY + 1;
				var hereMax = parseInt($('.present').attr('maxy'));
				if (hereMax == 1) {
					if (hereY != 0) {
						$(".present").removeClass("present").addClass("past")
								.attr('maxy', 0)
						$('.past').css({
							'transform' : 'translate(0, -150%)',
							'display' : 'none',
							'visible' : 'hidden'
						})
					} else {
						$(".present").removeClass("present").addClass("future")
								.attr('maxy', 0).css({
									'transform' : 'translate(0, -150%)',
									'display' : 'none',
									'visible' : 'hidden'
								})
					}

					$("<section>").addClass('present')
							.appendTo($('div.slides')).css('display', 'block')
							.attr({
								// 'hidden'
								'aria-hidden' : 'true'
							}).attr('x', hereX).attr('y', nextY)
							.attr('maxy', 1);
				} else {
					for (;; ++hereY) {
						var selector = $('section.past[y=' + hereY
								+ '].past[x=' + hereX + ']');
						var max = parseInt(selector.attr('maxy'));
						var y = parseInt(selector.attr('y'));
						if (max == 1) {
							var endY = y
							break;
						}
					}
					for (endY; endY > nextY - 1; endY--) {
						var selector = $('section.past[y=' + endY + '].past[x='
								+ hereX + ']');
						var nowY = endY + 1;
						$(selector).attr('y', nowY);
					}

					var lastY = parseInt($('.present').attr('y'));
					var toLastY = lastY + 1;
					if (lastY != 0) {

						$(".present").removeClass("present").addClass("past")
								.attr('maxy', 0)
						$('.past').css({
							'transform' : 'translate(0, -150%)',
							'display' : 'none',
							'visible' : 'hidden'
						})
					} else {

						$(".present").removeClass("present").addClass("future")
								.attr('maxy', 0).css({
									'transform' : 'translate(0, -150%)',
									'display' : 'none',
									'visible' : 'hidden'
								})
					}

					$("<section>").addClass('present')
							.appendTo($('div.slides')).css('display', 'block')
							.attr({
								// 'hidden'
								'aria-hidden' : 'true'
							}).attr('x', hereX).attr('y', toLastY).attr('maxy',
									0);

				}

				presf();
				presb();
				prest();
				presbb();
				sectionDel();
			});

	// 섹션 이동
	// 앞으로

	// 버튼 유무 설정
	// f버튼
	function presf() {
		var presentX = parseInt($(".present").attr('x'));
		var presentY = parseInt($(".present").attr('y'));
		var nextX = presentX + 1
		var nextY = presentY + 1
		var berforeX = presentX - 1
		var berforeY = presentY - 1
		var maxY = parseInt($('.present').attr('maxy'));
		if (presentX != countX) {
			$(".pres-f").css({
				'visibility' : "visible",
				'color' : 'black'
			})
		} else {
			$(".pres-f").css({
				'visibility' : "hidden"
			})
		}
	}
	// b버튼
	function presb() {
		var presentX = parseInt($(".present").attr('x'));
		var presentY = parseInt($(".present").attr('y'));
		var nextX = presentX + 1
		var nextY = presentY + 1
		var berforeX = presentX - 1
		var berforeY = presentY - 1
		var maxY = parseInt($('.present').attr('maxy'));
		if (presentX != 0) {
			$(".pres-b").css({
				'visibility' : "visible",
				'color' : 'black'
			})
		} else {
			$(".pres-b").css({
				'visibility' : "hidden"
			})
		}
	}

	// t버튼
	function prest() {
		var presentX = parseInt($(".present").attr('x'));
		var presentY = parseInt($(".present").attr('y'));
		var nextX = presentX + 1
		var nextY = presentY + 1
		var berforeX = presentX - 1
		var berforeY = presentY - 1
		var maxY = parseInt($('.present').attr('maxy'));
		if (presentY != 0) {
			$(".pres-t").css({
				'visibility' : "visible",
				'color' : 'black'
			})
		} else {
			$(".pres-t").css({
				'visibility' : "hidden"
			})
		}
	}

	// bb버튼
	function presbb() {
		var presentX = parseInt($(".present").attr('x'));
		var presentY = parseInt($(".present").attr('y'));
		var nextX = presentX + 1
		var nextY = presentY + 1
		var berforeX = presentX - 1
		var berforeY = presentY - 1
		var maxY = parseInt($('.present').attr('maxy'));
		if (maxY != 1) {
			$(".pres-bb").css({
				'visibility' : "visible",
				'color' : 'black'
			})
		} else {
			$(".pres-bb").css({
				'visibility' : "hidden"
			})
		}
	}

	// 앞
	$(".pres-f").hover(function() {
		var presentX = parseInt($(".present").attr("x"))
		if (presentX != countX) {
			$(".pres-f").css('color', 'blue');
		}
	}, function() {
		presf();
		presb();
		prest();
		presbb();
		sectionDel();
	});

	$('.pres-f').click(
			function() {
				var presentX = parseInt($(".present").attr('x'));
				var presentY = parseInt($(".present").attr('y'));

				if (presentX != countX) {
					var nextX = parseInt($('.present').attr('x')) + 1;
					$('.present').addClass('past').removeClass('present').css({
						'visibility' : "hidden",
						'display' : 'none',
						'transform' : 'translate(-150%, 0)'
					})
					$('.present').addClass('past').removeClass('present').css({
						'visibility' : "hidden",
						'display' : 'none',
						'transform' : 'translate(-150%, 0)'
					})
					if (presentY == 0) {

						var selector = 'section.future[x=' + nextX
								+ '].future[y=' + 0 + ']';
						$(selector).addClass('present').removeClass('future')
								.css({
									'visibility' : "visible",
									'display' : 'block',
									'transform' : 'translate(0, 0)'
								})
					} else {

						var selector = 'section.future[x=' + nextX
								+ '].future[y=' + 0 + ']';
						$(selector).addClass('present').removeClass('future')
								.css({
									'visibility' : "visible",
									'display' : 'block',
									'transform' : 'translate(0, 0)'
								})
						var beforeSelector = 'section.future[x=' + presentX
								+ '].future[y=' + 0 + ']';
						$(beforeSelector).addClass('past')
								.removeClass('future').css({
									'visibility' : "hidden",
									'display' : 'none',
									'transform' : 'translate(-150%, 0)'
								})
					}
				}
				presf();
				presb();
				prest();
				presbb();
				sectionDel();
			})
	// 뒤로

	$(".pres-b").hover(function() {
		if ($("present").attr("x") > 0) {
			$(".pres-b").css('color', 'blue');
		}
	}, function() {
		presf();
		presb();
		prest();
		presbb();
		sectionDel();
	});
	$('.pres-b').click(function() {

		if ($('.present').attr('x') > 0) {
			var nextX = parseInt($('.present').attr('x')) - 1;
			var hereY = parseInt($('.present').attr('y'))
			if (hereY == 0) {
				$('.present').addClass('future').removeClass('present').css({
					'visibility' : "hidden",
					'display' : 'none',
					'transform' : 'translate(150%, 0)'
				})
			} else {
				$('.present').addClass('past').removeClass('present').css({
					'visibility' : "hidden",
					'display' : 'none',
					'transform' : 'translate(150%, 0)'
				})
			}
			var selector = 'section.past[x=' + nextX + '].past[y=' + 0 + ']';
			$(selector).addClass('present').removeClass('past').css({
				'visibility' : "visible",
				'display' : 'block',
				'transform' : 'translate(0, 0)'
			})
		}
		presf();
		presb();
		prest();
		presbb();
		sectionDel();
	})

	// 위로
	$(".pres-t").hover(function() {
		if ($("present").attr("y") > 0) {
			$(".pres-t").css('color', 'blue');
		}
	}, function() {
		presf();
		presb();
		prest();
		presbb();
		sectionDel();
	});
	$('.pres-t').click(
			function() {
				var nowY = parseInt($('.present').attr('y'))

				if (nowY > 1) {
					var hereY = parseInt($('.present').attr('y')) - 1;
					var hereX = parseInt($('.present').attr('x'));
					$('.present').addClass('past').removeClass('present').css({
						'visibility' : "hidden",
						'display' : 'none',
						'transform' : 'translate(0, -150%)'
					})
					var selector = 'section.past[x=' + hereX + '].past[y='
							+ hereY + ']';
					$(selector).addClass('present').removeClass('past').css({
						'visibility' : "visible",
						'display' : 'block',
						'transform' : 'translate(0, 0)'
					})
				} else {

					var hereX = parseInt($('.present').attr('x'));
					$('.present').addClass('past').removeClass('present').css({
						'visibility' : "hidden",
						'display' : 'none',
						'transform' : 'translate(0, -150%)'
					})
					var selector = 'section.future[x=' + hereX + '].future[y='
							+ 0 + ']';
					$(selector).addClass('present').removeClass('future').css({
						'visibility' : "visible",
						'display' : 'block',
						'transform' : 'translate(0, 0)'
					})
				}
				presf();
				presb();
				prest();
				presbb();
				sectionDel();
			})

	// 아래$
	$(".pres-bb").hover(function() {
		if ($("present").attr("maxy") != 1) {
			$(".pres-bb").css('color', 'blue');
		}
	}, function() {
		presf();
		presb();
		prest();
		presbb();
		sectionDel();
	});
	$('.pres-bb').click(
			function() {
				var goY = parseInt($('.present').attr('maxy'))
				var nowY = parseInt($('.present').attr('y'))
				var hereY = parseInt($('.present').attr('y')) + 1;
				var hereX = parseInt($('.present').attr('x'))
				if (goY != 1) {
					if (nowY != 0) {
						$('.present').addClass('past').removeClass('present')
								.css({
									'visibility' : "hidden",
									'display' : 'none',
									'transform' : 'translate(0, -150%)'
								})
						var selector = 'section.past[x=' + hereX + '].past[y='
								+ hereY + ']';
						$(selector).addClass('present').removeClass('past')
								.css({
									'visibility' : "visible",
									'display' : 'block',
									'transform' : 'translate(0, 0)'
								})
					} else {
						$('.present').addClass('future').removeClass('present')
								.css({
									'visibility' : "hidden",
									'display' : 'none',
									'transform' : 'translate(0, -150%)'
								})
						var selector = 'section.past[x=' + hereX + '].past[y='
								+ hereY + ']';
						$(selector).addClass('present').removeClass('past')
								.css({
									'visibility' : "visible",
									'display' : 'block',
									'transform' : 'translate(0, 0)'
								})
					}

					presf();
					presb();
					prest();
					presbb();
					sectionDel();
				}
			})

	// 세션 삭제 호벌
	$(".section-delete").hover(function() {
		$(".section-delete").css('color', 'black');
	}, function() {
		$(".section-delete").css('color', '#bbb6b8');
	});

	// 섹션 삭제 유무
	function sectionDel() {
		var presentX = parseInt($(".present").attr('x'));
		var presentY = parseInt($(".present").attr('y'));
		$(".section-delete").css({
			'visibility' : "visible",
			'display' : 'block'
		})
		if (presentX == 0) {

			if (presentY == 0) {
				$(".section-delete").css({
					'visibility' : "hidden",
					'display' : 'none'
				})

			}
		}
	}
	;
	// 섹션 삭제

	$('.section-delete').click(
			function() {

				var presentX = parseInt($(".present").attr('x'));
				var presentY = parseInt($(".present").attr('y'));
				var nextX = presentX + 1
				var nextY = presentY + 1
				var berforeX = presentX - 1
				var berforeY = presentY - 1
				var maxY = parseInt($('.present').attr('maxy'));

				if (maxY == 1) {
					if (presentY == 0) {
						$(".present").remove();

						var selector = $('section.past[y=' + 0 + '].past[x='
								+ berforeX + ']');

						$(selector).addClass('present').removeClass('past')
								.css({
									'visibility' : "visible",
									'display' : 'block',
									'transform' : 'translate(0, 0)'
								});

						var nexX = nextX;
						for (nexX; nexX < countX + 1; nexX++) {
							// nexX 다음칸부터 이숫자 까지
							// countX 끝
							var nowX = nexX - 1
							var selector = $('section.future[y=' + 0
									+ '].future[x=' + nexX + ']');
							$(selector).attr('x', nowX)

							selector = $('section.past[y= 1].past[x=' + nexX
									+ ']');

							hereY = parseInt($(selector).attr('y'));
							// 이제 x내에서 와이값 찾기
							// 작업중
							if (hereY > 0) {
								for (;; hereY++) {

									var selector = $('section.past[y=' + hereY
											+ '].past[x=' + nexX + ']');
									$(selector).attr('x', nowX)
									var max = parseInt(selector.attr('maxy'));
									var y = parseInt(selector.attr('y'));
									if (max == 1) {
										var endY = y
										break;
									}
								}
							}
							// 와이 맥심값 찾기 끝
							var zoroY = 0;
							for (zoroY; zoroY + 1 < endY; ++zoroY) {
								var selector = $('section.past[y=' + zoroY
										+ '].past[x=' + nexX + ']');
								$(selector).attr('y', zoroY);
							}// x값 ㅇㅣ후값 변경
						}
						countX = countX - 1;

					} else if (presentY == 1) {
						$(".present").remove();

						var selector = $('section.future[y=' + 0
								+ '].future[x=' + presentX + ']');

						$(selector).addClass('present').removeClass('future')
								.css({
									'visibility' : "visible",
									'display' : 'block',
									'transform' : 'translate(0, 0)'
								}).attr('maxy', 1);

					} else {
						$(".present").remove();
						var selector = $('section.past[y=' + berforeY
								+ '].past[x=' + presentX + ']');

						$(selector).addClass('present').removeClass('past')
								.css({
									'visibility' : "visible",
									'display' : 'block',
									'transform' : 'translate(0, 0)'
								}).attr('maxy', 1);
					}

				}// 밑바닥에 삭제 할때 끝

				// 중간쯤에서 삭제 했을때
				else {
					hereY = parseInt($(".present").attr('y'));
					$(".present").remove();

					for (;; ++hereY) {
						var selector = $('section.past[y=' + hereY
								+ '].past[x=' + presentX + ']');
						var max = parseInt(selector.attr('maxy'));
						var y = parseInt(selector.attr('y'));
						if (max == 1) {
							var endY = y
							break;
						}
					}
					nexY = presentY;
					for (nexY; nexY < endY; ++nexY) {
						var selectY = nexY + 1;
						var selector = $('section.past[y=' + selectY
								+ '].past[x=' + presentX + ']');
						$(selector).attr('y', nexY);
					}

					var selector = $('section.past[y=' + presentY + '].past[x='
							+ presentX + ']');
					$(selector).addClass('present').removeClass('past').css({
						'visibility' : "visible",
						'display' : 'block',
						'transform' : 'translate(0, 0)'
					})

				}

				presf();
				presb();
				prest();
				presbb();
				sectionDel();
			});
	// 섹션 삭제 끝

	
	// 세션 배경 색 설정
	$(".section-color").on('click', function() {
		var initBackColor = rgb2hex($('.present').css('background-color'));
		console.log(initBackColor)
		$(".section-color").val(initBackColor);
	})



	$(".section-color").on('change', function() {
		$(".present").css('background-color', $(this).val());
	});


});
