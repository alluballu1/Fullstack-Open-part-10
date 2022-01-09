import React from "react";
import { Formik } from "formik";
import { useHistory } from "react-router-native";
import LoginForm from "./LoginForm";
import * as yup from "yup";

const initialValues = {
  username: "",
  password: "",
};

const validationSchema = yup.object().shape({
  username: yup.string().required("Weight is required"),
  password: yup.string().required("Height is required"),
});

const LoginHandler = ({ onSubmit }) => {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {({ handleSubmit }) => <LoginForm onSubmit={handleSubmit} />}
    </Formik>
  );
};

const Login = () => {
  let history = useHistory();
  const onSubmit = (values) => {
    console.log(values);
    history.push("/");
  };

  return <LoginHandler onSubmit={onSubmit} />;
};

export default Login;
