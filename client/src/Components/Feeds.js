import React, { useEffect } from 'react';
import './Feeds.css';
import Posts from './Posts';
// import InfiniteScroll from 'react-infinite-scroll-component';
// import Loader from './Loader';
import axios from 'axios';

function Feeds () {
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

   
    const getPost = ()=> {
      axios.get('https://localhost:4000/articles')
          .then((data)=>{
            if(data.length===0){
              setPostArray([])
            }
            console.log(data.data)
            setPostArray(data.data);
          })
          
      // let data=[
      //   {
      //     "postId":"123",
      //     "userName":"kimCoding",
      //     "imageTitle":"갬성터지는 lemonade",
      //     "postImageURL":"https://cdn.stocksnap.io/img-thumbs/960w/summer-cocktail_ASVCIDCLGA.jpg",
      //     "explanation":"이 사진은 어떠조 아리너리비허야ㅑㅈㄷㅎ ㅁ니아렂ㅍ아멀",
      //     "updatedAt":"12345"
      //   }
      // ];
      // setPostArray(data);
    }
    useEffect(()=>{
      getPost();
    },[])

    return (
      <div>{
        postArray.length===0 ? "No Feeds":
        postArray.map((post, index)=>(
          <Posts key={index} username={post.serviceUser.username} title={post.title} image={post.image} comment={post.comment}/>
        ))}
      </div>
        
    )
    
  }

  
  
  export default Feeds