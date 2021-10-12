package Apoint.FoodDiary_Server.Repository;


import Apoint.FoodDiary_Server.Domain.ArticleDTO;
import Apoint.FoodDiary_Server.Domain.FriendDTO;
import Apoint.FoodDiary_Server.Entity.Friends;
import Apoint.FoodDiary_Server.Entity.ServiceUser;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.stereotype.Service;

import javax.persistence.EntityManager;
import javax.transaction.Transactional;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Repository
@Transactional
public class FriendRepository {

    private final EntityManager entityManager;

    @Autowired
    public FriendRepository(EntityManager entityManager) {
        this.entityManager = entityManager;
    }

    public void SaveFriends(long userId, long friendId) {

        ServiceUser me = new ServiceUser();
        me.setId(userId);

        ServiceUser you = new ServiceUser();
        you.setId(friendId);

        Friends friends = new Friends();
        friends.setServiceUser(me);
        friends.setFriendUser(you);


//        ServiceUser serviceUser = entityManager.find(ServiceUser.class, id);
//
//        Friends friends = new Friends();
//        friends.setServiceUser(serviceUser);
//        friends.setCreatedAt(new Date());
//        entityManager.persist(friends);
//
//        for(ArticleDTO articleDTO : article){
//            ArticleFriends articleFriends = new ArticleFriends();
////            ArticleUser articleUser = entityManager.find(ArticleUser.class, articleDTO.getArticleId());
//            articleFriends.setFriends(friends);
////            articleFriends.setArticleUser(articleUser);
//            entityManager.persist(articleFriends);
//
//        }
        entityManager.persist(friends);
        entityManager.flush();
        entityManager.close();
    }

    public List<Friends> ShowFriendArticles(long id){
        List<Friends> friendsList = entityManager.createQuery("SELECT e FROM Friends e where e.serviceUser= '"+id+"'", Friends.class).getResultList();
        entityManager.flush();
        entityManager.close();

        return friendsList;
    }
}
