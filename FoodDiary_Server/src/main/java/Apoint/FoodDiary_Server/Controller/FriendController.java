package Apoint.FoodDiary_Server.Controller;

import Apoint.FoodDiary_Server.Domain.FriendDTO;
import Apoint.FoodDiary_Server.Domain.NewArticleDTO;
import Apoint.FoodDiary_Server.Entity.Friends;
import Apoint.FoodDiary_Server.Entity.ServiceUser;
import Apoint.FoodDiary_Server.Service.FriendService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;

@RestController
@CrossOrigin(origins = "https://localhost:3000", allowedHeaders = "*", allowCredentials = "true")
public class FriendController {

    private final FriendService friendService;

    @Autowired
    public FriendController(FriendService friendService) {
        this.friendService = friendService;
    }

    @PostMapping(value = "/friends")
    public ResponseEntity<?> AddFriends(@RequestBody FriendDTO friendDTO) {

        Long userId = friendDTO.getUserId();
        Long friendId = friendDTO.getFriendId();
        if (userId == null || friendId == null) {
            return ResponseEntity.badRequest().body("Bad request.");
        }
        try {
            friendService.SaveFriend(userId, friendId);
        } catch (Exception e) {
            return ResponseEntity.badRequest().body("Not found");
        }
        return ResponseEntity.ok().body("Friend Add Success!");
    }

    @GetMapping(value = "/friends/{id}")
    public ResponseEntity<?> FindFriendList(@PathVariable(value = "id") Long id) {

        List<Friends> friendList = friendService.FindFriendList(id);

        if (friendList == null) {
            return ResponseEntity.badRequest().body("Not found");
        }

        return ResponseEntity.ok().body(friendList);
    }

}
