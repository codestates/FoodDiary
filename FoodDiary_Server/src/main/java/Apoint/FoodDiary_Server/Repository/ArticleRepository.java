package Apoint.FoodDiary_Server.Repository;

import Apoint.FoodDiary_Server.Domain.ArticleDTO;
import Apoint.FoodDiary_Server.Entity.Article;
import Apoint.FoodDiary_Server.Entity.ServiceUser;
import org.springframework.stereotype.Repository;

import javax.persistence.EntityManager;
import javax.transaction.Transactional;
import java.util.Date;
import java.util.List;

@Repository
@Transactional
public class ArticleRepository {

    private final EntityManager entityManager;

    public ArticleRepository(EntityManager entityManager) {
        this.entityManager = entityManager;
    }

    public List<Article> FindAll(){
        return entityManager.createQuery("SELECT user FROM Article as user", Article.class).getResultList();
    }

    //필요한가 다시 보기.
    public Article FindById(long id){
        List<Article> list = entityManager
                .createQuery("SELECT user FROM Article as user WHERE user.id='" + id + "'", Article.class)
                .getResultList();
        entityManager.close();
        return list.get(0);
    }

    public void Create(ArticleDTO articleDTO){
        Date now = new Date();
        Article article = new Article();

        ServiceUser user = new ServiceUser();
        user.setId(articleDTO.getUserId());

        article.setTitle(articleDTO.getTitle());
        article.setImage(articleDTO.getImage());
        article.setComment(articleDTO.getComment());
        article.setCreatedAt(now);
        article.setUpdatedAt(now);
        article.setServiceUser(user);

        entityManager.persist(article);
        entityManager.flush();
        entityManager.close();
    }

//    public List<Article> FindById(String email){
//        // DB service_user 테이블에 매개변수 email과 일치하는 유저 정보를 리턴합니다.
//        // TODO :
//        List<Article> list = entityManager
//                .createQuery("SELECT user FROM Article as user WHERE user.email='" + title + "'", ArticleUser.class)
//                .getResultList();
//        entityManager.close();
//        return list;

    public void Update(Article article){

        Article updateArticle = FindById(article.getId());
        Date now = new Date();

        updateArticle.setImage(article.getImage());
        updateArticle.setTitle(article.getTitle());
        updateArticle.setComment(article.getComment());
        updateArticle.setCreatedAt(now);
        updateArticle.setUpdatedAt(now);

        entityManager.persist(updateArticle);
        entityManager.flush();
        entityManager.close();
    }

    //게시물 삭제시, 게시물 아이디만 주면 된다!
    public void Delete(long id){
        Article article = FindById(id);
        entityManager.remove(article);
        entityManager.close();
    }

}














