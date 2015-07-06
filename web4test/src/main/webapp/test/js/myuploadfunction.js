$(document).ready(function () {

	//파일업로드 클릭 이벤트
	$('#fileupload').click(function(event) {
		$('#fileupload').fileupload();
	});
    
	  
//	<!-- 이미지 버튼 클릭 -->
	 $('.toolbar-image').click(function(event) {
		 refreshAjax();
		 $('div.modal').modal('show');
	});


//	<!-- 이미지 뿌리는 요청 -->
	function refreshAjax(){
	    $.ajax('/web4test/showimage.do', {
	      method: 'GET',
	      dataType: 'json',
	      data: {
	        userNo: 1,
	        preNo: 1
	      },
	      success: function(result) {
	    	  console.log("refreshAjax()" + result.data);
	        var rows = result.data;
	        $('#img-div > span').remove();
	        
	        for (var i in rows) {
	            $('#img-div').append(
	            		"<span class='blur pic'><img src=\'" + rows[i].thumbnailPath + "\' class='pnt show-images'" +
	            				" data-image=\'" + rows[i].filePath + "\' style='padding: 5px 5px 5px 5px; border-radius: 25px;' radius></span>");
	          }
	      },
	      error: function(e) {
	        alert('refreshAjax() 에러');
	      }
	    });
	  }
	
//	<!-- 이미지 선택 요청 -->
	$('body').on('dblclick', '.show-images', function(event) {
		console.log('클릭!');
		var imgShow = $(this).attr('data-image');
		
		console.log("imgShow: " + imgShow);
		
		$('section').append("<div class='sl-block' data-block-type='image' style='min-width: 30px; width: 360px; height: 225px; left: 300px; top: 237.5px;'> " +
				"<div class='sl-block-content'> <img src='" + imgShow + "'data-natural-width='1024' data-natural-height='640'" +
						"style='width: 100%; height: 100%; margin: 0; padding: 0; border: 0; vertical-align: top;'></div></div>");
		
		
		$('div.modal').modal('hide');

	 });
	
});