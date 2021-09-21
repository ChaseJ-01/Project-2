package com.spring.mysql.api.starter.models;

import javax.persistence.*;
import java.sql.Date;

@Entity
@Table(name="follows")
public class Follow {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private long id;

    @Column(name = "following_id")
    private long following_id;

    @Column(name = "followed_id")
    private long followed_id;

    @Column(name = "status")
    private String status;

    @Column(name = "date")
    private Date date;


    public Follow() {
        super();
    }

    public Follow(long id, long following_id, long followed_id, String status, Date date) {
        super();
        this.id = id;
        this.following_id = following_id;
        this.followed_id = followed_id;
        this.status = status;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public long getFollowing_id() {
        return following_id;
    }

    public void setFollowing_id(long following_id) {
        this.following_id = following_id;
    }

    public long getFollowed_id() {
        return followed_id;
    }

    public void setFollowed_id(long followed_id) {
        this.followed_id = followed_id;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }

    @Override
    public String toString() {
        return "Follow{" +
                "id=" + id +
                ", followingId=" + following_id +
                ", followedId=" + followed_id +
                ", status='" + status + '\'' +
                ", date=" + date +
                '}';
    }
}
