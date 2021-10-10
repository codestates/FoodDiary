package Apoint.FoodDiary_Server.Controller;

import Apoint.FoodDiary_Server.Domain.LoginSignin;
import Apoint.FoodDiary_Server.Domain.LoginSignup;
import Apoint.FoodDiary_Server.Domain.MailDto;
import Apoint.FoodDiary_Server.Entity.ServiceGuest;
import Apoint.FoodDiary_Server.Entity.ServiceUser;
import Apoint.FoodDiary_Server.Service.LoginService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.web.bind.annotation.*;

import javax.mail.MessagingException;
import javax.mail.internet.MimeMessage;
import javax.servlet.http.*;
import java.io.UnsupportedEncodingException;
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
        // 들어온 회원가입 양식에 빈 값이 있는지 한번 더 체크
        if (loginSignup.getEmail() == null || loginSignup.getBirth() == null || loginSignup.getPassword() == null ||
                loginSignup.getUsername() == null || loginSignup.getCode() == null) {
            return ResponseEntity.badRequest().body("insufficient parameters applied");
        }

        if(loginService.CheckUserData(loginSignup.getEmail()) == false) {
            return ResponseEntity.badRequest().body("email exists");
        }
        if(loginService.CheckGuestData(loginSignup.getEmail())){
            return ResponseEntity.badRequest().body("You are not invited");
        }
        if(loginService.CheckGuestCode(loginSignup.getEmail(),loginSignup.getCode())==false){
            return ResponseEntity.badRequest().body("Wrong Code!");
        }
        ServiceUser user = loginService.CreateUserData(loginSignup);
        loginService.RemoveGuestAfterSignup(loginSignup.getEmail());
        Cookie cookie = new Cookie("jwt", loginService.CreateJWTToken(user));
        response.addCookie(cookie);

        return ResponseEntity.ok().body("회원가입이 완료되었습니다");
    }
//    @PutMapping(value = "/mypage/profile/edit/{:id}")
//    public ResponseEntity<?> UserUpdate(@RequestParam(required = true) String email, @RequestBody(required = true) LoginSignup loginSignup, HttpServletResponse response){
//        if(loginSignup.getEmail() == null || loginSignup.getBirth() == null || loginSignup.getPassword() == null ||
//                loginSignup.getUsername() == null){
//            return ResponseEntity.badRequest().body("insufficient parameters upplied");
//        }
//
//        ServiceUser user = loginService.FindUserEmail(email);
//
//        loginService.UpdateUserData(loginSignup);
//
//        if(user == null){
//            return ResponseEntity.badRequest().body("not thing");
//        }
//        return ResponseEntity.ok().body(new HashMap<>(){{
//            put("message","ok");
//        }});
//    }

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

    @Autowired
    private JavaMailSender javaMailSender;


    @PostMapping("/email")
    public ResponseEntity<?> SendEmail(@RequestBody(required = true) MailDto mailDto, HttpServletResponse response) throws MessagingException, UnsupportedEncodingException {

        //이미 있는 회원인지 확인
        if(loginService.CheckUserData(mailDto.getAddress()) == true && loginService.CheckGuestData(mailDto.getAddress())==true){

            MimeMessage message = javaMailSender.createMimeMessage();
            MimeMessageHelper mimeMessageHelper = new MimeMessageHelper(message, true, "UTF-8");

            mimeMessageHelper.setFrom("ryanromaris@google.com","Food Diary");
            mimeMessageHelper.setTo(mailDto.getAddress());
            mimeMessageHelper.setSubject("Hi this is Food Diary Invitation!");

            StringBuilder body = new StringBuilder();
            body.append("<html> <body><h2>Hello, "+mailDto.getGuestName()+ " Welcome to Food Diary</h2><br>");
            body.append("<div>안녕하세요 "+mailDto.getGuestName()+"님! </div> </body></html>");
            body.append("<img src='https://media.vlpt.us/images/ryanromaris/post/419c908f-254a-41a0-8269-89202cd7c0fb/Food_Diary_Logo.png'>");

            body.append("<div>Food Diary에 당신을 초대합니다! 이 이메일 계정으로 Food Diary에 가입하세요.</div> ");
            String invitationCode = loginService.CreateInvitationCode();
            body.append("<div>Invitation Code: "+invitationCode+"</div>");
            body.append("<a href='https://localhost.3000'>Food Diary Homepage</a></body></html>");
            mimeMessageHelper.setText(body.toString(), true);
            javaMailSender.send(message);

            loginService.CreateGuestData(mailDto.getAddress(),invitationCode);

            return ResponseEntity.ok().body(new HashMap<>(){{
                put("message","send Success!");
            }});
        } else if(loginService.CheckGuestData(mailDto.getAddress())==false){
            return ResponseEntity.badRequest().body("이미 초대받은 회원입니다");

        } else{
            return ResponseEntity.badRequest().body(new HashMap<>(){{
                put("message","이미 가입한 회원입니다.");
            }});
        }

    }


//    @GetMapping("/mainpage")
//    public ResponseEntity<?> GetAllPhotos(HttpServletResponse response){
//
//
//    }

//    @PostMapping(value = "/email")
//    private int sendEmail(HttpServletRequest request, String userEmail){
//        HttpSession session = request.getSession();
//        loginService.mailSend(session, userEmail);
//    }

}
