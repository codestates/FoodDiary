package Apoint.FoodDiary_Server.Controller;

import Apoint.FoodDiary_Server.Domain.ArticleDTO;
import Apoint.FoodDiary_Server.Entity.Article;
import Apoint.FoodDiary_Server.Service.ArticleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

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
    public Article CreateArticle(@RequestBody ArticleDTO articleDTO) {
        return articleService.CreateService(articleDTO);
    }

    @GetMapping(value = "/articles")
    public List<Article> FindAllArticle() {
        return articleService.FindAllService();
    }

    @GetMapping(value = "/article")
    public Article FindByIdArticle(@RequestParam(required = true) Long id) {
            return articleService.FindByIdService(id);
    }

    @PutMapping(value = "/article")
    public void updateArticle(@RequestBody Article article) {
         articleService.UpdateUserService(article);
    }

    @DeleteMapping(value = "/article/{id}")
    public void deleteArticle(@PathVariable Long id) {
        articleService.DeleteService(id);
    }
}
