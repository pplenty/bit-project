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

	$(".toolbar-group-trigger").click(function() {
		if (!$(this).hasClass("open")) {
			$(".toolbar-group-options").css({
				'height' : '274px',
				'visibility' : 'visible',
				'opacity' : '1'
			});
			$(this).addClass("open");
		} else if ($(this).hasClass("open")) {
			$(".toolbar-group-options").css({
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
	
	$(".toolbar-select-item1").click(function(){
		$(".toolbar-select-trigger").text($(".toolbar-select-item1").text());
		});
	$(".toolbar-select-item2").click(function(){
		$(".toolbar-select-trigger").text($(".toolbar-select-item2").text());
		});
	$(".toolbar-select-item3").click(function(){
		$(".toolbar-select-trigger").text($(".toolbar-select-item3").text());
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
		$(".toolbar-group-options").css({
			'height' : '0px',
			'visibility' : 'hidden',
			'opacity' : '0'
		});
		$(this).removeClass("open");
	});
	
	
	// - font-size 관리 변수
	var fontSizeInput;
	
	//-font-size 스크롤 조정
	$(".font.size-scroll").on("mousemove", function(ev){	
		fontSizeInput = $(ev.target).val();
			$(".font.size-box").val(fontSizeInput);
			console.log(fontSizeInput);
		}); 

// TEXT - font 사이즈 관리			
	//-font-size 스크롤 완료
	$(".font.size-scroll").on("mouseup", function(){
		$(".font.size-box").val(fontSizeInput);

	});
		//- font size 직접 입력받기
		 $(".font.size-scroll").on("dblclick", function(ev){
			$(this).css("z-index", "0");
			$(this).addClass("back");
			$(".font.size-box").focus();
			fontSizeInput = $(".font.size-box").val();			
		}); 
   // - font size 입력 완료
	$(document).not($(".font.size-box")).click(function(){
		    	$(".font.size-scroll").css("z-index", "2");
		    	$(".font.size-scroll").removeClass("back");
		    });

//	
	
	// image
	$(".toolbar-image").click(function() {
		$(".toolbar-list").css('visibility', 'hidden');
		$(".image-list").css('visibility', 'visible');
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