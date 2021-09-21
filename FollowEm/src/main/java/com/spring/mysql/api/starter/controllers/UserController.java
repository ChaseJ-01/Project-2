package com.spring.mysql.api.starter.controllers;


import com.spring.mysql.api.starter.exception.UserNotFoundException;
import com.spring.mysql.api.starter.models.User;
import com.spring.mysql.api.starter.repositories.UserRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;
import java.util.Optional;

@CrossOrigin(origins = "http://localhost:4200/")
@RestController
public class UserController {

    @Autowired
    UserRepository userRepository;
    private User userDetails;

    private final Logger LOGGER = LoggerFactory.getLogger(UserController.class);

    // Get All Users
    @GetMapping("/users")
    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    // Create a new User
    @PostMapping("/users/add")
    public User createUser(@javax.validation.Valid @RequestBody User user) {
        LOGGER.info("New user saved!");
        return userRepository.save(user);
    }
    
    //Get individual users
    @GetMapping("/users/{id}")
    public Optional<User> displayUserById(@PathVariable("id") long userId) {
        return userRepository.findById(userId);
    }
    
    //Get individual users by email
    @GetMapping("/users/UserAuth/{email}")
    public User displayUserByEmail(@PathVariable("email") String email) {
        return userRepository.findByEmail(email);
    }

    // update a User
    @PutMapping("/users/update/{id}")
    public User updateUser(@PathVariable(value = "id") long userId,
                                @Valid @RequestBody User userDetails) throws UserNotFoundException {
        this.userDetails = userDetails;
        User user = userRepository.findById(userId)
                .orElseThrow(() -> new UserNotFoundException(userId));

        user.setName(userDetails.getName());
        user.setEmail(userDetails.getEmail());
        user.setExpertise(userDetails.getExpertise());
        user.setPassword(userDetails.getPassword());

        User updatedUser = userRepository.save(user);

        return updatedUser;
    }

    // Delete a User
    @DeleteMapping("/users/delete/{id}")
    public ResponseEntity<?> deleteUser(@PathVariable(value = "id") long userId) throws UserNotFoundException {
        User user = userRepository.findById(userId)
                .orElseThrow(() -> new UserNotFoundException(userId));
        userRepository.delete(user);

        return ResponseEntity.ok().build();
    }
    
//    @GetMapping("/users/UserData/{user_id}")
//    public List<?> displayUserData(@PathVariable(value = "user_id") Long user_id) {
//        return userRepository.getUserData(user_id);
//    }

}
