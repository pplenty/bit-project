package net.bitacademy.java67;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

public class Hello {

  public static void main(String[] args) {
    // 한글 주석
    ApplicationContext context =
        new ClassPathXmlApplicationContext(
            new String[] {"/WEB-INF/config/application-context.xml"});
    
    // @Component 애노테이션으로 자동 생성한 빈은
    // 클래스 이름(첫 알파벳은 소문자)을 빈의 이름으로 설정한다.
    
    for (String beanName : context.getBeanDefinitionNames()) {
      System.out.println("==>" + beanName);
    }
    
  }

}
