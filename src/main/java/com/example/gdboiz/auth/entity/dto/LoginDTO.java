package com.example.gdboiz.auth.entity.dto;

import com.example.gdboiz.auth.entity.User;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class LoginDTO {
    private String email;
    private String password;

}
