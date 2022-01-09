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
    borderRadius: 50,
  },
  buttonTextStyle: {
    color: "white",
    fontWeight: "bold",
  },
});

const LoginForm = ({ onSubmit }) => {
  return (
    <View style={styles.containerStyle}>
      <Text style={styles.titleStyle}>Sign in</Text>
      <View style={styles.inputContainerStyle}>
        <FormikTextInput
          style={styles.inputStyles}
          name="username"
          placeholder="Username"
        />
      </View>
      <View style={styles.inputContainerStyle}>
        <FormikTextInput
          style={styles.inputStyles}
          name="password"
          placeholder="Password"
        />
      </View>
      <View>
        <Pressable style={styles.buttonStyle} onPress={onSubmit}>
          <Text style={styles.buttonTextStyle}>Log in</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default LoginForm;
