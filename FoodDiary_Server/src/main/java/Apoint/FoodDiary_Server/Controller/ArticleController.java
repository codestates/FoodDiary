package Apoint.FoodDiary_Server.Controller;

import Apoint.FoodDiary_Server.Domain.ArticleDTO;
import Apoint.FoodDiary_Server.Entity.Article;
import Apoint.FoodDiary_Server.Service.ArticleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;

@RestController
@CrossOrigin(origins = "https://localhost:3000", allowedHeaders = "*", allowCredentials = "true")
public class ArticleController {
    private ArticleService articleService;

    @Autowired
    public ArticleController(ArticleService articleService) {
        this.articleService = articleService;
    }

    @PostMapping(value = "/article")
    public ResponseEntity<?> CreateArticle(@RequestBody ArticleDTO articleDTO) {
        articleService.CreateService(articleDTO);

        return ResponseEntity.ok().body(new HashMap<>(){{
            put("message", "create success!");
        }});
    }

    //조회
    @GetMapping(value = "/article")
    public ResponseEntity<?> FindByIdArticle(@RequestParam(required = false) Long id) {
        if (id != null) {
            List<Article> article = articleService.FindByIdService(id);
            return ResponseEntity.ok().body(article);
        } else {
            List<Article> articles = articleService.FindAllService();
            return ResponseEntity.ok().body(articles);
        }
    }

    @PutMapping(value = "/article")
    public ResponseEntity<?> updateArticle(@RequestBody Article article) {
        articleService.UpdateUserService(article);
        return ResponseEntity.ok().body("update success");
    }

    @DeleteMapping(value = "/article/{id}")
    public ResponseEntity<?> deleteArticle(@PathVariable Long id) {
        articleService.DeleteService(id);
        return ResponseEntity.ok().body("delete success");
    }
}
