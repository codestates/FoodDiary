package Apoint.FoodDiary_Server.Service;

import Apoint.FoodDiary_Server.Domain.LoginSignup;
import Apoint.FoodDiary_Server.Entity.ArticleUser;
import Apoint.FoodDiary_Server.Entity.ServiceUser;
import Apoint.FoodDiary_Server.Repository.ArticleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;

@Service
public class ArticleService {


    private ArticleRepository articleRepository;

    @Autowired
    public ArticleService(ArticleRepository articleRepository) {
        this.articleRepository = articleRepository;
    }

    public ArticleUser createArticle(ArticleUser article){

        return articleRepository.save(article);
    }

//    public ArticleUser CreateUserData(LoginSignup loginSignup){
//        for(ServiceUser i : articleRepository.findAll()){
//            if(i.getEmail().equals(loginSignup.getEmail())){
//                return null;
//            }
//        }
//        GET_ID++;
//        loginRepository.CreateServiceUser(loginSignup, GET_ID);
//        return loginRepository.FindById(GET_ID);
//    }

    public List<ArticleUser> getArticlAll(){
        return (List<ArticleUser>) articleRepository.findAll();
    }

    public ArticleUser getArticlesById(Long id){
        return articleRepository.findById(id).orElse(null);
    }

//    public ArticleUser getArticlesByTitle(String title){
//        return articleRepository.findById(title).
//    }

    public void deleteArticle(Long id){
        articleRepository.deleteById(id);

    }



    public ArticleUser updateArticle(ArticleUser article)    {
        Date now = new Date();
        ArticleUser articleUser = articleRepository.findById(article.getId()).orElse(null);
        articleUser.setTitle(article.getTitle());
        articleUser.setComment(article.getComment());
        articleUser.setImage(article.getImage());
//        articleUser.setCreatedAt(now);
//        articleUser.setAdmin(false);

        return articleRepository.save(articleUser);
    }

}
