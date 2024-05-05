package com.capstone.finance.DTO.Token;

import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Data
@Getter
@NoArgsConstructor
public class TokenReqDto {
    private String accessToken;
    private String refreshToken;
}