package Apoint.FoodDiary_Server.Entity;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import javax.persistence.*;


@Entity
@Getter
@Setter
@NoArgsConstructor
public class ServiceUser {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    private String email;

    @Column(nullable = false)
    private String password;

    @Column(nullable = false)
    private String username;

    @Column(nullable = false)
    private String birth;

    @Column(nullable = false)
    private String userImage;

    @Column(nullable = false)
    private Boolean admin;

    @Column(nullable = false)
    @Temporal(TemporalType.TIMESTAMP)
    private Date createdAt;

    @Column(nullable = false)
    @Temporal(TemporalType.TIMESTAMP)
    private Date updatedAt;

    @OneToMany(mappedBy ="serviceUser")
    private List<Friends> friendsList = new ArrayList<>();

    @OneToMany(mappedBy ="serviceUser")
    private List<Article> articleList = new ArrayList<>();



//    @OneToMany(mappedBy ="serviceUser")
//    private List<ArticleUser> articleUsers = new ArrayList<>();


}
