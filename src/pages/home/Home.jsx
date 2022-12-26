import React from 'react';
import Topbar from "../../components/topbar/Topbar";
import Sharepost from '../../components/sharePost/Sharepost';
import Friends from '../../components/friends/Friends';
import "./home.css"
import Leftpage from '../../components/leftPage/Leftpage';

const Home = ( {User} ) => {
  return (
    <div className='homePlus'> 
        <Topbar></Topbar>
      <div className="home">
        <div className="homeWrapper">
          <div className="leftPage">
                <Leftpage></Leftpage>
          </div>
          <div className="rightPage">
            <Sharepost tittle={User} Home ></Sharepost>
            <Friends></Friends>
           </div>
        </div>
      </div>

      
    </div>
  )
}

export default Home