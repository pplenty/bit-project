package net.bitacademy.java67.web;

import java.io.File;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.math.BigInteger;
import java.security.SecureRandom;
import java.util.HashMap;
import java.util.Scanner;

import javax.servlet.ServletRequest;
import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import net.bitacademy.java67.dao.UserDao;
import net.bitacademy.java67.domain.UserVo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

@Controller
@RequestMapping("/auth")
public class AuthController {
  @Autowired
  UserDao userDao;

  @RequestMapping(value="/login",method=RequestMethod.GET)
  public void loginForm() {
  }

  @RequestMapping(value="/login",method=RequestMethod.POST)
  public String login(String email, String saveEmail, String name,
      HttpServletResponse response, HttpSession session) {
    if (saveEmail != null) { // 체크 상자를 체크 했으면,
      // 클라이언트로 사용자 이메일을 쿠키에 담아 보낸다.
      Cookie emailCookie = new Cookie("email", email);
      emailCookie.setMaxAge(60 * 60 * 24 * 30); // 30일간 쿠키 유지할 것!
      response.addCookie(emailCookie);
    } else {
      // 기존의 이메일을 지운다.
      Cookie emailCookie = new Cookie("email", "");
      // A negative value means that the cookie is not stored persistently 
      //  and will be deleted when the Web browser exits. 
      // * A zero value causes the cookie to be deleted.
      
      emailCookie.setMaxAge(0); // 쿠키를 지울 것!
      response.addCookie(emailCookie);
    }
    
    // 사용자 검증
    HashMap<String, String> sqlParams = new HashMap<String, String>();
    sqlParams.put("email", email);
    //
    return null;
    
    
//    UserVo user = userDao.selectOne(sqlParams);
//    
//    if (user != null) { // 이메일과 암호가 일치하는 사용자를 찾았다면,
//      session.setAttribute("user", user); // 로그인 성공 => 사용자 정보를 세션에 보관한다.
//      return "redirect:../board/list.do";
//      
//    } else { // 찾지 못했다면, 다시 로그인 폼을 요청하라고 응답한다.
//      session.invalidate(); // 기존 세션을 무효화 시킨다. => 세션을 새로 만든다.
//      return "redirect:login.do";
//    }
    
  }
  
  @RequestMapping("/logout")
  public String logout(HttpSession session) {
    session.invalidate();
    return "redirect:login.do";
  }
  
  @RequestMapping("/")
  public void main(HttpServletRequest request, HttpServletResponse response,
      HttpSession session) throws IOException {
    // This check prevents the "/" handler from handling all requests by default
    System.out.println(request.getServletPath());
    System.out.println(File.separator);
    if (!"/".equals(request.getServletPath())) {
      response.setStatus(HttpServletResponse.SC_NOT_FOUND);
//      return;
    }

    response.setContentType("text/html");
    // 요청 위조를 방지하는 상태 토큰을 만듭니다.
    // 나중에 확인할 수 있도록 세션에 저장합니다.
//    String state = new BigInteger(130, new SecureRandom()).toString(32);
//    request.getSession().setAttribute("state", state);
    // index.html을 메모리로 읽고 HTML을 제공하기 전에 클라이언트 ID,
    // 토큰 상태, 애플리케이션 이름을 HTML에 저장합니다.
    try {
      // Create a state token to prevent request forgery.
      // Store it in the session for later validation.
      String state = new BigInteger(130, new SecureRandom()).toString(32);
      request.getSession().setAttribute("state", state);
      // Fancy way to read index.html into memory, and set the client ID
      // and state values in the HTML before serving it.
      // C:\\BigLab\\workspace\\.metadata\\.plugins\\org.eclipse.wst.server.core\\tmp0\\wtpwebapps\\web4\\index.html
      response.getWriter().print(new Scanner(new File("..\\firstpage\\index2.html"), "UTF-8")
          .useDelimiter("\\A").next()
          .replaceAll("[{]{2}\\s*CLIENT_ID\\s*[}]{2}", "3679365711-ilsb14e01shkrnbn2mag9jurhn9lsjnj.apps.googleusercontent.com")
          .replaceAll("[{]{2}\\s*STATE\\s*[}]{2}", state)
          .replaceAll("[{]{2}\\s*APPLICATION_NAME\\s*[}]{2}",
              "web4test")
          .toString());
      response.setStatus(HttpServletResponse.SC_OK);
    } catch (FileNotFoundException e) {
      // When running the quickstart, there was some path issue in finding
      // index.html.  Double check the quickstart guide.
      e.printStackTrace();
      response.setStatus(HttpServletResponse.SC_NOT_FOUND);
      response.getWriter().print(e.toString());
    }
  }
  
  @RequestMapping("/login2")
  public String login2(HttpServletRequest request, HttpServletResponse response, 
      HttpSession session) {
    // 요청 위조가 아니며 이 연락 요청을 보내는 사용자가
    // 정당한 사용자인지 확인합니다.
//    if (!request.queryParams("state").equals(
//        request.session().attribute("state"))) {
//      response.status(401);
//      return GSON.toJson("Invalid state parameter.");
//    }
    return null;
  }
  
  
}
