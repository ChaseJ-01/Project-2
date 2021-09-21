package com.spring.mysql.api.starter.exception;

public class UserNotFoundException extends Exception {
    private int id;
    public UserNotFoundException(long id) {
        super(String.format("User is not found with id : '%s'", id));
    }
}
