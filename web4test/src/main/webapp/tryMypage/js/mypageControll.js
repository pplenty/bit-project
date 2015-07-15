var ip = 'localhost:9999/web4test'
	
	
$(function(){
	console.log("요청 로드 시작")
	var email;
	var userNo;
	var name;
	var result;
	
	$.ajax('http://' + ip + '/getUser.do', {
		method : 'POST',
		dataType : 'json',
		success : function(result){
		    email = result.email;
			userNo = result.userNo;
			name = result.name;
			console.log(name)
			$('.topMenu ul.cbp-tm-menu li.loginUserName a.userName').html("["+ name +"]" +'님 Mypage');
			console.log("LoginControllerd의 getUser.do 실행 완료");
			pageLoad(ip, userNo, email); // 아래쪽에 페이지 로드 함수 호출
		},
		error: function(xhr, textStatus, errorThrown) {
			alert('작업을 완료할 수 없습니다.\n' + 
				  '잠시 후 다시 시도하세요.\n' +
				  '계속 창이 뜬다면, 관리자에 문의하세요.(사내번호:1112)');
			console.log(" LoginController의 getUser ajax 요청 오류")
		}
	});

	$(document).on('dblclick', '.canvasIn.Title', function(){
			$(this).addClass('edit');
			var preNo = $(this).attr('preno');
			$('.canvasIn.Title.edit').css('border', '5px dotted black');
			$(this).attr('contenteditable','true').focus();
			$(document).not($('.canvasIn.Title.edit')).on('click', function(){
					var newTitle = $('.canvasIn.Title.edit').text();
					$('.canvasIn.Title.edit').css('border', '')
					$('.canvasIn.Title.edit').attr('contenteditable', 'false');
					$('.canvasIn.Title.edit').removeClass('edit');
				
					editTitle(newTitle, preNo);
			});			
		});
	
	$('.intro-content.newCanvas').click(function() {
		$.ajax({
			url: 'http://localhost:9999/web4test/setCurrentPreNo.do',
			method : "post",
			data: {'currentPreNo' : 0 },
			success : function(){
				console.log('newCanvas setCurrentPreno 성공')
				location.href = '../pro/Edit.html';
			}, 
			error : function(){
				console.log("에러")
			}
		});
	});
		
		
		$(document).on('click', '.useTool-edit', function(event) {
			var titleDiv = $(event.currentTarget).parent().parent().siblings(".Title");
			var toSetPreNo = $(titleDiv).attr('preno');
			console.log('NO: '+toSetPreNo);
		
			$.ajax({
				url: 'http://localhost:9999/web4test/setCurrentPreNo.do',
				method : "post",
				data: {'currentPreNo' : toSetPreNo },
				success : function(){
					console.log('newCanvas setCurrentPreno 성공');
					location.href = '../pro/Edit.html';
				}, 
				error : function(){
					console.log("에러");
				}
			});
		
		});
		
		
		
	});
	
	

	
function editTitle(newTitle, preNo){
	$.ajax('http://'+ ip +'/editTitle.do', {
		method :'POST',
		dataType : 'json',
		data : {
			newTitle : newTitle,
			preNo : preNo
		},
		success : function(result){
			console.log("제목 변경 완료!");
		},
		error: function(xhr, textStatus, errorThrown) {
			alert('작업을 완료할 수 없습니다.\n' + 
				  '잠시 후 다시 시도하세요.\n' +
				  '계속 창이 뜬다면, 관리자에 문의하세요.(사내번호:1112)');
		}
	});
}

