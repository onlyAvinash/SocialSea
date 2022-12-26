import RssFeedIcon from '@mui/icons-material/RssFeed';
import ChatIcon from '@mui/icons-material/Chat';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import GroupIcon from '@mui/icons-material/Group';
import EventIcon from '@mui/icons-material/Event';
import SchoolIcon from '@mui/icons-material/School';
import {Users} from "../../photodata";
import Online from '../online/Online';
import React from 'react'
import "./leftpage.css";
import { auth } from '../../firebase';
import { Link, useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';

const Leftpage = () => {

  const navigate = useNavigate()

  const logout = (e)=>{
    e.preventDefault();            
    signOut(auth).then(() => {
      
      navigate("/login")

    }).catch((error) => {
        alert(error)
    });
  } 


  return (
    <div className='leftpageWrapper'>
       <Link to="/profile"> 
        <div className="coverImage">
          <img src="/images/post/n.jpg" alt="" className="homeCoverImg" />
          <img src="/images/person/11.jpg" alt="" className='homeCoverProfile' />
        </div>
        </Link> 
        <div className="leftpageFunction">
        <ul className="sidebarList">
            <li className="sidebarListItem">
              <RssFeedIcon className="sidebarIcon"></RssFeedIcon>
               <span className="sidebarListItemText">Feed</span>            
            </li>
            <li className="sidebarListItem">
              <ChatIcon className="sidebarIcon"></ChatIcon>
               <span className="sidebarListItemText">Chat</span>            
            </li>
            <li className="sidebarListItem">
              <PlayCircleIcon className="sidebarIcon"></PlayCircleIcon>
               <span className="sidebarListItemText">Videos</span>            
            </li>
            <li className="sidebarListItem">
              <GroupIcon className="sidebarIcon"></GroupIcon>
               <span className="sidebarListItemText">Groups</span>            
            </li>
           
            <li className="sidebarListItem">
              <EventIcon className="sidebarIcon"></EventIcon>
               <span className="sidebarListItemText">Events</span>            
            </li>
            <li className="sidebarListItem">
              <SchoolIcon className="sidebarIcon"></SchoolIcon>
               <span className="sidebarListItemText">Courses</span>            
            </li>
          </ul>
          <button className="sidebarButton" onClick={logout}> Log Out</button>
        </div>
        <hr className="sidebarHr"/>
        {/* <div className='leftbarFollowings'>
        <div className="leftbarFollowing">
              <img src="/images/person/10.jpg" alt="" className="leftbarFollowingImg" />
              <span className="leftbarFollowingName">John Abrahm</span>
            </div>
            <div className="leftbarFollowing">
              <img src="/images/person/2.jpg" alt="" className="leftbarFollowingImg" />
              <span className="leftbarFollowingName">John Abrahm</span>
            </div>
            <div className="leftbarFollowing">
              <img src="/images/person/3.jpg" alt="" className="leftbarFollowingImg" />
              <span className="leftbarFollowingName">John Abrahm</span>
            </div>
            <div className="leftbarFollowing">
              <img src="/images/person/5.jpg" alt="" className="leftbarFollowingImg" />
              <span className="leftbarFollowingName">John Abrahm</span>
            </div>
            <div className="leftbarFollowing">
              <img src="/images/person/6.jpg" alt="" className="leftbarFollowingImg" />
              <span className="leftbarFollowingName">John Abrahm</span>
            </div>
            <div className="leftbarFollowing">
              <img src="/images/person/7.jpg" alt="" className="leftbarFollowingImg" />
              <span className="leftbarFollowingName">John Abrahm</span>
            </div>
            <div className="leftbarFollowing">
              <img src="/images/person/8.jpg" alt="" className="leftbarFollowingImg" />
              <span className="leftbarFollowingName">John Abrahm</span>
            </div>
            <div className="leftbarFollowing">
              <img src="/images/person/4.jpg" alt="" className="leftbarFollowingImg" />
              <span className="leftbarFollowingName">John Abrahm</span>
            </div>
            
            </div> */}
  
            <ul className="rightbarFriendList">
             {Users.map(u=>(
              <Online key= {u.id} user={u} />
              ))}
              </ul>

    </div>
  )
}

export default Leftpage