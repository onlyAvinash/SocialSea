import React from 'react'
import { useState,useEffect } from 'react'
import "./sharepost.css";
import { db } from '../../firebase';

import {  collection,orderBy, query,  onSnapshot } from "firebase/firestore";

import Share from '../share/Share';
import Post from '../post/Post';

const Sharepost = ( { tittle } ) => {

   
//  from here it will be code for getting data from db to show here

       
        const [posts, setPosts] = useState([]);

        useEffect(() => 

            onSnapshot(
               query(collection(db,"posts" ), orderBy("timeStamp", "desc")),
               (snapshot) => {
                 setPosts(snapshot.docs);
                 }
           )
          
          
        , []);

        // useEffect(() => {
          
        //   const unSub = onSnapshot(collection(db, "posts"), (snapshot) => {
        //     setPosts(snapshot.docs.map((doc) => ({ id: doc.id, post: doc.data() })));
        //   });
        //   return () => {
        //     unSub();
        //   };
        // }, []);

        /////
        // useEffect(() => {
        //   return onSnapshot(
        //     query(collection(db, "posts"), orderBy("timestamp", "desc")),
        //     (snapshot) => {
        //       setPosts(snapshot.docs.map((doc) => ({ id: doc.id, post: doc.data() })));
        //     }
        //   );
        // }, [db])


        // async function fetchPosts() {
        //   const q = query(posts, orderBy("timestamp", "desc"));
        //   const querySnapshot = await getDocs(collection(db, "posts"));
        //   let list =[];
        //   await querySnapshot.forEach((doc) => {
        //     list.push({post:doc.data(),
        //                 id:doc.id,
        //               });
        //   });
        //   setPosts(list);
        
        // }
      
        // useEffect(() => {
        //   fetchPosts();
        // }, []);
      
// console.log("p",posts);
      


  

  return (
    <div className='sharepost'>

    {/* we'll  have share option from here  */}

        <Share Userinfo={tittle}></Share>

     {/* we'll start making Post div from here */}

     {posts
         
          .map((p) => (
            <Post 
              key={p.id} 
              
              post={p.data()}
              timestamp ={p.data().timeStamp}
              user={tittle}
              />
          ))}

       {/* {
                posts
                .sort((a, b) => a.timeStamp - b.timeStamp)
                .map(({ id, post }) => (
                   <Post key={id} postId={id} user={tittle} username={post.username} caption={post.caption} imageUrl={post.imageUrl} postUserId={post.uid} />
                ))
    }  */}

        
    </div>
  )
}

export default Sharepost