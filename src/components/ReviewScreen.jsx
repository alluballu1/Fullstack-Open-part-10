import React from "react";
import { View, Text } from "react-native";
import * as yup from "yup";
import { useHistory } from "react-router-native";
import { Formik } from "formik";
import useReview from "../hooks/useReview";
import RevieForm from "./ReviewForm";

const initialValues = {
  repositoryName: "",
  ownerName: "",
  rating: "",
  text: "",
};

const validationSchema = yup.object().shape({
  repositoryName: yup.string().required("Repository owner name is required"),
  ownerName: yup.string().required("Repository name is required"),
  rating: yup.string().required("Rating is required"),
  text: yup.string().required("Review is required"),
});

const LoginHandler = ({ onSubmit }) => {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {({ handleSubmit }) => <RevieForm onSubmit={handleSubmit} />}
    </Formik>
  );
};

const ReviewScreen = () => {
  let history = useHistory();
  const [review] = useReview();
  const onSubmit = async (values) => {
    const { repositoryName, ownerName, rating, text } = values;
    try {
      const { data } = await review({ repositoryName, ownerName, rating, text});

      history.push("/");
    } catch (e) {
      console.log(e);
    }
  };

  return <LoginHandler onSubmit={onSubmit} />;
};

export default ReviewScreen;
