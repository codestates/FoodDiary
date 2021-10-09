package Apoint.FoodDiary_Server.Controller;

import Apoint.FoodDiary_Server.Domain.ArticleResDTO;
import Apoint.FoodDiary_Server.Service.FriendService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "https://localhost:3000", allowedHeaders = "*", allowCredentials = "true")
public class FriendController {

    private final FriendService friendService;

    @Autowired
    public FriendController(FriendService friendService) {
        this.friendService = friendService;
    }

    @GetMapping(value = "/friends/{id}")
    public List<ArticleResDTO> FriendsList (@PathVariable Long id) {

        return friendService.FriendsListService(id);
    }
}
