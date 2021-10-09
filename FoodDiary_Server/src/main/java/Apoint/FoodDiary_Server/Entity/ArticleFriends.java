package Apoint.FoodDiary_Server.Entity;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Getter
@Setter
@NoArgsConstructor
public class ArticleFriends {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @ManyToOne
    @JoinColumn(name = "friends_id")
    private Friends friends;

    @ManyToOne
    @JoinColumn(name = "article_user_id")
    private ArticleUser articleUser;


}
