import Topbar from "../../components/topbar/Topbar";
import Leftbar from "../../components/leftbar/Leftbar";
import "./profile.css";
import Rightbar from "../../components/rightbar/Rightbar";


export const Profile = ( {User} ) => {
  
  // console.log(user.displayName);
  return (
    <div> 
      <Topbar></Topbar>
      <img src="/images/post/n.jpg" alt="" className="coverImg" />
      <div className="mainPage">
       <Leftbar tittle={User} ></Leftbar>
       <Rightbar tittle={User}></Rightbar>
      </div>
    </div>
  )
}
