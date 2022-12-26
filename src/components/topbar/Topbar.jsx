
import "./topbar.css";
import SearchIcon from '@mui/icons-material/Search';
import GroupIcon from '@mui/icons-material/Group';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SettingsIcon from '@mui/icons-material/Settings';


import { Link } from "react-router-dom";


const Topbar = ( { user } ) => {

 


  return (
    <div className="topbarContainer">
        <div className="topbarLeft">
        <Link to="/">  <span className="topbarLogo"> Social Sea</span>  </Link>
        </div>
 
        <div className="topbarcenter">
            <div className="topbarSearch">
               <SearchIcon className="topbarSearchIcon"></SearchIcon>
               <input  placeholder='search...'  className='topbarSearchInput'/>
            </div>
        </div>
        
        <div className="topbarRight">
            <div className="topbarIcons">
                <div className="topbarIconItems">
                  <GroupIcon></GroupIcon>
                
                </div>
                <div className="topbarIconItems">
                  <ChatIcon></ChatIcon>
                  <span className="topbarIconBadge">2</span>
                </div>
                <div className="topbarIconItems">
                  <NotificationsIcon></NotificationsIcon>
                  <span className="topbarIconBadge">2</span>
                </div>
                <div className="topbarIconItems">
                   <SettingsIcon></SettingsIcon>
                </div>
            </div>
               <div className="topbarProfile_dropdown" > 
               
               <Link to="/profile">  <img src="/images/person/11.jpg" alt="" className="topbarProfileImg" data-tooltip="Profile"/> </Link>
              
                
                
              </div>
        </div>
        
    </div>
  )
}

export default Topbar