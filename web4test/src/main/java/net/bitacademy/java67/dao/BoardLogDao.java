package net.bitacademy.java67.dao;

import java.util.List;

import net.bitacademy.java67.domain.BoardLogVo;

public interface BoardLogDao {
  void insert(BoardLogVo boardLog);
  List<BoardLogVo> selectList(int no);
}











