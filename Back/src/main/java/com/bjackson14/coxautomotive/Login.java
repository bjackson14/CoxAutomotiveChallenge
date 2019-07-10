package com.bjackson14.coxautomotive;

import javax.persistence.*;

@Entity
@Table(name = "login")
public class Login {

    // Fiekds in database table
    @Id
    private String username;
    private String password;

    // Two argument constructor for username and password
    public Login(String username, String password) {
        this.username = username;
        this.password = password;
    }

    // Default Constructor for JacksonDatabind
    public Login() {}

    @Basic
    @Column(name = "username")
    public String getUsername() {
        return this.username;
    }

    @Basic
    @Column(name = "password")
    public String getPassword() {
        return this.password;
    }

    // Method to return JSON object
    @Override
    public String toString() {
        return "login: {"
                + "username: " + this.username
                + "password: " + this.password
                + "}";
    }
}
