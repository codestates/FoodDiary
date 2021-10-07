package Apoint.FoodDiary_Server.Repository;


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



}
