package Apoint.FoodDiary_Server.Controller;

import Apoint.FoodDiary_Server.Domain.Article;
import Apoint.FoodDiary_Server.Domain.ArticleResDTO;
import Apoint.FoodDiary_Server.Entity.ArticleUser;
import Apoint.FoodDiary_Server.Entity.ServiceUser;
import Apoint.FoodDiary_Server.Service.ArticleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
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
    public ArticleUser CreateArticle(@RequestBody ArticleResDTO articleResDTO) {
        Article article = new Article();
        article.setTitle(articleResDTO.getTitle());
        article.setImage(articleResDTO.getImage());
        article.setComment(articleResDTO.getComment());
        ArticleUser feed = articleService.CreateService(article,articleResDTO.getId());

        return feed;
    }

    @GetMapping(value = "/articles")
    public List<ArticleUser> FindAllArticle() {

        return articleService.FindAllService();
    }

    @GetMapping(value = "/article")
    public ArticleUser FindByIdArticle(@RequestParam(required = false) Long id) {

            return articleService.FindByIdService(id);
    }

    @GetMapping(value = "/article/")
    public List<ArticleUser> FindByTitleArticle(@RequestParam(required = false) String title) {

        return articleService.FindByTitleService(title);
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
