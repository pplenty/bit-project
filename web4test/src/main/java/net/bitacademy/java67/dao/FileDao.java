package net.bitacademy.java67.dao;

import java.util.HashMap;
import java.util.List;

import net.bitacademy.java67.domain.FileVo;

public interface FileDao {
  int insert(FileVo fileVo);
  List<FileVo> selectList(HashMap<String, Object> sqlParams);
  FileVo selectOne(FileVo fileVo);
}











