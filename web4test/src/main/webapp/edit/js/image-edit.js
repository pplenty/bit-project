$(function(){
//	var preX ;
//	var moveX;
//	var sLineWidthFinalInput;
//	var sLineFlag = false;
//	var spxLineWidthSize;
//	var snumLineWidthSize;
//	var i;
//	var objContent;
//	var middle;
//	
	//-투명도 값 스크롤 조정
	var iopSizeInput;
	var iopFlag = false;
	$(".image.opacity.size-scroll").on('mousedown', function(event){
		iopFlag = true;
		if(iopFlag == true){
		$(".image.opacity.size-scroll").on("mousemove", function(ev){
			iopSizeInput = $(ev.target).val();
			$(".image.opacity.size-box").val(iopSizeInput);
		}); 
		}
	})
	//-투명도 값 스크롤 조정
		$(".image.opacity.size-scroll").on('mousedown', function(event){
			iopFlag = true;
			if(iopFlag == true){
			$(".image.opacity.size-scroll").on("mousemove", function(ev){	
				iopSizeInput = $(ev.target).val();
				$(".image.opacity.size-box").val(iopSizeInput);
		    }); 
		  }
	    })
			
	//-투명도값 관리 
		$(".image.opacity.size-scroll").on("mouseup", function(){
		   objContent = $(".isFocus").children('.sl-block-content');
		   $(".image.opacity.size-box").val(iopSizeInput );
			objContent.css('opacity', iopSizeInput);		
			iopFlag = false;
		});
			
	//- 투명도값 직접 입력받기
	$(".image.opacity.size-scroll").on("dblclick", function(ev){
		objContent = $(".isFocus").children('.sl-block-content');
	  $(this).css("z-index", "0");
	  $(this).addClass("back");
	  $(".image.opacity.size-scroll").focus();
		  	$(".image.opacity.size-box").on('keyup', function(){
		  		iopSizeInput = $(".image.opacity.size-box").val();
				objContent.css('opacity', iopSizeInput);		
			});// 입력값 적용 
	 }); 
	
	 // - 투명도 직접 입력 받기 해제
	$(document).not($(".image.opacity.size-box")).click(function(){
      $("image.opacity.size-scroll").css("z-index", "16");
      $("image.opacity.size-scroll").removeClass("back");
	});

	//투명도값 적용
	$(".image.opacity.size-scroll").on('change', function(){
		console.log("투명도 적용")
	  $('.sl-block.isFocus').css('opacity', $(this).val());
	});

//	// 디폴트 선 설정 및 적용
	$('.image.border.checkbox').on('click', function(){
		if($('.image.border.checkbox').prop('checked')){
			$(".sl-block.isFocus .sl-block-content").css('border-width','1px');
			$(".sl-block.isFocus .sl-block-content").css('border-style','solid');
			$(".sl-block.isFocus .sl-block-content").css('border-color','black');
		} else {
			$(".sl-block.isFocus .sl-block-content").css('border','');
		}
	});
	
	var lineStyle
	$(".image-toolbar-panel").on('click', function(){
		lineStyle = $(".image-toolbar-select-trigger").text();
		$(".sl-block.isFocus .sl-block-content").css('border-style', lineStyle);
	});
	
// image 박스 Border 관리
$(".image.border-width.size-box").on('mousedown', function(){	
	objContent = $(".isFocus").children('.sl-block-content');	
	ipxLineWidthSize = objContent.css('border-width');	
	inumLineWidthSize = pxRemove(ipxLineWidthSize);
	$(".image.border-width.size-box").val(inumLineWidthSize);
    preX = event.offsetX;
    i = parseInt($(".image.border-width.size-box").val());
    iLineFlag = true;
    	
    	$(".image.border-width.size-box").on('mousemove', function(ev){
    		if(iLineFlag == true){ // 마우스 무브 
    		moveX = ev.offsetX;
    		if(preX < moveX){
    				 if(i < 100){
    					 i = parseInt($(".image.border-width.size-box").val());
    					 middle = $(".image.border-width.size-box").val(i+1);
    					 objContent.css('border-width', middle + 'px');
    				 }// 증가 범위 설정
    				 else if (i > 100){
    					 $(".image.border-width.size-box").val(100);
    				 } // 최고점 100 마지막 괄호
    		}// 오른쪽 으로 움직일 때 닫는 괄호
    		else if(moveX < preX){ // 왼쪽으로 움직일 때
    			if (i > 1){ // 일반적 감소
    				i = parseInt($(".image.border-width.size-box").val());
    				middle = $(".image.border-width.size-box").val(i -1);	    					 
    				objContent.css('border-width', middle + 'px'); 				
    				}// 감소할 때 값 마지막 괄호
    			else if (i <= 1){
    				i = parseInt($(".image.border-width.size-box").val());
    				$(".image.border-width.size-box").val(1);
    				}// 감소 최저값
    		} // 왼쪽으로 움직일 때 마지막 괄호
     }// 마우스 무브 열림 내용 닫는 괄호
});// 마우스 무브 마지막 괄호
    	
});

$(".image.border-width.size-box").on('mouseup', function(){
	iLineFlag = false;
	preX = '0';
	$(".image.border-width.size-box").blur();
	iLineWidthFinalInput = $(".image.border-width.size-box").val();
	objContent.css('border-width', iLineWidthFinalInput + 'px');
});// 마우스 업일 때 동작 해제

$(".image.border-width.size-box").on('dblclick', function(){ // 직접 입력받기
	$(".image.border-width.size-box").focus();
	iLineWidthFinalInput = $(".image.border-width.size-box").val();
	objContent.css('border-width', iLineWidthFinalInput +'px');
}); // 직접 입력 받기
		

$('.image-border-colorinput').on('change', function(){
	iBorderColor = $(this).val();
    var iBorderColorCheck = rgb2hex(iBorderColor); 
    if(iBorderColorCheck == '#ffffff'){ //투명값일 경우
    	$('.image.border.checkbox').prop('checked', false) // 체크박스에 표시 안되게 해야함
    } else {
    	$('.image.border.checkbox').prop('checked', 'true') // 체크박스에 표시하기 
    }
	$('.sl-block.isFocus .sl-block-content').css('border-color', iBorderColorCheck);			
});
	

//image 박스 Border Radius 관리
$(".image.border-radius.size-box").on('mousedown', function(){	
	objContent = $(".isFocus").children('.sl-block-content')
	ipxLineRadius = objContent.css('border-radius');
	inumLineRadius = pxRemove(ipxLineRadius);
	$(".image.border-radius.size-box").val(inumLineRadius);
    preX = event.offsetX;
    i = parseInt($(".image.border-radius.size-box").val());
    iLineFlag = true;
    	
    	$(".image.border-radius.size-box").on('mousemove', function(ev){
    		if(iLineFlag == true){ // 마우스 무브 
    		moveX = ev.offsetX;
    		if(preX < moveX){
    				 if(i < 100){
    					 i = parseInt($(".image.border-radius.size-box").val());
    					 middle = $(".image.border-radius.size-box").val(i+1);
    					 objContent.css('border-width', middle + 'px');
    				 }// 증가 범위 설정
    				 else if (i > 100){
    					 $(".image.border-radius.size-box").val(100);
    				 } // 최고점 100 마지막 괄호
    		}// 오른쪽 으로 움직일 때 닫는 괄호
    		else if(moveX < preX){ // 왼쪽으로 움직일 때
    			if (i > 1){ // 일반적 감소
    				i = parseInt($(".image.border-radius.size-box").val());
    				middle = $(".image.border-radius.size-box").val(i -1);	    					 
    				objContent.css('border-width', middle + 'px'); 				
    				}// 감소할 때 값 마지막 괄호
    			else if (i <= 1){
    				i = parseInt($(".image.border-radius.size-box").val());
    				$(".image.border-radius.size-box").val(1);
    				}// 감소 최저값
    		} // 왼쪽으로 움직일 때 마지막 괄호
     }// 마우스 무브 열림 내용 닫는 괄호
});// 마우스 무브 마지막 괄호
    	
});

$(".image.border-radius.size-box").on('mouseup', function(){	
	objContent = $(".isFocus").children('.sl-block-content')	
	var objImg = objContent.children("img");
	iLineFlag = false;
	preX = '0';
	$(".image.border-radius.size-box").blur();
	iLineRadiusFinalInput = $(".image.border-radius.size-box").val();
	objContent.css('border-radius', iLineRadiusFinalInput + 'px');
	objImg.css('border-radius',  iLineRadiusFinalInput + 'px');
});// 마우스 업일 때 동작 해제

$(".image.border-radius.size-box").on('dblclick', function(){ // 직접 입력받기
	console.log("wlrwjq")
	objContent = $(".isFocus").children('.sl-block-content')	
	var objImg = objContent.children('img')
	$(".image.border-radius.size-box").focus();
		$(".image.border-radius.size-box").onblur(function(){ // 직접 연결 해제
			iLineRadiusFinalInput = $(".image.border-radius.size-box").val();
			objContent.css('border-radius', iLineRadiusFinalInput +'px');
			objImg.css('border-radius',  iLineRadiusFinalInput + 'px');
		}); // 키업 마지막 괄호
	$("image.border-radius.size-box").val(iLineRadiusFinalInput);
}); // 직접 입력 받기
	
	
});

function pxRemove(inputVal){
	var inputNum = inputVal.slice(0, -2);
    return  parseInt(inputNum);
}

