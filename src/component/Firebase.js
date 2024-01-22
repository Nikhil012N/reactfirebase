import { initializeApp } from "firebase/app";
import { getAuth,GoogleAuthProvider,FacebookAuthProvider } from "firebase/auth";


const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_apiKey,
  authDomain: process.env.REACT_APP_FIREBASE_authDomain ,
  databaseURL: process.env.REACT_APP_FIREBASE_databaseURL ,
  projectId: process.env.REACT_APP_FIREBASE_projectId ,
  storageBucket: process.env.REACT_APP_FIREBASE_storageBucket ,
  messagingSenderId: process.env.REACT_APP_FIREBASE_messagingSenderId ,
  appId: process.env.REACT_APP_FIREBASE_appId ,
  measurementId: process.env.REACT_APP_FIREBASE_measurementId ,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleAuth = new GoogleAuthProvider(app);
export const facebookAuth = new FacebookAuthProvider(app);
export default app;
