package net.bitacademy.java67.web;

import java.io.UnsupportedEncodingException;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;

import org.json.JSONObject;
import org.json.XML;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;


@Controller
public class CallbackController {

//  private static final String mydomain = "http%3A%2F%2F127.0.0.1%3A9999%2Fweb4test%2Fmypage.do";
//  private static final String clientId = "7i5u84FejTlQKxQrP6hG";
//  private static final String clientSecret = "6e9ErvgIP4";
//  private static final String requestUrl = "https://nid.naver.com/oauth2.0/authorize?client_id="
//      + clientId + "&response_type=code&redirect_uri=" + mydomain + "&state=";
//  private static final String userProfileUrl = "https://apis.naver.com/nidlogin/nid/getUserProfile.xml";
//
//  @RequestMapping(value="/mypage", method=RequestMethod.GET)
//  public String callback(
//      @RequestParam String state, 
//      @RequestParam String code, 
//      HttpServletRequest request) throws UnsupportedEncodingException {
//   
//   String storedState = (String) request.getSession().getAttribute("state");  //세션에 저장된 토큰을 받아옵니다.
//   if (!state.equals(storedState)) {             //세션에 저장된 토큰과 인증을 요청해서 받은 토큰이 일치하는지 검증합니다.
//    System.out.println("401 unauthorized");   //인증이 실패했을 때의 처리 부분입니다.
//    return "redirect:/login/login.html";
//   }
//   
//   
//   String data = Utils.getHtml(getAccessUrl(state, code), null);           //AccessToken을 요청하고 그 값을 가져옵니다.
//   Map<String,String> map = Utils.JSONStringToMap(data);               //JSON의 형태로 받아온 값을 Map으로 저장합니다.
//   String accessToken = map.get("access_token");
//   String tokenType = map.get("token_type"); 
//   
//   String profileDataXml = Utils.getHtml(userProfileUrl, tokenType +" "+ accessToken); 
//  // tokentype 와 accessToken을 조합한 값을 해더의 Authorization에 넣어 전송합니다. 결과 값은 xml로 출력됩니다. 
//    
//  JSONObject jsonObject =  XML.toJSONObject(profileDataXml);     //xml을 json으로 파싱합니다.
//  JSONObject responseData = jsonObject.getJSONObject("data");   
//  //json의 구조가 data 아래에 자식이 둘인 형태여서 map으로 파싱이 안됩니다. 따라서 자식 노드로 접근합니다.
//  Map<String,String> userMap = Utils.JSONStringToMap(responseData.get("response").toString()); 
//  //사용자 정보 값은 자식노드 중에 response에 저장되어 있습니다. response로 접근하여 그 값들은 map으로 파싱합니다.
//
//  System.out.println(userMap);
//
//   
//          //AccessToken 요청 및 파싱할 부분
//   return "redirect:/ok.html";
//  }
//  
//  
//  private String getAccessUrl(String state, String code) {
//    String accessUrl = "https://nid.naver.com/oauth2.0/token?client_id=" + clientId + "&client_secret=" + clientSecret
//      + "&grant_type=authorization_code" + "&state=" + state + "&code=" + code;
//    return accessUrl;
//   }
}
