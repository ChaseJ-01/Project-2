package com.spring.mysql.api.starter.controllers;

import com.spring.mysql.api.starter.exception.FollowNotFoundException;
import com.spring.mysql.api.starter.models.Follow;
import com.spring.mysql.api.starter.repositories.FollowRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.Query;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@CrossOrigin(origins = "http://localhost:4200/")
@RestController
public class FollowController {

    @Autowired
    FollowRepository followRepository;
    private Follow followDetails;

    private final Logger LOGGER = LoggerFactory.getLogger(FollowController.class);

    // Get All Follows
    @GetMapping("/follows")
    public List<Follow> getAllFollows() {
        return followRepository.findAll();
    }
   
//****************************************** See follow repository for custom methods
    // Get id's of those who the user follows
    @GetMapping("/follows/myfollows/{following_id}")
    public List<Long> displayIdsOfThoseIFollow(@PathVariable(value = "following_id") long following_id) {
        return followRepository.getIdsOfThoseIFollow(following_id);
    }

    // Get id's of those who folow the user
    @GetMapping("/follows/myfollowers/{followed_id}")
    public List<Long> displayIdsOfThoseThatFollowMe(@PathVariable(value = "followed_id") long followed_id) {
        return followRepository.getIdsOfThoseThatFollowMe(followed_id);
    }
    
    // Get id's of those a user's blocked
    @GetMapping("/follows/blocked/{followed_id}")
    public List<Long> displayIdsOfThoseIBlocked(@PathVariable(value = "followed_id") long followed_id) {
        return followRepository.getIdsOfThoseIBlocked(followed_id);
    }
//**************************************

    // Create a new Follow
    @PostMapping("/follows/add")
    public Follow createFollow(@Valid @RequestBody Follow follow) {
        LOGGER.info("New follow saved!");
        return followRepository.save(follow);
    }

    // APPROVE a Follow
    @PutMapping("/follows/approve/{id}")
    public Follow approveFollow(@PathVariable(value = "id") long follow_id,
                           @Valid @RequestBody Follow followDetails) throws FollowNotFoundException {
        this.followDetails = followDetails;
        Follow follow = followRepository.findById(follow_id)
                .orElseThrow(() -> new FollowNotFoundException(follow_id));
        follow.setStatus(followDetails.getStatus());
        Follow approvedFollow = followRepository.save(follow);

        return approvedFollow;
    }

    // DECLINE a Follow
    @PutMapping("/follows/decline/{id}")
    public Follow declineFollow(@PathVariable(value = "id") long follow_id,
                                @Valid @RequestBody Follow followDetails) throws FollowNotFoundException {
        this.followDetails = followDetails;
        Follow follow = followRepository.findById(follow_id)
                .orElseThrow(() -> new FollowNotFoundException(follow_id));
        follow.setStatus(followDetails.getStatus());
        Follow declinedFollow = followRepository.save(follow);

        return declinedFollow;
    }

    // Delete a Follow
    @DeleteMapping("/follows/delete/{id}")
    public ResponseEntity<?> deleteFollow(@PathVariable(value = "id") long follow_id) throws FollowNotFoundException {
        Follow follow = followRepository.findById(follow_id)
                .orElseThrow(() -> new FollowNotFoundException(follow_id));
        followRepository.delete(follow);

        return ResponseEntity.ok().build();
    }


}




