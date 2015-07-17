$(function(){
	
	var presentSection = $('section.present');
	var blockId = 100000;
	var block_zIndex = 10;
	
	// 글씨 크기 
    var fontSizeInput;
    // - 투명도 변수
	var opSizeInput;

//	$('.preview-controls .sidebar .nav-item button.button.profile').on('click', function(){
//		alert("digh")
////		var result = comfirm("저장하시겠습니까?");
////		if (result){
////			$("'button.button.save'").click();
////		} else {			
////			location.ref = '../tryMypage/mypage.html';
////		}
//	});
	
	
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
						'color' : '#000000',
						'background-color' : '#ffffff',
						'border' : '0px solid #ffffff',
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
	    $(".text.font.size-box").val(initFontSize);
	    //폰트 색깔
	    var initFontColor = rgb2hex($('.sl-block.isFocus p').css('color'));
		$('.text-colorinput').val(initFontColor);
	    //배경 색깔
	    var initBackColor = rgb2hex($('.sl-block.isFocus').css('background-color'));
	    $('.back-colorinput').val(initBackColor);
	    //opacity
	    var initOpacity = $('.sl-block.isFocus p').css('opacity');
	    $('.text.opacity.size-scroll').val(initOpacity);
	    $('.text.opacity.size-box').val(initOpacity);
 	    // 패딩값
	    var initPaddingSize = pxRemove(contentBox.css('padding'));
	    $(".text.padding.size-box").val(initPaddingSize);
	    // 선 유무 체크 박스
	    var initBorderYnC = rgb2hex($(".sl-block.isFocus").css('border-color'));
	    var initBorderYnW = pxRemove($('.sl-block.isFocus').css('border-width'));
	    if(initBorderYnC == '#ffffff' || initBorderYnW == 0){ //투명값일 경우
	    	$('.text.border.checkbox').prop('checked', false) // 체크박스에 표시 안되게 해야함
	    } else {
	    	$('.text.border.checkbox').prop('checked', true) // 체크박스에 표시하기 
	    }
	    // 선 두께 lineWidth
	    var initBorderWidth = pxRemove($(this).css('border-width'));
	    $(".text.lineWidth.size-box").val(initBorderWidth);
	    //선 색깔
	    var initBorderColor = rgb2hex($('.sl-block.isFocus').css('border-color'));
	    $('.text-border-colorinput').val(initBorderColor);
	    // 곡선값
	    var initRadius = pxRemove($(this).css('border-radius'));
	    $(".text.lineRadius.size-box").val(initRadius);
	    
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
	$(".text.font.size-box").on('mousedown', function(event){
		objContent = $(".isFocus").children('.sl-block-content')
		pxFontSize = objContent.css('font-size');
		numFontSize = pxRemove(pxFontSize);
		$(".text.font.size-box").val(numFontSize);
	    preX = event.offsetX;
	    i = parseInt($(".text.font.size-box").val());
	    fontFlag = true;
	    	
	    	$(".text.font.size-box").on('mousemove', function(ev){
	    		if(fontFlag == true){ // 마우스 무브 
	    		console.log("digh")
	    		moveX = ev.offsetX;
	    		if(preX < moveX){
	    				 if(i < 100){
	    					 console.log("right")
	    					 i = parseInt($(".text.font.size-box").val());
	    					 console.log(i)
	    					 middle = $(".text.font.size-box").val(i+1);
	    					 objContent.css('font-size', middle + 'px');
	    				 }// 증가 범위 설정
	    				 else if (i > 100){
	    					 $(".text.font.size-box").val(100);
	    				 } // 최고점 100 마지막 괄호
	    		}// 오른쪽 으로 움직일 때 닫는 괄호
	    		else if(moveX < preX){ // 왼쪽으로 움직일 때
	    			if (i > 1){ // 일반적 감소
	    				i = parseInt($(".text.font.size-box").val());
	    				middle = $(".text.font.size-box").val(i -1);	    					 
	    				objContent.css('font-size', middle + 'px'); 				
	    				}// 감소할 때 값 마지막 괄호
	    			else if (i <= 1){
	    				i = parseInt($(".text.font.size-box").val());
	    				$(".text.font.size-box").val(1);
	    				}// 감소 최저값
	    		} // 왼쪽으로 움직일 때 마지막 괄호
	     }// 마우스 무브 열림 내용 닫는 괄호
	});// 마우스 무브 마지막 괄호
});
	$(".text.font.size-box").on('mouseup', function(){
		fontFlag = false;
		preX = '0';
		$(".text.font.size-box").blur();
		fontFinalInput = $(".text.font.size-box").val();
		objContent.css('font-size', fontFinalInput + 'px');
	});// 마우스 업일 때 동작 해제
	
	$(".text.font.size-box").on('dblclick', function(){ // 직접 입력받기
		$(".text.font.size-box").focus();
		fontFinalInput = $(".text.font.size-box").val();
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
			$(".text.opacity.size-scroll").on('mousedown', function(event){
				opFlag = true;
				if(opFlag == true){
				$(".text.opacity.size-scroll").on("mousemove", function(ev){	
					opSizeInput = $(ev.target).val();
					$(".text.opacity.size-box").val(opSizeInput);
				}); 
				}
			})
			
			//-투명도값 관리 
			$(".text.opacity.size-scroll").on("mouseup", function(){
				$(".text.opacity.size-box").val(opSizeInput );
				opFlag = false;
		
			});
			
			$('.toolbar-text-input').on('focusin', function(){
				console.log("ok")
				$(this).blur(function(){		
					var objFrame = $('.sl-block.isFocus .sl-block-content .test');
					objFrame.attr('src', $('.toolbar-text-input').val() );
				});
			});
			//- 투명도값 직접 입력받기
			 $(".text.opacity.size-scroll").on("dblclick", function(ev){
				$(this).css("z-index", "0");
				$(this).addClass("back");
				$(".text.opacity.size-box").focus();
					$('.text.opacity.size-box').blur(function(){	
						console.log("야")
						opSizeInput = $(".text.opacity.size-box").val();
						$('.sl-block.isFocus .sl-block-content p').css('opacity' , opSizeInput);
					});
			}); 
			 // - 투명도 입력 완료
			 $(document).not($(".text.opacity.size-box")).click(function(){
			    	$(".text.opacity.size-scroll").css("z-index", "16");
			    	$(".text.opacity.size-scroll").removeClass("back");
			    });

			//투명도값 적용
				$('.text.opacity.size-scroll').on('change', function(){	
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
		$(".text.padding.size-box").on('mousedown', function(event){
			objContent = $(".isFocus").children('.sl-block-content')
			pxPaddingSize = objContent.css('padding');
			numPaddingSize = pxRemove(pxPaddingSize);
			$(".text.padding.size-box").val(numPaddingSize);
		    preX = event.offsetX;
		    i = parseInt($(".text.padding.size-box").val());
		    paddingFlag = true;
		    	
		    	$(".text.padding.size-box").on('mousemove', function(ev){
		    		if(paddingFlag == true){ // 마우스 무브 
		    		moveX = ev.offsetX;
		    		if(preX < moveX){
		    				 if(i < 100){
		    					 i = parseInt($(".text.padding.size-box").val());
		    					 middle = $(".text.padding.size-box").val(i+1);
		    					 objContent.css('padding', middle + 'px');
		    				 }// 증가 범위 설정
		    				 else if (i > 100){
		    					 $(".text.padding.size-box").val(100);
		    				 } // 최고점 100 마지막 괄호
		    		}// 오른쪽 으로 움직일 때 닫는 괄호
		    		else if(moveX < preX){ // 왼쪽으로 움직일 때
		    			if (i > 1){ // 일반적 감소
		    				i = parseInt($(".text.padding.size-box").val());
		    				middle = $(".text.padding.size-box").val(i -1);	    					 
		    				objContent.css('padding', middle + 'px'); 				
		    				}// 감소할 때 값 마지막 괄호
		    			else if (i <= 0){
		    				i = parseInt($(".text.padding.size-box").val());
		    				$(".text.padding.size-box").val(0);
		    				}// 감소 최저값
		    		} // 왼쪽으로 움직일 때 마지막 괄호
		     }// 마우스 무브 열림 내용 닫는 괄호
		});// 마우스 무브 마지막 괄호
	});
		$(".text.padding.size-box").on('mouseup', function(){
			paddingFlag = false;
			preX = '0';
			$(".text.padding.size-box").blur();
			paddingFinalInput = $(".text.padding.size-box").val();
			objContent.css('padding', paddingFinalInput + 'px');
		});// 마우스 업일 때 동작 해제
		
		$(".text.padding.size-box").on('dblclick', function(){ // 직접 입력받기
			$(".text.padding.size-box").focus();
			paddingFinalInput = $(".text.padding.size-box").val();
			$(".text.padding.size-box").blur(function(){
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
			$('.text.border.checkbox').on('click', function(){
				if($('.text.border.checkbox').prop('checked')){
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
		$(".text.lineWidth.size-box").on('mousedown', function(event){
			objContent = $(".isFocus").children('.sl-block-content')
			pxlineWidthSize = objContent.css('border-width');
			numlineWidthSize = pxRemove(pxlineWidthSize);
			$(".text.lineWidth.size-box").val(numlineWidthSize);
		    preX = event.offsetX;
		    i = parseInt($(".text.lineWidth.size-box").val());
		    lineWidthFlag = true;
		    	
		    	$(".text.lineWidth.size-box").on('mousemove', function(ev){
		    		if(lineWidthFlag == true){ // 마우스 무브 
		    		moveX = ev.offsetX;
		    		if(preX < moveX){
		    				 if(i < 100){
		    					 i = parseInt($(".text.lineWidth.size-box").val());
		    					 middle = $(".text.lineWidth.size-box").val(i+1);
		    					 objContent.css('border-width', middle + 'px');
		    				 }// 증가 범위 설정
		    				 else if (i > 100){
		    					 $(".text.lineWidth.size-box").val(100);
		    				 } // 최고점 100 마지막 괄호
		    		}// 오른쪽 으로 움직일 때 닫는 괄호
		    		else if(moveX < preX){ // 왼쪽으로 움직일 때
		    			if (i > 1){ // 일반적 감소
		    				i = parseInt($(".text.lineWidth.size-box").val());
		    				middle = $(".text.lineWidth.size-box").val(i -1);	    					 
		    				objContent.css('border-width', middle + 'px'); 				
		    				}// 감소할 때 값 마지막 괄호
		    			else if (i <= 0){
		    				i = parseInt($(".text.lineWidth.size-box").val());
		    				$(".text.lineWidth.size-box").val(0);
		    				}// 감소 최저값
		    		} // 왼쪽으로 움직일 때 마지막 괄호
		     }// 마우스 무브 열림 내용 닫는 괄호
		});// 마우스 무브 마지막 괄호
	});
		$(".text.lineWidth.size-box").on('mouseup', function(){
			lineWidthFlag = false;
			preX = '0';
			$(".text.lineWidth.size-box").blur();
			lineWidth = $(".text.lineWidth.size-box").val();
			$(".sl-block.isFocus").css('border-width', lineWidth + 'px');
		});// 마우스 업일 때 동작 해제
		
		$(".text.lineWidth.size-box").on('dblclick', function(){ // 직접 입력받기
			$(".text.lineWidth.size-box").focus();
			lineWidth = $(".text.lineWidth.size-box").val();
			$(".text.lineWidth.size-box").blur(function(){
				console.log("digh")
				$(".sl-block.isFocus").css('border-width', lineWidth+'px');
			});
		}); // 직접 입력 받기
			
//	// 선 색깔 적용
			$(".text-border-colorinput").on("change", function(){
				borderColor = $(this).val();
			    var borderColorCheck = rgb2hex(borderColor); 
			    if(borderColorCheck == '#ffffff'){ //투명값일 경우
			    	$('.text.border.checkbox').prop('checked', false) // 체크박스에 표시 안되게 해야함
			    } else {
			    	$('.text.border.checkbox').prop('checked', 'true') // 체크박스에 표시하기 
			    }
				$('.sl-block.isFocus').css('border-color', borderColor);			
			});

//	// radius 
//			// - lineRadius 관리변수
	    	var lineRadiusFlag = false;
	    	var pxlineRadiusSize;
	    	var numlineRadiusSize;
	    	
////////-lineRadius-size 스크롤 조정
	$(".text.lineRadius.size-box").on('mousedown', function(event){
		pxlineRadiusSize = objContent.css('border-radius');
		numlineRadiusSize = pxRemove(pxlineRadiusSize);
		$(".text.lineRadius.size-box").val(numlineRadiusSize);
	    preX = event.offsetX;
	    i = parseInt($(".text.lineRadius.size-box").val());
	    lineRadiusFlag = true;
	    	
	    	$(".text.lineRadius.size-box").on('mousemove', function(ev){
	    		if(lineRadiusFlag == true){ // 마우스 무브 
	    		moveX = ev.offsetX;
	    		if(preX < moveX){
	    				 if(i < 100){
	    					 i = parseInt($(".text.lineRadius.size-box").val());
	    					 middle = $(".text.lineRadius.size-box").val(i+1);
	    					 objContent.css('border-radius', middle + 'px');
	    				 }// 증가 범위 설정
	    				 else if (i > 100){
	    					 $(".text.lineRadius.size-box").val(100);
	    				 } // 최고점 100 마지막 괄호
	    		}// 오른쪽 으로 움직일 때 닫는 괄호
	    		else if(moveX < preX){ // 왼쪽으로 움직일 때
	    			if (i > 1){ // 일반적 감소
	    				i = parseInt($(".text.lineRadius.size-box").val());
	    				middle = $(".text.lineRadius.size-box").val(i -1);	    					 
	    				objContent.css('border-radius', middle + 'px'); 				
	    				}// 감소할 때 값 마지막 괄호
	    			else if (i <= 0){
	    				i = parseInt($(".text.lineRadius.size-box").val());
	    				$(".text.lineRadius.size-box").val(0);
	    				}// 감소 최저값
	    		} // 왼쪽으로 움직일 때 마지막 괄호
	     }// 마우스 무브 열림 내용 닫는 괄호
	});// 마우스 무브 마지막 괄호
});// 마우스 다운 끝
	
$(".text.lineRadius.size-box").on('mouseup', function(){
		lineRadiusFlag = false;
		preX = '0';
		$(".text.lineRadius.size-box").blur();
		lineRadius = $(".lineRadius.size-box").val();
		$(".sl-block.isFocus").css('border-radius', lineRadius + 'px');
});// 마우스 업일 때 동작 해제
	
	$(".text.lineRadius.size-box").on('dblclick', function(){ // 직접 입력받기
		$(".text.lineRadius.size-box").focus();
		lineWidth = $(".text.lineRadius.size-box").val();
		$(".text.lineRadius.size-box").blur(function(){
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
