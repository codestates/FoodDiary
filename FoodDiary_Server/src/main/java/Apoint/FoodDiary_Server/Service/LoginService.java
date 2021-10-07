package Apoint.FoodDiary_Server.Service;


import Apoint.FoodDiary_Server.Domain.LoginSignin;
import Apoint.FoodDiary_Server.Domain.LoginSignup;
import Apoint.FoodDiary_Server.Entity.ServiceUser;
import Apoint.FoodDiary_Server.Repository.LoginRepository;
import io.jsonwebtoken.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.Duration;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
public class LoginService {
    private static long GET_ID = 0L;
    private final static String SIGN_KEY = "apointkey";
    private final LoginRepository loginRepository;

    @Autowired
    public LoginService(LoginRepository loginRepository){
        this.loginRepository = loginRepository;
    }

    public ServiceUser FindUserData(LoginSignin loginSignin){
        List<ServiceUser> user = loginRepository.FindByEmail(loginSignin.getEmail());
        for (ServiceUser i : user){
            if (i.getPassword().equals(loginSignin.getPassword())){
                return i;
            }
        }
        return null;
    }

    public ServiceUser FindUserEmail(String email){
        return loginRepository.FindByEmail(email).get(0);
    }

    public String CreateJWTToken(ServiceUser user){
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
                .setExpiration(new Date(now.getTime()+ Duration.ofDays(1).toMillis()))
                .claim("email",user.getEmail())
                .claim("username",user.getUsername())
                .signWith(SignatureAlgorithm.HS256, SIGN_KEY)
                .compact();
    }

    public Map<String, String> CheckJWTToken(String key){
        // 매개변수 key를 통해 전달 되는 토큰 값에 유효성을 체크하여 결과를 리턴합니다.
        try{
            Claims claims = Jwts.parser().setSigningKey(SIGN_KEY)
                    .parseClaimsJws(key)
                    .getBody();

            String userEmail =(String) claims.get("email");
            return new HashMap<>(){
                {
                    put("email",userEmail);
                    put("message","ok");
                }
            };

        }catch(ExpiredJwtException e){
            return new HashMap<>(){
                {
                    put("email",null);
                    put("message","토큰 시간이 만료 되었습니다.");
                }
            };
        }catch(JwtException e){
            return new HashMap<>(){
                {
                    put("email",null);
                    put("message","토큰이 유효하지 않습니다.");
                }
            };
        }
    }

    public ServiceUser CreateUserData(LoginSignup loginSignup){
        for(ServiceUser i : loginRepository.FindUserList()){
            if(i.getEmail().equals(loginSignup.getEmail())){
                return null;
            }
        }
        GET_ID++;
        loginRepository.CreateServiceUser(loginSignup, GET_ID);
        return loginRepository.FindById(GET_ID);
    }
}
