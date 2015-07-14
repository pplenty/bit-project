package net.bitacademy.java67.web;

import java.io.IOException;
import java.io.Writer;
import java.util.HashMap;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import net.bitacademy.java67.dao.MypageDao;
import net.bitacademy.java67.dao.PresentationDao;
import net.bitacademy.java67.dao.UserDao;
import net.bitacademy.java67.domain.PresentationVo;
import net.bitacademy.java67.domain.UserVo;

import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

@Controller
public class PresentationController {
  @Autowired
  UserDao userDao;

  @Autowired
  PresentationDao presentDao;
  
  @Autowired
  MypageDao mypageDao;
  
  

  @RequestMapping(value = "/presentationSave", method = RequestMethod.POST)
  public void saveP(HttpServletRequest request, HttpServletResponse response,
      HttpSession session) throws IOException {
    System.out.println("presentation.do 진입");
    String htmlSource = request.getParameter("content");
    // ajax return JSON
    JSONObject JSONResult = new JSONObject();

    String email = (String)session.getAttribute("email");
    String name = (String)session.getAttribute("name");
    
    // 세션에 로그인 정보가 없을 시 예외처리
    if (email != null) {
      HashMap<String, Object> paramMap = new HashMap<String, Object>();
      paramMap.put("email", email);
      UserVo user = new UserVo();
      user = userDao.selectOne(paramMap);
      System.out.println(user.getUserNo() + " - " + user.getEmail());
      
      JSONResult.put("latestPreNo",
          mypageDao.selectLatest(user.getUserNo()).getPreNo());
      
      // BoardDao 인터페이스의 selectList()는 한 개의 파라미터를 요구한다.
      // 따라서 SQL 파라미터 값을 맵 객체에 담아서 넘겨야 한다.
      HashMap<String, Object> sqlParams = new HashMap<String, Object>();
      sqlParams.put("content", htmlSource);

      PresentationVo presentVo = new PresentationVo();
      presentVo.setContent(htmlSource);
      presentVo.setUserNo(user.getUserNo());
      presentVo.setAuthor(name);
          presentDao.insert(presentVo);
//      presentDao.update(presentVo);

      JSONResult.put("result", "success");
    }
    JSONResult.put("result", "not login");

    // JSON RETURN!!
    response.getWriter().print(JSONResult);
    
    
  }
  
  @RequestMapping(value = "/presentationLoad", method = RequestMethod.GET)
  public void loadP(HttpServletRequest request, HttpServletResponse response,
      HttpSession session) throws IOException {
    System.out.println("prezent 진입");
    

    PresentationVo presentVo;
    int no = 1;
    presentVo = presentDao.selectOne(no);
    if(presentVo != null) {
      System.out.println("로딩성공");
      System.out.println(session.getAttribute("name"));
//      System.out.println(presentVo.getContent());
    }
    else System.out.println("null");
    
    
    //ajax return data
    Writer out = response.getWriter();
    out.write(presentVo.getContent());
    
  }

}