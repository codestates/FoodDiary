import React, { useEffect, useState } from 'react';
import './Feeds.css';
import Posts from './Posts';
// import InfiniteScroll from 'react-infinite-scroll-component';
// import Loader from './Loader';
import axios from 'axios';

function Feeds ({ loginId, globalState}) {

  const [postArray, setPostArray] = useState([]);
  const [friend_articles,setFriend_articles] = useState([])

  const getPost = ()=> {
    axios.get('https://localhost:4000/article')
        .then((data)=>{
          if(data.length===0){
            setPostArray([])
          }
          setPostArray(data.data);
        })
  }


  const ShowFriendFeeds = ()=> {
      console.log("show friends feed")
      console.log("loginId in Feeds:",loginId)
  
    // Todo:
    let url = 'https://localhost:4000/friends/'+loginId
    let friendList = [];
    let feedlist=[]

        axios.get(url,{withCredentials:true})
          .then((res)=>{
            for(let i of res.data){
              friendList.push(i.friendUser.id)
            }
          })
          .then(()=>{
            for(let friend of friendList){
              let get_url = 'https://localhost:4000/article?id='+friend
              axios.get(get_url,{withCredentials:true})
              .then((res)=>{
                console.log("friend articles are:",res.data)
                feedlist.push(...res.data)
                setFriend_articles(feedlist)
                console.log("feedlist:",feedlist)
              })
            }
          
            
          })
    // 하트버튼(친구 피드 보기)를 눌렀을때 게시글들이 친구들이 올린걸로만 보이게 필터해주는 api와 연결해주세요!
    
  }

  
  useEffect(()=>{
    getPost();
    ShowFriendFeeds()
  },[loginId])
    
  return (<div>{!globalState.currentPage ? (
    'loading'
  ) : globalState.currentPage === 'home' ? (
    <React.Fragment>
      <div>{
        postArray.length===0 ? "No Feeds":
        postArray.map((post, index)=>(
          <Posts key={index} loginId={loginId} friendId={post.serviceUser.id} username={post.serviceUser.username} title={post.title} image={post.image} comment={post.comment}/>
        ))}
      </div>
    </React.Fragment>
  ) : globalState.currentPage === 'friends' ? (
    <React.Fragment>
      <div>{
      friend_articles.length===0 ? "No Feeds":
      friend_articles.map((post, index)=>(
        <Posts key={index} loginId={loginId} friendId={post.serviceUser.id} username={post.serviceUser.username} title={post.title} image={post.image} comment={post.comment}/>
      ))}
    </div>
    </React.Fragment>
  ) : <div></div>
}</div>)
    
  }

  

  
  
  export default Feeds


  // const [posts, setPosts] = useState([]);

  // const [hasMore, sethasMore] = useState(true);

  // const [page, setpage] = useState(2);
    

    // useEffect(() => {
    //   const getComments = async () => {
    //     const res = await fetch(
    //       `http://localhost:3004/posts?_page=1&_limit=5`
    //     );
    //     const data = await res.json();
    //     setPosts(data);
    //   };
  
    //   getComments();
    // }, []);

    // const fetchComments = async () => {
    //   const res = await fetch(
    //     `http://localhost:3004/posts?_page=${page}&_limit=5`
    //   );
    //   const data = await res.json();
    //   return data;
    // };
    
    // const fetchData = async () => {
    //   const commentsFormServer = await fetchComments();
  
    //   setPosts([...posts, ...commentsFormServer]);
    //   if (commentsFormServer.length === 0 || commentsFormServer.length < 5) {
    //     sethasMore(false);
    //   }
    //   setpage(page + 1);
    // };
   
    // return (
    //   <InfiniteScroll 
    //   dataLength={posts.length} //This is important field to render the next data
    //   next={fetchData}
    //   hasMore={hasMore}
    //   loader={<Loader/>}
    //       endMessage={
    //         <p style={{ textAlign: "center" }}>
    //           <b>You have watched all the feeds!</b>
    //         </p>
    //       }
    //   >
    //   {
    //     posts.map((item)=>(
    //       <Posts id={item.postId} userName={item.userName} title={item.imageTitle} 
    //                     postImage={item.postImageURL} text={item.explanation}/>
    //     ))
    //   }

    //   </InfiniteScroll>
    // );