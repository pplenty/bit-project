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

//이혜인 
// - font-size 관리 변수
var fontSizeInput;

//-font-size 스크롤 조정
$(".font.size-scroll").on("mousemove", function(ev) {
	fontSizeInput = $(ev.target).val();
	$(".text-list .font.size-box").val(fontSizeInput);
});

// TEXT - font 사이즈 관리			
//-font-size 스크롤 완료
$(".text-list .font.size-scroll").on("mouseup", function() {
	$(".text-list .font.size-box").val(fontSizeInput);

});
//- font size 직접 입력받기
$(".text-list .font.size-scroll").on("dblclick", function(ev) {
	$(this).css("z-index", "0");
	$(this).addClass("back");
	$(".font.size-box").focus();
	fontSizeInput = $(".text-list .font.size-box").val();
});
// - font size 입력 완료
$(document).not($(".text-list .font.size-box")).click(function() {
	$(".text-list .font.size-scroll").css("z-index", "2");
	$(".text-list .font.size-scroll").removeClass("back");
});

//	

//Text
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

	$(".text-list .toolbar-group-trigger").click(function() {
		if (!$(this).hasClass("open")) {
			$(".text-list .toolbar-group-trigger").addClass("open");
			console.log("작동2")
			console.log(this)
//			$(".text-list .toolbar-group-options").css({
//				'height' : '274px',
//				'visibility' : 'visible',
//				'opacity' : '1'
//			});
//			
//		} else if ($(".text-list .toolbar-group-trigger").hasClass("open")) {
//			$(".text-list .toolbar-group-options").css({
//				'height' : '0px',
//				'visibility' : 'hidden',
//				'opacity' : '0'
//			});
//			$(this).removeClass("open");
		}
	});
	$(".text-list .toolbar-select .toolbar-select-trigger").hover(function() {
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

	$(".toolbar-select-item1").click(function() {
		$(".toolbar-select-trigger").text($(".toolbar-select-item1").text());
		console.log("1")
	});
	$(".toolbar-select-item2").click(
			function() {
				$(".text-list .toolbar-select-trigger").text(
						$(".toolbar-select-item2").text());
				console.log("2")
			});
	$(".toolbar-select-item3").click(
			function() {
				$(".text-list .toolbar-select-trigger").text(
						$(".toolbar-select-item3").text());
				console.log("3")
			});

	$(".text-toolbar-panel").hover(function() {
		$(".text-toolbar-panel").css('visibility', 'visible');
	}, function() {
		$(".text-toolbar-panel").css('visibility', 'hidden');
	});

	$(".page-wrapper").not($(".text-list .text-toolbar-panel")).click(
			function() {
				if ($(".text-list .text-toolbar-panel").hasClass("open")) {
					$(".text-list .toolbar-group-options-inner").css({
						'visibility' : 'hidden',
					});
					$(".text-list .text-toolbar-panel").removeClass("open");
				}
				if ($(".text-list .toolbar-group-trigger").hasClass("open")) {
					$(".text-list .toolbar-group-trigger").removeClass("open");
				}
			});

	$(" .page-wrapper").not($(".text-list")).click(function() {
		$(".text-list").css('visibility', 'hidden');
		$(".text-list .toolbar-group-options").css({
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

	$(".image-list .toolbar-group-trigger").click(function() {
		if (!$(this).hasClass("open")) {
			$("..image-list .toolbar-group-options").css({
				'height' : '274px',
				'visibility' : 'visible',
				'opacity' : '1'
			});
			$(this).addClass("open");
		} else if ($(this).hasClass("open")) {
			$("..image-list .toolbar-group-options").css({
				'height' : '0px',
				'visibility' : 'hidden',
				'opacity' : '0'
			});
			$(this).removeClass("open");
		}
	});
	$(".image-list .toolbar-select .toolbar-select-trigger").hover(function() {
		console.log("작동 ")
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

	$(".toolbar-select-item1").click(function() {
		$(".image-list .toolbar-select-trigger").text($(".toolbar-select-item1").text());
		console.log("1")
	});
	$(".toolbar-select-item2").click(
			function() {
				$(".image-list  .toolbar-select-trigger").text(
						$(".toolbar-select-item2").text());
				console.log("2")
			});
	$(".toolbar-select-item3").click(
			function() {
				$(".image-list .toolbar-select-trigger").text(
						$(".toolbar-select-item3").text());
				console.log("3")
			});

	$(".image-toolbar-panel").hover(function() {
		$(".image-toolbar-panel").css('visibility', 'visible');
	}, function() {
		$(".image-toolbar-panel").css('visibility', 'hidden');
	});

	$(".page-wrapper").not($(".text-list .text-toolbar-panel")).click(
			function() {
				if ($(".text-list .text-toolbar-panel").hasClass("open")) {
					$(".text-list .toolbar-group-options-inner").css({
						'visibility' : 'hidden',
					});
					$(".text-list .text-toolbar-panel").removeClass("open");
				}
				if ($(".text-list .toolbar-group-trigger").hasClass("open")) {
					$(".text-list .toolbar-group-trigger").removeClass("open");
				}
			});

	$(" .page-wrapper").not($(".text-list")).click(function() {
		$(".text-list").css('visibility', 'hidden');
		$(".text-list .toolbar-group-options").css({
			'height' : '0px',
			'visibility' : 'hidden',
			'opacity' : '0'
		});
		$(this).removeClass("open");
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

	$(".text-list .toolbar-group-trigger").click(function() {
		if (!$(this).hasClass("open")) {
			$(".text-list .toolbar-group-options").css({
				'height' : '274px',
				'visibility' : 'visible',
				'opacity' : '1'
			});
			$(this).addClass("open");
		} else if ($(this).hasClass("open")) {
			$(".text-list .toolbar-group-options").css({
				'height' : '0px',
				'visibility' : 'hidden',
				'opacity' : '0'
			});
			$(this).removeClass("open");
		}
	});
	$(".text-list .toolbar-select .toolbar-select-trigger").hover(function() {
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

	$(".toolbar-select-item1").click(function() {
		$(".toolbar-select-trigger").text($(".toolbar-select-item1").text());
		console.log("1")
	});
	$(".toolbar-select-item2").click(
			function() {
				$(".text-list .toolbar-select-trigger").text(
						$(".toolbar-select-item2").text());
				console.log("2")
			});
	$(".toolbar-select-item3").click(
			function() {
				$(".text-list .toolbar-select-trigger").text(
						$(".toolbar-select-item3").text());
				console.log("3")
			});

	$(".text-toolbar-panel").hover(function() {
		$(".text-toolbar-panel").css('visibility', 'visible');
	}, function() {
		$(".text-toolbar-panel").css('visibility', 'hidden');
	});

	$(".page-wrapper").not($(".text-list .text-toolbar-panel")).click(
			function() {
				if ($(".text-list .text-toolbar-panel").hasClass("open")) {
					$(".text-list .toolbar-group-options-inner").css({
						'visibility' : 'hidden',
					});
					$(".text-list .text-toolbar-panel").removeClass("open");
				}
				if ($(".text-list .toolbar-group-trigger").hasClass("open")) {
					$(".text-list .toolbar-group-trigger").removeClass("open");
				}
			});

	$(" .page-wrapper").not($(".text-list")).click(function() {
		$(".text-list").css('visibility', 'hidden');
		$(".text-list .toolbar-group-options").css({
			'height' : '0px',
			'visibility' : 'hidden',
			'opacity' : '0'
		});
		$(this).removeClass("open");
	});

	$(".page-wrapper").not($(".image-list")).click(function() {
		$(".image-list").css('visibility', 'hidden');
		$(".toolbar-list").css('visibility', 'visible');
	});

	// shape
	$(".toolbar-shape").click(function() {
		$(".toolbar-list").css('visibility', 'hidden');
		$(".shape-list").css('visibility', 'visible');
	});

	$(".page-wrapper").not($(".image-list")).click(function() {
		$(".shape-list").css('visibility', 'hidden');
		$(".toolbar-list").css('visibility', 'visible');
	});

	// iframe
	$(".toolbar-iframe").click(function() {
		$(".toolbar-list").css('visibility', 'hidden');
		$(".iframe-list").css('visibility', 'visible');
	});

	$(".page-wrapper").not($(".image-list")).click(function() {
		$(".iframe-list").css('visibility', 'hidden');
		$(".toolbar-list").css('visibility', 'visible');
	});

	// code
	$(".toolbar-code").click(function() {
		$(".toolbar-list").css('visibility', 'hidden');
		$(".code-list").css('visibility', 'visible');
	});

	$(".page-wrapper").not($(".image-list")).click(function() {
		$(".code-list").css('visibility', 'hidden');
		$(".toolbar-list").css('visibility', 'visible');
	});

	// math
	$(".toolbar-math").click(function() {
		$(".toolbar-list").css('visibility', 'hidden');
		$(".math-list").css('visibility', 'visible');
	});

	$(".page-wrapper").not($(".image-list")).click(function() {
		$(".math-list").css('visibility', 'hidden');
		$(".toolbar-list").css('visibility', 'visible');
	});

	// $(".page-wrapper").not($(".image-list")).click(
	// function() {
	// $(".math-list").css('visibility', 'hidden');
	// $(".toolbar-list").css('visibility', 'visible');
	// }
	// );

	// \$( "div.nav-item" ).onclick(
	// function() {
	// $(".toolbars .toolbar .toolbar-list").css('visibility', 'visible');
	// }, function() {
	// $(".toolbars .toolbar .text-list").css('visibility', 'hidden');
	// }
	// );

});