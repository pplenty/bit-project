package net.bitacademy.java67.domain;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@JsonIgnoreProperties({"bytes"}) 
public class FileVo {
      private String fileName;
      private String fileSize;
      private String fileType;
      private String filePath;
      private String thumbnailPath;
      private byte[] bytes;
      private int userNo;
      private int preNo;
      
      
      public String getThumbnailPath() {
        return thumbnailPath;
      }
      public void setThumbnailPath(String thumbnailPath) {
        this.thumbnailPath = thumbnailPath;
      }
      public int getUserNo() {
        return userNo;
      }
      public void setUserNo(int userNo) {
        this.userNo = userNo;
      }
      public int getPreNo() {
        return preNo;
      }
      public void setPreNo(int preNo) {
        this.preNo = preNo;
      }
      public String getFilePath() {
        return filePath;
      }
      public void setFilePath(String filePath) {
        this.filePath = filePath;
      }
      public String getFileName() {
        return fileName;
      }
      public void setFileName(String fileName) {
        this.fileName = fileName;
      }
      public String getFileSize() {
        return fileSize;
      }
      public void setFileSize(String fileSize) {
        this.fileSize = fileSize;
      }
      public String getFileType() {
        return fileType;
      }
      public void setFileType(String fileType) {
        this.fileType = fileType;
      }
      public byte[] getBytes() {
        return bytes;
      }
      public void setBytes(byte[] bytes) {
        this.bytes = bytes;
      }
      
}
