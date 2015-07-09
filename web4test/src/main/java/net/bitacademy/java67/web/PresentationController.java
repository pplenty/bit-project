package net.bitacademy.java67.web;

import java.io.IOException;
import java.io.Writer;
import java.util.HashMap;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import net.bitacademy.java67.dao.PresentationDao;
import net.bitacademy.java67.domain.PresentationVo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

@Controller
public class PresentationController {
  @Autowired
  PresentationDao presentDao;

  @RequestMapping(value = "/presentationSave", method = RequestMethod.POST)
  public void saveP(HttpServletRequest request, HttpServletResponse response) 
                                                            throws IOException {
    System.out.println("presentation.do 진입");
    String htmlSource = request.getParameter("content");
    
    // BoardDao 인터페이스의 selectList()는 한 개의 파라미터를 요구한다.
    // 따라서 SQL 파라미터 값을 맵 객체에 담아서 넘겨야 한다.
    HashMap<String, Object> sqlParams = new HashMap<String, Object>();
    sqlParams.put("content", htmlSource);
    
    PresentationVo presentVo = new PresentationVo();
    presentVo.setContent(htmlSource);
//    presentDao.insert(presentVo);
    presentDao.update(presentVo);
    
    Writer out = response.getWriter();
    out.write("success");
    
  }
  
  @RequestMapping(value = "/presentationLoad", method = RequestMethod.GET)
  public void loadP(HttpServletRequest request, HttpServletResponse response,
      HttpSession session) 
                                                          throws IOException {
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