package Apoint.FoodDiary_Server.Service;


import Apoint.FoodDiary_Server.Domain.SigninDTO;
import Apoint.FoodDiary_Server.Domain.SingupDTO;
import Apoint.FoodDiary_Server.Entity.ServiceGuest;
import Apoint.FoodDiary_Server.Entity.ServiceUser;
import Apoint.FoodDiary_Server.Repository.LoginRepository;
import io.jsonwebtoken.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.Duration;
import java.util.*;

@Service
public class LoginService {

    private final static String SIGN_KEY = "apointkey";
    private final LoginRepository loginRepository;

    @Autowired
    public LoginService(LoginRepository loginRepository) {
        this.loginRepository = loginRepository;
    }

    public ServiceUser FindUserData(SigninDTO signinDTO) {
        List<ServiceUser> user = loginRepository.FindByEmail(signinDTO.getEmail());
        for (ServiceUser i : user) {
            if (i.getPassword().equals(signinDTO.getPassword())) {
                return i;
            }
        }
        return null;
    }

    public ServiceUser FindUserEmail(String email) {
        return loginRepository.FindByEmail(email).get(0);
    }

    public String CreateJWTToken(ServiceUser user) {
        // 매개변수 user를 통해 전달 되는 데이터를 사용하여 토큰을 생성 후 값을 리턴합니다.
        // 토큰에는 "email", "username"이 담겨야합니다.
        // 토큰에 유효시간은 24시간입니다.
        // SIGN_KEY를 사용해야합니다.
        //TODO :
        Date now = new Date();
        return Jwts.builder()
                .setHeaderParam(Header.TYPE, Header.JWT_TYPE)
                .setIssuer("fresh")
                .setIssuedAt(now)
                .setExpiration(new Date(now.getTime() + Duration.ofDays(1).toMillis()))
                .claim("email", user.getEmail())
                .claim("username", user.getUsername())
                .signWith(SignatureAlgorithm.HS256, SIGN_KEY)
                .compact();
    }

    public Map<String, String> CheckJWTToken(String key) {
        // 매개변수 key를 통해 전달 되는 토큰 값에 유효성을 체크하여 결과를 리턴합니다.
        try {
            Claims claims = Jwts.parser().setSigningKey(SIGN_KEY)
                    .parseClaimsJws(key)
                    .getBody();

            String userEmail = (String) claims.get("email");
            return new HashMap<>() {
                {
                    put("email", userEmail);
                    put("message", "ok");
                }
            };

        } catch (ExpiredJwtException e) {
            return new HashMap<>() {
                {
                    put("email", null);
                    put("message", "토큰 시간이 만료 되었습니다.");
                }
            };
        } catch (JwtException e) {
            return new HashMap<>() {
                {
                    put("email", null);
                    put("message", "토큰이 유효하지 않습니다.");
                }
            };
        }
    }

    public ServiceUser CreateUserData(SingupDTO singupDTO) {
        for (ServiceUser i : loginRepository.FindUserList()) {
            if (i.getEmail().equals(singupDTO.getEmail())) {
                return null;
            }
        }
        loginRepository.CreateServiceUser(singupDTO);
        return loginRepository.FindByEmail(singupDTO.getEmail()).get(0);
    }

    public Boolean CheckGuestData(String email) {
        // 초대장 보내는 이메일로 이미 이메일이 갔는지 확인
        List<ServiceGuest> guest = loginRepository.FindGuestByEmail(email);
        if (guest.isEmpty()) {
            return true;
        } else {
            return false;
        }
    }

    public String CreateInvitationCode() {
        StringBuffer invitationCode = new StringBuffer();
        Random rnd = new Random();
        for (int i = 0; i < 10; i++) {
            int rIndex = rnd.nextInt(3);
            switch (rIndex) {
                case 0:
                    // a-z
                    invitationCode.append((char) ((int) (rnd.nextInt(26)) + 97));
                    break;
                case 1:
                    // A-Z
                    invitationCode.append((char) ((int) (rnd.nextInt(26)) + 65));
                    break;
                case 2:
                    // 0-9
                    invitationCode.append((rnd.nextInt(10)));
                    break;
            }
        }
        return invitationCode.toString();
    }

    public ServiceGuest CreateGuestData(String email, String code) {
        for (ServiceGuest i : loginRepository.FindGuestList()) {
            if (i.getEmail().equals(email)) {
                return null;
            }
        }
        loginRepository.CreateServiceGuest(email, code);
        return loginRepository.FindGuestByEmail(email).get(0);
    }


    public Boolean CheckGuestCode(String email, String code) {
        for (ServiceGuest i : loginRepository.FindGuestByEmail(email)) {
            if (i.getCode().equals(code)) {
                return true;
            } else {
                return false;
            }
        }
        return null;
    }


    public Boolean CheckUserData(String email) {
        // 초대장 보내는 이메일로 이미 가입이 되어 있는지 확인
        List<ServiceUser> user = loginRepository.FindByEmail(email);
        if (user.isEmpty()) {
            return true;
        } else {
            return false;
        }
    }

    public void RemoveGuestAfterSignup(String email) {
        loginRepository.DeleteGuestAfterSignup(email);
    }
}
