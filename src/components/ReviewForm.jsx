import React from "react";
import { Pressable, StyleSheet, View } from "react-native";
import FormikTextInput from "./FormikTextInput";
import Text from "./Text";

const styles = StyleSheet.create({
  containerStyle: {
    display: "flex",
    alignContent: "center",
    marginTop: "25%",
  },
  inputContainerStyle: {
    backgroundColor: "white",
    width: "80%",
    alignSelf: "center",
    marginBottom: 10,
  },
  inputStyles: {
    padding: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "grey",
    width: "100%",
  },
  titleStyle: {
    fontSize: 36,
    alignSelf: "center",
    borderBottomWidth: 10,
    borderColor: "grey",
    marginBottom: 25,
    backgroundColor: "white",
    padding: 10,
    borderRadius: 10,
    width: "90%",
    textAlign: "center",
    borderTopWidth: 5,
  },
  buttonStyle: {
    alignSelf: "center",
    backgroundColor: "grey",
    paddingVertical: 15,
    minWidth: 100,
    alignItems: "center",
    borderRadius: 10,
  },
  buttonTextStyle: {
    color: "white",
      fontWeight: "bold",
    padding:5
  },
});

const RevieForm = ({ onSubmit }) => {
  return (
    <View style={styles.containerStyle}>
      <View style={styles.inputContainerStyle}>
        <FormikTextInput
          style={styles.inputStyles}
          name="ownerName"
          placeholder="Repository owner name"
          testID ="usernameField"
        />
      </View>
      <View style={styles.inputContainerStyle}>
        <FormikTextInput
          style={styles.inputStyles}
          name="repositoryName"
          placeholder="Repository name"
          testID="passwordField"
        />
      </View>
          <View>
          <View style={styles.inputContainerStyle}>
        <FormikTextInput
          style={styles.inputStyles}
          name="rating"
          placeholder="Rating between 0 and 100"
          testID ="usernameField"
        />
      </View>
      <View style={styles.inputContainerStyle}>
        <FormikTextInput
          style={styles.inputStyles}
          name="text"
          placeholder="Review"
          testID="passwordField"
        />
      </View>
        <Pressable style={styles.buttonStyle} onPress={onSubmit}>
          <Text style={styles.buttonTextStyle}>Create a review</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default RevieForm;
