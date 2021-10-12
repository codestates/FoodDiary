package Apoint.FoodDiary_Server.Domain;

import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
public class NewArticleDTO {

    private List<ArticleDTO> articleDTO;
}
