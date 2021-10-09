package Apoint.FoodDiary_Server.Entity;

import javax.persistence.*;

@Entity

public class ArticleFriends {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;

    @ManyToOne
    @JoinColumn(name = "friends_id")
    private Friends friends;

    @ManyToOne
    @JoinColumn(name = "articleUser_id")
    private ArticleUser articleUser;

    public ArticleFriends(){}

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public Friends getFriends() {
        return friends;
    }

    public void setFriends(Friends friends) {
        this.friends = friends;
    }

    public ArticleUser getArticleUser() {
        return articleUser;
    }

    public void setArticleUser(ArticleUser articleUser) {
        this.articleUser = articleUser;
    }
}
