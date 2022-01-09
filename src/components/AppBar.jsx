import React from "react";
import { View, StyleSheet, Text, ScrollView } from "react-native";
import Constants from "expo-constants";
import { Link } from "react-router-native";

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: "#24292e",
  },
  titleStyle: {
    padding: 20,
    color: "white",
    fontSize: 18,
  },
  // ...
});

const AppBar = () => {
  return (
    <View style={styles.container}>
      <ScrollView horizontal>
        <Link to={"/"}>
          <Text style={styles.titleStyle}>Repositories</Text>
        </Link>
        <Link to={"/login"}>
          <Text style={styles.titleStyle}>Sign in</Text>
        </Link>
      </ScrollView>
    </View>
  );
};

export default AppBar;
