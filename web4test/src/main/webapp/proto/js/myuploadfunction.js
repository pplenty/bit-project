$(function () {
//    $('#fileupload').fileupload());

	//파일업로드 클릭 이벤트
	$('#fileupload').click(function(event) {
		$('#fileupload').fileupload();
		$('div.modal').modal('hide');
	});
    
	  
//	<!-- 이미지 버튼 클릭 -->
	 $('.toolbar-image').on('click', function() {
		 refreshAjax();
		 console.log("fkfk");
		 $('div.modal').modal('show');
	});

////	<!-- 파일업로드 -->
//	$(function() {
//		$('#btn').click(function() {
//			console.log('aassaass');
//			var formData = new FormData();
//			formData.append('file', $('input[name=file]').val());
//			
//			$.ajax({
//				url: '/web4test/file.do',
//				data: formData,
//				processData: false,
//				contentType: false,
//				type: 'POST',
//				success: function(data) {
//					alert('bbbb');
//					alert('리프레쉬 호출');
//					refreshAjax();
//				}
//			});
//			
//		});
//	});

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
	    	  console.log("11111111111111" + result.data);
	        var rows = result.data;
	        
	        $('#img-div > img').remove();
	        
	        for (var i in rows) {
	            $('#img-div').append(
	            		"<img src=\'" + rows[i].thumbnailPath + "\' class='pnt show-images'" +
	            				" data-image=\'" + rows[i].filePath + "\'>");
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
		
		$('section').append("<div class='sl-block' data-block-type='image' style='min-width: 30px; width: 360px; height: 225px; left: 300px; top: 237.5px;'> <div class='sl-block-content'> <img src='" + imgShow + "'data-natural-width='1024' data-natural-height='640'></div></div>");
		
		
		$('div.modal').modal('hide');

	 });
	
});