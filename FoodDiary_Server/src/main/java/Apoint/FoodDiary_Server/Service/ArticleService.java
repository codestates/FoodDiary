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

    public ArticleUser CreateService(Article article, long id){
        //게시물 만드는걸 필터해줄 필요가 있을까?
        // 제목이 겹치거나 코멘트가 겹칠 수도 있으니까...
//        for(ArticleUser i : articleRepository.FindAll()){
//            if(i.getTitle().equals(article.getTitle()) && i.getComment().equals(article.getComment()) &&
//                    i.getImage().equals(article.getImage())){
//                return null;
//            }
//        }

        articleRepository.Create(article, id);
        return null;
    }

    public List<ArticleUser> FindAllService(){
        return articleRepository.FindAll();
    }

    public ArticleUser FindByIdService(long id){

        return articleRepository.FindById(id);
    }

    public List<ArticleUser> FindByTitleService(String title){

        return articleRepository.FindByTitle(title);
    }

    public void UpdateUserService (ArticleUser article){

         articleRepository.Update(article);
    }

    public void DeleteService(long id){
        articleRepository.Delete(id);
    }

}
