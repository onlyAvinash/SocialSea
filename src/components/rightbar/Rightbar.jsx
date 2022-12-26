import React from 'react'
import TimelineIcon from '@mui/icons-material/Timeline';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import GroupIcon from '@mui/icons-material/Group';
import PhotoIcon from '@mui/icons-material/Photo';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ShareIcon from '@mui/icons-material/Share';
import FlagIcon from '@mui/icons-material/Flag';
import BlockIcon from '@mui/icons-material/Block';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import "./rightbar.css";
import Sharepost from '../sharePost/Sharepost';
import Friends from '../friends/Friends';

const Rightbar = ({tittle}) => {
  return (
    <div className='rightbar'>
       <div className="rightbarWrapper">

          {/* this is our about photos share and help section */}
         
         <div className="rightbarTop">
           <div className="rightbarAbout">
               <div className="rightbarTopIcons">
                 <TimelineIcon></TimelineIcon>
                 <span className="rightbarTopText">timline</span>
               </div>
               <div className="rightbarTopIcons">
                <AssignmentIndIcon></AssignmentIndIcon>
                <span className="rightbarTopText">about</span>

               </div>
               <div className="rightbarTopIcons">
                <GroupIcon></GroupIcon>
                <span className="rightbarTopText">friends</span>

               </div>
               <div className="rightbarTopIcons">
               <PhotoIcon></PhotoIcon>
               <span className="rightbarTopText">Photos</span>

               </div>
               <div className="rightbarTopIcons">
               <MoreVertIcon></MoreVertIcon>

               </div>

           </div>
           <div className="rightbarHelp">
                <div className="rightbarTopHelpIcons">
                  <ShareIcon className='helpIcon'></ShareIcon>
                  </div>
                <div className="rightbarTopHelpIcons">
                  <FlagIcon className='helpIcon'></FlagIcon>
                  </div>
                <div className="rightbarTopHelpIcons">
                  <BlockIcon className='helpIcon'></BlockIcon>
                  </div>
                <div className="rightbarTopHelpIcons">
                   <MoreHorizIcon className='helpIcon'></MoreHorizIcon>
                   </div>
               
               
              
           </div>
         </div>

         {/* rightTop about share section  closes here*/}
    
    {/*++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */}

          {/* rightBottom post and birthday section starts from  here */}

          <div className="rightbarBottom">
            <Sharepost tittle={tittle}></Sharepost>
            <Friends></Friends>

          </div>


       </div>
    </div>
  )
}

export default Rightbar