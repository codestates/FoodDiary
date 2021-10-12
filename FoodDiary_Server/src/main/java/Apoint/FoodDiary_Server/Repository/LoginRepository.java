package Apoint.FoodDiary_Server.Repository;


import Apoint.FoodDiary_Server.Domain.SingupDTO;
import Apoint.FoodDiary_Server.Entity.ServiceGuest;
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

    public List<ServiceUser> FindByEmail(String email){
        // DB service_user 테이블에 매개변수 email과 일치하는 유저 정보를 리턴합니다.
        return entityManager.createQuery("SELECT e FROM ServiceUser e where e.email = '"+email+"'", ServiceUser.class).getResultList();
    }

    public List<ServiceUser> FindUserList(){
        // DB service_user 테이블에 모든 유저 정보를 리턴합니다.
        // TODO :
        return entityManager.createQuery("SELECT e FROM ServiceUser e", ServiceUser.class).getResultList();
    }

    public void CreateServiceUser(SingupDTO singupDTO){
        Date now = new Date();
        ServiceUser user = new ServiceUser();
        user.setEmail(singupDTO.getEmail());
        user.setPassword(singupDTO.getPassword());
        user.setUsername(singupDTO.getUsername());
        user.setBirth(singupDTO.getBirth());
        user.setAdmin(false);
        user.setUserImage("resources/default.jpeg");
        user.setUpdatedAt(now);
        user.setCreatedAt(now);

        entityManager.persist(user);
        entityManager.flush();
        entityManager.close();

    }

    public void CreateServiceGuest(String email, String code){
        ServiceGuest guest = new ServiceGuest();
        guest.setEmail(email);
        guest.setCode(code);
        entityManager.persist(guest);
        entityManager.flush();
        entityManager.close();
    }

    public List<ServiceGuest> FindGuestList(){
        return entityManager.createQuery("SELECT e FROM ServiceGuest e", ServiceGuest.class).getResultList();
    }

    public List<ServiceGuest> FindGuestByEmail(String email){
        // DB service_user 테이블에 매개변수 email과 일치하는 유저 정보를 리턴합니다.
        // 초대장 보낼때, 작성한 이메일이 이미 ServiceUser에 있는지 확인하기위해.
        return entityManager.createQuery("SELECT e FROM ServiceGuest e where e.email = '"+email+"'", ServiceGuest.class).getResultList();
    }

    public void DeleteGuestAfterSignup(String email){
        ServiceGuest removeGuest = FindGuestByEmail(email).get(0);
        entityManager.remove(removeGuest);
    }


}
