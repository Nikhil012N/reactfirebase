import {
  InputLabel,
  Table,
  TableBody,
  TableCell,
  TableRow,
  Button,
  TextField,
} from "@mui/material";
import axios from "axios";
import { Field, Formik, Form, ErrorMessage } from "formik";
import React, { useMemo, useState } from "react";
import * as Yup from "yup";

const DynamicForm = () => {
  const [inputData, setinputData] = useState([]);

  const url = "http://localhost:8080/fromdata";
  useMemo(() => {
    axios.get(url).then((res) => {
      setinputData(res?.data);
    });
  }, [url]);
  console.log("inputData", inputData);
  const initialValue = {
    firstname: "",
    lastname: "",
    age: "",
    email: "",
    contact: "",
    address: "",
    gender: "",
    interest:""
  };

  const validation = Yup.object().shape({
    firstname: Yup.string("Must be a string")
      .required("Firstname is required")
      .min(3, "Should be greater then 3 characters")
      .max(10)
      .trim(),
    lastname: Yup.string("Must be a string")
      .required("Lastname is required")
      .min(4, "Should be greater then 5 characters")
      .max(10)
      .trim(),
    age: Yup.number("Must be a number")
      .required("Age is required")
      .positive()
      .integer()
      .min(10)
      .max(99),
    email: Yup.string().email().required("Email ID is required"),
    contact: Yup.string().required("Contact details are required").length(10),
    address: Yup.string().required("Address details are required"),
    gender:Yup.string().required("Gender is required").trim(),
    profession:Yup.string().required("Select a profession"),
    interest:Yup.array().required("Please Select the checkbox").min(1,"Please select one")
  });

  return (
    <div>
      <Formik
        enableReinitialize
        initialValues={initialValue}
        onSubmit={(values) => {
          axios
            .post(" http://localhost:8000/dynamicformdata", values)
            .then((res) => console.log(res?.data));
        }}
        validationSchema={validation}
      >
        <Form>
          <Table
            style={{
              marginLeft: "auto",
              marginRight: "auto",
              border: "2px solid black",
            }}
          >
            <TableBody>
              {inputData?.map((data, i) => {
                switch (data?.type) {
                  case "radio":
                    return (
                      <TableRow key={i}>
                        <TableCell>
                          <InputLabel>{data?.label}</InputLabel>
                        </TableCell>
                        <TableCell>
                          {data?.options?.map((option) => {
                            return (
                              <InputLabel>
                                <Field
                                  type={data?.type}
                                  name={data?.name}
                                  id={data?.name}
                                  label={data?.label}
                                  value={option}
                                />
                                {option}
                              </InputLabel>
                            );
                          })}
                          <span style={{ color: "red" }}>
                            {" "}
                            <ErrorMessage component="span" name={data?.name} />
                          </span>
                        </TableCell>
                      </TableRow>
                    );
                  case "select":
                    return (
                      <TableRow key={i}>
                        <TableCell>
                          <InputLabel htmlFor={data?.name}>
                            {data?.label}
                          </InputLabel>
                        </TableCell>
                        <TableCell>
                          <Field
                            as="select"
                            name={data?.name}
                            id={data?.name}
                            color="primary"
                            label={data?.label}
                          >
                            <option></option>
                            {data?.options?.map((option) => {
                              return <Field as="option" value={option}>{option}</Field>;
                            })}
                          </Field>
                          <span style={{ color: "red" }}>
                            {" "}
                            <ErrorMessage component="span" name={data?.name} />
                          </span>
                        </TableCell>
                      </TableRow>
                    );
                    case "checkbox":
                        return (
                          <TableRow key={i}>
                            <TableCell>
                              <InputLabel htmlFor={data?.name}>
                                {data?.label}
                              </InputLabel>
                            </TableCell>
                            <TableCell>
                                {data?.options?.map((option) => {
                                  return (<><Field type={data?.type}  name={data?.name}    value={option}/>
                                <InputLabel htmlFor={option}>{option}</InputLabel>
                                </> )})}
                              <span style={{ color: "red" }}>
                                {" "}
                                <ErrorMessage component="span" name={data?.name} />
                              </span>
                            </TableCell>
                          </TableRow>
                        );

                  default:
                    return (
                      <TableRow key={i}>
                        <TableCell>
                          <InputLabel htmlFor={data?.name}>
                            {data?.label} &nbsp;&nbsp;&nbsp;&nbsp;{" "}
                          </InputLabel>
                        </TableCell>
                        <TableCell>
                          <Field
                            as={TextField}
                            type={data?.type}
                            name={data?.name}
                            id={data?.name}
                            label={data?.label}
                            placeholder={data?.placeholder}
                          />
                          <span style={{ color: "red" }}>
                            <ErrorMessage component="span" name={data?.name} />
                          </span>
                        </TableCell>
                      </TableRow>
                    );
                }
              })}
              <TableRow>
                <TableCell>
                  <Button variant="outlined" type="submit">
                    Submit
                  </Button>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </Form>
      </Formik>
    </div>
  );
};

export default DynamicForm;
