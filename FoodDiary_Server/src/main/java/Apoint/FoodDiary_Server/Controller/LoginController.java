package Apoint.FoodDiary_Server.Controller;

import Apoint.FoodDiary_Server.Domain.LoginSignin;
import Apoint.FoodDiary_Server.Domain.LoginSignup;
import Apoint.FoodDiary_Server.Entity.ServiceUser;
import Apoint.FoodDiary_Server.Service.LoginService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.util.HashMap;
import java.util.Map;

import javax.servlet.http.HttpServletResponse;
import java.util.HashMap;

@RestController
@CrossOrigin(origins = "https://localhost:3000", allowedHeaders = "*", allowCredentials = "true")
//client 포트번호 :3000번

public class LoginController {

    private final LoginService loginService;

    @Autowired
    public LoginController(LoginService loginService) {
        this.loginService = loginService;
    }

    @PostMapping(value = "/signup")
    public ResponseEntity<?> UserSignUp(@RequestBody(required = true) LoginSignup loginSignup, HttpServletResponse response) {
        if (loginSignup.getEmail() == null || loginSignup.getBirth() == null || loginSignup.getPassword() == null ||
                loginSignup.getUsername() == null) {
            return ResponseEntity.badRequest().body("insufficient parameters upplied");
        }
        ServiceUser user = loginService.CreateUserData(loginSignup);

        if(user == null) {
            return ResponseEntity.badRequest().body("email exists");
        }

        Cookie cookie = new Cookie("jwt",
                loginService.CreateJWTToken(user)); // jwt 토큰을 생성하여 쿠키를 통해 클라이언트에 전달해야 합니다. (cookie key -> "jwt")
        response.addCookie(cookie);

        return ResponseEntity.ok().body(new HashMap<>(){{
            put("message","ok");
        }});
    }
    @PutMapping(value = "/mypage/profile/edit/{:id}")
    public ResponseEntity<?> UserUpdate(@RequestParam(required = true) String email, @RequestBody(required = true) LoginSignup loginSignup, HttpServletResponse response){
        if(loginSignup.getEmail() == null || loginSignup.getBirth() == null || loginSignup.getPassword() == null ||
                loginSignup.getUsername() == null){
            return ResponseEntity.badRequest().body("insufficient parameters upplied");
        }

        ServiceUser user = loginService.FindUserEmail(email);

        loginService.UpdateUserData(loginSignup);

        if(user == null){
            return ResponseEntity.badRequest().body("not thing");
        }
        return ResponseEntity.ok().body(new HashMap<>(){{
            put("message","ok");
        }});
    }

    @PostMapping(value = "/signin")
    public ResponseEntity<?> UserSignIn(@RequestBody(required = true) LoginSignin loginSignin, HttpServletResponse response){
        try{
            // DB에 저장 된 유저정보를 확인하여 토큰을 발행하는 메소드입니다.
            // loginSignin를 통해 전달 된 정보를 DB > service_user 테이블에 유저 정보와 비교 후 유효한 유저일 경우 토큰을 생성하여 쿠키를 통해 클라이언트에 전달해야합니다. (cookie key -> "jwt")
            // TODO :
            ServiceUser user = loginService.FindUserData(loginSignin); // 유저 정보를 체크해야 합니다.
            if(user == null){
                return ResponseEntity.badRequest().body("invalid user");
            }

            Cookie cookie = new Cookie("jwt",
                    loginService.CreateJWTToken(user)); // 토큰을 생성하여 쿠키를 통해 클라이언트에 전달 되어야 합니다.
            response.addCookie(cookie);
            return ResponseEntity.ok().body(new HashMap<>(){{
                put("message","ok");
                put("data",user);
            }}); // { "message" : "ok"} 해당 JSON 데이터가 body에 전달되어야 합니다.

        }catch (Exception e){
            return ResponseEntity.badRequest().body("error : " + e);
        }
    }

    @PostMapping(value = "/signout")
    public ResponseEntity<?> UserSignOut(HttpServletResponse response){
        // 유저 로그아웃 기능을 수행하는 메소드입니다.
        // 해당 요청이 들어 왔을 시, 클라이언트에 jwt 키 값을 가진 쿠키가 제거 되어야합니다.
        // TODO :
        Cookie cookie = new Cookie("jwt",null);
        cookie.setMaxAge(0);
        response.addCookie(cookie);
        return ResponseEntity.ok().body("Logged out successfully");
    }




    @GetMapping(value = "/auth")
    public ResponseEntity<?> UserAuth(HttpServletRequest request){
        // 로그인 중인지 확인하는 메소드입니다.
        // 쿠키에 저장 된 토큰을 확인 하여 유저 데이터를 전달애햐합니다.
        // TODO :
        Cookie[] cookies = request.getCookies();
        String cookiesResult = "";
        try{
            for(Cookie cookie : cookies){
                if(cookie.getName().equals("jwt")){
                    cookiesResult = cookie.getValue();
                }
            }
            // 쿠키에 키 값이 "jwt"인 쿠키에 값을 찾아냅니다.

        }catch (NullPointerException e){
            return ResponseEntity.badRequest().body(new HashMap<>(){{
                put("data",null);
                put("message","not authorized");
            }});// { "data" : null, "message" : "not authorized"} 해당 JSON 데이터가 body에 전달되어야 합니다.
        }

        Map<String, String> checkResult = loginService.CheckJWTToken(cookiesResult); // 토큰 유효성을 체크해야합니다.

        if(checkResult.get("email") != null){

            ServiceUser userResult = loginService.FindUserEmail(checkResult.get("email")); // email을 기준으로 유저 정보를 찾아야 합니다.

            return ResponseEntity.ok().body(new HashMap<>(){{
                put("data",new HashMap<>(){{
                    put("userInfo",new HashMap<>(){{
                        put("email",userResult.getEmail());
                        put("username",userResult.getUsername());
                        put("birth", userResult.getBirth());
                    }});

                }});
                put("message","ok");
            }});

        }else{
            return ResponseEntity.badRequest().body(new HashMap<>(){{
                put("data",null);
                put("message","에러 내용");
            }});
            // { "data" : null, "message" : "에러 내용" }
            // 위와 같은 형태에 JSON 데이터가 body에 전달되어야 합니다.
        }
    }


//    @GetMapping("/mainpage")
//    public ResponseEntity<?> GetAllPhotos(HttpServletResponse response){
//
//
//    }

}
