package net.bitacademy.java67.dao;

import java.util.HashMap;
import java.util.List;

import net.bitacademy.java67.domain.PresentationVo;

public interface PresentationDao {
  int insert(PresentationVo presentVo);
  List<PresentationVo> selectList(HashMap<String, Object> sqlParams);
  PresentationVo selectOne(int no);
  void update(PresentationVo presentVo);
}











