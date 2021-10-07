package Apoint.FoodDiary_Server.Repository;


import Apoint.FoodDiary_Server.Domain.LoginSignup;
import Apoint.FoodDiary_Server.Entity.ServiceUser;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import javax.persistence.EntityManager;
import javax.transaction.Transactional;
import java.util.Date;
import java.util.List;

@Repository
@Transactional
public class LoginRepository {

    private final EntityManager entityManager;

    @Autowired
    public LoginRepository(EntityManager entityManager){
        this.entityManager = entityManager;
    }

    public ServiceUser FindById(long id) {
        // DB service_user 테이블에 매개변수 id와 일치하는 유저 정보를 리턴합니다.
        ServiceUser user_find_by_id = entityManager.find(ServiceUser.class, id);
        return user_find_by_id;
    }

    public List<ServiceUser> FindByEmail(String email){
        // DB service_user 테이블에 매개변수 email과 일치하는 유저 정보를 리턴합니다.
        return entityManager.createQuery("SELECT e FROM ServiceUser e where e.email = '"+email+"'", ServiceUser.class).getResultList();
    }


    public void CreateServiceUser(LoginSignup loginSignup, Long id){

        Date now = new Date();
        ServiceUser user = new ServiceUser();
        user.setId(id);
        user.setEmail(loginSignup.getEmail());
        user.setPassword(loginSignup.getPassword());
        user.setUsername(loginSignup.getUsername());
        user.setBirth(loginSignup.getBirth());
        user.setAdmin(false);
        user.setUserImage("resources/default.jpeg");
        user.setUpdatedAt(now);
        user.setCreatedAt(now);

        entityManager.persist(user);
        entityManager.flush();
        entityManager.close();

    }



}
