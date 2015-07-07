$(function(){
	
	var presentSection = $('section.present');
	var blockId = 100000;
	var block_zIndex = 10;
	
	// 글씨 크기 
    var fontSizeInput;
    // - 투명도 변수
	var opSizeInput;


	    //text
	$( ".toolbar-text" ).on('click',
	   function() {
		 if ($('.sl-block.isFocus').length == 0) {
					var blockText = $('<div>')
					.addClass("sl-block")
					.attr({
							'data-block-type': 'text',
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
						'background-color' : 'rgb(255,255,255)',
						'border' : '1px solid rgb(255,255,255)',
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
			
				 $("<p>")
				 	.addClass("placeHolder")
					.text("Text")
					.appendTo(blockContent);
			
			  } else if($('.sl-block.isFocus').length > 0){
					  $(".toolbar-list").css('visibility', 'hidden');
					  $(".text-list").css('visibility', 'visible');					  
			  }
			
			}); // 기본 텍스트 버튼 끝
	
	
	$(presentSection).not($('.sl-block.isFocus')).on("click", function(){
		   		$(".sl-block.isFocus .sl-block-content p").attr('contenteditable', 'false');
	   });
	
	$(document).on('dblclick','.sl-block[data-block-type="text"]', function(){
	    var contentBox = $(this).children(".sl-block-content");
	    var contentP = contentBox.children("p");	
	    
	    
// 사이드바 입력값 isFocus에 맞추어 초기 설정하기	    
	    // 폰트
	    var initFontSize = pxRemove(contentBox.css('font-size'));
	    $(".font.size-box").val(initFontSize);
	    //폰트 색깔
	    var initFontColor = rgb2hex($('.sl-block.isFocus p').css('color'));
	    console.log(initFontColor)
		$('.text-colorinput').val(initFontColor);
	    //배경 색깔
	    var initBackColor = rgb2hex($('.sl-block.isFocus').css('background-color'));
	    $('.back-colorinput').val(initBackColor);
	    //opacity
	    var initOpacity = $('.sl-block.isFocus p').css('opacity');
	    $('opacity.size-scroll').val(initOpacity);
	    $('.opacity.size-box').val(initOpacity);
 	    // 패딩값
	    var initPaddingSize = pxRemove(contentBox.css('padding'));
	    $(".padding.size-box").val(initPaddingSize);
	    // 선 유무 체크 박스
	    var initBorderYn = rgb2hex($(".sl-block.isFocus").css('border-color')); 
	    console.log(initBorderYn);
	    if(initBorderYn == '#ffffff'){ //투명값일 경우
	    	$('.border.checkbox').prop('checked', false) // 체크박스에 표시 안되게 해야함
	    } else {
	    	$('.border.checkbox').prop('checked', 'true') // 체크박스에 표시하기 
	    }
	    // 선 두께 lineWidth
	    var initBorderWidth = pxRemove($(this).css('border-width'));
	    $(".lineWidth.size-box").val(initBorderWidth);
	    //선 색깔
	    var initBorderColor = rgb2hex($('.sl-block.isFocus').css('border-color'));
	    $('.text-border-colorinput').val(initBorderColor);
	    // 곡선값
	    var initRadius = pxRemove($(this).css('border-radius'));
	    $(".lineRadius.size-box").val(initRadius);
	    
// 사이드바 보이게 하기    
	    $(".toolbar-list").css('visibility', 'hidden');
	    $(".text-list").css('visibility', 'visible');
	    
	    
	    // 첫 텍스트 박스 수정할 때
	    if($('.sl-block .sl-block-content p').hasClass("placeHolder")){
	    console.log("처음 생성된 텍스트 박스")
	    $(contentP).removeClass("placeHolder");
	    
	    //contentBox.attr("contenteditable",'true').focus();
	    contentP.attr("contenteditable", "true").text('').focus();
	    
		  
	    // 재편집일 때
	    } else if(!$('.sl-block.content p').hasClass("placeHolder")) {
	    	console.log("재 편집 더블클릭");
	    	//contentBox.attr("contenteditable",'true').focus();
	    	contentP.attr("contenteditable", "true").focus();	    	
	    }
	    	   
	    $(contentBox).keypress(function(event){
	    	if(event.which == 13){ 	
	    		$('.sl-block-content div').each(function(){
	    			var where= $($(this).replaceWith($('<p>' +$(this).html()+ '</p>')));
	    			$(where).focus();	    				    			
	    		}); //div 태그를 p 태그로 교체	    		
	    	}// 엔터일 때 괄호 끝	
	    });//keypress 괄호
});	// 텍스트 박스 더블클릭 마지막 괄호    
	  

//	  //TEXT
//		// - font-size 관리 
	    	var preX ;
	    	var moveX;
	    	var fontFinalInput;
	    	var fontFlag = false;
	    	var pxFontSize;
	    	var numFontSize;
	    	var i;
	    	var objContent;
	    	var middle;
	    	
////////-font-size 스크롤 조정
	$(".font.size-box").on('mousedown', function(event){
		objContent = $(".isFocus").children('.sl-block-content')
		pxFontSize = objContent.css('font-size');
		numFontSize = pxRemove(pxFontSize);
		$(".font.size-box").val(numFontSize);
	    preX = event.offsetX;
	    i = parseInt($(".font.size-box").val());
	    fontFlag = true;
	    	
	    	$(".font.size-box").on('mousemove', function(ev){
	    		if(fontFlag == true){ // 마우스 무브 
	    		console.log("digh")
	    		moveX = ev.offsetX;
	    		if(preX < moveX){
	    				 if(i < 100){
	    					 console.log("right")
	    					 i = parseInt($(".font.size-box").val());
	    					 console.log(i)
	    					 middle = $(".font.size-box").val(i+1);
	    					 objContent.css('font-size', middle + 'px');
	    				 }// 증가 범위 설정
	    				 else if (i > 100){
	    					 $(".font.size-box").val(100);
	    				 } // 최고점 100 마지막 괄호
	    		}// 오른쪽 으로 움직일 때 닫는 괄호
	    		else if(moveX < preX){ // 왼쪽으로 움직일 때
	    			if (i > 1){ // 일반적 감소
	    				i = parseInt($(".font.size-box").val());
	    				middle = $(".font.size-box").val(i -1);	    					 
	    				objContent.css('font-size', middle + 'px'); 				
	    				}// 감소할 때 값 마지막 괄호
	    			else if (i <= 1){
	    				i = parseInt($(".font.size-box").val());
	    				$(".font.size-box").val(1);
	    				}// 감소 최저값
	    		} // 왼쪽으로 움직일 때 마지막 괄호
	     }// 마우스 무브 열림 내용 닫는 괄호
	});// 마우스 무브 마지막 괄호
});
	$(".font.size-box").on('mouseup', function(){
		fontFlag = false;
		preX = '0';
		$(".font.size-box").blur();
		fontFinalInput = $(".font.size-box").val();
		objContent.css('font-size', fontFinalInput + 'px');
	});// 마우스 업일 때 동작 해제
	
	$(".font.size-box").on('dblclick', function(){ // 직접 입력받기
		$(".font.size-box").focus();
		fontFinalInput = $(".font.size-box").val();
		objContent.css('font-size', fontFinalInput +'px');
	}); // 직접 입력 받기
	
	    	
			// 텍스트 컬러
			$(".text-colorinput").on('change', function(){
				$(".sl-block.isFocus .sl-block-content P").css('color', $(this).val());
			});
			
			// 배경 컬러
			$(".back-colorinput").on('change', function(){
				$(".sl-block.isFocus").css('background-color', $(this).val());
			});



			//-투명도 값 스크롤 조정
			var opSizeInput;
			var opFlag = false;
			$(".opacity.size-scroll").on('mousedown', function(event){
				opFlag = true;
				if(opFlag == true){
				$(".opacity.size-scroll").on("mousemove", function(ev){	
					opSizeInput = $(ev.target).val();
					$(".opacity.size-box").val(opSizeInput);
				}); 
				}
			})
			
			//-투명도값 관리 
			$(".opacity.size-scroll").on("mouseup", function(){
				$(".opacity.size-box").val(opSizeInput );
				opFlag = false;
		
			});
			//- 투명도값 직접 입력받기
			 $(".opacity.size-scroll").on("dblclick", function(ev){
				$(this).css("z-index", "0");
				$(this).addClass("back");
				$(".opacity.size-box").focus();
				opSizeInput = $(".opacity.size-box").val();			
			}); 
			 // - 투명도 입력 완료
			 $(document).not($(".opacity.size-box")).click(function(){
			    	$(".opacity.size-scroll").css("z-index", "16");
			    	$(".opacity.size-scroll").removeClass("back");
			    });

			//투명도값 적용
				$('.opacity.size-scroll').on('change', function(){	
					$('.sl-block.isFocus .sl-block-content p').css({'opacity': $(this).val()});
				})

			
//////padding 값 설정
//	// - padding 변수
		    	//var preX ;
		    	//var moveX;
		    	var paddingFinalInput;
		    	var paddingFlag = false;
		    	var pxPaddingSize;
		    	var numPaddingSize;
		    	//var i;
		    	//var objContent;
		    	//var middle;
		    	
	////////-padding-size 스크롤 조정
		$(".padding.size-box").on('mousedown', function(event){
			objContent = $(".isFocus").children('.sl-block-content')
			pxPaddingSize = objContent.css('padding');
			numPaddingSize = pxRemove(pxPaddingSize);
			$(".padding.size-box").val(numPaddingSize);
		    preX = event.offsetX;
		    i = parseInt($(".padding.size-box").val());
		    paddingFlag = true;
		    	
		    	$(".padding.size-box").on('mousemove', function(ev){
		    		if(paddingFlag == true){ // 마우스 무브 
		    		moveX = ev.offsetX;
		    		if(preX < moveX){
		    				 if(i < 100){
		    					 i = parseInt($(".padding.size-box").val());
		    					 middle = $(".padding.size-box").val(i+1);
		    					 objContent.css('padding', middle + 'px');
		    				 }// 증가 범위 설정
		    				 else if (i > 100){
		    					 $(".padding.size-box").val(100);
		    				 } // 최고점 100 마지막 괄호
		    		}// 오른쪽 으로 움직일 때 닫는 괄호
		    		else if(moveX < preX){ // 왼쪽으로 움직일 때
		    			if (i > 1){ // 일반적 감소
		    				i = parseInt($(".padding.size-box").val());
		    				middle = $(".padding.size-box").val(i -1);	    					 
		    				objContent.css('padding', middle + 'px'); 				
		    				}// 감소할 때 값 마지막 괄호
		    			else if (i <= 0){
		    				i = parseInt($(".padding.size-box").val());
		    				$(".padding.size-box").val(0);
		    				}// 감소 최저값
		    		} // 왼쪽으로 움직일 때 마지막 괄호
		     }// 마우스 무브 열림 내용 닫는 괄호
		});// 마우스 무브 마지막 괄호
	});
		$(".padding.size-box").on('mouseup', function(){
			paddingFlag = false;
			preX = '0';
			$(".padding.size-box").blur();
			paddingFinalInput = $(".padding.size-box").val();
			objContent.css('padding', paddingFinalInput + 'px');
		});// 마우스 업일 때 동작 해제
		
		$(".padding.size-box").on('dblclick', function(){ // 직접 입력받기
			$(".padding.size-box").focus();
			paddingFinalInput = $(".padding.size-box").val();
			$(".padding.size-box").blur(function(){
				console.log("digh")
				objContent.css('padding', paddingFinalInput +'px');
			});
		}); // 직접 입력 받기

//			
//	//Border 선 설정 부분
			var lineStyle = 'solid';
			var lineWidth = '3';
			var lineRadius = '0';
			var lineColor = 'yellow';
			var line = lineStyle + ' ' + lineWidth + 'px ' +  lineRadius +'px '+ lineColor+';'
			
//	// 디폴트 선 설정 및 적용
			$('.checkbox').on('click', function(){
				if($('.border.checkbox').prop('checked')){
					$(".sl-block.isFocus").css('border-width','1px');
					$(".sl-block.isFocus").css('border-style','solid');
					$(".sl-block.isFocus").css('border-color','black');
				} else {
					$(".sl-block.isFocus").css('border','');
				}
			});
//		
//	// 선 모양 결정
			$(".text-toolbar-panel").on("click", function(){
				lineStyle = $(".text-list .toolbar-select .text-toolbar-select-trigger").text();
				$('.sl-block.isFocus').css("border-style", lineStyle);	
			});
		
//	//선 굵기 
//			// - lineWidth 관리변수
		    	//var preX ;
		    	//var moveX;
		    	var lineWidthFlag = false;
		    	var pxlineWidthSize;
		    	var numlineWidthSize;
		    	//var i;
		    	//var objContent;
		    	//var middle;
		    	
	////////-lineWidth-size 스크롤 조정
		$(".lineWidth.size-box").on('mousedown', function(event){
			objContent = $(".isFocus").children('.sl-block-content')
			pxlineWidthSize = objContent.css('border-width');
			numlineWidthSize = pxRemove(pxlineWidthSize);
			$(".lineWidth.size-box").val(numlineWidthSize);
		    preX = event.offsetX;
		    i = parseInt($(".lineWidth.size-box").val());
		    lineWidthFlag = true;
		    	
		    	$(".lineWidth.size-box").on('mousemove', function(ev){
		    		if(lineWidthFlag == true){ // 마우스 무브 
		    		moveX = ev.offsetX;
		    		if(preX < moveX){
		    				 if(i < 100){
		    					 i = parseInt($(".lineWidth.size-box").val());
		    					 middle = $(".lineWidth.size-box").val(i+1);
		    					 objContent.css('border-width', middle + 'px');
		    				 }// 증가 범위 설정
		    				 else if (i > 100){
		    					 $(".lineWidth.size-box").val(100);
		    				 } // 최고점 100 마지막 괄호
		    		}// 오른쪽 으로 움직일 때 닫는 괄호
		    		else if(moveX < preX){ // 왼쪽으로 움직일 때
		    			if (i > 1){ // 일반적 감소
		    				i = parseInt($(".lineWidth.size-box").val());
		    				middle = $(".lineWidth.size-box").val(i -1);	    					 
		    				objContent.css('border-width', middle + 'px'); 				
		    				}// 감소할 때 값 마지막 괄호
		    			else if (i <= 0){
		    				i = parseInt($(".lineWidth.size-box").val());
		    				$(".lineWidth.size-box").val(0);
		    				}// 감소 최저값
		    		} // 왼쪽으로 움직일 때 마지막 괄호
		     }// 마우스 무브 열림 내용 닫는 괄호
		});// 마우스 무브 마지막 괄호
	});
		$(".lineWidth.size-box").on('mouseup', function(){
			lineWidthFlag = false;
			preX = '0';
			$(".lineWidth.size-box").blur();
			lineWidth = $(".lineWidth.size-box").val();
			$(".sl-block.isFocus").css('border-width', lineWidth + 'px');
		});// 마우스 업일 때 동작 해제
		
		$(".lineWidth.size-box").on('dblclick', function(){ // 직접 입력받기
			$(".lineWidth.size-box").focus();
			lineWidth = $(".lineWidth.size-box").val();
			$(".lineWidth.size-box").blur(function(){
				console.log("digh")
				$(".sl-block.isFocus").css('border-width', lineWidth+'px');
			});
		}); // 직접 입력 받기
			
//	// 선 색깔 적용
			$(".text-border-colorinput").on("change", function(){
				borderColor = $(this).val();
			    var borderColorCheck = rgb2hex(borderColor); 
			    if(borderColorCheck == '#ffffff'){ //투명값일 경우
			    	$('.border.checkbox').prop('checked', false) // 체크박스에 표시 안되게 해야함
			    } else {
			    	$('.border.checkbox').prop('checked', 'true') // 체크박스에 표시하기 
			    }
				$('.sl-block.isFocus').css('border-color', borderColor);			
			});

//	// radius 
//			// - lineRadius 관리변수
	    	var lineRadiusFlag = false;
	    	var pxlineRadiusSize;
	    	var numlineRadiusSize;
	    	
////////-lineRadius-size 스크롤 조정
	$(".lineRadius.size-box").on('mousedown', function(event){
		pxlineRadiusSize = objContent.css('border-radius');
		numlineRadiusSize = pxRemove(pxlineRadiusSize);
		$(".lineRadius.size-box").val(numlineRadiusSize);
	    preX = event.offsetX;
	    i = parseInt($(".lineRadius.size-box").val());
	    lineRadiusFlag = true;
	    	
	    	$(".lineRadius.size-box").on('mousemove', function(ev){
	    		if(lineRadiusFlag == true){ // 마우스 무브 
	    		moveX = ev.offsetX;
	    		if(preX < moveX){
	    				 if(i < 100){
	    					 i = parseInt($(".lineRadius.size-box").val());
	    					 middle = $(".lineRadius.size-box").val(i+1);
	    					 objContent.css('border-radius', middle + 'px');
	    				 }// 증가 범위 설정
	    				 else if (i > 100){
	    					 $(".lineRadius.size-box").val(100);
	    				 } // 최고점 100 마지막 괄호
	    		}// 오른쪽 으로 움직일 때 닫는 괄호
	    		else if(moveX < preX){ // 왼쪽으로 움직일 때
	    			if (i > 1){ // 일반적 감소
	    				i = parseInt($(".lineRadius.size-box").val());
	    				middle = $(".lineRadius.size-box").val(i -1);	    					 
	    				objContent.css('border-radius', middle + 'px'); 				
	    				}// 감소할 때 값 마지막 괄호
	    			else if (i <= 0){
	    				i = parseInt($(".lineRadius.size-box").val());
	    				$(".lineRadius.size-box").val(0);
	    				}// 감소 최저값
	    		} // 왼쪽으로 움직일 때 마지막 괄호
	     }// 마우스 무브 열림 내용 닫는 괄호
	});// 마우스 무브 마지막 괄호
});// 마우스 다운 끝
	
$(".lineRadius.size-box").on('mouseup', function(){
		lineRadiusFlag = false;
		preX = '0';
		$(".lineRadius.size-box").blur();
		lineRadius = $(".lineRadius.size-box").val();
		$(".sl-block.isFocus").css('border-radius', lineRadius + 'px');
});// 마우스 업일 때 동작 해제
	
	$(".lineRadius.size-box").on('dblclick', function(){ // 직접 입력받기
		$(".lineRadius.size-box").focus();
		lineWidth = $(".lineRadius.size-box").val();
		$(".lineRadius.size-box").blur(function(){
			console.log("digh")
			$(".sl-block.isFocus").css('border-radius', lineRadius+'px');
		});
	}); // 직접 입력 받기		
			
	// 텍스트 정렬
	$('.toolbar-radio-item[data-value="left"]').on('click', function() {
		$('.sl-block.isFocus').css('text-align','left');
	});

	$('.toolbar-radio-item[data-value="center"]').on('click', function() {
		$('.sl-block.isFocus').css('text-align','center');
	});

	$('.toolbar-radio-item[data-value="right"]').on('click', function() {
		$('.sl-block.isFocus').css('text-align','right');
	});
		
}); // 맨 끝		
	

function pxRemove(inputVal){
	var inputNum = inputVal.slice(0, -2);
    return  parseInt(inputNum);
}

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
