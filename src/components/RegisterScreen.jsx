import React from "react";
import { Formik } from "formik";
import { useHistory } from "react-router-native";
import LoginForm from "./LoginForm";
import * as yup from "yup";
import RegisterForm from "./RegisterForm";
import useRegister from "../hooks/useRegister";
import useSignIn from "../hooks/useSignIn";

const initialValues = {
  username: "",
  password: "",
  PasswordConf: "",
};

const validationSchema = yup.object().shape({
  username: yup.string().min(1, "Username is too short").max(30, "Username is too long").required("Username is required"),
  password: yup.string().min(5, "Password is too short").max(50, "Password is too long").required("Password is required"),
  PasswordConf: yup.string().oneOf([yup.ref('password'), null], 'Passwords do not match').required("Password confirmation is required"),
});

const RegisterHandler = ({ onSubmit }) => {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {({ handleSubmit }) => <RegisterForm onSubmit={handleSubmit} />}
    </Formik>
  );
};

const RegisterScreen = () => {
  let history = useHistory();
  const [register] = useRegister();
  const [signIn] = useSignIn()
  const onSubmit = async (values) => {
    const { username, password } = values;
    try {
      const { data } = await register({ username, password });
      const { loginData } = await signIn({ username, password });
      history.push("/");
    } catch (e) {
      console.log(e);
    }
  };

  return <RegisterHandler onSubmit={onSubmit} />;
};

export default RegisterScreen;
