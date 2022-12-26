import Home from "./pages/home/Home";
import { Profile } from "./pages/profile/Profile";
import Login from "./pages/login/Login";
import Register from "./pages/regiter/Register";
import {  onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase"
import { useState } from "react";


import {
  BrowserRouter as Router,
  Navigate,
  Routes,
  Route,
  
} from "react-router-dom";


function App() {

    
    
  const [currentUser, setCurrentUser] = useState([])
  

  onAuthStateChanged(auth, (user) => {
    if (user) {
      
      // const uid = user.uid;
      
      setCurrentUser(user)
      
      // ...
    } else {
      // User is signed out
      // ...
      setCurrentUser(false)
    }
  });

    // console.log("this is ",currentUser.displayName);
  const RequireAuth = ({children}) => {
    return currentUser ? (children ) : <Navigate to ="/login"/>;
  }

  return (
    <div className="App">
        
        <Router>
      <Routes>
            <Route path="/register" element={<Register/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="" element={ <RequireAuth> <Home  User={currentUser} /> </RequireAuth> } />
            <Route path="/profile" element={ <RequireAuth>  <Profile User={currentUser}/> </RequireAuth>} />
            {/* <Route path="/register" element={<Register/>} /> */}
      </Routes>


    </Router>
    </div>
  );
}

export default App;
