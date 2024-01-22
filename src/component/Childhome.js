import React,{useEffect, useMemo} from 'react'

const Childhome = ({childref,withoutref}) => {

 const defaultFnc=()=>{for (let i=0;i<=100;i++){console.log("Number",i)}}
 const myfnc=()=>{console.log("Clicked clicked");};
childref.current=defaultFnc;
useEffect(() => {
  return myfnc()
}, [withoutref])


  return (
    <div>
    
    </div>
  );
}

export default Childhome;
