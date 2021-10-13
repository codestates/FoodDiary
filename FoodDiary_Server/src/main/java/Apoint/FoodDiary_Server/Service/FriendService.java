package Apoint.FoodDiary_Server.Service;

import Apoint.FoodDiary_Server.Domain.ArticleDTO;
import Apoint.FoodDiary_Server.Entity.Friends;
import Apoint.FoodDiary_Server.Entity.ServiceUser;
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

    public void SaveFriend(long userId, long friendId) {

        friendRepository.SaveFriends(userId, friendId);
    }

    public List<Friends> FindFriendList(long id) {
        return friendRepository.ShowFriendArticles(id);
    }
}
