package Apoint.FoodDiary_Server.Service;

import Apoint.FoodDiary_Server.Domain.Article;
import Apoint.FoodDiary_Server.Domain.ArticleResDTO;
import Apoint.FoodDiary_Server.Domain.FriendDTO;
import Apoint.FoodDiary_Server.Repository.FriendRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class FriendService {

    private final FriendRepository friendRepository;

    @Autowired
    public FriendService(FriendRepository friendRepository) {
        this.friendRepository = friendRepository;
    }

    public void SaveFriend(long id, List<Article> articles){

        friendRepository.SaveFriends(id, articles);
    }

    public List<ArticleResDTO> FindFriendList(long id) {
        return friendRepository.FriendFindById(id);
    }
}
