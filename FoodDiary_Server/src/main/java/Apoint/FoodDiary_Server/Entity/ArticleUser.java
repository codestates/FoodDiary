package Apoint.FoodDiary_Server.Entity;

import javax.persistence.Entity;
import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name = "Article_TBL")
public class ArticleUser {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @ManyToOne
    @JoinColumn(name = "service_User_id")
    private ServiceUser serviceUser;

    @Column(nullable = false)
    private String title;

    @Column(nullable = false)
    private String image;

    @Column(nullable = false)
    private String comment;

//    @Column(nullable = false)
//    @Temporal(TemporalType.TIMESTAMP)
//    private Date createdAt;
//
//    @Column(nullable = false)
//    private boolean admin;

    public ArticleUser(){};

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }

    public String getComment() {
        return comment;
    }

    public void setComment(String comment) {
        this.comment = comment;
    }

//    public Date getCreatedAt() {
//        return createdAt;
//    }
//
//    public void setCreatedAt(Date createdAt) {
//        this.createdAt = createdAt;
//    }
//
//    public boolean isAdmin() {
//        return admin;
//    }
//
//    public void setAdmin(boolean admin) {
//        this.admin = admin;
//    }
}
