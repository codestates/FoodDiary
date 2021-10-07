package Apoint.FoodDiary_Server.Service;


import Apoint.FoodDiary_Server.Repository.LoginRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class LoginService {
    private static long GET_ID = 0L;
    private final static String SIGN_KEY = "apointkey";
    private final LoginRepository loginRepository;

    @Autowired
    public LoginService(LoginRepository loginRepository){
        this.loginRepository = loginRepository;
    }
}
