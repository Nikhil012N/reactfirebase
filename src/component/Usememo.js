import { TableRow, TableCell, TableBody, TableHead, Table } from '@mui/material';
import React, { useRef } from 'react';
import Customhook from './Customhook';
const Usememo = () => {
  const {apiData,isLoading,isError} = Customhook("https://jsonplaceholder.typicode.com/posts");
  const tableref=useRef();
  console.log("dataset", apiData);
  return (
    <>
       {isLoading && (<h1>Loading..</h1>)} 
      {isError && <div>Error...</div>}
      <Table ref={tableref}>
        <TableHead>
          <TableRow>
            <TableCell>USERID</TableCell>
            <TableCell>ID</TableCell>
            <TableCell>TITLE</TableCell>
            <TableCell>BODY</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {apiData?.map((value) => {
            return (
              <TableRow key={value?.id}>
                <TableCell>{value?.userId}</TableCell>
                <TableCell>{value?.id}</TableCell>
                <TableCell>{value?.title}</TableCell>
                <TableCell>{value?.body}</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </>
  );
}

export default Usememo;
