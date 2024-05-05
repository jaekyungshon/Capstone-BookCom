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
    /*
        @Value("${jwt.secret}") // application.properties의 jwt.secret 값 가져오기
        private String secretKey; // 토큰 서명에 사용되는 비밀키

        public boolean validateToken(String token) {
            VerificationToken verificationToken = verificationTokenRepository.findByVerificationCode(token);
            try {
                // Base64 디코딩하여 byte[]로 변환
                byte[] keyBytes = Base64.getDecoder().decode(secretKey);

                Claims claims = Jwts.parserBuilder() // parserBuilder 사용
                        .setSigningKey(keyBytes) // byte[] 형식의 키 사용
                        .build()
                        .parseClaimsJws(token)
                        .getBody();

                // 토큰이 만료되었는지 확인
                long expirationTime = claims.getExpiration().getTime();
                long currentTime = System.currentTimeMillis();
                return expirationTime > currentTime; // 만료되지 않았으면 true 반환

            } catch (ExpiredJwtException e) {
                // 토큰이 만료된 경우
                return false;
            } catch (JwtException e) {
                // 서명 오류 또는 기타 JWT 관련 오류가 있는 경우
                return false;
            } catch (Exception e) {
                // 기타 예외가 발생한 경우
                return false;
            }
        }
    */
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