
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
$(function(){

$( ".wrapper" ).hover(
  function() {
	  $("div.nav-item").css('visibility', 'visible');
  }, function() {
		$("div.nav-item").css('visibility', 'hidden');
  }
);

$( "div.nav-item" ).hover(
		  function() {
			  $("div.nav-item").css('visibility', 'visible');
		  }, function() {
				$("div.nav-item").css('visibility', 'hidden');
		  }
		);
 

//text
$( ".toolbar-text" ).click(
		function() {
			 $(".toolbar-list").css('visibility', 'hidden');
			 $(".text-list").css('visibility', 'visible');
		  }
		);

$(".page-wrapper").not($(".text-list")).click(
		function() {
			 $(".text-list").css('visibility', 'hidden');
			 $(".toolbar-list").css('visibility', 'visible');
		  }
		);


$( ".toolbar-group-trigger" ).click(
		function() {
			if(!$(this).hasClass("open")){
			 $(".toolbar-group-options").css({
				 'height': '274px',
				 'visibility': 'visible',
				 'opacity': '1'
			 });
			 $(this).addClass("open");
			 } else if($(this).hasClass("open")){
			 $(".toolbar-group-options").css({
				 'height': '0px',
				 'visibility': 'hidden',
				 'opacity': '0'
			 });
			 $(this).removeClass("open");
			 }
			}
		);

$(".page-wrapper").not($(".text-list")).click(
		function() {
			 $(".text-list").css('visibility', 'hidden');
			 $(".toolbar-group-options").css({
				 'height': '0px',
				 'visibility': 'hidden',
				 'opacity': '0'
			 });
			 $(this).removeClass("open");
			 }
		);

//image
$( ".toolbar-image" ).click(
		function() {
			 $(".toolbar-list").css('visibility', 'hidden');
			 $(".image-list").css('visibility', 'visible');
		  }
		);

$(".page-wrapper").not($(".image-list")).click(
		function() {
			 $(".image-list").css('visibility', 'hidden');
			 $(".toolbar-list").css('visibility', 'visible');
		  }
		);

//shape
$( ".toolbar-shape" ).click(
		function() {
			 $(".toolbar-list").css('visibility', 'hidden');
			 $(".shape-list").css('visibility', 'visible');
		  }
		);

$(".page-wrapper").not($(".image-list")).click(
		function() {
			 $(".shape-list").css('visibility', 'hidden');
			 $(".toolbar-list").css('visibility', 'visible');
		  }
		);

//iframe
$( ".toolbar-iframe" ).click(
		function() {
			 $(".toolbar-list").css('visibility', 'hidden');
			 $(".iframe-list").css('visibility', 'visible');
		  }
		);

$(".page-wrapper").not($(".image-list")).click(
		function() {
			 $(".iframe-list").css('visibility', 'hidden');
			 $(".toolbar-list").css('visibility', 'visible');
		  }
		);

//code
$( ".toolbar-code" ).click(
		function() {
			 $(".toolbar-list").css('visibility', 'hidden');
			 $(".code-list").css('visibility', 'visible');
		  }
		);

$(".page-wrapper").not($(".image-list")).click(
		function() {
			 $(".code-list").css('visibility', 'hidden');
			 $(".toolbar-list").css('visibility', 'visible');
		  }
		);

//math
$( ".toolbar-math" ).click(
		function() {
			 $(".toolbar-list").css('visibility', 'hidden');
			 $(".math-list").css('visibility', 'visible');
		  }
		);

$(".page-wrapper").not($(".image-list")).click(
		function() {
			 $(".math-list").css('visibility', 'hidden');
			 $(".toolbar-list").css('visibility', 'visible');
		  }
		);


//$(".page-wrapper").not($(".image-list")).click(
//		function() {
//			 $(".math-list").css('visibility', 'hidden');
//			 $(".toolbar-list").css('visibility', 'visible');
//		  }
//		);

//\$( "div.nav-item" ).onclick(
//				  function() {
//					  $(".toolbars .toolbar .toolbar-list").css('visibility', 'visible');
//				  }, function() {
//						$(".toolbars .toolbar .text-list").css('visibility', 'hidden');
//				  }
//				);
	
});