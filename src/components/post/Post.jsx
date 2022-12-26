import React from 'react'
import "./post.css";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ReplyIcon from '@mui/icons-material/Reply';
import { useState } from 'react'
import Moment from 'react-moment';
import { Link } from 'react-router-dom';
const Post = ({ postId, user, username, caption, imageUrl, postUserId,post,timestamp }) => {

  const love =33
  const [like,setLike] = useState(love)
  
  const [isliked,setIsLiked] = useState(false)
  
  const likeHandler = ()=>{
    setLike(isliked ? like-1 : like+1)
    setIsLiked(!isliked)
  }

  
  
  return (
    <div>

        <div className="post">
            <div className="postWrapper">
                <div className='postTopBar'>
                <img src="/images/person/11.jpg" alt=""  className='postProfile'/>
                    <div className='postTop'>
                      
                       <Link to="/profile">  <span className='PostUsername'>{ user?.displayName }</span> </Link>
                         
                  
                      <div className='postTime'><Moment className='postTime' fromNow>{timestamp?.toDate()}</Moment></div>
                    
                    </div>
                     <div className="topSetting"><MoreVertIcon></MoreVertIcon> </div>

                </div>
                <span className="postDescription">
                   {post?.caption}
                </span>
            </div>
            
                <img src={post?.imageUrl}  className="postImage" alt="" />
                <div className="postLike">
                  <div className='postLikeIcons'>
                    
                   <span onClick={likeHandler} className={isliked?"animation-heart": "heart"}> </span>
                   {/* <span className="animation-heart"></span> */}
                   {/* { isliked?<ThumbUpAltIcon className='postlikeIcon' color='primary' onClick={likeHandler} > </ThumbUpAltIcon> : <FavoriteRoundedIcon color='primary' className='postlikeIcon' onClick={likeHandler}> </FavoriteRoundedIcon>}
                     <FavoriteRoundedIcon> </FavoriteRoundedIcon> */}
                     <span className="postLikeCount">{ like } people Liked</span>
                   
                  
                  </div>
                <div className="postComment" >
                     <ReplyIcon id="reply" ></ReplyIcon>
                </div>
                </div>
         </div>

  

    </div>
  )
}

export default Post