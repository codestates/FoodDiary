import React, { useEffect, useState } from 'react';
import Avatar from '@mui/material/Avatar';
import friendimg from '../images/pp1.png';
import './FriendsBar.css';


function FriendsBar() {

    const [statusList, setStatusList] = useState([]);
    
    useEffect(() => {
      getData()
    },[]);
    
    const getData = ()=>{
        let data = [
            {
                "username":"kim-coding",
                "imageURL":"../images/pp1.png"
            },
            {
                "username":"han-hacker",
                "imageURL":"../images/pp1.png" 
            },
            {
                "username":"minjun-backend",
                "imageURL":"../images/pp1.png" 
            },
            {
                "username":"codes-states",
                "imageURL":"../images/pp1.png" 
            },
            {
                "username":"새벽-5시ㄷr",
                "imageURL":"../images/pp1.png" 
            },
            {
                "username":"이건 미친 짓",
                "imageURL":"../images/pp1.png" 
            },
            {
                "username":"많이 졸리다",
                "imageURL":"../images/pp1.png" 
            },
            {
                "username":"살려줘요",
                "imageURL":"../images/pp1.png" 
            },
            {
                "username":"hj-master",
                "imageURL":"../images/pp1.png" 
            }
        ]
        setStatusList(data);
    }

    
      return (
        <div>
          <div className="fbar_container">
              {
                  statusList.map((item) => (
                    <div className="fbar">
                        <Avatar className="fbar_profile" src={friendimg}/>
                        <div className="fbar_friendname">{item.username}</div>
                    </div>
                  ))
              }
            
          </div>
        </div>
      );
        
  }
  
  
  export default FriendsBar