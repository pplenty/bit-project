$(function(){


	//<iframe width="560" height="315" src="https://www.youtube.com/embed/0Fq3jzAjsdM" frameborder="0" allowfullscreen></iframe>
	
	$(".toolbar-add-block-option[data-block-type='iframe']").on('click', function(){
		var presentSection = $('section.present')
		
		if ($('.sl-block.isFocus').length == 0) {
					var blockText = $('<div>')
					.addClass("sl-block")
					.attr({
							'data-block-type': 'iframe',
							'data-block-blockId': blockId++
							//'draggable': true
						})
					.css({
						'height' : 'auto',
						'min-width' : '30px',
						'min-height' : '30px',
						'width' : '600px',
						'left' : '80px',
						'top' : '191px',
						'color' : 'rgb(0,0,0)',
//						'background-color' : 'rgb(255,255,255)',
//						'border' : '1px solid rgb(255,255,255)',
						//'font-size' : '50px'
					}).appendTo(presentSection);
					
			var blockContent = 
				$("<div>")
				.addClass("sl-block-content")
				.css({
					'z-index' : '11',
					//'padding' : '10px',
					"font-size": "20px",
				    "opacity" : "1"
						
				}).appendTo(blockText);
			
		$('<iframe>')
			.addClass('test')
			.attr('allowFullScreen', 'true')
			.attr('sandbox', 'allow-forms allow-scripts allow-popups allow-same-origin allow-pointer-lock')
			.attr('height', '100%')
			.attr('width', '100%')
			.appendTo(blockContent);
		
		} // 선택한게 없는 상태에서 버튼 클릭시 iframe 생성
		else if ($('.sl-block.isFocus').length > 0) {
			var initOpacity = $('.sl-block.isFocus').css('opacity');
			$('.iframe.opacity.size-scroll').val(initOpacity);
			$('.iframe.opacity.size-box').val(initOpacity);
			
			var initPadding = $('.sl-block.isFocus').css('padding');
			var nInitPadding = pxRemove(initPadding);
			$('.iframe.padding.size-box').val(nInitPadding);
			
			// 선 유무 체크 박스
		    var initBorderYn = rgb2hex($(".sl-block.isFocus").css('border-color')); 
		    console.log(initBorderYn);
		    if(initBorderYn == '#ffffff'){ //투명값일 경우
		    	$('.iframe-checkbox').prop('checked', false) // 체크박스에 표시 안되게 해야함
		    } else {
		    	$('.iframe-checkbox').prop('checked', 'true') // 체크박스에 표시하기 
		    }			
		    
			var initBorderWidth = $('.sl-block.isFocus').css('border-width');
			var nInitBorderWidth = pxRemove(initBorderWidth);
			$('.iframe.border-width.size-box').val(nInitBorderWidth);
			
			///////// 색깔 초기값 입력
			var initBorderColor = rgb2hex($('.sl-block.isFocus').css('border-color'));
		    $('.iframe-border-colorinput').val(initBorderColor);
			
			
			$(".toolbar-list").css('visibility', 'hidden');
			$(".iframe-list").css('visibility', 'visible');
			
		}// 선택한게 있을 경우에는 iframe 만 고치기 
				
	});// 아이프레임 만들기 
	
	
	$('.toolbar-text-input').on('focusin', function(){
		console.log("ok")
		$(this).blur(function(){		
			var objFrame = $('.sl-block.isFocus .sl-block-content .test');
			objFrame.attr('src', $('.toolbar-text-input').val() );
		});
	});
	  
	
	// 투명도 관리
	//-투명도 값 스크롤 조정
	var fopSizeInput;
	var fopFlag = false;
	$(".iframe.opacity.size-scroll").on('mousedown', function(event){
		fopFlag = true;
		if(fopFlag == true){
		$(".iframe.opacity.size-scroll").on("mousemove", function(ev){	
			fopSizeInput = $(ev.target).val();
			$(".iframe.opacity.size-box").val(fopSizeInput);
		}); 
		}
	})
	//-투명도 값 스크롤 조정
		$(".iframe.opacity.size-scroll").on('mousedown', function(event){
			fopFlag = true;
			if(fopFlag == true){
			$(".iframe.opacity.size-scroll").on("mousemove", function(ev){	
				fopSizeInput = $(ev.target).val();
				$(".iframe.opacity.size-box").val(fopSizeInput);
		    }); 
		  }
	    })
			
	//-투명도값 관리 
		$(".iframe.opacity.size-scroll").on("mouseup", function(){
		   objContent = $(".isFocus").children('.sl-block-content');
		   fopSizeInput = $('.iframe.opacity.size-box').val();
		   $(".iframe.opacity.size-box").val(fopSizeInput);
			objContent.css('opacity', fopSizeInput);		
			fopFlag = false;
		});
			
	//- 투명도값 직접 입력받기
	$(".iframe.opacity.size-scroll").on("dblclick", function(ev){
		objContent = $(".isFocus").children('.sl-block-content');
	  $(this).css("z-index", "0");
	  $(this).addClass("back");
	  $(".iframe.opacity.size-box").focus();
		  	$(".iframe.opacity.size-box").on('keyup', function(){
		  		fopSizeInput = $(".iframe.opacity.size-box").val();
				objContent.css('opacity', fopSizeInput);		
			});// 입력값 적용 
	 }); 
	
	 // - 투명도 직접 입력 받기 해제
	$(document).not($(".iframe.opacity.size-box")).click(function(){
      $(".iframe.opacity.size-scroll").css("z-index", "16");
      $(".iframe.opacity.size-scroll").removeClass("back");
	});

	//투명도값 적용
	$('.iframe.opacity.size-scroll').on('change', function(){	
	  $('.sl-block.isFocus .sl-block-content').css({'opacity': $(this).val()});
	});
	
	
	/// iframe 패딩값 관리
	
	
	
	
	// iframe 박스 Border 관리
 // border 유무 
	$('.iframe-checkbox').on('click', function(){
		if($('.iframe-checkbox').prop('checked')){
			$(".sl-block.isFocus .sl-block-content").css('border-width','10px');
			$(".sl-block.isFocus .sl-block-content").css('border-style','solid');
			$(".sl-block.isFocus .sl-block-content").css('border-color','red');
		} else {
			$(".sl-block.isFocus .sl-block-content").css('border','');
		}
	});
	
	
$(".iframe.border-width.size-box").on('mousedown', function(){	
	objContent = $(".isFocus").children('.sl-block-content')
	fpxLineWidthSize = objContent.css('border-width');
	fnumLineWidthSize = pxRemove(fpxLineWidthSize);
	$(".iframe.border-width.size-box").val(fnumLineWidthSize);
    preX = event.offsetX;
    i = parseInt($(".iframe.border-width.size-box").val());
    fLineFlag = true;
    	
    	$(".iframe.border-width.size-box").on('mousemove', function(ev){
    		if(fLineFlag == true){ // 마우스 무브 
    		moveX = ev.offsetX;
    		if(preX < moveX){
    				 if(i < 100){
    					 i = parseInt($(".iframe.border-width.size-box").val());
    					 middle = $(".iframe.border-width.size-box").val(i+1);
    					 objContent.css('border-width', middle + 'px');
    				 }// 증가 범위 설정
    				 else if (i > 100){
    					 $(".iframe.border-width.size-box").val(100);
    				 } // 최고점 100 마지막 괄호
    		}// 오른쪽 으로 움직일 때 닫는 괄호
    		else if(moveX < preX){ // 왼쪽으로 움직일 때
    			if (i > 1){ // 일반적 감소
    				i = parseInt($(".iframe.border-width.size-box").val());
    				middle = $(".iframe.border-width.size-box").val(i -1);	    					 
    				objContent.css('border-width', middle + 'px'); 				
    				}// 감소할 때 값 마지막 괄호
    			else if (i <= 1){
    				i = parseInt($(".iframe.border-width.size-box").val());
    				$(".iframe.border-width.size-box").val(1);
    				}// 감소 최저값
    		} // 왼쪽으로 움직일 때 마지막 괄호
     }// 마우스 무브 열림 내용 닫는 괄호
});// 마우스 무브 마지막 괄호
    	
});

// 마우스 업일 때 해제
$(".iframe.border-width.size-box").on('mouseup', function(){
	fLineFlag = false;
	objContent = $(".isFocus").children('.sl-block-content')
	preX = '0';
	$(".iframe.border-width.size-box").blur();
	fLineWidthFinalInput = $(".iframe.border-width.size-box").val();
	objContent.css('border-width', fLineWidthFinalInput + 'px');
});// 마우스 업일 때 동작 해제

$(".iframe.border-width.size-box").on('dblclick', function(){ // 직접 입력받기
	objContent = $(".isFocus").children('.sl-block-content');
	$("iframe.border-width.size-box").focus();
	fLineWidthFinalInput = $("iframe.border-width.size-box").val();
	objContent.css('border-width', fLineWidthFinalInput +'px');
}); // 직접 입력 받기
		

$('.iframe-border-colorinput').on('change', function(){
	fBorderColor = $(this).val();
    var fBorderColorCheck = rgb2hex(fBorderColor); 
    if(fBorderColorCheck == '#ffffff'){ //투명값일 경우
    	$('.iframe-border-checkbox').prop('checked', false) // 체크박스에 표시 안되게 해야함
    } else {
    	$('.iframe-border-checkbox').prop('checked', 'true') // 체크박스에 표시하기 
    }
	$('.sl-block.isFocus .sl-block-content').css('border-color', fBorderColorCheck);			
});
	
	
	
});// 맨 끝


function rgb2hex(rgb) {
    if ( rgb.search("rgb") == -1 ) {
         return rgb;
    } else {
         rgb = rgb.match(/^rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d+))?\)$/);
         function hex(x) {
              return ("0" + parseInt(x).toString(16)).slice(-2);
         }
         return "#" + hex(rgb[1]) + hex(rgb[2]) + hex(rgb[3]); 
    }
}


function pxRemove(inputVal){
	var inputNum = inputVal.slice(0, -2);
    return  parseInt(inputNum);
}

