package Apoint.FoodDiary_Server.Repository;


import Apoint.FoodDiary_Server.Domain.ArticleResDTO;
import Apoint.FoodDiary_Server.Entity.ArticleUser;
import Apoint.FoodDiary_Server.Entity.Friends;
import Apoint.FoodDiary_Server.Entity.ServiceUser;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import javax.persistence.EntityManager;
import javax.transaction.Transactional;
import java.util.ArrayList;
import java.util.List;

@Repository
@Transactional
public class FriendRepository {

    private final EntityManager entityManager;

    @Autowired
    public FriendRepository(EntityManager entityManager) {
        this.entityManager = entityManager;
    }

    public List<ArticleResDTO> FriendFindById(Long id) {
        List<ArticleResDTO> list = new ArrayList<>();

        List<Friends> friendsList = entityManager.find(ServiceUser.class,id).getFriendsList();
        for(Friends friends : friendsList) {
            ArticleResDTO articleResDTO = new ArticleResDTO();
            articleResDTO.setId(friends.getId());
            articleResDTO.setEmail(friends.getServiceUser().getEmail());
            articleResDTO.setTitle(friends.getArticleUser().getTitle());
            articleResDTO.setComment(friends.getArticleUser().getComment());
            articleResDTO.setImage(friends.getArticleUser().getImage());
            list.add(articleResDTO);
        }
        entityManager.flush();
        entityManager.close();
        return  list;
    }
}
