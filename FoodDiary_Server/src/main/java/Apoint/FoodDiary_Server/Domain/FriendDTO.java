package Apoint.FoodDiary_Server.Domain;

import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
public class FriendDTO {

    private long friendId;
    private String email;
    private String title;
    private String image;
    private String comment;
}
