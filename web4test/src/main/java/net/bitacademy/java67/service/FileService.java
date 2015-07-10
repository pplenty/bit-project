package net.bitacademy.java67.service;

import java.util.HashMap;
import java.util.List;

import net.bitacademy.java67.dao.FileDao;
import net.bitacademy.java67.domain.FileVo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class FileService {
  @Autowired
  FileDao fileDao;

  public int add(FileVo fileVo) {
    List<FileVo> resultVo;
    System.out.println("service add 진입");
    resultVo = getList(fileVo);
    if (resultVo != null) {
      System.out.println("널아님: " + fileVo.getFilePath());
    }
    return fileDao.insert(fileVo);
  }
  
  public List<FileVo> getList(FileVo fileVo) {
    System.out.println("DB service 조회");
    HashMap<String, Object> sqlParams = new HashMap<String, Object>();
    sqlParams.put("userNo", fileVo.getUserNo());
    sqlParams.put("preNo", fileVo.getPreNo());
    sqlParams.put("filePath", fileVo.getFilePath());
    sqlParams.put("thumbnail", fileVo.getThumbnailPath());
    
    return fileDao.selectList(sqlParams);
  }
  
  public FileVo get(FileVo fileVo) {
    return fileDao.selectOne(fileVo);
  }
}
