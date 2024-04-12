package com.capstone.finance.dto.Member;

import com.capstone.finance.model.Member;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.security.crypto.password.PasswordEncoder;

@Setter
@Getter
@AllArgsConstructor
@NoArgsConstructor
public class MemberRequestDto {

    //private Long id;
    private String username;
    private String password;
    private String nickname;
    private String email;

    public Member toMember(PasswordEncoder passwordEncoder) {
        return Member.builder()
                //.id(id)
                .username(username)
                .password(passwordEncoder.encode(password))
                .nickname(nickname)
                .email(email)
                .build();
    }
}
