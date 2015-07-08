package net.bitacademy.java67.web;

import java.awt.Graphics2D;
import java.awt.image.BufferedImage;
import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.util.HashMap;
import java.util.Iterator;
import java.util.LinkedList;
import java.util.List;

import javax.imageio.ImageIO;
import javax.servlet.http.HttpServletResponse;

import net.bitacademy.java67.domain.FileVo;
import net.bitacademy.java67.service.FileService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.util.FileCopyUtils;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.multipart.MultipartHttpServletRequest;

import com.google.gson.Gson;

@Controller
public class FileController {
  @Autowired
  FileService fileService;

  LinkedList<FileVo> files = new LinkedList<FileVo>();

  @RequestMapping(value = "/file", method = RequestMethod.POST)
  public @ResponseBody void upload(MultipartHttpServletRequest request,
      HttpServletResponse response) {
    System.out.println("file.do진입");
    // 1. build an iterator
    Iterator<String> itr = request.getFileNames();
    MultipartFile mpf = null;
    String filePath = null;
    final String uploadPath = "/Users/ShyJuno/BIT/workspace/.metadata/.plugins/org.eclipse.wst.server.core/tmp0/wtpwebapps/web4test/test2/upload2/images/";
    final String thumbnailPath = "/Users/ShyJuno/BIT/workspace/.metadata/.plugins/org.eclipse.wst.server.core/tmp0/wtpwebapps/web4test/test2/upload2/thumbnail/";
    final String imgDbPath = "http://localhost:9999/web4test/test2/upload2/images/";
    final String thumbDbPath = "http://localhost:9999/web4test/test2/upload2/thumbnail/";
    
    // 2. get each file
    while (itr.hasNext()) {

      // 2.1 get next MultipartFile
      mpf = request.getFile(itr.next());

      //이미지 파일 여부
      if (mpf.getContentType().indexOf("image") > -1) {
        System.out.println(mpf.getOriginalFilename() + " uploaded! "
            + files.size());

        // 2.2 if files > 10 remove the first from the list
        if (files.size() >= 10)
          files.pop();

        // Vo 생성
        FileVo fileVo = new FileVo();
        // fileVo.setFileName(mpf.getOriginalFilename()); //오리지널 업로드 파일이름
        fileVo.setFileName(System.currentTimeMillis() + "_"
            + mpf.getOriginalFilename());
        System.out.println(fileVo.getFileName());
        fileVo.setFileSize(mpf.getSize() / 1024 + " Kb");
        fileVo.setFileType(mpf.getContentType());
        System.out.println("컨텐트타입 : " + mpf.getContentType());

        try {
          fileVo.setBytes(mpf.getBytes());
          
          //서버에 이미지 업로드 할 패스 + 파일명
          filePath = uploadPath + fileVo.getFileName();
          
          // copy file to local disk (make sure the path "e.g. D:/temp/files"
          // exists)
          FileCopyUtils.copy(mpf.getBytes(), new FileOutputStream(filePath));

        } catch (IOException e) {
          e.printStackTrace();
        }
        // 2.4 add to files
        files.add(fileVo);
        System.out.println("upload2 폴더에 저장 완료");
        
        try {
        
          //썸네일 생성 코드
          int thumbnailWidth = 100;
          int thumbnailHeight = 100;
          
          File originFileName = new File(filePath);//오리지날 이미지 경로 + 파일명
          File thumbFileName = new File(thumbnailPath + "thumbnail_" + fileVo.getFileName());//썸네일 이미지 경로 + 파일명
          
          BufferedImage bufferOriginalImage = ImageIO.read(originFileName);
          BufferedImage bufferThumbnailImage = new BufferedImage(
              thumbnailWidth, thumbnailHeight, BufferedImage.TYPE_3BYTE_BGR);
          Graphics2D graphic = bufferThumbnailImage.createGraphics();
          
          graphic.drawImage(bufferOriginalImage, 0, 0, thumbnailWidth, thumbnailHeight, null);
          ImageIO.write(bufferThumbnailImage, "jpg", thumbFileName);
          System.out.println("썸네일 생성완료");
         
          
        } catch (Exception e) {
          e.printStackTrace();
        }
        
        //DB에 저장할 서버 패스 
        fileVo.setFilePath(imgDbPath + fileVo.getFileName());
        fileVo.setThumbnailPath(thumbDbPath + "thumbnail_" + fileVo.getFileName());
        fileService.add(fileVo);
        
      } else {
        System.out.println("이미지가 아닙니다.");
      }

    }
  }
  
  @RequestMapping(value = "/showimage", method = RequestMethod.GET)
  public ResponseEntity<String> showImage(int userNo, int preNo){ //파라미터로 넘긴 값 사용
    System.out.println("showimage 진입");
    
    List<FileVo> resultVo;
    FileVo fileVo = new FileVo();
    fileVo.setUserNo(userNo);
    fileVo.setPreNo(preNo);
    
    System.out.println(fileVo.getUserNo());
    System.out.println(fileVo.getPreNo());
    
    resultVo = fileService.getList(fileVo);
    
    HashMap<String,Object> responseData = new HashMap<String,Object>();
    responseData.put("status", "success");
    responseData.put("data", resultVo);
    
    HttpHeaders headers = new HttpHeaders();
    headers.add("Content-Type", "text/plain;charset=UTF-8");
    headers.add("Access-Control-Allow-Origin", "*");
    
    return new ResponseEntity<String>(
                new Gson().toJson(responseData),
                headers,
                HttpStatus.OK);
  }
  
  @RequestMapping(value = "/selectimage", method = RequestMethod.GET)
  public void selectImage(int userNo, int preNo) {
    FileVo fileVo = new FileVo();
    fileVo.setUserNo(userNo);
    fileVo.setPreNo(preNo);
    fileService.get(fileVo);
    
  }
  
}