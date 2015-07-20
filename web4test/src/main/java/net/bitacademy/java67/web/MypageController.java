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
  
  int userNo;
  
  @RequestMapping(value="/mypageLoad", method = RequestMethod.POST)
  public Object list(HttpServletRequest request, HttpServletResponse response){
    
    // ajax 요청 받은 데이터 (사용자 번호, 이메일) 저장하기
    String email = request.getParameter("email");
    userNo = Integer.parseInt(request.getParameter("userNo"));
    
// 사용자 번호가지고 조회할 때 쓸 sqlParams
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
         System.out.println("으악" + shareList);
         }
      return responseData;
  
  }
  
  // 제목 수정 
  @RequestMapping(value="/editTitle", method = RequestMethod.POST)
  public Object editTitle(HttpServletRequest request, HttpServletResponse response){
    
    int preNo = Integer.parseInt(request.getParameter("preNo"));    
    String newTitle = request.getParameter("newTitle");
    System.out.println("프레젠테이션 번호" + preNo +"번   새 제목 :" + newTitle);
    
    HashMap<String,Object> sqlParams = new HashMap<String,Object>();//요청할 때 쓸 정보 공간
    sqlParams.put("title", newTitle);
    sqlParams.put("preNo", preNo);
    sqlParams.put("userNo", userNo);
    
    mypageDao.updateTitle(sqlParams);

    HashMap<String, Object> responseData = new HashMap<String, Object>(); // 클라이언트에 보낼 데이터 저장공간
    responseData.put("status", "success");
    
    
    return responseData;
  }
  
  // 즐겨찾기 수정
  @RequestMapping(value="/favoriteChange", method=RequestMethod.POST)
  public Object favoriteChange(HttpServletRequest request, HttpServletResponse response){
   
    int preNo = Integer.parseInt(request.getParameter("preNo"));
    String favoriteYn = request.getParameter("favorite");
    System.out.println(favoriteYn);
 
    HashMap<String,Object> sqlParams = new HashMap<String,Object>();//요청할 때 쓸 정보 공간
    sqlParams.put("preNo", preNo);
    sqlParams.put("userNo", userNo);
    
    if(favoriteYn.equals("y")){
        mypageDao.insertFavorite(sqlParams);
    } else if (favoriteYn.equals("n")){
        mypageDao.deleteFavorite(sqlParams);

    }
    HashMap<String, Object> responseData = new HashMap<String, Object>(); // 클라이언트에 보낼 데이터 저장공간
    responseData.put("status", "success");
    
    return responseData;
  }
  
  // 공개여부 수정
  @RequestMapping(value="/publicChange", method=RequestMethod.POST)
  public Object publicChange(HttpServletRequest request, HttpServletResponse response){
   
    int preNo = Integer.parseInt(request.getParameter("preNo"));
    String isPublic = request.getParameter("isPublic");
    
    HashMap<String,Object> sqlParams = new HashMap<String,Object>();//요청할 때 쓸 정보 공간
    sqlParams.put("isPublic", isPublic);
    System.out.println(isPublic);
    sqlParams.put("preNo", preNo);
    sqlParams.put("userNo", userNo);

      mypageDao.updatePublic(sqlParams);
   
    HashMap<String, Object> responseData = new HashMap<String, Object>(); // 클라이언트에 보낼 데이터 저장공간
    responseData.put("status", "success");
    
    return responseData;
  }

  
  @RequestMapping(value="/deletePresentation", method=RequestMethod.POST)
  public Object deletePresentation(HttpServletRequest request, HttpServletResponse response){
  
    int preNo = Integer.parseInt(request.getParameter("preNo"));
    System.out.println("삭제할 프레젠테이션 번호 " + preNo);
 
    HashMap<String,Object> sqlParams = new HashMap<String,Object>();//요청할 때 쓸 정보 공간
    sqlParams.put("preNo", preNo);
    sqlParams.put("userNo", userNo);
    
    mypageDao.deletePresent(sqlParams);
    
    HashMap<String, Object> responseData = new HashMap<String, Object>(); // 클라이언트에 보낼 데이터 저장공간
    responseData.put("status", "success");
    
    return responseData;
  }
  
  
  
}
