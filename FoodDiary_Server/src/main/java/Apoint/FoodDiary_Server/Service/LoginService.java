package Apoint.FoodDiary_Server.Service;


import Apoint.FoodDiary_Server.Domain.LoginSignin;
import Apoint.FoodDiary_Server.Entity.ServiceUser;
import Apoint.FoodDiary_Server.Repository.LoginRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

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
}
