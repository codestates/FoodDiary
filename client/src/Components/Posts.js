import { Avatar } from '@mui/material';
import React from 'react';
import love from '../images/love.svg';
import editicon from '../images/edit.svg';
import Edit from './Editing';
import './Posts.css';
import axios from 'axios';


function Posts (props) {
  const {loginId, friendId, username, title, image, comment} = props

  const addFriend = () => {
    console.log(loginId,friendId)
    axios.post('https://localhost:4000/friends',
    {
      userId:loginId,
      friendId:friendId
    },{withCredentials:true})
    .then((res) => {
      console.log(res)
      console.log("w")
      window.location.reload()
    });
  };

  
  
      return (
        <div className="post_container">

          <div className="post_header">

            <Avatar className="post_avatar" src={image}/>
            <div className="post_username">{username}</div>

            <div>
              <img onClick={addFriend}
               style={{ "marginLeft": "1rem","marginTop":"18px", "width":"27px", "height":"27px", "cursor":"pointer" }} 
               className="post_like" 
               src={love} 
               alt="love icon"/> 
            </div>
          </div>

          <div>
            <img onClick={()=>{ alert('Edit Post'); }} 
            style={{"height":"27px", "marginLeft": "36rem","marginTop":"-28px", "cursor":"pointer", "width":"30px"}} 
            src={editicon} alt="editing icon" />
          </div>

          <div className="post_title">
            <h3>{title}</h3>
          </div>
    
          <div>
            <img src={image} alt="pictures" width="613px"/>
          </div>

          <div className="post_description">
              <p className="post_text">{comment}</p>
          </div>
          
        </div>
      );
    }
  
  
export default Posts