package net.bitacademy.java67.web;

import java.util.HashMap;
import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import net.bitacademy.java67.dao.MypageDao;
import net.bitacademy.java67.domain.PresentationVo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

@Controller
public class MypageController {
  @Autowired
  MypageDao mypageDao;
  
  @RequestMapping(value="/mypageLoad", method = RequestMethod.POST)
  public Object list(HttpServletRequest request, HttpServletResponse response){
    
// 접속자 확인작업
    System.out.println("mypageLoad 진입");
    System.out.println("사용자 번호 받아오기");
    // email 주소를 파라미터로 받아서 리스트 요청
    String email = request.getParameter("email");
    System.out.println(email);
    // 이메일을 가지고 사용자 번호를 가져와 저장해둔다. 
    int userNo = mypageDao.selectUser(email);
    System.out.println("사용자 고유번호" + userNo);
 
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
        } 
        
      // 공유 슬라이드 중에 즐겨 찾기 해둔 슬라이드 찾기
      List<PresentationVo> favoriteList = mypageDao.selectFavorite(userNo);     
        if(favoriteList.isEmpty() == true ){// 즐겨찾기한 내용이 없을 경우
          System.out.println("즐겨찾기한 내용이 없음");
          responseData.put("favoriteEmpty","yes");
        } else { // 즐겨찾기한 내용이 있을 경우
          responseData.put("favoritList", favoriteList);
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
}
