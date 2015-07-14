package net.bitacademy.java67.domain;

import java.io.Serializable;
import java.sql.Date;

public class PresentationVo implements Serializable {
  private static final long serialVersionUID = 1L;
  
  protected int     preNo;
  protected int     userNo;
  protected String  title;
  protected String  author;
  protected Date    createDate;
  protected String  isPublic;
  protected String  content;
  protected String  likes;
  protected String  preImg;
  
  @Override
  public String toString() {
    return "PresentationVo [preNo=" + preNo + ", userNo=" + userNo + ", title="
        + title + ", author=" + author + ", createDate=" + createDate
        + ", isPublic=" + isPublic + ", content=" + content + ", likes="
        + likes + ", preImg=" + preImg + "]";
  }
  public String getPreImg() {
    return preImg;
  }
  public void setPreImg(String preImg) {
    this.preImg = preImg;
  }

  public int getPreNo() {
    return preNo;
  }
  public void setPreNo(int preNo) {
    this.preNo = preNo;
  }
  public int getUserNo() {
    return userNo;
  }
  public void setUserNo(int userNo) {
    this.userNo = userNo;
  }
  public String getTitle() {
    return title;
  }
  public void setTitle(String title) {
    this.title = title;
  }
  public String getAuthor() {
    return author;
  }
  public void setAuthor(String author) {
    this.author = author;
  }
  public Date getCreateDate() {
    return createDate;
  }
  public void setCreateDate(Date createDate) {
    this.createDate = createDate;
  }
  public String getIsPublic() {
    return isPublic;
  }
  public void setIsPublic(String isPublic) {
    this.isPublic = isPublic;
  }
  public String getContent() {
    return content;
  }
  public void setContent(String content) {
    this.content = content;
  }
  public String getLikes() {
    return likes;
  }
  public void setLikes(String likes) {
    this.likes = likes;
  }

  
}
