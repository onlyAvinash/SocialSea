import "./friends.css";
import GroupIcon from '@mui/icons-material/Group';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import CakeIcon from '@mui/icons-material/Cake';
import React from 'react'

const Friends = () => {
  return (
    <div className="friends">
        <div className="friendsWrapper">
  
            {/* this is where our mutual friend list is */}

            <div className="mutualFriends">
               <div className="mutualTitle">
                  <GroupIcon></GroupIcon>
                  <span className="mutualText"> mutual friends</span>
               </div>
               <ul className="mutualFriendsList">
                <li className="friend"> <img src="images/person/4.jpg" alt="" className="friendProfile"/></li>
                <li className="friend"> <img src="images/person/5.jpg" alt="" className="friendProfile"/></li>
                <li className="friend"> <img src="images/person/6.jpg" alt="" className="friendProfile"/></li>
                <li className="friend"> <img src="images/person/3.jpg" alt="" className="friendProfile"/></li>
                <li className="friend"> <img src="images/person/10.jpg" alt="" className="friendProfile"/></li>
               </ul>
            </div>
          
          {/* this is where our birthday reminder is  */}

          <div className="birthday">
            <div className="birthdayInvites">
                <CalendarTodayIcon></CalendarTodayIcon>
                <span className="inviteText">4 events invites</span>
            </div>
            <div className="birthdayboy">
                  <CakeIcon></CakeIcon>
                  <span className="birthdayBoyName"> Kunal kapoor</span> &emsp;<span>and</span> <span className="birthdayBoyName"> 3 others</span>
            </div>
          </div>

        {/*  from here we are starting our ads section */}
         <div className="sponser">
           <span className="sponserText">sponser</span>
           <div className="sponserAd">
             <img src="images/post/o.jpg" alt=""  className="adImg"/>
           </div>
         </div>

        </div>

    </div>
  )
}

export default Friends