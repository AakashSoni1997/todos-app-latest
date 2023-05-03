import React from "react";
import { useNavigate } from "react-router-dom";
import "../../styles.css";
import { Heading } from "../heading/Heading";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { CustomCheck } from "../customCheck/CustomCheck";
import axios from "axios";

const SignupSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  lastName: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  phoneNumber: Yup.number()
    .typeError("That doesn't look like a phone number")
    .positive("A phone number can't start with a minus")
    .integer("A phone number can't include a decimal point")
    .min(8)
    .required("A phone number is required"),
  password: Yup.string()
    .min(6)
    .when("oldPassword", (oldPassword, field) =>
      oldPassword ? field.required() : field
    ),
  passwordConfirm: Yup.string().when("password", (password, field) =>
    password ? field.required().oneOf([Yup.ref("password")]) : field
  ),
  acceptTerms: Yup.boolean().oneOf(
    [true],
    "You must accept the terms and conditions"
  )
});

export const SignUp = () => {
  const navigate = useNavigate();
  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    password: "",
    passwordConfirm: "",
    acceptTerms: ""
  };

  const handleSubmit = (values) => {
    if (values) {
      const signUpSubmit = async () => {
        try {
          const result = axios.post(
            `https://equityapi.groupfund.me/api/v1.1/users/signup`,
            values
          );
          if (result) {
            navigate("/login");
          }
        } catch (error) {
          console.log(error);
        }
      };
      signUpSubmit();
    }
  };

  return (
    <>
      <Heading text={"SignUp Form"} />
      <div className="signup-form">
        <Formik
          initialValues={initialValues}
          validationSchema={SignupSchema}
          onSubmit={handleSubmit}
          validateOnChange
        >
          {(formik) => (
            <Form>
              <label>First Name</label>
              <Field name="firstName" />
              <ErrorMessage name="firstName" />
              <label>Last Name</label>
              <Field name="lastName" />
              <ErrorMessage name="lastName" />
              <label>Email</label>
              <Field name="email" />
              <ErrorMessage name="email" />
              <label>Phone Number</label>
              <Field name="phoneNumber" />
              <ErrorMessage name="phoneNumber" />
              <label>Password</label>
              <Field name="password" />
              <ErrorMessage name="password" />
              <label>Confirm Password</label>
              <Field name="passwordConfirm" />
              <ErrorMessage name="passwordConfirm" />
              <CustomCheck />
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

//  - First Name - [firstName]
//  - Last Name - [lastName]
//  - Email - [email]
//  - Phone Number - [phoneNumber]
//  - Password - [password]
//  - Confirm Password - [passwordConfirm]
//  - Accept Terms & Conditions - [acceptTerms]
