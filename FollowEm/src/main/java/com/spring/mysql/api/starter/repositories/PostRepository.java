package com.spring.mysql.api.starter.repositories;

import com.spring.mysql.api.starter.models.Post;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface PostRepository extends JpaRepository<Post, Long> {
  
  // getting posts by user
    @Query(value = "SELECT * FROM posts WHERE author_id = ?", nativeQuery = true)
    public List<Post> getPostByUserId(Long user_id);
}
