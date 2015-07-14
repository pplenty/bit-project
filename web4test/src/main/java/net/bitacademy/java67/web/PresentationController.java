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
      
      JSONResult.put("latestPreNo",
          mypageDao.selectLatest(userNo).getPreNo());
      
      // BoardDao 인터페이스의 selectList()는 한 개의 파라미터를 요구한다.
      // 따라서 SQL 파라미터 값을 맵 객체에 담아서 넘겨야 한다.
      HashMap<String, Object> sqlParams = new HashMap<String, Object>();
      sqlParams.put("content", htmlSource);

      PresentationVo presentVo = new PresentationVo();
      presentVo.setContent(htmlSource);
      presentVo.setUserNo(userNo);
      presentVo.setAuthor(name);
      
      
      presentDao.insert(presentVo);
//      presentDao.update(presentVo);

      JSONResult.put("result", "success");
    } else {
      JSONResult.put("result", "ERROR: not login");
    }

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

  protected final static Log logger = LogFactory
      .getLog(PresentationController.class);

  @RequestMapping(value = "/screenshot", method = RequestMethod.GET)
  public String showSupplementsPage(ModelMap model, HttpServletRequest request,
      HttpServletResponse response, HttpSession session) {
    PresentationVo presentVo = new PresentationVo();
    presentVo.setUserNo((int) session.getAttribute("userNo"));
    System.out.println(request.getParameter("preNo"));
    presentVo.setPreNo(Integer.parseInt(request.getParameter("preNo")));
    tryPhantom(presentVo);
    // return "screenshot";
    return null;
  }

  private URI uri;
  private static PhantomJSDriverService service;
  private WebDriver webDriver;
  protected static DesiredCapabilities dCaps;

  public PresentationVo tryPhantom(PresentationVo presentVo) {
    
    final String preImgPath = "/Users/ShyJuno/BIT/workspace/.metadata/.plugins/org.eclipse.wst.server.core/tmp0/wtpwebapps/web4test/test2/upload2/preimg/";
    
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
    webDriver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);

    long iStart = System.currentTimeMillis();
    webDriver.get("http://localhost:9999/web4test/reveal/index.html#/");

    webDriver = new Augmenter().augment(webDriver);
    File srcFile = ((TakesScreenshot) webDriver)
        .getScreenshotAs(OutputType.FILE);
    System.out.println("File:" + srcFile);
    try {
      presentVo.setPreImg(
          preImgPath + presentVo.getUserNo() + "_" +
          presentVo.getPreNo() + "_pic.png");
      FileUtils.copyFile(srcFile, new File(presentVo.getPreImg()));
    } catch (IOException e) {
      e.printStackTrace();
    }
    System.out.println("Single Page Time:"
        + (System.currentTimeMillis() - iStart));
    
    presentDao.captureUpdate(presentVo);
    
    webDriver.quit();
    service.stop();
    
    return presentVo;
  }
}