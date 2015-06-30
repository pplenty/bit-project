$(function(){
	
	var presentSection = $('section.present');
	var blockId = 100000;
	var block_zIndex = 10;

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
						'border' : '1px solid black',
						//'font-size' : '50px'
					}).appendTo(presentSection);
					
			var blockContent = 
				$("<div>")
				.addClass("sl-block-content")
				.css({
					'z-index' : '11',
					'padding' : '10px'
				}).appendTo(blockText);
			
				 $("<p>")
				 	.addClass("placeHolder")
					.text("Text")
					.appendTo(blockContent);
			
				 
			  } else if($('.sl-block.isFocus').length > 0){
					  $(".toolbar-list").css('visibility', 'hidden');
					  $(".text-list").css('visibility', 'visible');
					  
			  }
			}
			);

	

	$(document).on('dblclick','.sl-block', function(){
	    var contentBox = $(this).children(".sl-block-content");
	    var contentP = contentBox.children(" p");	    
	    
	    $(".toolbar-list").css('visibility', 'hidden');
	    $(".text-list").css('visibility', 'visible');
	    
	    contentBox.attr("contenteditable",'true').focus();
	    contentP.attr("contenteditable", "true").text('').focus();
		  

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


// - font-size 관리 변수
	var fontSizeInput;
	
	//-font-size 스크롤 조정
	$(".font.size-scroll").on("mousemove", function(ev){	
		fontSizeInput = $(ev.target).val();
			$(".font.size-box").val(fontSizeInput);
		}); 

// TEXT - font 사이즈 관리			
	//-font-size 스크롤 완료
	$(".font.size-scroll").on("mouseup", function(){
		$(".font.size-box").val(fontSizeInput);

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
		    	$(".font.size-scroll").css("z-index", "2");
		    	$(".font.size-scroll").removeClass("back");
		    });

	//텍스트 폰트 크기
	$('.font.size-scroll').on('change', function(){	
		$('.sl-block.isFocus .sl-block-content p').css({'font-size': $(this).val() + 'px'});
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
			console.log(opSizeInput);
		}); 
	
	//-투명도값 관리 
	$(".opacity.size-scroll").on("mouseup", function(){
		$(".opacity.size-box").val(opSizeInput);

	});
		//- 투명도값 직접 입력받기
		 $(".opacity.size-scroll").on("dblclick", function(ev){
			$(this).css("z-index", "0");
			$(this).addClass("back");
			$(".opacity.size-box").focus();
			fontSizeInput = $(".opacity.size-box").val();			
		}); 
		 // - 투명도 입력 완료
		 $(document).not($(".opacity.size-box")).click(function(){
		    	$(".opacity.size-scroll").css("z-index", "2");
		    	$(".opacity.size-scroll").removeClass("back");
		    });

		//투명도값 적용
			$('.opacity.size-scroll').on('change', function(){	
				$('.sl-block.isFocus .sl-block-content p').css({'opacity': $(this).val()});
			})

	//padding 값 설정
	// - padding 변수
	var paddingSizeInput;
	
	//-투명도 값 스크롤 조정
	$(".padding.size-scroll").on("mousemove", function(ev){	
		paddingSizeInput = $(ev.target).val();
			$(".padding.size-box").val(paddingSizeInput);
			console.log(paddingSizeInput);
		}); 
	
	//-투명도값 관리 
	$(".padding.size-scroll").on("mouseup", function(){
		$(".padding.size-box").val(paddingSizeInput);

	});
		//- 투명도값 직접 입력받기
		 $(".padding.size-scroll").on("dblclick", function(ev){
			$(this).css("z-index", "0");
			$(this).addClass("back");
			$(".padding.size-box").focus();
			fontSizeInput = $(".padding.size-box").val();			
		}); 
		 // - 투명도 입력 완료
		 $(document).not($(".padding.size-box")).click(function(){
		    	$(".padding.size-scroll").css("z-index", "2");
		    	$(".padding.size-scroll").removeClass("back");
		    });

		//투명도값 적용
			$('.padding.size-scroll').on('change', function(){	
				$('.sl-block.isFocus').css({'padding': $(this).val()+'px'});
			});
			
			
   


	
});
