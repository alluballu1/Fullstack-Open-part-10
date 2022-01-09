import React from "react";
import { StyleSheet, View } from "react-native";
import RepositoryList from "../components/RepositoryList";
import AppBar from "../components/AppBar";
import { Route, Switch, Redirect, NativeRouter } from "react-router-native";
import SignIn from "../components/SignIn";

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    flexShrink: 1,
    backgroundColor: "#e1e4e8",
  },
});
const Main = () => {
  return (
    <View style={styles.container}>
      <NativeRouter>
        <AppBar />
        <Switch>
          <Route path={"/"} exact>
            <RepositoryList />
          </Route>
          <Route path={"/login"} exact>
            <SignIn />
          </Route>
          <Redirect to={"/"} />
        </Switch>
      </NativeRouter>
    </View>
  );
};

export default Main;
