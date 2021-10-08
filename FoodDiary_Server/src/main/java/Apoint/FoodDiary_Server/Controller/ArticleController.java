package Apoint.FoodDiary_Server.Controller;

import Apoint.FoodDiary_Server.Entity.ArticleUser;
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
    public ArticleUser CreateArticle(@RequestBody ArticleUser articleUser){
        return articleService.createArticle(articleUser);
    }

    @GetMapping(value = "/article")
    public List<ArticleUser> findAllArticle(@RequestParam(required = false) Long id) {

        List<ArticleUser> users;
        users.add(articleService.getArticlesById(id));
        if(id == null){
            return articleService.getArticlAll();
        }

        return users;
}


//    @GetMapping(value = "/article")
//    public ArticleUser findArticleById(@RequestParam(required = false) Long id){
//
////        List<ArticleUser> articleUsers = articleService.getArticlAll();
//
//        if(id != null){
//            return articleService.getArticlesById(id);
//        }
//
//        return articleService.getArticlAll();
//    }

    @PutMapping(value = "/article")
    public ArticleUser updateArticle(@RequestBody ArticleUser article){
        return articleService.updateArticle(article);
    }

    @DeleteMapping(value = "/article/{id}")
    public void deleteArticle(@PathVariable Long id){
        articleService.deleteArticle(id);
    }

}
