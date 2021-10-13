package Apoint.FoodDiary_Server.Domain;


import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class SingupDTO {

    private String email;
    private String password;
    private String username;
    private String birth;
    private String code;

}
