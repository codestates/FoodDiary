package Apoint.FoodDiary_Server.Entity;

import javax.persistence.*;
import java.util.Date;

@Entity
public class ServiceFeed {
    @Id
    private long id;

    @Column(nullable = false)
    private String title;

    @Column(nullable = false)
    private String comment;

    @Column(nullable = false)
    private String image;

    @ManyToOne
    @JoinColumn(name="user_id")
    private ServiceUser serviceUser;

    @Column(nullable = false)
    @Temporal(TemporalType.TIMESTAMP)
    private Date createdAt;

    @Column(nullable = false)
    @Temporal(TemporalType.TIMESTAMP)
    private Date updatedAt;



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

    public String getComment() {
        return comment;
    }

    public void setComment(String comment) {
        this.comment = comment;
    }

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }

    public ServiceUser getServiceUser() {
        return serviceUser;
    }

    public void setServiceUser(ServiceUser serviceUser) {
        this.serviceUser = serviceUser;
    }

    public Date getCreatedAt() {
        return createdAt;
    }

    public void setCreatedAt(Date createdAt) {
        this.createdAt = createdAt;
    }

    public Date getUpdatedAt() {
        return updatedAt;
    }

    public void setUpdatedAt(Date updatedAt) {
        this.updatedAt = updatedAt;
    }
}
