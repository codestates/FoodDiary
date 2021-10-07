import React from 'react';
import './Mainpage.css';
import Avatar from '@mui/material/Avatar';

function Mainpage({username, caption, imageUrl}) {
  return (
    <div className="post">
      <div className="post_header">
        <Avatar
          className="post_avatar"
          alt='KimCoding'
          src="/static/images/avatar/1.jpg"
        />
        <h3>{username}</h3>
      </div>
      
      

      <img className="post_image" src ={imageUrl} alt=""/>
      

      <h4 className="post_text"><strong>{username} </strong> {caption} </h4>
      
    </div>
  )
}

export default Mainpage