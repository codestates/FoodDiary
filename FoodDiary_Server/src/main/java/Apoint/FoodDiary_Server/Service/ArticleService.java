package Apoint.FoodDiary_Server.Service;

import Apoint.FoodDiary_Server.Domain.Article;
import Apoint.FoodDiary_Server.Domain.LoginSignin;
import Apoint.FoodDiary_Server.Domain.LoginSignup;
import Apoint.FoodDiary_Server.Entity.ArticleUser;
import Apoint.FoodDiary_Server.Entity.ServiceUser;
import Apoint.FoodDiary_Server.Repository.ArticleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ArticleService {
    private static long GET_ID = 0L;

    private ArticleRepository articleRepository;

    @Autowired
    public ArticleService(ArticleRepository articleRepository) {
        this.articleRepository = articleRepository;
    }

//    public ArticleUser createArticle(ArticleUser article){
//
//        return articleRepository.save(article);
//    }

    public ArticleUser CreateService(Article article){
        for(ArticleUser i : articleRepository.FindAll()){
            if(i.getEmail().equals(article.getEmail()) && i.getTitle().equals(article.getTitle()) && i.getComment().equals(article.getComment()) &&
                    i.getImage().equals(article.getImage())){
                return null;
            }
        }
        GET_ID++;
        articleRepository.Create(article, GET_ID);
        return articleRepository.FindById(GET_ID);
    }

    public List<ArticleUser> FindAllService(){
        return articleRepository.FindAll();
    }

    public ArticleUser FindByIdService(long id){

        return articleRepository.FindById(id);
    }

    public List<ArticleUser> FindByEmailService(String email){

        return articleRepository.FindByEmail(email);
    }

    public void UpdateUserService (ArticleUser article){

         articleRepository.Update(article);
    }

    public void DeleteService(long id){
        articleRepository.Delete(id);
    }

//    public ArticleUser UpdateUserService(Article article){
//        for(ArticleUser i : articleRepository.FindAll()){
//            if(i.getTitle().equals(article.getTitle())){
//                articleRepository.UpdateService(article, i.getId());
//                return articleRepository.FindById(i.getId());
//            }
//        }
//        return null;
//    }



}
