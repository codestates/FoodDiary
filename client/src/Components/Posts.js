import { Avatar } from '@mui/material';
import React from 'react';
import love from '../images/love.svg';
import editicon from '../images/edit.svg';
import Edit from './Editing';
import './Posts.css';


function Posts (props) {
  const {username, title, image, comment} = props
  
      return (
        <div className="post_container">

          <div className="post_header">
            <Avatar className="post_image" src={image}/>
            <div className="post_username">{username}</div>
            <div>
              <img style={{ "marginLeft": "1rem","marginTop":"18px" }} className="post_like" src={love} alt="love icon"/> 
            </div>
            <div>
            <img onClick={()=>{ alert('Edit Post'); }} style={{"height":"27px", "marginLeft": "8rem","marginTop":"18px", "cursor":"pointer", "width":"30px"}} src={editicon} alt="editing icon" />
              
            </div>
          </div>

          <div className="post_title">
            <h3>{title}</h3>
          </div>
    
          <div>
            <img src={image} alt="pictures" width="615px"/>
          </div>

          <div className="post_description">
              <h3 style={{"marginLeft": "20px"}}>Photo Description</h3>
              <p className="post_text">{comment}</p>
          </div>
          
        </div>
      );
    }
  
  
export default Posts