function pageLoad(ip, userNo, email){
	$.ajax('http://'+ ip +'/mypageLoad.do', {
		method: 'POST',
		dataType: 'json',
		data: {
			email: email,// 이메일 정보 로그인 페이지에서 빼오기
			userNo : userNo
		},
		success: function(result) {
			console.log(userNo);
			console.log("받아오기")
			var s1i1 = "최근 작업 내용이 없습니다."
			var s1i2 = "저장한 내용이 없습니다."
			var s2i1 = "즐겨찾기 등록 내용이 없습니다."
			var s2i2 = "전체공개로 설정된 슬라이드가 없습니다."
			var sectionOneinnerOne =  $(".section.one.inner.one div.inside-list ul.inside-list.latest");
			var sectionOneinnerTwo = $(".section.one.inner.two div.inside-list ul.inside-list.whole");
			var sectionTwoinnerOne = $(".section.two.inner.one div.inside-list ul.inside-list.Favoriteshare");
			var sectionTwoinnerTwo = $(".section.two.inner.two div.inside-list ul.inside-list.share");									
				
			if (result.myEmpty == 'yes'){
				// 저장된 데이터가 없음을 표시
				emptyCase(sectionOneinnerOne, s1i1);
				emptyCase(sectionOneinnerTwo, s1i2);
				
			} else {
			// 최근 작업 슬라이드
			var latest = result.latestData; // latestData : 최근 작업한 슬라이드 한개 뽑아서 저장
			drawInnerMyList(sectionOneinnerOne, latest);  // drawInnerMyList 함수로 li 내용 그리고 appendTo까지 하기
			
			// 전체 목록 불러오기
			var whole = result.wholeData; // wholeData : 사용자의 전체 슬라이드 저장한 내용
			drawWholeList(sectionOneinnerTwo, whole);
		    }
			
			
			// 즐겨찾기 슬라이드 불러오기
				if(result.favoriteEmpty == "yes"){// 즐겨찾기한 내용 없을 경우
					// 즐겨찾기 한 내용이 없습니다. 표시
					emptyCase(sectionTwoinnerOne, s2i1);
					console.log("dih")

				} else {// 즐겨찾기한 내용이 있을 경우
			    var favoriteList = result.favoritList; // favoriteList : 즐겨찾기한 내용을 셀렉해와 저장한 내용
			    drawShareList(sectionTwoinnerOne, favoriteList);
				}
			
			// 전체 공개 공유 슬라이드 나열
			var shareList = result.shareList;
				if(result.shareListEmpty == "yes"){
					// 전체 공개로 된 슬라이드 없음을 표시 혹시 모르니까
					emptyCase(sectionTwoinnerTwo, s2i2);
				} else {
				  drawShareList(sectionTwoinnerTwo, shareList);
				}
			console.log("받아오기 완료!");
		},
		error: function(xhr, textStatus, errorThrown) {
			alert('작업을 완료할 수 없습니다.\n' + 
				  '잠시 후 다시 시도하세요.\n' +
				  '계속 창이 뜬다면, 관리자에 문의하세요.(사내번호:1112)');
		}
	});
	
}

function drawInnerMyList(sectionNo, data){
	  $("<li>").html("<div class='oneCanvas'><div class='canvasIn preThumbnail'><img src='img/2014050814508068683_1.jpg'></div>"
             + "<div class='canvasIn canvasInfo'>"
               + "<div class='canvasIn Title' preNo='"+ data.preNo +"'>"+ data.title+" </div>"
               + "<div class='canvasIn Tool'>"
                        +"<div class='canvasIn create_date'><span class='column date'>Date : </span><span class='cre_date'>"+data.createDate+"</span></div>"
                        + "<div class='canvasIn useTool'>"
                                  + "<span class='useTool-publicYn'><i class='public fa fa-lock'></i></span>"
                                  + "<span class='useTool-edit'><i class='fa fa-pencil-square-o'></i></span>"
                                  + "<span class='useTool-player'><i class='fa fa-play-circle-o'></i></span>"
                        + "</div></div></div></div>").appendTo(sectionNo);
	
}

