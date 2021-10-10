import React, { useState, useEffect } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import './Feeds.css';
import Posts from './Posts';


function Feeds () {
    const [postArray, setPostArray] = useState([]);

    useEffect(() => {
      getPost()
    },[]);

    const getPost = ()=> {
      let data=[
        {
          "postId":"123",
          "userName":"kimCoding",
          "imageTitle":"갬성터지는 lemonade",
          "postImageURL":"https://cdn.stocksnap.io/img-thumbs/960w/summer-cocktail_ASVCIDCLGA.jpg",
          "explanation":"이 사진은 어떠조 아리너리비허야ㅑㅈㄷㅎ ㅁ니아렂ㅍ아멀",
          "updatedAt":"12345"
        },
        {
          "postId":"123",
          "userName":"shan",
          "imageTitle":"갬성터지는 항아리",
          "postImageURL":"https://cdn.stocksnap.io/img-thumbs/960w/fast-food_MU88DSXA3X.jpg",
          "explanation":"아ㅏㅏㅏ 드디어 된다 이거 정말 이거 고치느라 함창 걸렸네 완전 호레레레레레레레레레레에렘ㄴ엘멘렌ㅁㅇ렘ㄴ렌레에레멘ㅇ렘ㄴㅇ렘ㄴ렘ㄴ엚ㄴ엘멘ㅇㄹ멘렘ㄴㅇ렘ㄴㄹ ㄹㄷ지ㅏ러집ㅇ러ㅏㅣㅁ다럽ㅈ더렂더짇 덪래지러 쟂덜ㄷㅈ러ㅣ저맂버맂ㄷ버리ㅏㅈ덜 질",
          "updatedAt":"12345"
        },
        {
          "postId":"123",
          "userName":"parkhacker",
          "imageTitle":"this is a rock",
          "postImageURL":"https://cdn.stocksnap.io/img-thumbs/960w/fruit-bowl_4MUZH41WMD.jpg",
          "explanation":"이 사진은 blueberries and strawberriesss helldlfkddklasdlkflkasdflkjas dlkfjals h oiwefo i wiofh qwihf klsahjf ajdsjfklasdjfklas lkasf askf laksjf asfkldsjfklajeoifjqkl; gakj;hdg asoig adjf kdsnfioq jgn qpgh qiohgioq gpih eiphg ehgioqehigo eig rioq[qohgq erhg roiighioehgehgioehwg poiqhgioqhgioqhioghqio gioqhg qioh아리너리비허야ㅑㅈㄷㅎ ㅁ니아렂ㅍ아멀 에베베베베베베베베베베베베베베베베베베베베베베베베베베베베베베베베베베베베베베베베베 ㅔㅔ베베베벱베ㅔ ㅔ ㅔ ㅔ ㅔ ㅔ ㅔ ㅔ ㅔ베베벱 ㅔㅂ 베 베베베베베베베베베베베베베",
          "updatedAt":"12345"
        },
        {
          "postId":"123",
          "userName":"parkhacker",
          "imageTitle":"this is a rock",
          "postImageURL":"https://cdn.stocksnap.io/img-thumbs/960w/fruit-bowl_4MUZH41WMD.jpg",
          "explanation":"이 사진은 blueberries and strawberriesss helldlfkddklasdlkflkasdflkjas dlkfjals h oiwefo i wiofh qwihf klsahjf ajdsjfklasdjfklas lkasf askf laksjf asfkldsjfklajeoifjqkl; gakj;hdg asoig adjf kdsnfioq jgn qpgh qiohgioq gpih eiphg ehgioqehigo eig rioq[qohgq erhg roiighioehgehgioehwg poiqhgioqhgioqhioghqio gioqhg qioh아리너리비허야ㅑㅈㄷㅎ ㅁ니아렂ㅍ아멀 에베베베베베베베베베베베베베베베베베베베베베베베베베베베베베베베베베베베베베베베베베 ㅔㅔ베베베벱베ㅔ ㅔ ㅔ ㅔ ㅔ ㅔ ㅔ ㅔ ㅔ베베벱 ㅔㅂ 베 베베베베베베베베베베베베베",
          "updatedAt":"12345"
        },
        {
          "postId":"123",
          "userName":"parkhacker",
          "imageTitle":"this is a rock",
          "postImageURL":"https://cdn.stocksnap.io/img-thumbs/960w/fruit-bowl_4MUZH41WMD.jpg",
          "explanation":"이 사진은 blueberries and strawberriesss helldlfkddklasdlkflkasdflkjas dlkfjals h oiwefo i wiofh qwihf klsahjf ajdsjfklasdjfklas lkasf askf laksjf asfkldsjfklajeoifjqkl; gakj;hdg asoig adjf kdsnfioq jgn qpgh qiohgioq gpih eiphg ehgioqehigo eig rioq[qohgq erhg roiighioehgehgioehwg poiqhgioqhgioqhioghqio gioqhg qioh아리너리비허야ㅑㅈㄷㅎ ㅁ니아렂ㅍ아멀 에베베베베베베베베베베베베베베베베베베베베베베베베베베베베베베베베베베베베베베베베베 ㅔㅔ베베베벱베ㅔ ㅔ ㅔ ㅔ ㅔ ㅔ ㅔ ㅔ ㅔ베베벱 ㅔㅂ 베 베베베베베베베베베베베베베",
          "updatedAt":"12345"
        },
        {
          "postId":"123",
          "userName":"parkhacker",
          "imageTitle":"this is a rock",
          "postImageURL":"https://cdn.stocksnap.io/img-thumbs/960w/fruit-bowl_4MUZH41WMD.jpg",
          "explanation":"이 사진은 blueberries and strawberriesss helldlfkddklasdlkflkasdflkjas dlkfjals h oiwefo i wiofh qwihf klsahjf ajdsjfklasdjfklas lkasf askf laksjf asfkldsjfklajeoifjqkl; gakj;hdg asoig adjf kdsnfioq jgn qpgh qiohgioq gpih eiphg ehgioqehigo eig rioq[qohgq erhg roiighioehgehgioehwg poiqhgioqhgioqhioghqio gioqhg qioh아리너리비허야ㅑㅈㄷㅎ ㅁ니아렂ㅍ아멀 에베베베베베베베베베베베베베베베베베베베베베베베베베베베베베베베베베베베베베베베베베 ㅔㅔ베베베벱베ㅔ ㅔ ㅔ ㅔ ㅔ ㅔ ㅔ ㅔ ㅔ베베벱 ㅔㅂ 베 베베베베베베베베베베베베베",
          "updatedAt":"12345"
        },
        {
          "postId":"123",
          "userName":"parkhacker",
          "imageTitle":"this is a rock",
          "postImageURL":"https://cdn.stocksnap.io/img-thumbs/960w/fruit-bowl_4MUZH41WMD.jpg",
          "explanation":"이 사진은 blueberries and strawberriesss helldlfkddklasdlkflkasdflkjas dlkfjals h oiwefo i wiofh qwihf klsahjf ajdsjfklasdjfklas lkasf askf laksjf asfkldsjfklajeoifjqkl; gakj;hdg asoig adjf kdsnfioq jgn qpgh qiohgioq gpih eiphg ehgioqehigo eig rioq[qohgq erhg roiighioehgehgioehwg poiqhgioqhgioqhioghqio gioqhg qioh아리너리비허야ㅑㅈㄷㅎ ㅁ니아렂ㅍ아멀 에베베베베베베베베베베베베베베베베베베베베베베베베베베베베베베베베베베베베베베베베베 ㅔㅔ베베베벱베ㅔ ㅔ ㅔ ㅔ ㅔ ㅔ ㅔ ㅔ ㅔ베베벱 ㅔㅂ 베 베베베베베베베베베베베베베",
          "updatedAt":"12345"
        },
        {
          "postId":"123",
          "userName":"parkhacker",
          "imageTitle":"this is a rock",
          "postImageURL":"https://cdn.stocksnap.io/img-thumbs/960w/fruit-bowl_4MUZH41WMD.jpg",
          "explanation":"이 사진은 blueberries and strawberriesss helldlfkddklasdlkflkasdflkjas dlkfjals h oiwefo i wiofh qwihf klsahjf ajdsjfklasdjfklas lkasf askf laksjf asfkldsjfklajeoifjqkl; gakj;hdg asoig adjf kdsnfioq jgn qpgh qiohgioq gpih eiphg ehgioqehigo eig rioq[qohgq erhg roiighioehgehgioehwg poiqhgioqhgioqhioghqio gioqhg qioh아리너리비허야ㅑㅈㄷㅎ ㅁ니아렂ㅍ아멀 에베베베베베베베베베베베베베베베베베베베베베베베베베베베베베베베베베베베베베베베베베 ㅔㅔ베베베벱베ㅔ ㅔ ㅔ ㅔ ㅔ ㅔ ㅔ ㅔ ㅔ베베벱 ㅔㅂ 베 베베베베베베베베베베베베베",
          "updatedAt":"12345"
        },
        {
          "postId":"123",
          "userName":"parkhacker",
          "imageTitle":"this is a rock",
          "postImageURL":"https://cdn.stocksnap.io/img-thumbs/960w/fruit-bowl_4MUZH41WMD.jpg",
          "explanation":"이 사진은 blueberries and strawberriesss helldlfkddklasdlkflkasdflkjas dlkfjals h oiwefo i wiofh qwihf klsahjf ajdsjfklasdjfklas lkasf askf laksjf asfkldsjfklajeoifjqkl; gakj;hdg asoig adjf kdsnfioq jgn qpgh qiohgioq gpih eiphg ehgioqehigo eig rioq[qohgq erhg roiighioehgehgioehwg poiqhgioqhgioqhioghqio gioqhg qioh아리너리비허야ㅑㅈㄷㅎ ㅁ니아렂ㅍ아멀 에베베베베베베베베베베베베베베베베베베베베베베베베베베베베베베베베베베베베베베베베베 ㅔㅔ베베베벱베ㅔ ㅔ ㅔ ㅔ ㅔ ㅔ ㅔ ㅔ ㅔ베베벱 ㅔㅂ 베 베베베베베베베베베베베베베",
          "updatedAt":"12345"
        },
        {
          "postId":"123",
          "userName":"parkhacker",
          "imageTitle":"this is a rock",
          "postImageURL":"https://cdn.stocksnap.io/img-thumbs/960w/fruit-bowl_4MUZH41WMD.jpg",
          "explanation":"이 사진은 blueberries and strawberriesss helldlfkddklasdlkflkasdflkjas dlkfjals h oiwefo i wiofh qwihf klsahjf ajdsjfklasdjfklas lkasf askf laksjf asfkldsjfklajeoifjqkl; gakj;hdg asoig adjf kdsnfioq jgn qpgh qiohgioq gpih eiphg ehgioqehigo eig rioq[qohgq erhg roiighioehgehgioehwg poiqhgioqhgioqhioghqio gioqhg qioh아리너리비허야ㅑㅈㄷㅎ ㅁ니아렂ㅍ아멀 에베베베베베베베베베베베베베베베베베베베베베베베베베베베베베베베베베베베베베베베베베 ㅔㅔ베베베벱베ㅔ ㅔ ㅔ ㅔ ㅔ ㅔ ㅔ ㅔ ㅔ베베벱 ㅔㅂ 베 베베베베베베베베베베베베베",
          "updatedAt":"12345"
        },
        {
          "postId":"123",
          "userName":"parkhacker",
          "imageTitle":"this is a rock",
          "postImageURL":"https://cdn.stocksnap.io/img-thumbs/960w/fruit-bowl_4MUZH41WMD.jpg",
          "explanation":"이 사진은 blueberries and strawberriesss helldlfkddklasdlkflkasdflkjas dlkfjals h oiwefo i wiofh qwihf klsahjf ajdsjfklasdjfklas lkasf askf laksjf asfkldsjfklajeoifjqkl; gakj;hdg asoig adjf kdsnfioq jgn qpgh qiohgioq gpih eiphg ehgioqehigo eig rioq[qohgq erhg roiighioehgehgioehwg poiqhgioqhgioqhioghqio gioqhg qioh아리너리비허야ㅑㅈㄷㅎ ㅁ니아렂ㅍ아멀 에베베베베베베베베베베베베베베베베베베베베베베베베베베베베베베베베베베베베베베베베베 ㅔㅔ베베베벱베ㅔ ㅔ ㅔ ㅔ ㅔ ㅔ ㅔ ㅔ ㅔ베베벱 ㅔㅂ 베 베베베베베베베베베베베베베",
          "updatedAt":"12345"
        },
        {
          "postId":"123",
          "userName":"parkhacker",
          "imageTitle":"this is a rock",
          "postImageURL":"https://cdn.stocksnap.io/img-thumbs/960w/fruit-bowl_4MUZH41WMD.jpg",
          "explanation":"이 사진은 blueberries and strawberriesss helldlfkddklasdlkflkasdflkjas dlkfjals h oiwefo i wiofh qwihf klsahjf ajdsjfklasdjfklas lkasf askf laksjf asfkldsjfklajeoifjqkl; gakj;hdg asoig adjf kdsnfioq jgn qpgh qiohgioq gpih eiphg ehgioqehigo eig rioq[qohgq erhg roiighioehgehgioehwg poiqhgioqhgioqhioghqio gioqhg qioh아리너리비허야ㅑㅈㄷㅎ ㅁ니아렂ㅍ아멀 에베베베베베베베베베베베베베베베베베베베베베베베베베베베베베베베베베베베베베베베베베 ㅔㅔ베베베벱베ㅔ ㅔ ㅔ ㅔ ㅔ ㅔ ㅔ ㅔ ㅔ베베벱 ㅔㅂ 베 베베베베베베베베베베베베베",
          "updatedAt":"12345"
        },
        {
          "postId":"123",
          "userName":"parkhacker",
          "imageTitle":"this is a rock",
          "postImageURL":"https://cdn.stocksnap.io/img-thumbs/960w/fruit-bowl_4MUZH41WMD.jpg",
          "explanation":"이 사진은 blueberries and strawberriesss helldlfkddklasdlkflkasdflkjas dlkfjals h oiwefo i wiofh qwihf klsahjf ajdsjfklasdjfklas lkasf askf laksjf asfkldsjfklajeoifjqkl; gakj;hdg asoig adjf kdsnfioq jgn qpgh qiohgioq gpih eiphg ehgioqehigo eig rioq[qohgq erhg roiighioehgehgioehwg poiqhgioqhgioqhioghqio gioqhg qioh아리너리비허야ㅑㅈㄷㅎ ㅁ니아렂ㅍ아멀 에베베베베베베베베베베베베베베베베베베베베베베베베베베베베베베베베베베베베베베베베베 ㅔㅔ베베베벱베ㅔ ㅔ ㅔ ㅔ ㅔ ㅔ ㅔ ㅔ ㅔ베베벱 ㅔㅂ 베 베베베베베베베베베베베베베",
          "updatedAt":"12345"
        },
        {
          "postId":"123",
          "userName":"parkhacker",
          "imageTitle":"this is a rock",
          "postImageURL":"https://cdn.stocksnap.io/img-thumbs/960w/fruit-bowl_4MUZH41WMD.jpg",
          "explanation":"이 사진은 blueberries and strawberriesss helldlfkddklasdlkflkasdflkjas dlkfjals h oiwefo i wiofh qwihf klsahjf ajdsjfklasdjfklas lkasf askf laksjf asfkldsjfklajeoifjqkl; gakj;hdg asoig adjf kdsnfioq jgn qpgh qiohgioq gpih eiphg ehgioqehigo eig rioq[qohgq erhg roiighioehgehgioehwg poiqhgioqhgioqhioghqio gioqhg qioh아리너리비허야ㅑㅈㄷㅎ ㅁ니아렂ㅍ아멀 에베베베베베베베베베베베베베베베베베베베베베베베베베베베베베베베베베베베베베베베베베 ㅔㅔ베베베벱베ㅔ ㅔ ㅔ ㅔ ㅔ ㅔ ㅔ ㅔ ㅔ베베벱 ㅔㅂ 베 베베베베베베베베베베베베베",
          "updatedAt":"12345"
        },
        {
          "postId":"123",
          "userName":"parkhacker",
          "imageTitle":"this is a rock",
          "postImageURL":"https://cdn.stocksnap.io/img-thumbs/960w/fruit-bowl_4MUZH41WMD.jpg",
          "explanation":"이 사진은 blueberries and strawberriesss helldlfkddklasdlkflkasdflkjas dlkfjals h oiwefo i wiofh qwihf klsahjf ajdsjfklasdjfklas lkasf askf laksjf asfkldsjfklajeoifjqkl; gakj;hdg asoig adjf kdsnfioq jgn qpgh qiohgioq gpih eiphg ehgioqehigo eig rioq[qohgq erhg roiighioehgehgioehwg poiqhgioqhgioqhioghqio gioqhg qioh아리너리비허야ㅑㅈㄷㅎ ㅁ니아렂ㅍ아멀 에베베베베베베베베베베베베베베베베베베베베베베베베베베베베베베베베베베베베베베베베베 ㅔㅔ베베베벱베ㅔ ㅔ ㅔ ㅔ ㅔ ㅔ ㅔ ㅔ ㅔ베베벱 ㅔㅂ 베 베베베베베베베베베베베베베",
          "updatedAt":"12345"
        },
        {
          "postId":"123",
          "userName":"parkhacker",
          "imageTitle":"this is a rock",
          "postImageURL":"https://cdn.stocksnap.io/img-thumbs/960w/fruit-bowl_4MUZH41WMD.jpg",
          "explanation":"이 사진은 blueberries and strawberriesss helldlfkddklasdlkflkasdflkjas dlkfjals h oiwefo i wiofh qwihf klsahjf ajdsjfklasdjfklas lkasf askf laksjf asfkldsjfklajeoifjqkl; gakj;hdg asoig adjf kdsnfioq jgn qpgh qiohgioq gpih eiphg ehgioqehigo eig rioq[qohgq erhg roiighioehgehgioehwg poiqhgioqhgioqhioghqio gioqhg qioh아리너리비허야ㅑㅈㄷㅎ ㅁ니아렂ㅍ아멀 에베베베베베베베베베베베베베베베베베베베베베베베베베베베베베베베베베베베베베베베베베 ㅔㅔ베베베벱베ㅔ ㅔ ㅔ ㅔ ㅔ ㅔ ㅔ ㅔ ㅔ베베벱 ㅔㅂ 베 베베베베베베베베베베베베베",
          "updatedAt":"12345"
        },
        {
          "postId":"123",
          "userName":"parkhacker",
          "imageTitle":"this is a rock",
          "postImageURL":"https://cdn.stocksnap.io/img-thumbs/960w/fruit-bowl_4MUZH41WMD.jpg",
          "explanation":"이 사진은 blueberries and strawberriesss helldlfkddklasdlkflkasdflkjas dlkfjals h oiwefo i wiofh qwihf klsahjf ajdsjfklasdjfklas lkasf askf laksjf asfkldsjfklajeoifjqkl; gakj;hdg asoig adjf kdsnfioq jgn qpgh qiohgioq gpih eiphg ehgioqehigo eig rioq[qohgq erhg roiighioehgehgioehwg poiqhgioqhgioqhioghqio gioqhg qioh아리너리비허야ㅑㅈㄷㅎ ㅁ니아렂ㅍ아멀 에베베베베베베베베베베베베베베베베베베베베베베베베베베베베베베베베베베베베베베베베베 ㅔㅔ베베베벱베ㅔ ㅔ ㅔ ㅔ ㅔ ㅔ ㅔ ㅔ ㅔ베베벱 ㅔㅂ 베 베베베베베베베베베베베베베",
          "updatedAt":"12345"
        },
        {
          "postId":"123",
          "userName":"parkhacker",
          "imageTitle":"this is a rock",
          "postImageURL":"https://cdn.stocksnap.io/img-thumbs/960w/fruit-bowl_4MUZH41WMD.jpg",
          "explanation":"이 사진은 blueberries and strawberriesss helldlfkddklasdlkflkasdflkjas dlkfjals h oiwefo i wiofh qwihf klsahjf ajdsjfklasdjfklas lkasf askf laksjf asfkldsjfklajeoifjqkl; gakj;hdg asoig adjf kdsnfioq jgn qpgh qiohgioq gpih eiphg ehgioqehigo eig rioq[qohgq erhg roiighioehgehgioehwg poiqhgioqhgioqhioghqio gioqhg qioh아리너리비허야ㅑㅈㄷㅎ ㅁ니아렂ㅍ아멀 에베베베베베베베베베베베베베베베베베베베베베베베베베베베베베베베베베베베베베베베베베 ㅔㅔ베베베벱베ㅔ ㅔ ㅔ ㅔ ㅔ ㅔ ㅔ ㅔ ㅔ베베벱 ㅔㅂ 베 베베베베베베베베베베베베베",
          "updatedAt":"12345"
        },
        {
          "postId":"123",
          "userName":"parkhacker",
          "imageTitle":"this is a rock",
          "postImageURL":"https://cdn.stocksnap.io/img-thumbs/960w/fruit-bowl_4MUZH41WMD.jpg",
          "explanation":"이 사진은 blueberries and strawberriesss helldlfkddklasdlkflkasdflkjas dlkfjals h oiwefo i wiofh qwihf klsahjf ajdsjfklasdjfklas lkasf askf laksjf asfkldsjfklajeoifjqkl; gakj;hdg asoig adjf kdsnfioq jgn qpgh qiohgioq gpih eiphg ehgioqehigo eig rioq[qohgq erhg roiighioehgehgioehwg poiqhgioqhgioqhioghqio gioqhg qioh아리너리비허야ㅑㅈㄷㅎ ㅁ니아렂ㅍ아멀 에베베베베베베베베베베베베베베베베베베베베베베베베베베베베베베베베베베베베베베베베베 ㅔㅔ베베베벱베ㅔ ㅔ ㅔ ㅔ ㅔ ㅔ ㅔ ㅔ ㅔ베베벱 ㅔㅂ 베 베베베베베베베베베베베베베",
          "updatedAt":"12345"
        },
        {
          "postId":"123",
          "userName":"parkhacker",
          "imageTitle":"this is a rock",
          "postImageURL":"https://cdn.stocksnap.io/img-thumbs/960w/fruit-bowl_4MUZH41WMD.jpg",
          "explanation":"이 사진은 blueberries and strawberriesss helldlfkddklasdlkflkasdflkjas dlkfjals h oiwefo i wiofh qwihf klsahjf ajdsjfklasdjfklas lkasf askf laksjf asfkldsjfklajeoifjqkl; gakj;hdg asoig adjf kdsnfioq jgn qpgh qiohgioq gpih eiphg ehgioqehigo eig rioq[qohgq erhg roiighioehgehgioehwg poiqhgioqhgioqhioghqio gioqhg qioh아리너리비허야ㅑㅈㄷㅎ ㅁ니아렂ㅍ아멀 에베베베베베베베베베베베베베베베베베베베베베베베베베베베베베베베베베베베베베베베베베 ㅔㅔ베베베벱베ㅔ ㅔ ㅔ ㅔ ㅔ ㅔ ㅔ ㅔ ㅔ베베벱 ㅔㅂ 베 베베베베베베베베베베베베베",
          "updatedAt":"12345"
        },
        {
          "postId":"123",
          "userName":"parkhacker",
          "imageTitle":"this is a rock",
          "postImageURL":"https://cdn.stocksnap.io/img-thumbs/960w/fruit-bowl_4MUZH41WMD.jpg",
          "explanation":"이 사진은 blueberries and strawberriesss helldlfkddklasdlkflkasdflkjas dlkfjals h oiwefo i wiofh qwihf klsahjf ajdsjfklasdjfklas lkasf askf laksjf asfkldsjfklajeoifjqkl; gakj;hdg asoig adjf kdsnfioq jgn qpgh qiohgioq gpih eiphg ehgioqehigo eig rioq[qohgq erhg roiighioehgehgioehwg poiqhgioqhgioqhioghqio gioqhg qioh아리너리비허야ㅑㅈㄷㅎ ㅁ니아렂ㅍ아멀 에베베베베베베베베베베베베베베베베베베베베베베베베베베베베베베베베베베베베베베베베베 ㅔㅔ베베베벱베ㅔ ㅔ ㅔ ㅔ ㅔ ㅔ ㅔ ㅔ ㅔ베베벱 ㅔㅂ 베 베베베베베베베베베베베베베",
          "updatedAt":"12345"
        },
        {
          "postId":"123",
          "userName":"parkhacker",
          "imageTitle":"this is a rock",
          "postImageURL":"https://cdn.stocksnap.io/img-thumbs/960w/fruit-bowl_4MUZH41WMD.jpg",
          "explanation":"이 사진은 blueberries and strawberriesss helldlfkddklasdlkflkasdflkjas dlkfjals h oiwefo i wiofh qwihf klsahjf ajdsjfklasdjfklas lkasf askf laksjf asfkldsjfklajeoifjqkl; gakj;hdg asoig adjf kdsnfioq jgn qpgh qiohgioq gpih eiphg ehgioqehigo eig rioq[qohgq erhg roiighioehgehgioehwg poiqhgioqhgioqhioghqio gioqhg qioh아리너리비허야ㅑㅈㄷㅎ ㅁ니아렂ㅍ아멀 에베베베베베베베베베베베베베베베베베베베베베베베베베베베베베베베베베베베베베베베베베 ㅔㅔ베베베벱베ㅔ ㅔ ㅔ ㅔ ㅔ ㅔ ㅔ ㅔ ㅔ베베벱 ㅔㅂ 베 베베베베베베베베베베베베베",
          "updatedAt":"12345"
        },
        {
          "postId":"123",
          "userName":"parkhacker",
          "imageTitle":"this is a rock",
          "postImageURL":"https://cdn.stocksnap.io/img-thumbs/960w/fruit-bowl_4MUZH41WMD.jpg",
          "explanation":"이 사진은 blueberries and strawberriesss helldlfkddklasdlkflkasdflkjas dlkfjals h oiwefo i wiofh qwihf klsahjf ajdsjfklasdjfklas lkasf askf laksjf asfkldsjfklajeoifjqkl; gakj;hdg asoig adjf kdsnfioq jgn qpgh qiohgioq gpih eiphg ehgioqehigo eig rioq[qohgq erhg roiighioehgehgioehwg poiqhgioqhgioqhioghqio gioqhg qioh아리너리비허야ㅑㅈㄷㅎ ㅁ니아렂ㅍ아멀 에베베베베베베베베베베베베베베베베베베베베베베베베베베베베베베베베베베베베베베베베베 ㅔㅔ베베베벱베ㅔ ㅔ ㅔ ㅔ ㅔ ㅔ ㅔ ㅔ ㅔ베베벱 ㅔㅂ 베 베베베베베베베베베베베베베",
          "updatedAt":"12345"
        },
        {
          "postId":"123",
          "userName":"parkhacker",
          "imageTitle":"this is a rock",
          "postImageURL":"https://cdn.stocksnap.io/img-thumbs/960w/fruit-bowl_4MUZH41WMD.jpg",
          "explanation":"이 사진은 blueberries and strawberriesss helldlfkddklasdlkflkasdflkjas dlkfjals h oiwefo i wiofh qwihf klsahjf ajdsjfklasdjfklas lkasf askf laksjf asfkldsjfklajeoifjqkl; gakj;hdg asoig adjf kdsnfioq jgn qpgh qiohgioq gpih eiphg ehgioqehigo eig rioq[qohgq erhg roiighioehgehgioehwg poiqhgioqhgioqhioghqio gioqhg qioh아리너리비허야ㅑㅈㄷㅎ ㅁ니아렂ㅍ아멀 에베베베베베베베베베베베베베베베베베베베베베베베베베베베베베베베베베베베베베베베베베 ㅔㅔ베베베벱베ㅔ ㅔ ㅔ ㅔ ㅔ ㅔ ㅔ ㅔ ㅔ베베벱 ㅔㅂ 베 베베베베베베베베베베베베베",
          "updatedAt":"12345"
        },
        {
          "postId":"123",
          "userName":"parkhacker",
          "imageTitle":"this is a rock",
          "postImageURL":"https://cdn.stocksnap.io/img-thumbs/960w/fruit-bowl_4MUZH41WMD.jpg",
          "explanation":"이 사진은 blueberries and strawberriesss helldlfkddklasdlkflkasdflkjas dlkfjals h oiwefo i wiofh qwihf klsahjf ajdsjfklasdjfklas lkasf askf laksjf asfkldsjfklajeoifjqkl; gakj;hdg asoig adjf kdsnfioq jgn qpgh qiohgioq gpih eiphg ehgioqehigo eig rioq[qohgq erhg roiighioehgehgioehwg poiqhgioqhgioqhioghqio gioqhg qioh아리너리비허야ㅑㅈㄷㅎ ㅁ니아렂ㅍ아멀 에베베베베베베베베베베베베베베베베베베베베베베베베베베베베베베베베베베베베베베베베베 ㅔㅔ베베베벱베ㅔ ㅔ ㅔ ㅔ ㅔ ㅔ ㅔ ㅔ ㅔ베베벱 ㅔㅂ 베 베베베베베베베베베베베베베",
          "updatedAt":"12345"
        },
        {
          "postId":"123",
          "userName":"parkhacker",
          "imageTitle":"this is a rock",
          "postImageURL":"https://cdn.stocksnap.io/img-thumbs/960w/fruit-bowl_4MUZH41WMD.jpg",
          "explanation":"이 사진은 blueberries and strawberriesss helldlfkddklasdlkflkasdflkjas dlkfjals h oiwefo i wiofh qwihf klsahjf ajdsjfklasdjfklas lkasf askf laksjf asfkldsjfklajeoifjqkl; gakj;hdg asoig adjf kdsnfioq jgn qpgh qiohgioq gpih eiphg ehgioqehigo eig rioq[qohgq erhg roiighioehgehgioehwg poiqhgioqhgioqhioghqio gioqhg qioh아리너리비허야ㅑㅈㄷㅎ ㅁ니아렂ㅍ아멀 에베베베베베베베베베베베베베베베베베베베베베베베베베베베베베베베베베베베베베베베베베 ㅔㅔ베베베벱베ㅔ ㅔ ㅔ ㅔ ㅔ ㅔ ㅔ ㅔ ㅔ베베벱 ㅔㅂ 베 베베베베베베베베베베베베베",
          "updatedAt":"12345"
        },
        {
          "postId":"123",
          "userName":"parkhacker",
          "imageTitle":"this is a rock",
          "postImageURL":"https://cdn.stocksnap.io/img-thumbs/960w/fruit-bowl_4MUZH41WMD.jpg",
          "explanation":"이 사진은 blueberries and strawberriesss helldlfkddklasdlkflkasdflkjas dlkfjals h oiwefo i wiofh qwihf klsahjf ajdsjfklasdjfklas lkasf askf laksjf asfkldsjfklajeoifjqkl; gakj;hdg asoig adjf kdsnfioq jgn qpgh qiohgioq gpih eiphg ehgioqehigo eig rioq[qohgq erhg roiighioehgehgioehwg poiqhgioqhgioqhioghqio gioqhg qioh아리너리비허야ㅑㅈㄷㅎ ㅁ니아렂ㅍ아멀 에베베베베베베베베베베베베베베베베베베베베베베베베베베베베베베베베베베베베베베베베베 ㅔㅔ베베베벱베ㅔ ㅔ ㅔ ㅔ ㅔ ㅔ ㅔ ㅔ ㅔ베베벱 ㅔㅂ 베 베베베베베베베베베베베베베",
          "updatedAt":"12345"
        },
        {
          "postId":"123",
          "userName":"parkhacker",
          "imageTitle":"this is a rock",
          "postImageURL":"https://cdn.stocksnap.io/img-thumbs/960w/fruit-bowl_4MUZH41WMD.jpg",
          "explanation":"이 사진은 blueberries and strawberriesss helldlfkddklasdlkflkasdflkjas dlkfjals h oiwefo i wiofh qwihf klsahjf ajdsjfklasdjfklas lkasf askf laksjf asfkldsjfklajeoifjqkl; gakj;hdg asoig adjf kdsnfioq jgn qpgh qiohgioq gpih eiphg ehgioqehigo eig rioq[qohgq erhg roiighioehgehgioehwg poiqhgioqhgioqhioghqio gioqhg qioh아리너리비허야ㅑㅈㄷㅎ ㅁ니아렂ㅍ아멀 에베베베베베베베베베베베베베베베베베베베베베베베베베베베베베베베베베베베베베베베베베 ㅔㅔ베베베벱베ㅔ ㅔ ㅔ ㅔ ㅔ ㅔ ㅔ ㅔ ㅔ베베벱 ㅔㅂ 베 베베베베베베베베베베베베베",
          "updatedAt":"12345"
        },
        {
          "postId":"123",
          "userName":"parkhacker",
          "imageTitle":"this is a rock",
          "postImageURL":"https://cdn.stocksnap.io/img-thumbs/960w/fruit-bowl_4MUZH41WMD.jpg",
          "explanation":"이 사진은 blueberries and strawberriesss helldlfkddklasdlkflkasdflkjas dlkfjals h oiwefo i wiofh qwihf klsahjf ajdsjfklasdjfklas lkasf askf laksjf asfkldsjfklajeoifjqkl; gakj;hdg asoig adjf kdsnfioq jgn qpgh qiohgioq gpih eiphg ehgioqehigo eig rioq[qohgq erhg roiighioehgehgioehwg poiqhgioqhgioqhioghqio gioqhg qioh아리너리비허야ㅑㅈㄷㅎ ㅁ니아렂ㅍ아멀 에베베베베베베베베베베베베베베베베베베베베베베베베베베베베베베베베베베베베베베베베베 ㅔㅔ베베베벱베ㅔ ㅔ ㅔ ㅔ ㅔ ㅔ ㅔ ㅔ ㅔ베베벱 ㅔㅂ 베 베베베베베베베베베베베베베",
          "updatedAt":"12345"
        },
        {
          "postId":"123",
          "userName":"parkhacker",
          "imageTitle":"this is a rock",
          "postImageURL":"https://cdn.stocksnap.io/img-thumbs/960w/fruit-bowl_4MUZH41WMD.jpg",
          "explanation":"이 사진은 blueberries and strawberriesss helldlfkddklasdlkflkasdflkjas dlkfjals h oiwefo i wiofh qwihf klsahjf ajdsjfklasdjfklas lkasf askf laksjf asfkldsjfklajeoifjqkl; gakj;hdg asoig adjf kdsnfioq jgn qpgh qiohgioq gpih eiphg ehgioqehigo eig rioq[qohgq erhg roiighioehgehgioehwg poiqhgioqhgioqhioghqio gioqhg qioh아리너리비허야ㅑㅈㄷㅎ ㅁ니아렂ㅍ아멀 에베베베베베베베베베베베베베베베베베베베베베베베베베베베베베베베베베베베베베베베베베 ㅔㅔ베베베벱베ㅔ ㅔ ㅔ ㅔ ㅔ ㅔ ㅔ ㅔ ㅔ베베벱 ㅔㅂ 베 베베베베베베베베베베베베베",
          "updatedAt":"12345"
        },
        {
          "postId":"123",
          "userName":"parkhacker",
          "imageTitle":"this is a rock",
          "postImageURL":"https://cdn.stocksnap.io/img-thumbs/960w/fruit-bowl_4MUZH41WMD.jpg",
          "explanation":"이 사진은 blueberries and strawberriesss helldlfkddklasdlkflkasdflkjas dlkfjals h oiwefo i wiofh qwihf klsahjf ajdsjfklasdjfklas lkasf askf laksjf asfkldsjfklajeoifjqkl; gakj;hdg asoig adjf kdsnfioq jgn qpgh qiohgioq gpih eiphg ehgioqehigo eig rioq[qohgq erhg roiighioehgehgioehwg poiqhgioqhgioqhioghqio gioqhg qioh아리너리비허야ㅑㅈㄷㅎ ㅁ니아렂ㅍ아멀 에베베베베베베베베베베베베베베베베베베베베베베베베베베베베베베베베베베베베베베베베베 ㅔㅔ베베베벱베ㅔ ㅔ ㅔ ㅔ ㅔ ㅔ ㅔ ㅔ ㅔ베베벱 ㅔㅂ 베 베베베베베베베베베베베베베",
          "updatedAt":"12345"
        },
        {
          "postId":"123",
          "userName":"parkhacker",
          "imageTitle":"this is a rock",
          "postImageURL":"https://cdn.stocksnap.io/img-thumbs/960w/fruit-bowl_4MUZH41WMD.jpg",
          "explanation":"이 사진은 blueberries and strawberriesss helldlfkddklasdlkflkasdflkjas dlkfjals h oiwefo i wiofh qwihf klsahjf ajdsjfklasdjfklas lkasf askf laksjf asfkldsjfklajeoifjqkl; gakj;hdg asoig adjf kdsnfioq jgn qpgh qiohgioq gpih eiphg ehgioqehigo eig rioq[qohgq erhg roiighioehgehgioehwg poiqhgioqhgioqhioghqio gioqhg qioh아리너리비허야ㅑㅈㄷㅎ ㅁ니아렂ㅍ아멀 에베베베베베베베베베베베베베베베베베베베베베베베베베베베베베베베베베베베베베베베베베 ㅔㅔ베베베벱베ㅔ ㅔ ㅔ ㅔ ㅔ ㅔ ㅔ ㅔ ㅔ베베벱 ㅔㅂ 베 베베베베베베베베베베베베베",
          "updatedAt":"12345"
        },
      ];
      setPostArray(data);
    }

    //post 함수만 만들고 그걸 return 할때 사용 하면 되는데...
    
      
    
   
    return (
      
      <InfiniteScroll 
      dataLength= {postArray.length}
      next={() => {
        for(let i = 0; i < postArray.length; i++){
           return postArray[i]
      }
        }} // 여기가 에러인듯
      hasMore={true}
      loader={<h4>Loading...</h4>}
          endMessage={
            <p style={{ textAlign: "center" }}>
              <b>You've watched all the feeds</b>
            </p>
          }
      >
      {
        postArray.map((item)=>( // postArray is not a function??
          <Posts id={item.postId} userName={item.userName} title={item.imageTitle} 
                        postImage={item.postImageURL} text={item.explanation}/>
        ))
      }
      
      </InfiniteScroll>
      
    );
  }

  
  
  export default Feeds