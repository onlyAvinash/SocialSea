import React, { useState } from 'react'
import "./leftbar.css";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import InsertLinkIcon from '@mui/icons-material/InsertLink';
import PhotoIcon from '@mui/icons-material/Photo';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
const Leftbar = ( {tittle} ) => {

      const [imgFixer, setimgFixer] = useState(false);
      const changePosition = () => {
        if(window.scrollY > 330)
        {  
           
            setimgFixer(true);
        }
        else{
          setimgFixer(false);
        }
      }

      window.addEventListener('scroll', changePosition );

      
      

  return (
    <div className='leftbar'>
    
    <div className="leftSingleBar">

       <div className="leftbarWrapper">
          <div className='userInfo'>
            <img src="/images/person/11.jpg" alt="" className={imgFixer ?'leftbarUserImgScnd' : 'leftbarUserImg'} />
            <span className='userName'> {tittle?.displayName} </span>
            <button className='userBtn'> edit Profile</button>
          </div>
          <span className='userInfoScnd'> 
            I'm  {tittle?.displayName} &nbsp; :-) <br/>
            This profile picture <br/> belongs to me,
            
          
            
           </span>
           <div className="location">
               <LocationOnIcon></LocationOnIcon>
                <span className='locationName'> Dehradun</span>
           </div>
           <div className="location link">
               <InsertLinkIcon ></InsertLinkIcon>
              <span className="locationName">https://{tittle?.displayName}.io</span>
           </div>
       </div>
       <div className="leftbarWrapperbottom">
          <div className="leftbarBottomTittle">
              <PhotoIcon></PhotoIcon>
              <span className="leftbarBottomPicName">Photos</span>
              <span className="picCount">. 600</span>
          </div>
          <div className='photos'>
               <img src="/images/person/12.jpg" alt="" className='pic-one'/>
               <img src="/images/person/2.jpg" alt="" className='pic '/>
               <img src="/images/person/5.jpg" alt="" className='pic '/>
               <img src="/images/person/7.jpg" alt=""  className='pic '/>
               <img src="/images/person/6.jpg" alt=""  className='pic hiden'/>
          </div>
           <div className="leftbarShow">
            <span className="show">show more</span>
            <KeyboardArrowDownIcon className='more'></KeyboardArrowDownIcon>
            </div>
       </div>
       </div>
    </div>
  )
}

export default Leftbar