function drawWholeList(sectionNo, data){
	for(var i in data){		
		 $("<li>").html("<div class='oneCanvas'><div class='canvasIn preThumbnail'><img src='img/2014050814508068683_1.jpg'></div>"
                + "<div class='canvasIn canvasInfo'>"
                  + "<div class='canvasIn Title' preNo='"+ data[i].preNo + "'>"+data[i].title+" </div>"
                  + "<div class='canvasIn Tool'>"
                           +"<div class='canvasIn create_date'><span class='column date'>Date : </span><span class='cre_date'>"+data[i].createDate+"</span></div>"
                           + "<div class='canvasIn useTool'>"
                                     + "<span class='useTool-publicYn'><i class='public fa fa-lock'></i></span>"
                                     + "<span class='useTool-edit'><i class='fa fa-pencil-square-o'></i></span>"
                                     + "<span class='useTool-player'><i class='fa fa-play-circle-o'></i></span>"
                           + "</div> </div></div></div></li>").appendTo(sectionNo);
	}
}

function drawShareList(sectionNo, data){
	for(var i in data){	
	 $("<li>").html("<div class='oneCanvas'><div class='canvasIn preThumbnail'><img src='img/2014050814508068683_1.jpg'></div>"
             + "<div class='canvasIn canvasInfo'>"
               + "<div class='canvasIn Title' preNo='"+ data[i].preNo +"' creNo='"+ data[i].userNo +"'>"+data[i].title+" </div>"
               + "<div class='canvasIn share Tool'>"
                        + "<div class='canvas-1 shareInfo'><div class='canvasIn authorInfo'><span class='column author'>Author : </span><span class='cre_author' >"+data[i].author +"</span></div>"
                        + "<div class='canvasIn create_date'><span class='column date'>Date : </span><span class='cre_date'>"+data[i].createDate+"</span></div>"
                        + "<div class='canvasIn useTool'>"
                        + "<span class='favoriteYn'><i class='fa fa-star'></i></i></span>"
                        + "<span class='useTool-player'><i class='fa fa-play-circle-o'></i></span>"
                        + "</div> </div></div></div></li>").appendTo(sectionNo);
	}

}
function emptyCase(sectionNo, message){
	 $("<li>").html("<div class='oneCanvas'> "+
             + "<div class='canvasIn canvasInfo'>"
             + "<div class='canvasIn message'>"+ message +"</div>").appendTo(sectionNo);
	
}

//wholelist 만드는 틀인데 만들어지면 css가 먹질 않음 

//for(var i in whole){
//	console.log(i)
//	var list = $(".section.one.inner.two div.inside-list ul.inside-list.whole")
//	var li = $("<li>").appendTo(list);
//	var inner = $("<div>").addClass('oneCanvas').appendTo(li);
//		var canvasThumb = $("<div>").addClass('canvasIn preThumbnail').attr('src','img/2014050814508068683_1.jpg' ).appendTo(inner);
//		var canvasInfo = $("<div>").addClass('canvasIn canvasInfo').appendTo(inner);
//	
//			var innerT = $("<div>").addClass('canvasIn canvasInfo canvasIn title').html(rows[i].title).appendTo(canvasInfo);
//				var canvasTool = $("<div>").addClass('canvasIn canvaTool').appendTo(canvasInfo);
//	
//			 var canvasDate = $("<div>").addClass('canvasIn create_date').appendTo(canvasTool);
//			 	$("<span>").html('Date : ').appendTo(canvasDate);
//			 	$("<span>").addClass('create_date').html(rows[i].createDate).appendTo(canvasDate);
//			 var canvasUseTool = $("<div>").addClass("canvasIn useTool").appendTo(canvasTool);
//			 	$("<span>").addClass('useTool-publicYn').innerHtml('<i class="public fa fa-lock"></li>').appendTo(canvasUseTool);
//			 	$("<span>").addClass('useTool-edit').innerHtml('<i class="fa fa-pencil-square-o"></li>').appendTo(canvasUseTool);
//			 	$("<span>").addClass('useTool-player').innerHtml('<i class="fa fa-play-circle-o"></li>').appendTo(canvasUseTool);
//			 	
//			 	$(".section.one.inner.two").append
//			 	var li = $("<li>").html()
