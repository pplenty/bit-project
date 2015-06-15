package net.bitacademy.java67.web;

import java.util.HashMap;

import javax.servlet.http.HttpServletRequest;

import net.bitacademy.java67.domain.BoardVo;
import net.bitacademy.java67.service.BoardService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

/* 실습 목표: 스프링 애노테이션 적용
 */
@Controller
@RequestMapping("/board")
public class BoardController {
  // 이제 BoardDao는 인터페이스이다.
  // boardDao에 주입되는 것은 mybatis가 만든 BoardDao 구현체이다.
  @Autowired
  BoardService boardService;
  
  @RequestMapping("/list")
  public String list(
      @RequestParam(required=false, defaultValue="1") int pageNo, 
      @RequestParam(required=false, defaultValue="10") int pageSize, 
      @RequestParam(required=false) String word,
      @RequestParam(required=false) String order, 
      Model model) throws Exception {
    
    // BoardDao 인터페이스의 selectList()는 한 개의 파라미터를 요구한다.
    // 따라서 SQL 파라미터 값을 맵 객체에 담아서 넘겨야 한다.
    HashMap<String, Object> sqlParams = new HashMap<String, Object>();
    sqlParams.put("startIndex", getStartIndexOfPage(pageNo, pageSize));
    sqlParams.put("pageSize", pageSize);
    sqlParams.put("word", word);
    sqlParams.put("order", order);

    
    model.addAttribute("list", boardService.list(
        getStartIndexOfPage(pageNo, pageSize), pageSize, word, order));
    model.addAttribute("pageNo", pageNo);
    model.addAttribute("pageSize", pageSize);
    model.addAttribute("maxPage", countTotalPage(
                                      pageSize, boardService.size(word)));
    
    // return "/board/BoardList.jsp";
    return "board/BoardList";
  }

  /**
   * @param pageNo
   * @param pageSize
   * @return
   */
  private int getStartIndexOfPage(int pageNo, int pageSize) {
    return (pageNo - 1) * pageSize;
  }

  private int countTotalPage(int pageSize, int totalRecords) {
    int maxPage = totalRecords / pageSize;
    if (totalRecords % pageSize > 0) {
      maxPage++;
    }
    return maxPage;
  }
  
  @RequestMapping("/add")
  public String add(BoardVo board, HttpServletRequest request) throws Exception {
    boardService.add(board, request.getRemoteAddr());
    
    return "redirect:list.do";
  }
  
  @RequestMapping("/change")
  public String change(BoardVo board, HttpServletRequest request) throws Exception {
    boardService.change(board, request.getRemoteAddr());
    
    return "redirect:list.do";
  }
  
  @RequestMapping("/delete")
  public String delete(int no, HttpServletRequest request) throws Exception {
    boardService.remove(no, request.getRemoteAddr());
    
    return "redirect:list.do";
  }
  
  @RequestMapping("/detail")
  public String detail(int no, Model model) throws Exception {
    model.addAttribute("board", boardService.get(no));
    
    return "board/BoardDetail";
  }

}










