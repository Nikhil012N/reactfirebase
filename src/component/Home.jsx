import React, { useRef, useState } from 'react';
import { Button } from '@mui/material';
import Childhome from './Childhome';
const Home = () => {
  const [click, setClick] = useState(false);
  const childRef = useRef(null);
  const tableData = () => {
    childRef?.current();
  }
  return (
    <>
      <h1 style={{ color: "red", textAlign: "center" }} > HOMEPAGE </h1>
      <Button type="button" variant="outlined" onClick={tableData} >Count</Button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <Button type="button" variant="outlined" onClick={() => setClick(click => !click)}>Play</Button>
      <Childhome childref={childRef} withoutref={click} />
    </>
  );
}

export default Home;