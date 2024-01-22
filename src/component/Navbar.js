import React,{useState,useEffect} from 'react'
import "./firebase.css";
import { Link, useNavigate } from 'react-router-dom';
import { signOut,onAuthStateChanged  } from 'firebase/auth';
import { auth } from './Firebase';
import { Button } from '@mui/material';

const Navbar = () => {
  const [authorUser,setauthorUser]=useState(null);

  const navigate = useNavigate();
  const SignOut = () => {
    signOut(auth).then((response) => {
      console.log(response?.data);
      localStorage.clear();
      navigate("/login")
      alert("Successfull SignOUt")
    })
  };
  useEffect(() => {
    onAuthStateChanged(auth, user => 
      {
      if (user) 
      {
        setauthorUser(user)
        
      }
       else 
       {
        setauthorUser(null);
      }
    }
    )
  }, [authorUser])
  return (
    <>{authorUser&&
      <header>
        <ul>
          <li><Link to="/home">Home</Link></li>
          <li><Link to="imgpdf" >ImageToPDF</Link></li>
          <li><Link to="useref" >UseRef</Link></li>
          <li><Link to="usememo" >UseMemo</Link></li>
          <li><Link to="dyamicform" >Dynamic</Link></li>
          <li> <Button type="button" onClick={SignOut} variant="outlined">SignOut</Button>
          </li>
        </ul>
      </header>}

    </>
  )
}

export default Navbar;