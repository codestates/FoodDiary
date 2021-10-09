package Apoint.FoodDiary_Server.Repository;


import Apoint.FoodDiary_Server.Domain.Article;
import Apoint.FoodDiary_Server.Domain.ArticleResDTO;
import Apoint.FoodDiary_Server.Domain.FriendDTO;
import Apoint.FoodDiary_Server.Entity.ArticleFriends;
import Apoint.FoodDiary_Server.Entity.ArticleUser;
import Apoint.FoodDiary_Server.Entity.Friends;
import Apoint.FoodDiary_Server.Entity.ServiceUser;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

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

    public void SaveFriends(long id, List<Article> article) {

        ServiceUser serviceUser = entityManager.find(ServiceUser.class, id);

        Friends friends = new Friends();
        friends.setServiceUser(serviceUser);
        friends.setCreatedAt(new Date());
        entityManager.persist(friends);

        for(Article articleDTO : article){
            ArticleFriends articleFriends = new ArticleFriends();
            ArticleUser articleUser = entityManager.find(ArticleUser.class, articleDTO.getArticleId());
            articleFriends.setFriends(friends);
            articleFriends.setArticleUser(articleUser);
            entityManager.persist(articleFriends);

        }

        entityManager.flush();
        entityManager.close();
    }

    public List<ArticleResDTO> FriendFindById(long id){
        List<ArticleResDTO> list = new ArrayList<>();

        List<Friends> friendsList = entityManager.find(ServiceUser.class,id).getFriendsList();

        for(Friends friends : friendsList){
            List<ArticleFriends> articleFriendsList = entityManager.find(Friends.class, friends.getId()).getArticleFriendsList();

            for(ArticleFriends articleFriends : articleFriendsList){
                ArticleResDTO articleResDTO = new ArticleResDTO();
                articleResDTO.setId(articleFriends.getId());
                articleResDTO.setTitle(articleFriends.getArticleUser().getTitle());
                articleResDTO.setEmail(articleFriends.getArticleUser().getEmail());
                articleResDTO.setImage(articleFriends.getArticleUser().getImage());
                articleResDTO.setComment(articleFriends.getArticleUser().getComment());
                list.add(articleResDTO);
            }
        }
        entityManager.flush();
        entityManager.close();

        return list;
    }
}
