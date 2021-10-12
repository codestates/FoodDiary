import React, { useEffect, useState } from 'react';
import Avatar from '@mui/material/Avatar';
import friendimg from '../images/pp1.png';
import './FriendsBar.css';
import axios from 'axios';


function FriendsBar() {

    const [statusList, setStatusList] = useState([]);
    
    useEffect(() => {
      getData()
    },[]);
    
    const getData = ()=>{
        axios.get('https://localhost:4000/articles')
          .then((data)=>{
            //   console.log(res)
            setStatusList(data);
          })
        // let data = [
            // {
            //     "username":"kim-coding",
            //     "imageURL":"../images/pp1.png"
            // },
            // {
            //     "username":"han-hacker",
            //     "imageURL":"../images/pp1.png" 
            // },
            // {
            //     "username":"minjun-backend",
            //     "imageURL":"../images/pp1.png" 
            // },
            // {
            //     "username":"codes-states",
            //     "imageURL":"../images/pp1.png" 
            // },
            // {
            //     "username":"새벽-5시ㄷr",
            //     "imageURL":"../images/pp1.png" 
            // },
            // {
            //     "username":"이건 미친 짓",
            //     "imageURL":"../images/pp1.png" 
            // },
            // {
            //     "username":"많이 졸리다",
            //     "imageURL":"../images/pp1.png" 
            // },
            // {
            //     "username":"살려줘요",
            //     "imageURL":"../images/pp1.png" 
            // },
            // {
            //     "username":"hj-master",
            //     "imageURL":"../images/pp1.png" 
            // }
        // ]
        // setStatusList(data);
    }

    
      return (
        <div>
          <div className="fbar_container">
              {(statusList.length===0) ? 
                        <div>You have no friends yet...</div>
                        // 이 부분 css 해주세요!
                     :
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