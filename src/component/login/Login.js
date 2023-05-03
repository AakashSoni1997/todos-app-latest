import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Heading } from "../heading/Heading";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const SignupSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required"),

  password: Yup.string()
    .min(6)
    .when("oldPassword", (oldPassword, field) =>
      oldPassword ? field.required() : field
    )
});

export const Login = () => {
  const navigate = useNavigate();
  const initialValues = {
    email: "",
    password: ""
  };

  const handleSubmit = (values) => {
    console.log(values, "values");

    axios
      .post("https://equityapi.groupfund.me/api/v1.1/users/login", values)
      .then((res) => {
        localStorage.setItem("token", res.data.token);
        if (res) {
          navigate("/profile");
        }
      });
  };

  return (
    <>
      <Heading text={"Login Form"} />
      <div className="signup-form">
        <Formik
          initialValues={initialValues}
          validationSchema={SignupSchema}
          onSubmit={handleSubmit}
          validateOnChange
        >
          {(formik) => (
            <Form>
              <label>Email</label>
              <Field name="email" />
              <ErrorMessage name="email" />

              <label>Password</label>
              <Field name="password" />
              <ErrorMessage name="password" />

              <button disabled={!formik.isValid} type="submit">
                Submit
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </>
  );
};
