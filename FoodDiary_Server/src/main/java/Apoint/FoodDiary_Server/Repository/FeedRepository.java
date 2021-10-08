package Apoint.FoodDiary_Server.Repository;


import Apoint.FoodDiary_Server.Domain.FeedUpload;
import Apoint.FoodDiary_Server.Domain.LoginSignup;
import Apoint.FoodDiary_Server.Entity.ServiceFeed;
import Apoint.FoodDiary_Server.Entity.ServiceUser;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import javax.persistence.EntityManager;
import javax.transaction.Transactional;
import java.util.Date;

@Repository
@Transactional
public class FeedRepository {
    private final EntityManager entityManager;

    @Autowired
    public FeedRepository(EntityManager entityManager){
        this.entityManager = entityManager;
    }

    public void CreateServiceFeed(FeedUpload feedUpload, Long id){

        Date now = new Date();
        ServiceFeed feed = new ServiceFeed();
        feed.setId(id);
        feed.setTitle(feedUpload.getTitle());
        feed.setComment(feedUpload.getComment());
        feed.setImage(feedUpload.getImage());
//        feed.setUser_id(11);
        feed.setUpdatedAt(now);
        feed.setCreatedAt(now);

//        entityManager.persist(user);
//        entityManager.flush();
//        entityManager.close();

    }



}
