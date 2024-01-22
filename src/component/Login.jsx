import React, { useState } from "react";
import { Field, Formik, Form } from "formik";
import {
  TableCell,
  TableHead,
  Table,
  TableRow,
  Button,
  TextField,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import {
  getAuth,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import { googleAuth, facebookAuth } from "./Firebase";
import GoogleIcon from "@mui/icons-material/Google";
import { FacebookSharp } from "@mui/icons-material";
const Login = () => {
  const initivalue = {
    username: "",
    email: "",
    password: "",
  };
  const [login,setLogin]=useState(false);
  const Navigate = useNavigate();
  const auth = getAuth();
  const handleGoogleLogin = () => {
    signInWithPopup(auth,googleAuth).then((response) => {
      console.log(response);
      const user = response?.user;
      user ? Navigate("/home") : alert("Google login failed");
    });
  };

  const handleFacebookLogin = () => {
    signInWithPopup(auth, facebookAuth).then((response) => {
      console.log(response);
      const user = response?.user;
      user ? Navigate("/home") : alert("Facebook login failed");
    });
  };

  const handleSubmit = (values) => {
    console.log("submit values" ,values);
    signInWithEmailAndPassword(auth, values.email, values.password).then(
      (response) => {
        const user = response?.user;
        console.log("after popup",user);
        !user ? alert("Wrong credentials") : Navigate("/home");
      }
    );
  };
  return (
    <>
      <Formik initialValues={initivalue} onSubmit={handleSubmit}>
        <Form>
          <Table
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "15%",
            }}
          >
            <TableHead
              style={{
                border: "1px solid",
              }}
            >
              <TableRow>
                <TableCell>
                  <label htmlFor="Email">Email</label>
                </TableCell>
                <TableCell>
                  <Field
                    as={TextField}
                    type="text"
                    variant="outlined"
                    id="Email"
                    name="email"
                  ></Field>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <label htmlFor="Password">Password</label>
                </TableCell>
                <TableCell>
                  <Field
                    as={TextField}
                    type="text"
                    variant="outlined"
                    id="Password"
                    name="password"
                  ></Field>
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell colSpan={2}>
                  <Button variant="outlined" type="submit">
                    Login
                  </Button>
                  &nbsp;&nbsp;
                  <Button
                    variant="text"
                    type="button"
                    onClick={handleGoogleLogin}
                  >
                    <GoogleIcon />
                  </Button>
                  <Button
                    variant="text"
                    type="button"
                    onClick={handleFacebookLogin}
                  >
                    <FacebookSharp />
                  </Button>
                </TableCell>
              </TableRow>
            </TableHead>
          </Table>
        </Form>
      </Formik>
    </>
  );
};

export default Login;
