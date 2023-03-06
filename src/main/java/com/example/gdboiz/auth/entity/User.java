package com.example.gdboiz.auth.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.Getter;
import lombok.Setter;

@Entity
@Getter
@Setter
public class User {
    @Id
    private long id;
    private String email;
    private String password;
    private String name;
}
