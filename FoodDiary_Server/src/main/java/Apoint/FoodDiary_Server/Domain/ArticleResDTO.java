package Apoint.FoodDiary_Server.Domain;


import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class ArticleResDTO {

    private long id;
    private String title;
    private String comment;
    private String image;

}
