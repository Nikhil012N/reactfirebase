import React from 'react';
import { TableBody, TableCell, TableRow, TextField, Table} from '@mui/material';
import { Field, Formik, Form } from 'formik';
import { useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { auth } from './Firebase';
const Signup = () => {
    const navigate = useNavigate();

    return (
        <>
            <Formik
                initialValues={{ username: "", email: "", password: "", }}
                onSubmit={(values) => {
                    createUserWithEmailAndPassword(auth, values?.email, values?.password).then((response) => {
                        const user = response?.user
                        console.log(user)
                        updateProfile(user,{displayName:values?.username})
                        !user?alert("Wrong credentials"):navigate("/login");
                    })
                }}
            >
                <Form>
                    <Table style={{
                        display: "flex", alignContent: "center", justifyContent: "center", marginTop: "15%"
                    }}>
                        <TableBody style={{ border: "1px solid black", }}>
                            <TableRow>
                                <TableCell>
                                    <label htmlFor='Username'>Username</label>
                                </TableCell>
                                <TableCell>
                                    <Field    as={TextField}  type="text" variant="outlined" name="username" id="Username" />
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>
                                    <label htmlFor='Email'>Email</label>
                                </TableCell>
                                <TableCell><Field     as={TextField}  type="text" variant="outlined" name="email" id="Email" /></TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>
                                    <label htmlFor='Password'>
                                        Password
                                    </label>
                                </TableCell>
                                <TableCell><Field   as={TextField} type="text" variant="outlined" name="password" id="Password" /></TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell colSpan={2}> <button type="submit" variant="outlined" color="Success">SignUp</button>&nbsp;&nbsp;
                                    <button variant="outlined" onClick={() => (navigate("/login"))}>Login</button>
                                </TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </Form>
            </Formik >
        </>
    );
}

export default Signup;