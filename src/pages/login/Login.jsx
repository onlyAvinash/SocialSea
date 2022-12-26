import styles from "./login.module.css";
import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase"
import { Link,useNavigate } from "react-router-dom";
// import { Outlet, Link } from "react-router-dom";
export default function Login() {
    const [error, setError] = useState(false)
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    
    const navigate = useNavigate()


    const handleLogin = (e)=>{
      // e.preventDefault();            
      
         
            signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
            
            // const user = userCredential.user;
            // console.log(user);
            navigate("/")
            })
            .catch((error) => {
              setError(true)
            });
            e.preventDefault();            
    }

   
  return (

    // <div className="login">
    //    <div className="loginWrapper">
    //      <div className="loginLeft">
    //         <h3 className="loginLogo">SocialSea</h3>
    //         <span className="loginDesc">Connect with Friends and world around you on Facebook</span>
    //      </div>
    //      <div className="loginRight">
    //            <form onSubmit={handleLogin}>
    //         <div className="loginBox">
    //             <input type="email"  placeholder="Email" className="loginInput" onChange={e=>setEmail(e.target.value)} />
    //             <input  type= "password" placeholder="Password" className="loginInput" onChange={e=>setPassword(e.target.value)} />
    //             <button type ="submit"  className="loginButton">LogIn</button>
    //            <span className="loginForgot">Forgot Password</span>
    //               { error && <span>Wrong email & password </span>}

    //            <button className="loginRegisterButton">
    //           {/* <Link to="/">Create a New Account </Link> */}
    //           Create a New Account
    //           </button>

    //         </div>
    //           </form>
    //      </div>
    //     </div>    
    //  </div>
    <div className={styles.login}> 

       <div className={styles.card}>

          <div className={styles.left}>
              <h1 className={styles.leftLogo}>Social Sea.</h1>
              <p className={styles.leftDesc}>
                Social Sea is photo posting social media webapp where You 
                can showCase your PhotoGraphic Skill and can also 
                post Your thaughts & ideas.
              </p>
              <span className={styles.leftAlert}>Create an account if U have'nt</span>
              <Link to="/register">
               <button className={error ? styles.leftButtonScnd:styles.leftButton}> Register</button>
              </Link>
          </div>

           <div className={styles.right}>

              <h1 className={styles.rightLogo}> Login</h1>

              <form action="" className={styles.rightForm} onSubmit={handleLogin}>
                
                  <input className={styles.rightFormInput} type="text" placeholder=" " onChange={e=>setEmail(e.target.value)}/>
                  <label className={styles.label}>E-mail </label>

                  <input className={styles.rightFormInputTwo} type="password" placeholder=" " onChange={e=>setPassword(e.target.value)}/>
                  <label className={styles.labelTwo}>Password </label>

                <span className={error? styles.wrongText : styles.wrongTextScnd}>Wrong email & password </span>
                  <button className={styles.rightButton}>Login</button>
                    
              </form>
           </div>

       </div>

    </div>
  )
}
