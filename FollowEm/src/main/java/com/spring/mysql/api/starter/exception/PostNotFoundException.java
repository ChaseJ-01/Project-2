package com.spring.mysql.api.starter.exception;

public class PostNotFoundException extends Exception {
    private int id;
    public PostNotFoundException(long id) {
        super(String.format("Post is not found with id : '%s'", id));
    }
}
