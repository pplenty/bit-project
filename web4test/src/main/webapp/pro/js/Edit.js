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
	presf();
	presb();
	prest();
	presbb();
	sectionDel();

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

				var presentX = $(".present .present").attr('x');
				var presentY = $(".present .present").attr('y');
				var nextX = presentX + 1
				var nextY = presentY + 1
				var berforeX = presentX - 1
				var berforeY = presentY - 1
				var maxY = $('.present .present').attr('maxy');
				if (presentX === undefined) {
					var presentX = parseInt($(".present").attr('x'));
					var presentY = parseInt($(".present").attr('y'));
					var nextX = presentX + 1
					var nextY = presentY + 1
					var berforeX = presentX - 1
					var berforeY = presentY - 1
					var maxY = parseInt($('.present').attr('maxy'));
				} else {
					presentX = parseInt($(".present .present").attr('x'))
					presentY = parseInt($(".present .present").attr('y'))
					nextX = presentX + 1
					nextY = presentY + 1
					berforeX = presentX - 1
					berforeY = presentY - 1
					maxY = $('.present .present').attr('maxy');
				}
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
						var selector = 'section.future[x=' + presentX
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
				
///////////////////////*****************************************////////////////
				var presentSection = $_old('section.present');
				//var presentSection = $_old('.sl-block-gird');
				var blockId = 100000;
				var block_zIndex = 10;
				
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
						
//						console.log($(event.currentTarget).find('.sl-block-content')[0].getAttribute("data-shape-fill"));
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
//					    console.log(this + ']des ->' + event.pageX+','+event.pageY);
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
							
//							reShape('.isFocus', editTargetSelectorShapeType, targetSize);
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
//					    console.log(this + ']des ->' + event.pageX+','+event.pageY);
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
///////////////////////*****************************************////////////////
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
				var hereX1 = parseInt($('.present').attr('x'));
				var hereY1 = parseInt($('.present').attr('y'));
				var nextY1 = hereY1 + 1;
				var hereMax1 = parseInt($('.present').attr('maxy'));

				// 첫번째 아무것도 없을때 시작
				if (hereMax1 == 1) {
					if (hereY1 == 0) {
						$('.slides .present').wrap(
								'<section class="stack present" />');
						$(".present .present").removeClass("present").addClass(
								"past").attr('maxy', 0)
						$('.past').css({
							'transform' : 'translate(0, -150%)',
							'display' : 'none',
							'visible' : 'hidden'
						})

						$("<section>").addClass('present').appendTo(
								$('.stack.present')).css('display', 'block')
								.attr({
									// 'hidden'
									'aria-hidden' : 'true'
								}).attr('x', hereX1).attr('y', nextY1).attr(
										'maxy', 1);
					}
				}
				// 첫번째 아무것도 없을때 끝
				else {
					var hereX = parseInt($('.stack .present').attr('x'));
					var hereY = parseInt($('.stack .present').attr('y'));
					var nextY = hereY + 1;
					var hereMax = parseInt($('.stack .present').attr('maxy'));
					// 맨끝에서 생성할 시작
					if (hereMax == 1) {
						if (hereY != 0) {

							$(".present .present").removeClass("present")
									.addClass("past").attr('maxy', 0).css({
										'transform' : 'translate(0, -150%)',
										'display' : 'none',
										'visible' : 'hidden'
									})

							$("<section>").addClass('present').appendTo(
									$('.stack.present'))
									.css('display', 'block').attr({
										// 'hidden'
										'aria-hidden' : 'true'
									}).attr('x', hereX).attr('y', nextY).attr(
											'maxy', 1);
						}

					}
					// 맨끝에서 생성할 끝
					else {
						for (;; ++hereY) {
							var selector = $('section.future[y=' + hereY
									+ '].future[x=' + hereX + ']');
							var max = parseInt(selector.attr('maxy'));
							var y = parseInt(selector.attr('y'));
							if (max == 1) {
								var endY = y
								break;
							}
						}
						for (endY; endY > nextY - 1; endY--) {
							var selector = $('section.future[y=' + endY
									+ '].future[x=' + hereX + ']');
							var nowY = endY + 1;
							$(selector).attr('y', nowY);
						}

						var lastY = parseInt($('.present .present').attr('y'));
						var toLastY = lastY + 1;
						if (lastY != 0) {

							$(".present .present").removeClass("present")
									.addClass("past").attr('maxy', 0)
							$('.past').css({
								'transform' : 'translate(0, -150%)',
								'display' : 'none',
								'visible' : 'hidden'
							})
						} else {

							$(".present .present").removeClass("present")
									.addClass("future").attr('maxy', 0).css({
										'transform' : 'translate(0, -150%)',
										'display' : 'none',
										'visible' : 'hidden'
									})
						}

						$("<section>").addClass('present').appendTo(
								$('section.stack')).css('display', 'block')
								.attr({
									// 'hidden'
									'aria-hidden' : 'true'
								}).attr('x', hereX).attr('y', toLastY).attr(
										'maxy', 0);

					}
				}
