package Apoint.FoodDiary_Server.Repository;

import Apoint.FoodDiary_Server.Domain.Article;
import Apoint.FoodDiary_Server.Domain.LoginSignup;
import Apoint.FoodDiary_Server.Entity.ArticleUser;
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

    public List<ArticleUser> FindAll(){

        return entityManager.createQuery("SELECT user FROM ArticleUser as user", ArticleUser.class).getResultList();
    }

    public ArticleUser FindById(long id){
        // DB service_user 테이블에 매개변수 id와 일치하는 유저 정보를 리턴합니다.
        // TODO :
        List<ArticleUser> list = entityManager
                .createQuery("SELECT user FROM ArticleUser as user WHERE user.id='" + id + "'", ArticleUser.class)
                .getResultList();
        entityManager.close();
        return list.get(0);
    }

    public List<ArticleUser> FindByEmail(String email){
        // DB service_user 테이블에 매개변수 email과 일치하는 유저 정보를 리턴합니다.
        // TODO :
        List<ArticleUser> list = entityManager
                .createQuery("SELECT user FROM ArticleUser as user WHERE user.email='" + email + "'", ArticleUser.class)
                .getResultList();
        entityManager.close();
        return list;
    }

    public void Create(Article article, long id){
        // DB service_user 테이블에 매개변수 loginSignUp과 id에 데이터를 사용하여 유저 정보를 저장합니다.
        // TODO :
        Date now = new Date();
        ArticleUser user = new ArticleUser();
        user.setId(id);
        user.setEmail(article.getEmail());
        user.setImage(article.getImage());
        user.setTitle(article.getTitle());
        user.setComment(article.getComment());
        user.setCreatedAt(now);
        user.setUpdatedAt(now);
        user.setAdmin(false);

        entityManager.persist(user);
        entityManager.flush();
        entityManager.close();
    }

    public void Update(ArticleUser articleUser){

        ArticleUser user = FindById(articleUser.getId());
        Date now = new Date();

        user.setEmail(articleUser.getEmail());
        user.setImage(articleUser.getImage());
        user.setTitle(articleUser.getTitle());
        user.setComment(articleUser.getComment());
        user.setCreatedAt(now);
        user.setUpdatedAt(now);
        user.setAdmin(false);

        entityManager.persist(user);
        entityManager.flush();
        entityManager.close();
    }

    public void Delete(long id){

        ArticleUser user = FindById(id);
        entityManager.remove(user);
        entityManager.close();
    }

}














