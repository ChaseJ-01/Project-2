package com.spring.mysql.api.starter.repositories;

import com.spring.mysql.api.starter.models.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {
  // getting those the user is following
    @Query(value = "SELECT * FROM users inner join posts using (user_id) WHERE user_id = ?1", nativeQuery = true)
    public List<Object> getUserData(Long user_id);
  
  // getting user by email for login
    @Query(value = "SELECT * FROM users WHERE email = ?1", nativeQuery = true)
    public User findByEmail(String email);
  
}
