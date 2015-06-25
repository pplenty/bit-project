
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
 
	
});