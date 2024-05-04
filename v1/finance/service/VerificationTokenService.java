package com.capstone.finance.Service;

import com.capstone.finance.DAO.MemberRepository;
import com.capstone.finance.DAO.VerificationTokenRepository;
import com.capstone.finance.Entity.Member;
import com.capstone.finance.Entity.VerificationToken;
import io.jsonwebtoken.*;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.Base64;
import java.util.UUID;

@Service
@RequiredArgsConstructor
public class VerificationTokenService {

    private final VerificationTokenRepository verificationTokenRepository;

    private final MemberRepository memberRepository;

    public void createVerificationToken(String username) {
        Member member = memberRepository.findByUsername(username)
                .orElseThrow(() -> new RuntimeException("사용자를 찾을수 없습니다"));
        String token = UUID.randomUUID().toString();
        VerificationToken verificationToken = new VerificationToken();
        verificationToken.setVerificationCode(token);
        verificationToken.setMember(member);
        verificationToken.setExpiryDate(calculateExpiryDate());
        verificationTokenRepository.save(verificationToken);

    }

    public boolean validateToken(String token) {
        VerificationToken verificationToken = verificationTokenRepository.findByVerificationCode(token);
//        not null & 아직 유효한 시간대 이내일때
        if (verificationToken == null || verificationToken.getExpiryDate().isBefore(LocalDateTime.now())) {
            return false; // 토큰이 없거나 만료된 경우
        }
        return true; // 유효한 토큰인 경우
    }

    private LocalDateTime calculateExpiryDate() {
        return LocalDateTime.now().plusHours(1);
    }
}
