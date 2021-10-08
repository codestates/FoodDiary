package Apoint.FoodDiary_Server.Controller;

import Apoint.FoodDiary_Server.Domain.Article;
import Apoint.FoodDiary_Server.Entity.ArticleUser;
import Apoint.FoodDiary_Server.Entity.ServiceUser;
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
    public ArticleUser CreateArticle(@RequestBody Article article) {

        ArticleUser user = articleService.CreateService(article);

        return user;
    }

    @GetMapping(value = "/articles")
    public List<ArticleUser> FindAllArticle() {

        return articleService.FindAllService();
    }

    @GetMapping(value = "/article")
    public ArticleUser FindByIdArticle(@RequestParam(required = false) Long id) {

//        List<ArticleUser> articleUsers = articleService.getArticlAll();

        return articleService.FindByIdService(id);
    }

    @PutMapping(value = "/article")
    public void updateArticle(@RequestBody ArticleUser articleUser) {
         articleService.UpdateUserService(articleUser);
    }

    @DeleteMapping(value = "/article/{id}")
    public void deleteArticle(@PathVariable Long id) {
        articleService.DeleteService(id);
    }

}
