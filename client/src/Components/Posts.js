import { Avatar } from '@mui/material';
import React from 'react';
import love from '../images/love.svg';
import editicon from '../images/edit.svg';
import Edit from './Editing';
import './Posts.css';
import axios from 'axios';

function Posts(props) {
  const { loginId, friendId, username, title, image, comment, articleId } =
    props;

  const addFriend = () => {
    let url = 'https://localhost:4000/friends/' + loginId;

    axios.get(url, { withCredentials: true }).then((res) => {
      console.log('First:', res);
      let prime = true;
      for (let i of res.data) {
        if (i.friendUser.id !== friendId) {
          prime = prime && true;
        } else {
          prime = false;
        }
      }

      if (prime === false) {
        alert('Already Friend~');
      } else {
        axios
          .post(
            'https://localhost:4000/friends',
            {
              userId: loginId,
              friendId: friendId,
            },
            { withCredentials: true }
          )
          .then(() => {
            window.location.reload();
          });
      }
    });
  };
  return (
    <div className='post_container'>
      <div className='post_header'>
        <Avatar className='post_avatar' src={image} />
        <div className='post_username'>{username}</div>

        <div>
          <img
            onClick={addFriend}
            style={{
              marginLeft: '1rem',
              marginTop: '18px',
              width: '27px',
              height: '27px',
              cursor: 'pointer',
            }}
            className='post_like'
            src={love}
            alt='love icon'
          />
        </div>
      </div>

      <div>
        <Edit articleId={articleId} loginId={loginId} friendId={friendId} />
      </div>

      <div className='post_title'>
        <h3>{title}</h3>
      </div>

      <div>
        <img src={image} alt='pictures' width='613px' />
      </div>

      <div className='post_description'>
        <p className='post_text' style={{ width: '615px' }}>
          {comment}
        </p>
      </div>
    </div>
  );
}

export default Posts;
