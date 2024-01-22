import React,{useEffect, useState} from 'react'
import { useNavigate } from 'react-router-dom';
import {auth} from "./Firebase";
import { onAuthStateChanged } from 'firebase/auth';
const Protected = (props) => {
const [authorUser,setauthorUser]=useState(null);
const navigate=useNavigate();
useEffect(() => {

  onAuthStateChanged(auth, user => 
    {
    if (user) 
    {
      setauthorUser(user);
      localStorage.setItem("identity", user?.accessToken);
      localStorage.setItem("userName", user?.displayName);
        console.log("myuser",user); 
    }
     else 
     {
      navigate("/login");

    }
  }
  )
}, [navigate])

  return (
  <>
 {authorUser && <props.loggedWorking/>}
  </>
  );
}

export default Protected;