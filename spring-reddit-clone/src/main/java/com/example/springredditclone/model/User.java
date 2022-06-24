package com.example.springredditclone.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotEmpty;
import java.time.Instant;

import static javax.persistence.GenerationType.IDENTITY;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "reddit_users")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long userId;

    @Column
    @NotBlank(message = "Username is required")
    private String username;

    @Column
    @NotBlank(message = "Password is required")
    private String password;

    @Column
    @Email
    @NotEmpty(message = "Email is required")
    private String email;

    private Instant created;

    private boolean enabled;

    public User(Long userId, @NotBlank(message = "Username is required") String username, @NotBlank(message = "Password is required") String password, @Email @NotEmpty(message = "Email is required") String email) {
        this.userId = userId;
        this.username = username;
        this.password = password;
        this.email = email;
    }
}
