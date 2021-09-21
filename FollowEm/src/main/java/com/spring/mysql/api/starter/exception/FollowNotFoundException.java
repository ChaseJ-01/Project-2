package com.spring.mysql.api.starter.exception;

public class FollowNotFoundException extends Exception {
    private int id;
    public FollowNotFoundException(long id) {
        super(String.format("Follow is not found with id : '%s'", id));
    }
}
