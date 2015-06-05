package net.bitacademy.java67.dao;

import java.util.Map;

import net.bitacademy.java67.domain.UserVo;

import org.springframework.stereotype.Component;

@Component
public interface UserDao {
  UserVo selectOne(Map<String, String> paramMap);
}











