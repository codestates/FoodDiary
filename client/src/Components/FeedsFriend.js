import React, { useEffect, useState } from 'react';

import Posts from './Posts';

import axios from 'axios';

function FeedsFriends({ loginId }) {
  const [friend_articles, setFriend_articles] = useState([]);

  const ShowFriendFeeds = () => {
    // Todo:
    let url = 'https://localhost:4000/friends/' + loginId;
    let friendList = [];
    let feedlist = [];
    axios
      .get(url, { withCredentials: true })
      .then((res) => {
        for (let i of res.data) {
          friendList.push(i.friendUser.id);
        }
        console.log(friendList);
      })
      .then(() => {
        for (let friend of friendList) {
          let get_url = 'https://localhost:4000/article?id=' + friend;
          axios.get(get_url, { withCredentials: true }).then((res) => {
            console.log('friend articles are:', res.data);
            feedlist.push(...res.data);
            setFriend_articles(feedlist);
            console.log('feedlist:', feedlist);
          });
        }
      });
  };
  useEffect(() => {
    ShowFriendFeeds();
  }, []);

  return (
    <div>
      {friend_articles.length === 0
        ? 'No Feeds'
        : friend_articles.map((post, index) => (
            <Posts
              key={index}
              loginId={loginId}
              friendId={post.serviceUser.id}
              username={post.serviceUser.username}
              title={post.title}
              image={post.image}
              comment={post.comment}
            />
          ))}
    </div>
  );
}

export default FeedsFriends;