///////////////////////*****************************************////////////////
				var presentSection = $_old('section.present');
				//var presentSection = $_old('.sl-block-gird');
				var blockId = 100000;
				var block_zIndex = 10;
				
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
						
//						console.log($(event.currentTarget).find('.sl-block-content')[0].getAttribute("data-shape-fill"));
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
//					    console.log(this + ']des ->' + event.pageX+','+event.pageY);
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
							
//							reShape('.isFocus', editTargetSelectorShapeType, targetSize);
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
//					    console.log(this + ']des ->' + event.pageX+','+event.pageY);
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
				
///////////////////////*****************************************////////////////
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
		var presentX = $(".present .present").attr('x');
		var presentY = $(".present .present").attr('y');
		var nextX = presentX + 1
		var nextY = presentY + 1
		var berforeX = presentX - 1
		var berforeY = presentY - 1
		var maxY = $('.present .present').attr('maxy');
		if (presentX === undefined) {
			var presentX = parseInt($(".present").attr('x'));
			var presentY = parseInt($(".present").attr('y'));
			var nextX = presentX + 1
			var nextY = presentY + 1
			var berforeX = presentX - 1
			var berforeY = presentY - 1
			var maxY = parseInt($('.present').attr('maxy'));
		} else {
			presentX = parseInt($(".present .present").attr('x'))
			presentY = parseInt($(".present .present").attr('y'))
			nextX = presentX + 1
			nextY = presentY + 1
			berforeX = presentX - 1
			berforeY = presentY - 1
			maxY = $('.present .present').attr('maxy');
		}
		if (presentX < countX) {
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
		var presentX = $(".present .present").attr('x');
		var presentY = $(".present .present").attr('y');
		var nextX = presentX + 1
		var nextY = presentY + 1
		var berforeX = presentX - 1
		var berforeY = presentY - 1
		var maxY = $('.present .present').attr('maxy');
		if (presentX === undefined) {
			var presentX = parseInt($(".present").attr('x'));
			var presentY = parseInt($(".present").attr('y'));
			var nextX = presentX + 1
			var nextY = presentY + 1
			var berforeX = presentX - 1
			var berforeY = presentY - 1
			var maxY = parseInt($('.present').attr('maxy'));
		} else {
			presentX = parseInt($(".present .present").attr('x'))
			presentY = parseInt($(".present .present").attr('y'))
			nextX = presentX + 1
			nextY = presentY + 1
			berforeX = presentX - 1
			berforeY = presentY - 1
			maxY = $('.present .present').attr('maxy');
		}
		if (isNaN(presentX)) {
			var presentX = parseInt($(".present .present").attr('x'));
			var presentY = parseInt($(".present .present").attr('y'));
			var nextX = presentX + 1
			var nextY = presentY + 1
			var berforeX = presentX - 1
			var berforeY = presentY - 1
			var maxY = parseInt($('.present .present').attr('maxy'));
		}
		if (presentX > 0) {
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
		var presentX = $(".present .present").attr('x');
		var presentY = $(".present .present").attr('y');
		var nextX = presentX + 1
		var nextY = presentY + 1
		var berforeX = presentX - 1
		var berforeY = presentY - 1
		var maxY = $('.present .present').attr('maxy');
		if (presentX === undefined) {
			var presentX = parseInt($(".present").attr('x'));
			var presentY = parseInt($(".present").attr('y'));
			var nextX = presentX + 1
			var nextY = presentY + 1
			var berforeX = presentX - 1
			var berforeY = presentY - 1
			var maxY = parseInt($('.present').attr('maxy'));
		} else {
			presentX = parseInt($(".present .present").attr('x'))
			presentY = parseInt($(".present .present").attr('y'))
			nextX = presentX + 1
			nextY = presentY + 1
			berforeX = presentX - 1
			berforeY = presentY - 1
			maxY = $('.present .present').attr('maxy');
		}
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
		var presentX = $(".present .present").attr('x');
		var presentY = $(".present .present").attr('y');
		var nextX = presentX + 1
		var nextY = presentY + 1
		var berforeX = presentX - 1
		var berforeY = presentY - 1
		var maxY = $('.present .present').attr('maxy');
		if (presentX === undefined) {
			var presentX = parseInt($(".present").attr('x'));
			var presentY = parseInt($(".present").attr('y'));
			var nextX = presentX + 1
			var nextY = presentY + 1
			var berforeX = presentX - 1
			var berforeY = presentY - 1
			var maxY = parseInt($('.present').attr('maxy'));
		} else {
			presentX = parseInt($(".present .present").attr('x'))
			presentY = parseInt($(".present .present").attr('y'))
			nextX = presentX + 1
			nextY = presentY + 1
			berforeX = presentX - 1
			berforeY = presentY - 1
			maxY = $('.present .present').attr('maxy');
		}
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

	$('.pres-f').click(
			function() {
				var presentX = $(".present .present").attr('x');
				var presentY = $(".present .present").attr('y');
				var nextX = presentX + 1
				var nextY = presentY + 1
				var berforeX = presentX - 1
				var berforeY = presentY - 1
				var maxY = $('.present .present').attr('maxy');
				if (presentX === undefined) {
					var presentX = parseInt($(".present").attr('x'));
					var presentY = parseInt($(".present").attr('y'));
					var nextX = presentX + 1
					var nextY = presentY + 1
					var berforeX = presentX - 1
					var berforeY = presentY - 1
					var maxY = parseInt($('.present').attr('maxy'));

					var selector = 'section.present[x=' + presentX
							+ '].present[y=' + presentY + ']';

					$(selector).addClass('past').removeClass('present').css({
						'visibility' : "hidden",
						'display' : 'none',
						'transform' : 'translate(-150%, 0)'
					})
					var selector = 'section.future[x=' + nextX + '].future[y='
							+ 0 + ']';
				} else {
					presentX = parseInt($(".present .present").attr('x'))
					presentY = parseInt($(".present .present").attr('y'))
					nextX = presentX + 1
					nextY = presentY + 1
					berforeX = presentX - 1
					berforeY = presentY - 1
					maxY = $('.present .present').attr('maxy');

					var selector = 'section.present[x=' + presentX
							+ '].present[y=' + presentY + ']';
					$(selector).parents('.stack').addClass('past').removeClass(
							'present').css({
						'visibility' : "hidden",
						'display' : 'none',
						'transform' : 'translate(-150%, 0)'
					})
					$('.past.stack .future').addClass('past').removeClass(
							'future').css({
						'visibility' : "hidden",
						'display' : 'none',
						'transform' : 'translate(-150%, 0)'
					})
					$('.past.stack .present').addClass('past').removeClass(
							'present').css({
						'visibility' : "hidden",
						'display' : 'none',
						'transform' : 'translate(-150%, 0)'
					})
				}

				var selector = 'section.future[x=' + nextX + '].future[y=' + 0
						+ ']';
				$(selector).addClass('present').removeClass('future').css({
					'visibility' : "visible",
					'display' : 'block',
					'transform' : 'translate(0, 0)'
				})
				var selector = 'section.past[x=' + nextX + '].past[y=' + 0
						+ ']';

				$(selector).parents('.stack').addClass('present').removeClass(
						'future').css({
					'visibility' : "visible",
					'display' : 'block',
					'transform' : 'translate(0, 0)'
				})
				$('.present .past').addClass('future').removeClass('past')
				var selector = 'section.future[x=' + nextX + '].future[y=' + 0
						+ ']';
				$(selector).addClass('present').removeClass('future').css({
					'visibility' : "visible",
					'display' : 'block',
					'transform' : 'translate(0, 0)'
				})
				presf();
				presb();
				prest();
				presbb();
				sectionDel();
			})
	// 뒤로

	$('.pres-b').click(
			function() {
				var presentX = $(".present .present").attr('x');
				var presentY = $(".present .present").attr('y');
				var nextX = presentX + 1
				var nextY = presentY + 1
				var berforeX = presentX - 1
				var berforeY = presentY - 1
				var maxY = $('.present .present').attr('maxy');
				if (presentX === undefined) {
					var presentX = parseInt($(".present").attr('x'));
					var presentY = parseInt($(".present").attr('y'));
					var nextX = presentX + 1
					var nextY = presentY + 1
					var berforeX = presentX - 1
					var berforeY = presentY - 1
					var maxY = parseInt($('.present').attr('maxy'));
					var selector = 'section.present[x=' + presentX
							+ '].present[y=' + presentY + ']';
					$(selector).addClass('future').removeClass('present').css({
						'visibility' : "hidden",
						'display' : 'none',
						'transform' : 'translate(150%, 0)'
					})

				} else {
					presentX = parseInt($(".present .present").attr('x'))
					presentY = parseInt($(".present .present").attr('y'))
					nextX = presentX + 1
					nextY = presentY + 1
					berforeX = presentX - 1
					berforeY = presentY - 1
					maxY = $('.present .present').attr('maxy');
					var selector = 'section.present[x=' + presentX
							+ '].present[y=' + presentY + ']';
					$(selector).parents('.stack').addClass('future')
							.removeClass('present').css({
								'visibility' : "hidden",
								'display' : 'none',
								'transform' : 'translate(150%, 0)'
							})
					$(selector).addClass('past').removeClass('present').css({
						'visibility' : "hidden",
						'display' : 'none',
						'transform' : 'translate(150%, 0)'
					})
				}

				var selector = 'section.past[x=' + berforeX + '].past[y=' + 0
						+ ']';
				$(selector).parents('.stack').addClass('present').removeClass(
						'past').css({
					'visibility' : "visible",
					'display' : 'block',
					'transform' : 'translate(0, 0)'
				})
				$('.present .past').addClass('future').removeClass('past')
				var selector = 'section.future[x=' + berforeX + '].future[y='
						+ 0 + ']';
				$(selector).addClass('present').removeClass('future').css({
					'visibility' : "visible",
					'display' : 'block',
					'transform' : 'translate(0, 0)'
				})
				var selector = 'section.past[x=' + berforeX + '].past[y=' + 0
						+ ']';
				$(selector).addClass('present').removeClass('past').css({
					'visibility' : "visible",
					'display' : 'block',
					'transform' : 'translate(0, 0)'
				})
				presf();
				presb();
				prest();
				presbb();
				sectionDel();
			})

	// 위로

	$('.pres-t').click(
			function() {
				var presentX = $(".present .present").attr('x');
				var presentY = $(".present .present").attr('y');
				var nextX = presentX + 1
				var nextY = presentY + 1
				var berforeX = presentX - 1
				var berforeY = presentY - 1
				var maxY = $('.present .present').attr('maxy');
				if (presentX === undefined) {
					var presentX = parseInt($(".present").attr('x'));
					var presentY = parseInt($(".present").attr('y'));
					var nextX = presentX + 1
					var nextY = presentY + 1
					var berforeX = presentX - 1
					var berforeY = presentY - 1
					var maxY = parseInt($('.present').attr('maxy'));
				} else {
					presentX = parseInt($(".present .present").attr('x'))
					presentY = parseInt($(".present .present").attr('y'))
					nextX = presentX + 1
					nextY = presentY + 1
					berforeX = presentX - 1
					berforeY = presentY - 1
					maxY = $('.present .present').attr('maxy');
				}

				if (presentY > 1) {
					var hereY = parseInt($('.present .present').attr('y')) - 1;
					var hereX = parseInt($('.present .present').attr('x'));
					$('.present .present').addClass('future').removeClass(
							'present').css({
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

					var hereX = parseInt($('.present .present').attr('x'));
					$('.present .present').addClass('future').removeClass(
							'present').css({
						'visibility' : "hidden",
						'display' : 'none',
						'transform' : 'translate(0, -150%)'
					})
					var selector = 'section.past[x=' + hereX + '].past[y=' + 0
							+ ']';
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

	// 아래$

	$('.pres-bb').click(
			function() {
				var presentX = parseInt($(".present .present").attr('x'))
				var presentY = parseInt($(".present .present").attr('y'))
				var nextX = presentX + 1
				var nextY = presentY + 1
				var berforeX = presentX - 1
				var berforeY = presentY - 1
				var maxY = $('.present .present').attr('maxy');
				if (maxY != 1) {
					$('.present .present').addClass('past').removeClass(
							'present').css({
						'visibility' : "hidden",
						'display' : 'none',
						'transform' : 'translate(0, -150%)'
					})
					var selector = 'section.future[x=' + presentX
							+ '].future[y=' + nextY + ']';
					$(selector).addClass('present').removeClass('future').css({
						'visibility' : "visible",
						'display' : 'block',
						'transform' : 'translate(0, 0)'
					})

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
		var presentX = $(".present .present").attr('x');
		var presentY = $(".present .present").attr('y');
		var nextX = presentX + 1
		var nextY = presentY + 1
		var berforeX = presentX - 1
		var berforeY = presentY - 1
		var maxY = $('.present .present').attr('maxy');
		if (presentX === undefined) {
			var presentX = parseInt($(".present").attr('x'));
			var presentY = parseInt($(".present").attr('y'));
			var nextX = presentX + 1
			var nextY = presentY + 1
			var berforeX = presentX - 1
			var berforeY = presentY - 1
			var maxY = parseInt($('.present').attr('maxy'));
		} else {
			presentX = parseInt($(".present .present").attr('x'))
			presentY = parseInt($(".present .present").attr('y'))
			nextX = presentX + 1
			nextY = presentY + 1
			berforeX = presentX - 1
			berforeY = presentY - 1
			maxY = $('.present .present').attr('maxy');
		}

		if (presentX > 0 || presentY > 0 || maxY != 1) {
			$(".section-delete").css({
				'visibility' : "visible",
				'color' : '#bbb6b8'
			});
		} else {
			$(".section-delete").css({
				'visibility' : "hidden",
				'color' : '#bbb6b8'
			});
		}

	}
	;
	// 섹션 삭제

	$('.section-delete').click(
			function() {
				var presentX = $(".present .present").attr('x');
				var presentY = $(".present .present").attr('y');
				var nextX = presentX + 1
				var nextY = presentY + 1
				var berforeX = presentX - 1
				var berforeY = presentY - 1
				var maxY = $('.present .present').attr('maxy');
				if (presentX === undefined) {
					var presentX = parseInt($(".present").attr('x'));
					var presentY = parseInt($(".present").attr('y'));
					var nextX = presentX + 1
					var nextY = presentY + 1
					var berforeX = presentX - 1
					var berforeY = presentY - 1
					var maxY = parseInt($('.present').attr('maxy'));
					$(".present").remove();
					// 전꺼 프리젠트로 만들기
					var selector = 'section.present[x=' + presentX
							+ '].present[y=' + presentY + ']';
					$(selector).addClass('future').removeClass('present').css({
						'visibility' : "hidden",
						'display' : 'none',
						'transform' : 'translate(150%, 0)'
					})

					var selector = 'section.past[x=' + berforeX + '].past[y='
							+ 0 + ']';
					$(selector).parents('.stack').addClass('present')
							.removeClass('past').css({
								'visibility' : "visible",
								'display' : 'block',
								'transform' : 'translate(0, 0)'
							})
					$('.present .past').addClass('future').removeClass('past')
					var selector = 'section.future[x=' + berforeX
							+ '].future[y=' + 0 + ']';
					$(selector).addClass('present').removeClass('future').css({
						'visibility' : "visible",
						'display' : 'block',
						'transform' : 'translate(0, 0)'
					})
					var selector = 'section.past[x=' + berforeX + '].past[y='
							+ 0 + ']';
					$(selector).addClass('present').removeClass('past').css({
						'visibility' : "visible",
						'display' : 'block',
						'transform' : 'translate(0, 0)'
					})
					// 전꺼 프리젠트로 만들기 끝
					// 후에 있는거 정리
					for (nextX; nextX <= countX; nextX++) {
						nowX = nextX - 1
						var selector = 'section.past[x=' + nextX + ']';
						$(selector).attr('x', nowX)

						var selector = 'section.future[x=' + nextX + ']';
						$(selector).attr('x', nowX)
					}

					countX--
				} else {
					presentX = parseInt($(".present .present").attr('x'));
					presentY = parseInt($(".present .present").attr('y'));
					nextX = presentX + 1
					nextY = presentY + 1
					berforeX = presentX - 1
					berforeY = presentY - 1
					maxY = $('.present .present').attr('maxy');
					// 맨밑에 꺼 삭제 할때
					if (presentY == 0) {
						var nextY = presentY;
						for (;; ++nextY) {
							var selector = 'section.future[x=' + presentX
									+ '].future[y=' + nextY + ']';
							var nowY = nextY - 1;
							var max = parseInt($(selector).attr('maxy'));
							$(selector).attr('y', nowY)
							if (max == 1) {
								break;
							}
						}

						$(".present .present").remove();

						var selector = 'section.future[x=' + presentX
								+ '].future[y=' + presentY + ']';
						$(selector).addClass('present').removeClass('future')
								.css({
									'visibility' : "visible",
									'display' : 'block',
									'transform' : 'translate(0, 0)'
								})
					} else if(maxY ==1){
						var nextY = presentY;
						for (;; ++nextY) {
							var selector = 'section.future[x=' + presentX
									+ '].future[y=' + nextY + ']';
							var nowY = nextY - 1;
							var max = parseInt($(selector).attr('maxy'));
							$(selector).attr('y', nowY)
							if (max == 1) {
								break;
							}
							if (nextY == 10){
								break;
							}
						}
						$(".present .present").remove();

						var selector = 'section.past[x=' + presentX
								+ '].past[y=' + berforeY + ']';
						$(selector).addClass('present').removeClass('past').attr('maxy', 1)
								.css({
									'visibility' : "visible",
									'display' : 'block',
									'transform' : 'translate(0, 0)'
								})
					}
					else{
						var nextY = presentY;
						for (;; ++nextY) {
							var selector = 'section.future[x=' + presentX
									+ '].future[y=' + nextY + ']';
							var nowY = nextY - 1;
							var max = parseInt($(selector).attr('maxy'));
							$(selector).attr('y', nowY)
							if (max == 1) {
								break;
							}
							if (nextY == 10){
								break;
							}
						}
						$(".present .present").remove();

						var selector = 'section.past[x=' + presentX
								+ '].past[y=' + berforeY + ']';
						$(selector).addClass('present').removeClass('past')
								.css({
									'visibility' : "visible",
									'display' : 'block',
									'transform' : 'translate(0, 0)'
								})
					}
					

					var selector = 'section.present[x=' + presentX
							+ '].present[y=' + 0 + ']';
					var solo = parseInt($(selector).attr('maxy'));
					if (solo == 1) {
						$(selector).unwrap();
					}	
				}
				presf();
				presb();
				prest();
				presbb();
				sectionDel();
			});
	// 섹션 삭제 끝

	// 세션 배경 색 설정
	$(".section-color").on(
			'click',
			function() {
				var presentX = $(".present .present").attr('x');
				if (presentX === undefined) {
					var initBackColor = rgb2hex($('.present').css(
							'background-color'));
					$(".section-color").val(initBackColor);
				} else {
					var initBackColor = rgb2hex($('.present .present').css(
							'background-color'));
					$(".section-color").val(initBackColor);
				}
			})

	$(".section-color").on(
			'change',
			function() {
				var presentX = $(".present .present").attr('x');
				if (presentX === undefined) {
					$(".sl-block-grid").css('background-color', $(this).val()).attr(
							'data-background-color', $(this).val());
				} else {
					$(".present .present").css('background-color',
							$(this).val()).attr('data-background-color',
							$(this).val());
				}
			});

});