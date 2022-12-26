import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// const firebaseConfig = {
//   apiKey: process.env.REACT_APP_FIREBASE_KEY,
//   authDomain: "facebook-redesign-3364d.firebaseapp.com",
//   projectId: "facebook-redesign-3364d",
//   storageBucket: "facebook-redesign-3364d.appspot.com",
//   messagingSenderId: "74540488884",
//   appId: "1:74540488884:web:1a39289dfda4928457dfe1",
//   measurementId: "G-4EKK08TDXG"
// };
const firebaseConfig = {

  apiKey: process.env.REACT_APP_FIREBASE_KEY,

  authDomain: "social-sea.firebaseapp.com",

  projectId: "social-sea",

  storageBucket: "social-sea.appspot.com",

  messagingSenderId: "944369385770",

  appId: "1:944369385770:web:df4e7e2aca858c4c639e53",

  measurementId: "G-PD2PXF425D"

};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth()
// export { auth };
// const auth = firebase.auth();
export const db = getFirestore(app); //this is to start databse
export const storage = getStorage(app);

