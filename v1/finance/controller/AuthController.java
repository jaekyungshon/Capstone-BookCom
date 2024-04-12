package com.capstone.finance.controller;

import com.capstone.finance.dto.Member.*;
import com.capstone.finance.dto.Token.TokenReqDto;
import com.capstone.finance.dto.Token.TokenResDto;
import com.capstone.finance.service.AuthService;
import com.capstone.finance.service.MemberService;
import com.capstone.finance.service.VerificationTokenService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/auth")
@RequiredArgsConstructor
public  class AuthController {
    private final AuthService authService;
    private final MemberService memberService;
    private final VerificationTokenService verificationTokenService;

    @PostMapping("/signup")
    public ResponseEntity<MemberResponseDto> signup(@RequestBody MemberRequestDto memberRequestDto) {

        return ResponseEntity.ok(authService.signup(memberRequestDto));
    }

    //보안 향상을 위한 중복닉네임 미허가
    @GetMapping("/checknickname")
    public boolean checkNickname(@RequestParam String nickname) {
        return memberService.checkNickname(nickname);
    }

    @PostMapping("/login")
    public ResponseEntity<TokenResDto> login(@RequestBody LoginDto loginDto) {
        return ResponseEntity.ok(authService.login(loginDto));
    }

    @PostMapping("/logout")
    public ResponseEntity<?> logout(@RequestBody TokenReqDto requestDto) {
        authService.logout(requestDto);
        return ResponseEntity.ok().build();
    }

    @PostMapping("/reissue")
    public ResponseEntity<TokenResDto> reissue(@RequestBody TokenReqDto tokenReqDto) {
        return ResponseEntity.ok(authService.reissue(tokenReqDto));
    }
/*
    // 보안문제 리팩터링 요청
    @PostMapping("/send-email")
    public ResponseEntity<?> getNewPasswordToUser(@RequestBody MemberFindPwReqDto reqDto){
        authService.issueTempPassword(reqDto.getUsername(), reqDto.getNickname());
        return new ResponseEntity<>("Verification token has been sent to your email.", HttpStatus.OK);
    }

*/
}
