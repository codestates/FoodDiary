package Apoint.FoodDiary_Server.Controller;

import Apoint.FoodDiary_Server.Domain.ArticleResDTO;
import Apoint.FoodDiary_Server.Domain.NewArticleDTO;
import Apoint.FoodDiary_Server.Service.FriendService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
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

    @PostMapping(value = "/friends/{id}")
    public ResponseEntity<?> AddFriends (@PathVariable(value = "id") Long id ,
                                         @RequestBody NewArticleDTO friendDTO) {

        if(friendDTO.getArticle().size() == 0){
            return ResponseEntity.badRequest().body("Bad request.");
        }
        try{
         friendService.SaveFriend(id, friendDTO.getArticle());
        }catch (Exception e){
            return ResponseEntity.badRequest().body("Not found");
        }
        return ResponseEntity.ok().body("Friend Add Success!");
    }

    @GetMapping(value = "/friends/{id}")
    public ResponseEntity<?> FindFriendList(@PathVariable(value = "id") Long id){

        List<ArticleResDTO> articleResDTOList = friendService.FindFriendList(id);

        if(articleResDTOList == null){
            return ResponseEntity.badRequest().body("Not found");
        }

        return ResponseEntity.ok().body(articleResDTOList);
    }

}
