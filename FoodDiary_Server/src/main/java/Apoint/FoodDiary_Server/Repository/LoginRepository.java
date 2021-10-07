package Apoint.FoodDiary_Server.Repository;


import Apoint.FoodDiary_Server.Entity.ServiceUser;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import javax.persistence.EntityManager;
import javax.transaction.Transactional;

@Repository
@Transactional
public class LoginRepository {

    private final EntityManager entityManager;

    @Autowired
    public LoginRepository(EntityManager entityManager){
        this.entityManager = entityManager;
    }

    public ServiceUser FindById(long id){
        // DB service_user 테이블에 매개변수 id와 일치하는 유저 정보를 리턴합니다.
        ServiceUser user_find_by_id = entityManager.find(ServiceUser.class, id);
        return user_find_by_id;
    }





}
