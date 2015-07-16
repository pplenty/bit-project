package net.bitacademy.java67.web;

import java.io.File;
import java.io.IOException;
import java.io.Writer;
import java.net.URI;
import java.net.URISyntaxException;
import java.util.HashMap;
import java.util.concurrent.TimeUnit;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import net.bitacademy.java67.dao.MypageDao;
import net.bitacademy.java67.dao.PresentationDao;
import net.bitacademy.java67.dao.UserDao;
import net.bitacademy.java67.domain.PresentationVo;
import net.bitacademy.java67.domain.UserVo;

import org.apache.commons.io.FileUtils;
import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.json.JSONObject;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.phantomjs.PhantomJSDriverService;
import org.openqa.selenium.remote.Augmenter;
import org.openqa.selenium.remote.DesiredCapabilities;
import org.openqa.selenium.remote.RemoteWebDriver;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
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
  
  static int test_userNo;
  static int test_preNo;

  @RequestMapping(value = "/setCurrentPreNo")
  public void setSession(HttpServletRequest request, HttpServletResponse response,
      HttpSession session) throws IOException {
    int currentPreNo = Integer.parseInt(request.getParameter("currentPreNo"));
    session.setAttribute("currentPreNo", currentPreNo);
  }
  
  @RequestMapping(value = "/presentationInitLoad", method = RequestMethod.GET)
  public void initP(HttpServletRequest request, HttpServletResponse response,
      HttpSession session) throws IOException {
    System.out.println("prezent init LOAD");
    
    JSONObject JSONResult = new JSONObject();

    int currentPreNo = 0;
    if (session.getAttribute("currentPreNo") != null) {
      currentPreNo = (int) session.getAttribute("currentPreNo");
    }

    PresentationVo presentVo;
    int no = currentPreNo;
    presentVo = presentDao.selectOne(no);
    
    if(presentVo != null) {
      System.out.println(currentPreNo + "번: 로딩성공" + session.getAttribute("name"));
      
      //ajax return data
//      Writer out = response.getWriter();
//      out.write(presentVo.getContent());
      

      JSONResult.put("result", "success");
      JSONResult.put("content", presentVo.getContent());
      // JSON RETURN!!
      response.setContentType("text/javascript;charset=UTF-8");
      response.getWriter().print(JSONResult);
    } else {
      System.out.println("new Deck");
      JSONResult.put("result", "error");
      
      response.setContentType("text/javascript;charset=UTF-8");
      response.getWriter().print(JSONResult);
    }
    
    
    
  }
  
  

  @RequestMapping(value = "/presentationSave", method = RequestMethod.POST)
  public void saveP(HttpServletRequest request, HttpServletResponse response,
      HttpSession session) throws IOException {
    System.out.println("presentation.do 진입");
    String htmlSource = request.getParameter("content");
    // ajax return JSON
    JSONObject JSONResult = new JSONObject();

    String email = (String)session.getAttribute("email");
    String name = (String)session.getAttribute("name");
    int userNo;
    
    // 세션에 로그인 정보가 없을 시 예외처리
    if (email != null) {
      HashMap<String, Object> paramMap = new HashMap<String, Object>();
      paramMap.put("email", email);
      UserVo user = new UserVo();
      user = userDao.selectOne(paramMap);
      userNo = user.getUserNo();// 이메일로 DB에서 userNo 꺼내옴
      System.out.println(userNo + " - " + user.getEmail());
      
      
      // 인터페이스의 selectList()는 한 개의 파라미터를 요구한다.
      // 따라서 SQL 파라미터 값을 맵 객체에 담아서 넘겨야 한다.
      HashMap<String, Object> sqlParams = new HashMap<String, Object>();
      sqlParams.put("content", htmlSource);

      PresentationVo presentVo = new PresentationVo();
      int currentPreNo = 0;
      if (session.getAttribute("currentPreNo") != null) {
        currentPreNo = (int) session.getAttribute("currentPreNo");
      }
      presentVo.setContent(htmlSource);
      if (currentPreNo == 0) {
        presentVo.setUserNo(userNo);
        presentVo.setAuthor(name);
        
        // 이 변수는 iframe(미리보기용)에 보낼 변수로 저장해둔 것
        System.out.println("방금 저장한 슬라이드번호 " + presentVo.getPreNo());
        test_userNo = (int) session.getAttribute("userNo");
        presentDao.insert(presentVo);
        int latestPreNo = mypageDao.selectLatest(userNo).getPreNo();
        JSONResult.put("latestPreNo",latestPreNo);
        JSONResult.put("result", "save success: insert");
        System.out.println("do insert preNo: " + latestPreNo);
        session.setAttribute("currentPreNo", latestPreNo);
        
        // 이 변수는 iframe(미리보기용)에 보낼 변수로 저장해둔 것 //위치 변경 금지!
        test_preNo = (int) session.getAttribute("currentPreNo");
      } else {
        presentVo.setPreNo(currentPreNo);
        
        presentDao.update(presentVo);
        JSONResult.put("latestPreNo", currentPreNo);
        JSONResult.put("result", "save success: update");
        System.out.println("do update: " + currentPreNo);
      }
      
      

    } else {
      JSONResult.put("result", "ERROR: not login");
    }

    // JSON RETURN!!
    response.getWriter().print(JSONResult);
    
    
  }
  
  @RequestMapping(value = "/presentationLoad", method = RequestMethod.GET)
  public void loadP(HttpServletRequest request, HttpServletResponse response,
      HttpSession session) throws IOException {
    System.out.println("prezent load 진입");

    int currentPreNo = 0;   //test_preNo;
    if (session.getAttribute("currentPreNo") != null) {
      currentPreNo = (int) session.getAttribute("currentPreNo");
    }

    PresentationVo presentVo;
    int no = currentPreNo;
    presentVo = presentDao.selectOne(no);
    
    if(currentPreNo != 0) {
      System.out.println("로딩성공");
      System.out.println(session.getAttribute("name"));
      //ajax return data
      response.setContentType("text/javascript;charset=UTF-8");
      Writer out = response.getWriter();
      out.write(presentVo.getContent());

      // JSON RETURN!!
    } else {
//      int userNo = (int) session.getAttribute("userNo"); 
//      currentPreNo = mypageDao.selectLatest(userNo).getPreNo();  
          int userNo = test_userNo;
          currentPreNo = test_preNo;      
      System.out.println("썸네일 만들 때만 호출되어야 함 test_이하 출력" );
    }
    
    
    
  }
  
  @RequestMapping(value = "/previewLoad", method = RequestMethod.GET)
  public void previewLoad(HttpServletRequest request, HttpServletResponse response,
      HttpSession session) throws IOException {
    System.out.println("prezent load 진입");

    int currentPreNo = test_preNo;
   
    
    System.out.println("미리보기 만들기할 때 쓰는 preNo번호" + test_preNo);
    PresentationVo presentVo;
    int no = currentPreNo;
    presentVo = presentDao.selectOne(no);
    System.out.println(presentVo.toString());
    
    if(currentPreNo != 0) {
      System.out.println("이부분이 나와야 사진 촬영 준비 완료");
      System.out.println(session.getAttribute("name"));

      //ajax return data
      response.setContentType("text/javascript;charset=UTF-8");
      Writer out = response.getWriter();
      out.write(presentVo.getContent());

      System.out.println("프리뷰 화면 로딩성공");
      // JSON RETURN!!
    } else {
      int userNo = test_userNo;
      //System.out.println("test 값 " + test_userNo);
      currentPreNo = test_preNo;
      System.out.println("currentPreNo == 0");
    }   
  }
  

  protected final static Log logger = LogFactory
      .getLog(PresentationController.class);

  @RequestMapping(value = "/screenshot", method = RequestMethod.GET)
  public Object showSupplementsPage(ModelMap model, HttpServletRequest request,
      HttpServletResponse response, HttpSession session) throws IOException {
    PresentationVo presentVo = new PresentationVo();
    presentVo.setUserNo((int) session.getAttribute("userNo"));
    System.out.println(request.getParameter("preNo"));
    presentVo.setPreNo(Integer.parseInt(request.getParameter("preNo"))-1);
    System.out.println("번호가 있나" + presentVo.getUserNo());
    String previewUrl = request.getParameter("preUrl");
    tryPhantom(presentVo, previewUrl);
    
    // 성공 실패 값 리턴하는 부분
//    JSONObject JSONResult = new JSONObject();
//    JSONResult.put("status", "success");
//   
    return null;
  }

  private URI uri;
  private static PhantomJSDriverService service;
  private WebDriver webDriver;
  protected static DesiredCapabilities dCaps;

  public void tryPhantom(PresentationVo presentVo, String previewUrl) {
    
    final String preImgPath = "/Users/hyein/bit/workspace/.metadata/.plugins/org.eclipse.wst.server.core/tmp0/wtpwebapps/web4test/test2/upload2/preimg/";
    
    service = new PhantomJSDriverService.Builder()
        .usingPhantomJSExecutable(
            new File("/usr/local/Cellar/phantomjs/2.0.0/bin/phantomjs"))
        .usingAnyFreePort().build();
    try {
      service.start();
    } catch (IOException e) {
      e.printStackTrace();
    }

    try {
      uri = new URI("http://localhost:9999/");
    } catch (URISyntaxException e) {
      e.printStackTrace();
    }
    dCaps = new DesiredCapabilities();
    dCaps.setJavascriptEnabled(true);
    dCaps.setCapability("takesScreenshot", true);

    webDriver = new RemoteWebDriver(service.getUrl(), dCaps);
    webDriver.manage().timeouts().implicitlyWait(1000, TimeUnit.SECONDS);

    long iStart = System.currentTimeMillis();
    webDriver.get(previewUrl);
    webDriver = new Augmenter().augment(webDriver);
    File srcFile = ((TakesScreenshot) webDriver)
        .getScreenshotAs(OutputType.FILE);
    System.out.println("File:" + srcFile);
    
    try {
      presentVo.setPreImg(preImgPath + presentVo.getUserNo() + "_" + presentVo.getPreNo() + "_pic.png");
      FileUtils.copyFile(srcFile, new File(presentVo.getPreImg()));
    } catch (IOException e) {
      e.printStackTrace();
    }
    System.out.println("Single Page Time:"
        + (System.currentTimeMillis() - iStart));
    
    System.out.println("캡쳐 저장 내용 "+ presentVo.toString());
    presentDao.captureUpdate(presentVo);
    
    webDriver.quit();
    service.stop();
    
  }
}