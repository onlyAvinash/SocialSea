import "./register.css"
import { auth } from "../../firebase"
import { createUserWithEmailAndPassword,updateProfile } from "firebase/auth";

import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Register() {

  // const history= useHistory("");
  
  // const [error, setError] = useState(false)
  // const [firstName, setFirstName] = useState("");
  const [userName, setUserName] = useState("");
  const[email, setEmail] = useState("");
  const[password, setPassword] = useState("");
 
   const navigate = useNavigate()


   const handleRegister = (e)=>{
    e.preventDefault();            
    
       
    createUserWithEmailAndPassword(auth, email, password)
          .then((userCredential) => {
          
          const user = userCredential.user;
          updateProfile(user, {
              displayName: userName
            }).then(() => {
             // Profile updated!
             // ...
            }).catch((error) => {
              // An error occurred
              // ...
            console.log(error);
          })
          //console.log(user);
          navigate("/login")
          })
          .catch((error) => {
           alert(error)
          });

  }
  return (
    // <div className="login">
    //    <div className="loginWrapper">
    //      <div className="loginLeft">
    //         <h3 className="loginLogo">SocialSea</h3>
    //         <span className="loginDesc">Connect with Friends and world around you on Facebook</span>
    //      </div>
    //      <div className="loginRight">
    //           <form onSubmit={handleRegister}>
    //         <div className="loginBox">
    //             <input type="name" onChange={(e)=> setUserName(e.target.value)} placeholder=" Name" className="loginInput" />
    //             {/* <input type="name"  onChange={(e)=> setLastName(e.target.value)} placeholder="Last Name" className="loginInput" /> */}
    //             <input type="email" onChange={(e)=> setEmail(e.target.value)} placeholder="Email" className="loginInput" />
    //             <input type="password"  onChange={(e)=> setPassword(e.target.value)} placeholder="Password" className="loginInput" />
                
    //             <button type="submit"  className="loginButton">SignUp</button>
    //             {/* { error && <span> error </span>} */}
    //         </div>
    //           </form>
    //      </div>
    //     </div>    
    //  </div>
    <div className="register"> 

    <div className="card">

       <div className="left">
           <h1 className="leftLogo">Social Sea.</h1>
           <p className="leftDesc">
             Social Sea is photo posting social media webapp where You 
             can showCase your PhotoGraphic Skill and can also 
             post Your thaughts & ideas.
           </p>
           <Link to="/Login"><span className="leftAlert"> Do You have an account?</span></Link>
           <Link to="/login">
             <button className="leftButton">Login</button>
           </Link>
       </div>

        <div className="right">

           <h1 className="rightLogo"> Register</h1>

           <form action="" className="rightForm" onSubmit={handleRegister}>
             
               <input className="rightFormInput" onChange={(e)=> setUserName(e.target.value)} type="text" placeholder=" " />
               <label className="labelFirst">name</label>

               <input className="rightFormInputScnd"  onChange={(e)=> setEmail(e.target.value)} type="tezt" placeholder=" " />
               <label className="labelScnd">E-mail</label>

               <input className="rightFormInputThird" onChange={(e)=> setPassword(e.target.value)} type="text" placeholder=" " />
               <label className="labelThird"> Password</label>

               <button className="rightButton" type="submit" >Register</button>
               {/* { error && <span> error </span>}  */}
           </form>
        </div>

    </div>

 </div>
  )
}
