package net.bitacademy.java67.web;

import java.util.HashMap;
import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import net.bitacademy.java67.dao.MypageDao;
import net.bitacademy.java67.domain.PresentationVo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.mysql.jdbc.PreparedStatement.ParseInfo;

@Controller
public class MypageController {
  @Autowired
  MypageDao mypageDao;
  
  @RequestMapping(value="/mypageLoad", method = RequestMethod.POST)
  public Object list(HttpServletRequest request, HttpServletResponse response){
    
    // ajax 요청 받은 데이터 (사용자 번호, 이메일) 저장하기
    String email = request.getParameter("email");
    System.out.println(email + "이 로그인");
    int userNo = Integer.parseInt(request.getParameter("userNo"));
    
// 사용자 번호가지고 LIST 뽑아 오기
     HashMap<String,Object> sqlParams = new HashMap<String,Object>();//요청할 때 쓸 정보 공간
     sqlParams.put("user_no", userNo);
     
     // 클라이언트에게 보내는 정보
      HashMap<String, Object> responseData = new HashMap<String, Object>(); // 클라이언트에 보낼 데이터 저장공간
      
      responseData.put("status", "success" );
      
      // 최근 작업 슬라이드 1개
      PresentationVo latest = mypageDao.selectLatest(userNo);
        if(latest == null){ // 저장한 내용이 없을 경우
          System.out.println("저장된 내용이 없음");
          responseData.put("myEmpty", "yes");
        } else { // 저장한 내용이 있을 경우 리스트 뿌려주기
        responseData.put("latestData",latest);
        // Mywhole 슬라이드 전체 (거꾸로 할껀지, 1번부터 할건지 고민해보기)
        List<PresentationVo> wholeList = mypageDao.selectList(userNo);
        responseData.put("wholeData", wholeList);
        System.out.println("전체 슬라이드 긁어옴");
        } 
        
      // 공유 슬라이드 중에 즐겨 찾기 해둔 슬라이드 찾기
      List<PresentationVo> favoriteList = mypageDao.selectFavorite(userNo);  
      System.out.println(favoriteList+"즐겨찾기 해온 결과!");
      
        if(favoriteList.isEmpty() == true ){// 즐겨찾기한 내용이 없을 경우
          System.out.println("즐겨찾기한 내용이 없음");
          responseData.put("favoriteEmpty","yes");
        } else { // 즐겨찾기한 내용이 있을 경우
          responseData.put("favoritList", favoriteList);
          System.out.println("즐겨찾기 찾아옴");
        }
        
      // 전체 슬라이드 중에 공유 설정해둔 슬라이드 찾기
       List<PresentationVo> shareList =  mypageDao.selectShareList("y");
         if(shareList == null){
          System.out.println("공개설정한 데이터가 없음!"); 
          responseData.put("shareListEmpty", "yes");
         } else {
         responseData.put("shareList", shareList);
         }
      return responseData;
  
  }
  
  
  @RequestMapping(value="/editTitle", method = RequestMethod.POST)
  public Object editTitle(HttpServletRequest request, HttpServletResponse response){
    
    int preNo = Integer.parseInt(request.getParameter("preNo"));    
    String newTitle = request.getParameter("newTitle");
    System.out.println("프레젠테이션 번호" + preNo +"번   새 제목 :" + newTitle);
    
    HashMap<String,Object> sqlParams = new HashMap<String,Object>();//요청할 때 쓸 정보 공간
    sqlParams.put("title", newTitle);
    sqlParams.put("preNo", preNo);
    
    mypageDao.updateTitle(sqlParams);

    HashMap<String, Object> responseData = new HashMap<String, Object>(); // 클라이언트에 보낼 데이터 저장공간
    responseData.put("status", "success");
    
    
    return responseData;
  }
  
}
