import {TextField,Button} from "@mui/material";
import React, {useRef,useState,useMemo} from "react";
const UseRef = () => {
  const [formData, setFormData] = useState({email: "",number: "",password: "", telephone: "", textarea: "", });

  const formRef = useRef();
  const formValidation = useMemo(() => {
    return (
      formData.email !== "" &&
      formData.number !== "" &&
      formData.password !== "" &&
      formData.telephone !== "" &&
      formData.textarea !== ""
    );
  }, [formData]);

  const handleChange = (event) => {
    const name=event.target.name;
    const value=event.target.value;
    setFormData({...formData, [name]:value});
  };
  const mySubmission = (e) => {
    e.preventDefault();
    const formdata = new FormData(formRef.current);
    console.log("formdata", formdata);
    console.log("formdataemail", formdata?.get("eml"));
    console.log("formdata444", formdata?.get("number"));
    console.log("formdata444", formdata?.get("password"));
    console.log("formdata444", formdata?.get("telephone"));
    console.log("formdata444", formdata?.get("textarea"));
  };

  return (
    <>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <div style={{ textAlign: "center" }}>
        <form ref={formRef}>
            <label>Email&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <TextField
            type="email"
            placeholder="email"
            name="email"
            onChange={handleChange}
          /></label>
          <br/><br/>
          <label>Number &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  <TextField
            type="number"
            name="number"
            placeholder="number"
            onChange={handleChange}
          /></label> <br/><br/>
         <label>Password&nbsp;&nbsp;&nbsp; <TextField
            type="password"
            name="password"
            placeholder="password"
            onChange={handleChange}
          /></label> <br/><br/>
         <label> Contact&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <TextField
            type="tel"
            name="telephone"
            placeholder="telephone"
            onChange={handleChange}
          /></label> <br/><br/>
         <label>Text &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  <TextField
            type="text"
            name="textarea"
            placeholder="textarea"
            onChange={handleChange}
          /></label>
          <br/>
          <br/>
          <Button
            type="button"
            disabled={!formValidation}
            onClick={mySubmission}
            variant="outlined"
            size="large"
          >SAVE</Button>
          <br/>
        </form>
        <br/>
        <br/>
        <br/>
        {/* <Table>
    <TableHead>
        <TableRow>
            <TableCell>Email</TableCell>
            <TableCell>Number</TableCell>
            <TableCell>Password</TableCell>
            <TableCell>Telephone</TableCell>
            <TableCell>Text</TableCell>
        </TableRow>
    </TableHead>
    <TableBody>
            <TableCell>{}</TableCell>
            <TableCell>{}</TableCell>
            <TableCell>{}</TableCell>
            <TableCell>{}</TableCell>
            <TableCell>{}</TableCell>
    </TableBody>
</Table> */}
      </div>
      <div></div>
    </>
  );
};

export default UseRef;
