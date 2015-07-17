$(document).ready(function() {
	$('.set').click(function() {
//		$('.setMemo').css('visibility', 'visible');
//		$('.setMemo').toggle(true, false);
		$('.setMemo').toggle('fast');
	});
	
	
	$('.conBtn').click(function() {
		$('.conBtn').toggle();
		$('.disBtn').toggle();
	});

	
	$('.disBtn').click(function() {
		$('.disBtn').toggle();
		$('.conBtn').toggle();
		
	});
});