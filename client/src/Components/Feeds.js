import React, { useState, useEffect } from 'react';
import './Feeds.css';
import Posts from './Posts';
import InfiniteScroll from 'react-infinite-scroll-component';
import Loader from './Loader';

function Feeds () {
  const [posts, setPosts] = useState([]);

  const [hasMore, sethasMore] = useState(true);

  const [page, setpage] = useState(2);
    


    useEffect(() => {
      const getComments = async () => {
        const res = await fetch(
          `http://localhost:3004/posts?_page=1&_limit=5`
        );
        const data = await res.json();
        setPosts(data);
      };
  
      getComments();
    }, []);

    const fetchComments = async () => {
      const res = await fetch(
        `http://localhost:3004/posts?_page=${page}&_limit=5`
      );
      const data = await res.json();
      return data;
    };
    
    const fetchData = async () => {
      const commentsFormServer = await fetchComments();
  
      setPosts([...posts, ...commentsFormServer]);
      if (commentsFormServer.length === 0 || commentsFormServer.length < 5) {
        sethasMore(false);
      }
      setpage(page + 1);
    };
   
    return (
      <InfiniteScroll 
      dataLength={posts.length} //This is important field to render the next data
      next={fetchData}
      hasMore={hasMore}
      loader={<Loader/>}
          endMessage={
            <p style={{ textAlign: "center" }}>
              <b>You have watched all the feeds!</b>
            </p>
          }
      >
      {
        posts.map((item)=>(
          <Posts id={item.postId} userName={item.userName} title={item.imageTitle} 
                        postImage={item.postImageURL} text={item.explanation}/>
        ))
      }

      </InfiniteScroll>
    );
  }

  
  
  export default Feeds