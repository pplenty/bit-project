package net.bitacademy.java67.web;

import java.io.IOException;
import java.io.UnsupportedEncodingException;
import java.util.HashMap;
import java.util.Map;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import net.bitacademy.java67.dao.UserDao;
import net.bitacademy.java67.domain.UserVo;

import org.json.JSONObject;
import org.json.XML;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
public class LoginController {
  @Autowired
  UserDao userDao;

//  private static final String redirectUrl = "http%3A%2F%2Flocalhost%3A9999%2Fweb4test%2FnaverCallback.do";
//  private static final String redirectUrl = "http%3A%2F%2F127.0.0.1%3A9999%2Fweb4test%2FnaverCallback.do";
  private static final String redirectUrl = "http%3A%2F%2F192.168.10.2%3A9999%2Fweb4test%2FnaverCallback.do";
  private static final String clientId = "7i5u84FejTlQKxQrP6hG";
  private static final String clientSecret = "6e9ErvgIP4";
  private static final String requestUrl = "https://nid.naver.com/oauth2.0/authorize?client_id="
      + clientId + "&response_type=code&redirect_uri=" + redirectUrl + "&state=";
  private static final String userProfileUrl = "https://apis.naver.com/nidlogin/nid/getUserProfile.xml";

  @RequestMapping("/checkLogin")
  public void checkLogin(
      HttpSession session, HttpServletRequest request, HttpServletResponse response)
          throws IOException {
    String email = request.getParameter("email");
    String name = request.getParameter("name");
//    String accessToken = request.getParameter("accessToken");
//    String expiresIn = request.getParameter("expiresIn");
//    String signedRequest = request.getParameter("signedRequest");
//    String userID = request.getParameter("userID");
    
    

    HashMap<String, Object> sqlParams = new HashMap<String, Object>();
    sqlParams.put("email", email);
    
    System.out.println(email + name);
    session.setAttribute("email", email);
    session.setAttribute("name", name);
    
    HashMap<String, Object> paramMap = new HashMap<String, Object>();
    paramMap.put("email", email);
    UserVo user = new UserVo();
    user = userDao.selectOne(paramMap);
    
    session.setAttribute("userNo", user.getUserNo());

//    Cookie emailCookie = new Cookie("email", email);
//    emailCookie.setMaxAge(60 * 60 * 24 * 30); // 30일간 쿠키 유지할 것!
//    response.addCookie(emailCookie);
    
    // return type은 json으로
    JSONObject JSONResult = new JSONObject();
//    JSONObject JSONError = new JSONObject();
    if(userDao.selectOne(sqlParams) != null) {
      JSONResult.put("result", "success");
      response.getWriter().print(JSONResult);
    } else {
      JSONResult.put("result", "new register");
      userDao.insert(sqlParams);
      response.getWriter().print(JSONResult);
    }
    

//    return "redirect:/mypage/mypage.html";
  }

  @RequestMapping("/getUser")
  public HashMap<String, Object> getUserInfo(
      HttpSession session, HttpServletRequest request, 
        HttpServletResponse response) {
    System.out.println(session.getAttribute("email"));
    String email = (String) session.getAttribute("email");
    String name  = (String) session.getAttribute("name");
    String userNo  = (String) session.getAttribute("userNo");
    

    HashMap<String, Object> sqlParams = new HashMap<String, Object>();
    sqlParams.put("email", email);
    sqlParams.put("name", name);
    sqlParams.put("userNo", userNo);
    

    return sqlParams;
  }
  
  
  //
  @RequestMapping(value = "/facebookLogin")
  public String facebookLogin(HttpSession session) {
    String state = Utils.generateState(); // 토큰을 생성합니다.
    session.setAttribute("state", state); // 세션에 토큰을 저장합니다.
    return "redirect:" + requestUrl + state; // 만들어진 URL로 인증을 요청합니다.
  }
  
  @RequestMapping(value = "/naverLogin")
  public String naverLogin(HttpSession session) {
    String state = Utils.generateState(); // 토큰을 생성합니다.
    session.setAttribute("state", state); // 세션에 토큰을 저장합니다.
    return "redirect:" + requestUrl + state; // 만들어진 URL로 인증을 요청합니다.
  }

  @RequestMapping(value="/naverCallback")
  public String callback(
      @RequestParam String state, 
      @RequestParam String code, 
      HttpServletRequest request) throws IOException {
   
   String storedState = (String) request.getSession().getAttribute("state");  //세션에 저장된 토큰을 받아옵니다.
   if (!state.equals(storedState)) {             //세션에 저장된 토큰과 인증을 요청해서 받은 토큰이 일치하는지 검증합니다.
    System.out.println("401 unauthorized");   //인증이 실패했을 때의 처리 부분입니다.
    return "redirect:/login/login.html";
   }
   
   
   String data = Utils.getHtml(getAccessUrl(state, code), null);           //AccessToken을 요청하고 그 값을 가져옵니다.
   Map<String,String> map = Utils.JSONStringToMap(data);               //JSON의 형태로 받아온 값을 Map으로 저장합니다.
   String accessToken = map.get("access_token");
   String tokenType = map.get("token_type"); 
   
   String profileDataXml = Utils.getHtml(userProfileUrl, tokenType +" "+ accessToken); 
  // tokentype 와 accessToken을 조합한 값을 해더의 Authorization에 넣어 전송합니다. 결과 값은 xml로 출력됩니다. 
    
  JSONObject jsonObject =  XML.toJSONObject(profileDataXml);     //xml을 json으로 파싱합니다.
  JSONObject responseData = jsonObject.getJSONObject("data");   
  //json의 구조가 data 아래에 자식이 둘인 형태여서 map으로 파싱이 안됩니다. 따라서 자식 노드로 접근합니다.
  Map<String,String> userMap = Utils.JSONStringToMap(responseData.get("response").toString()); 
  //사용자 정보 값은 자식노드 중에 response에 저장되어 있습니다. response로 접근하여 그 값들은 map으로 파싱합니다.

  String email = userMap.get("email");
  HashMap<String, Object> sqlParams = new HashMap<String, Object>();
  sqlParams.put("email", email);
  
  UserVo resVo = new UserVo();
  resVo = userDao.selectOne(sqlParams);
  if(resVo != null) {
    System.out.println("저장되어 있음");
  } else {
    userDao.insert(sqlParams);
    System.out.println("새로 가입");
  }
  
          //AccessToken 요청 및 파싱할 부분
   return "redirect:/mypage/mypage.html";
  }
  
  
  private String getAccessUrl(String state, String code) {
    String accessUrl = "https://nid.naver.com/oauth2.0/token?client_id=" + clientId + "&client_secret=" + clientSecret
      + "&grant_type=authorization_code" + "&state=" + state + "&code=" + code;
    return accessUrl;
   }
  
}
