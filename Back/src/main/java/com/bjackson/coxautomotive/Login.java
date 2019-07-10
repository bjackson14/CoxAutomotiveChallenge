package com.bjackson.coxautomotive;

import javax.persistence.*;

@Entity
@Table(name = "login")
public class Login {

    @Id
    private String username;
    private String password;

    // Two argument constructor for username and password
    public Login(String username, String password) {
        this.username = username;
        this.password = password;
    }

    // Default empty constuctor for JacksonDatabind library
    public Login() {}

    // Retrieves username from login table
    @Basic
    @Column(name = "username")
    public String getUsername() {
        return username;
    }

    // Retrieves password from login table
    @Basic
    @Column(name = "password")
    public String getPassword() {
        return password;
    }

    // Returns object as JSON object for JacksonDatabind library
    @Override
    public String toString() {
        return "login: {"
                + "username: " + this.username
                + "password: " + this.password
                + "}";
    }
}
