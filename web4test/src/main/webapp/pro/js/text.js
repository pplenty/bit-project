$(function(){
	
	var presentSection = $('section.present');
	var blockId = 100000;
	var block_zIndex = 10;

	// 텍스트박스 메뉴 들어갈 값 저장 변수
	   var fontSizeInput 
	    var conPopacity 
	    var conPpadding 

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
						'border' : '1px solid rgba(255,255,0,0)',
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
	
	
//	$(document).not($(".sl-block").hasClass("isFocus")).on("click", function(){
//	})
	
//	
//	// 여기서부터 아래 세줄은 텍스트 박스 관련 
//	var contentB =	$('.isFocus').children(".sl-block-content");
//	$(contentB).children("p").attr("contenteditable", "false");
//	$(contentB).attr("contenteditable", "false");
//	
//	if($(contentB).attr("contenteditable") == "false"){
//	console.log("contenteditable 수정 완료")
//	}
//	/////////
	
	
	$(presentSection).not($('.sl-block.isFocus')).on("click", function(){
		   		$(".sl-block.isFocus .sl-block-content p").attr('contenteditable', 'false');
	   });
	
	$(document).on('dblclick','.sl-block[data-block-type="text"]', function(){
	    var contentBox = $(this).children(".sl-block-content");
	    var contentP = contentBox.children("p");	    
	    
	    fontSizeInput = $(contentBox).css("font-size");
	    opSizeInput = $(contentBox).css("opacity");
	    paddingSizeInput = $(contentBox).css("padding");

    
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
	  

	});// 텍스트 박스 더블 클릭 마지막 괄호
	
	

	// 텍스트 정렬
	$('.toolbar-radio-item[data-value="left"]').on('click', function() {
		$('.sl-block.isFocus').css('text-align','left');
		alert("왼쪽 정렬");	
	});

	$('.toolbar-radio-item[data-value="center"]').on('click', function() {
		$('.sl-block.isFocus').css('text-align','center');
		alert("가운데 정렬");	
	});

	$('.toolbar-radio-item[data-value="right"]').on('click', function() {
		$('.sl-block.isFocus').css('text-align','right');
		alert("yy");	
	});


	//$(document).on('DOMNodeInserted','.sl-block .sl-block-content p', function(){
	//alert($(this).text());
////		$(this[0]).attr("contenteditable", "true").focus();
////		$('.sl-block-content div').each(function(){
////	    	var where= $($(this).replaceWith($('<p>' +$(this).html()+ '</p>')));
////	    	$(where).focus();
////	    });

	//})



// - font-size 관리 

	
		//-font-size 스크롤 조정
		$(".font.size-scroll").on("mousemove", function(ev){	
			fontSizeInput = $(ev.target).val();
				$(".font.size-box").val(fontSizeInput);
			}); 

// TEXT - font 사이즈 관리			
		//-font-size 스크롤 완료
		$(".font.size-scroll").on("mouseup", function(){
			fontSizeInput = $(".font.size-box").val(fontSizeInput);
	
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
		    	$(".font.size-scroll").css("z-index", "16");
		    	$(".font.size-scroll").removeClass("back");
		    });

	//텍스트 폰트 크기
	$('.font.size-scroll').on('change', function(){	
		$('.sl-block.isFocus .sl-block-content p').css({'font-size': $(this).val() + "px" });
	})
	
	// 텍스트 컬러
	$(".text-colorinput").on('change', function(){
		$(".sl-block.isFocus .sl-block-content P").css('color', $(this).val());
	});
	
	// 배경 컬러
	$(".back-colorinput").on('change', function(){
		$(".sl-block.isFocus").css('background-color', $(this).val());
	});
	
	
	
	//opacity 값 조정
	// - 투명도 변수
	var opSizeInput;
	
		//-투명도 값 스크롤 조정
		$(".opacity.size-scroll").on("mousemove", function(ev){	
			opSizeInput = $(ev.target).val();
				$(".opacity.size-box").val(opSizeInput);
			}); 
		
		//-투명도값 관리 
		$(".opacity.size-scroll").on("mouseup", function(){
			$(".opacity.size-box").val(opSizeInput );
	
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

	//padding 값 설정
	// - padding 변수
	var paddingSizeInput;
	
		//-패딩 값 스크롤 조정
		$(".padding.size-scroll").on("mousemove", function(ev){	
			paddingSizeInput = $(ev.target).val();
				$(".padding.size-box").val(paddingSizeInput);
			}); 
	
		//-패딩 관리 
		$(".padding.size-scroll").on("mouseup", function(){
			$(".padding.size-box").val(paddingSizeInput);
	
		});
		//- 패딩 직접 입력받기
		 $(".padding.size-scroll").on("dblclick", function(ev){
			$(this).css("z-index", "0");
			$(this).addClass("back");
			$(".padding.size-box").focus();
			paddingSizeInput = $(".padding.size-box").val();			
		 }); 
		 // - 패딩 입력 완료
		 $(document).not($(".padding.size-box")).click(function(){
		    	$(".padding.size-scroll").css("z-index", "16");
		    	$(".padding.size-scroll").removeClass("back");
		    });

		//패딩 적용
			$('.padding.size-scroll').on('change', function(){	
				$('.sl-block.isFocus').css({'padding': $(this).val()+'px'});
			});
			
// Border 선 설정 부분
		
			var lineStyle = 'solid';
			var lineWidth = '3';
			var lineRadius = '0';
			var lineColor = 'yellow';
			var line = lineStyle + ' ' + lineWidth + 'px ' +  lineRadius +'px '+ lineColor+';'
				
	// 디폴트 선 설정 및 적용
			$('.checkbox').on('click', function(){
				if($('.border.checkbox').prop('checked')){
					$(".sl-block.isFocus").css('border-width','1px');
					$(".sl-block.isFocus").css('border-style','solid');
					$(".sl-block.isFocus").css('border-color','black');
				} else {
					$(".sl-block.isFocus").css('border-color','rgba(255,255,0,0)');
				}
			})
		
	// 선 모양 결정
			$(".text-toolbar-select-trigger").on("click", function(){
				lineStyle = $(this).text();
					$('.sl-block.isFocus').css("border-style", lineStyle);	
			});
					
			
	//선 굵기 
			//선 굵기 스크롤 관리
			$(".lineWidth.size-scroll").on("mousemove", function(ev){	
				lineWidth = $(ev.target).val();
					$(".lineWidth.size-box").val(lineWidth);
					console.log(lineWidth);
				}); 
		
			//-선 굵기 관리 
			$(".lineWidth.size-scroll").on("mouseup", function(){
				$(".lineWidth.size-box").val(lineWidth);
		
			});
			//- 선 굵기 직접 입력받기
			 $(".lineWidth.size-scroll").on("dblclick", function(ev){
				$(this).css("z-index", "0");
				$(this).addClass("back");
				$(".lineWidth.size-box").focus();
				lineWidth = $(".lineWidth.size-box").val();			
			 }); 
			 
			 // - 선굵기 입력 완료
			 $(document).not($(".lineWidth.size-box")).click(function(){

				 	lineWidth = $(".lineWidth.size-box").val();
					$('.sl-block.isFocus').css('border-width', lineWidth +'px' );
					
			    	$(".lineWidth.size-scroll").css("z-index", "16");
			    	$(".lineWidth.size-scroll").removeClass("back");
			    });

	// 선 굵기 적용
			$(".lineWidth.size-scroll").on("mouseup", function(){
				lineWidth = $(this).val();
				$('.sl-block.isFocus').css('border-width', lineWidth +'px' );
				console.log("곡선 적용 " + lineWidth);
				
			});
			
			
			
	// 선 색깔 적용
			$(".text-border-colorinput").on("change", function(){
				borderColor = $(this).val();
				$('.sl-block.isFocus').css('border-color', borderColor);
				
			});

	// radius 
			// 곡선 스크롤 관리
			$(".lineRadius.size-scroll").on("mousemove", function(ev){	
				lineRadius = $(ev.target).val();
					$(".lineRadius.size-box").val(lineRadius);
					console.log(lineRadius);
				}); 
		
			//- 곡선 관리 
			$(".lineRadius.size-scroll").on("mouseup", function(){
				$(".lineRadius.size-box").val(lineRadius);
		
			});
			//- 곡선 직접 입력받기
			 $(".lineRadius.size-scroll").on("dblclick", function(ev){
				$(this).css("z-index", "0");
				$(this).addClass("back");
				$(".lineRadius.size-box").focus();
				lineRadius = $(".lineRadius.size-box").val();			
			 }); 
		 
			 // - 곡선 입력 완료
			 $(document).not($(".lineRadius.size-box")).click(function(){
				 	lineWidth = $(".lineWidth.size-box").val();
					$('.sl-block.isFocus').css('border-width', lineWidth +'px' );
					
			    	$(".lineRadius.size-scroll").css("z-index", "16");
			    	$(".lineRadius.size-scroll").removeClass("back");
			    });

			
			// 곡선 적용
			$(".lineRadius.size-scroll").on("mouseup", function(){
				lineRadius = $(this).val();
				$('.sl-block.isFocus').css('border-radius' , lineRadius +'px');
				console.log("곡선 적용 " + lineRadius)
				
			})
			
			
}); // 맨 끝			
   

