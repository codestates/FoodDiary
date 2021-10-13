import React, { useEffect, useState } from 'react';
import Avatar from '@mui/material/Avatar';
import friendimg from '../images/pp1.png';
import './FriendsBar.css';
import axios from 'axios';
import { Switch, Route, useHistory, Redirect } from 'react-router-dom';


function FriendsBar({loginId}) {
  
    const [statusList, setStatusList] = useState([]);
    
    const getData = ()=>{
      if(loginId !== null){
        let url = 'https://localhost:4000/friends/'+loginId
        axios.get(url,{withCredentials:true})
          .then((res)=>{
            console.log(res)
            setStatusList(res.data);
          })
          
      } else{
        console.log("no")
      }
    }
    useEffect(() => {
      getData()
    },[loginId]);

    
      return (
        <div>
          <div className="fbar_container">
              {(statusList.length===0) ? 
                        <div style={{"width":"614px", "height":"120px", "textAlign":"center", "padding":"40px"}}>You have no friends yet...</div>
                        /* // 이 부분 css 해주세요! */
                     : 
                   statusList.map((item) => (
                     <div className="fbar">
                         <Avatar className="fbar_profile" src={friendimg}/>
                         <div className="fbar_friendname">{item.friendUser.username}</div>
                     </div>
                   ))
              }
            
          </div>
        </div>
      );
        
  }
  
  
  export default FriendsBar