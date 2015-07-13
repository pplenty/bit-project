package net.bitacademy.java67.dao;

import java.util.List;

import net.bitacademy.java67.domain.PresentationVo;

public interface MypageDao {  
//  이건 이메일 가지고 사용자 정보 가져오기 따로 뺄까 말까 고민중이요
  int selectUser(String email);
  PresentationVo selectLatest(int userNo);
  List<PresentationVo> selectList(int no);
  List<PresentationVo> selectFavorite(int no);
  List<PresentationVo> selectShareList(String pub);
}











