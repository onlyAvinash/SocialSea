import React from 'react';
import "./online.css";
const Online = ({user}) => {
  return (
    <li className="rightbarFriend">
    <div className="rightbarProfileImgContainer">
        <img src={user.profilePicture} alt="" className="rightbarProfileImg" />
    </div>
    <span className="rightbarUsername">{user.username}</span>
         <span className="rightbarOnline"></span>
  </li>
  )
}

export default Online