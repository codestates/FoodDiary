package Apoint.FoodDiary_Server.Entity;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Entity
@Getter
@Setter
@NoArgsConstructor
public class Friends {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @ManyToOne
    @JoinColumn(name = "service_user_id" )
    private ServiceUser serviceUser;

    @ManyToOne
    @JoinColumn(name = "friend_user_id" )
    private ServiceUser friendUser;
}
