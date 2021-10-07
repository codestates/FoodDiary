package Apoint.FoodDiary_Server.Controller;

import Apoint.FoodDiary_Server.Domain.LoginSignup;
import Apoint.FoodDiary_Server.Service.LoginService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

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

        return ResponseEntity.ok().body(new HashMap<>(){{
            put("message","ok");
        }});
    }


}
