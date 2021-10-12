package Apoint.FoodDiary_Server.Service;

import Apoint.FoodDiary_Server.Domain.ArticleDTO;
import Apoint.FoodDiary_Server.Entity.Article;
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

    public Article CreateService(ArticleDTO articleDTO){
        //제목 이미지 코멘트 셋다 같은 글은 null을 반환한다.
        for(Article i : articleRepository.FindAll()){
            if(i.getTitle().equals(articleDTO.getTitle()) && i.getComment().equals(articleDTO.getComment()) &&
                    i.getImage().equals(articleDTO.getImage())){
                return null;
            }
        }
        articleRepository.Create(articleDTO);
        //추가된 게시물 하나가 리턴된다.
        return null;
    }

    public List<Article> FindAllService(){
        return articleRepository.FindAll();
    }

    public Article FindByIdService(long id){

        return articleRepository.FindById(id);
    }

    public void UpdateUserService (Article article){

         articleRepository.Update(article);
    }

    public void DeleteService(long id){
        articleRepository.Delete(id);
    }

}
