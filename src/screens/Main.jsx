import React from "react";
import { StyleSheet, View } from "react-native";
import RepositoryList from "../components/RepositoryList";
import AppBar from "../components/AppBar";
import { Route, Switch, Redirect, NativeRouter } from "react-router-native";
import SignIn from "../components/SignIn";
import RepositoryItem from "../components/RepositoryItem";
import ReviewScreen from "../components/ReviewScreen";
import RegisterScreen from "../components/RegisterScreen";
import MyReviews from "../components/myReviews";
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
          <Route path={"/review"} exact>
            <ReviewScreen />
          </Route>
          <Route path={"/item/:id"} exact>
            <RepositoryItem />
          </Route>
          <Route path={"/register"} exact>
            <RegisterScreen />
          </Route>
          <Route path={"/my_review"} exact>
            <MyReviews />
          </Route>
          <Redirect to={"/"} />
        </Switch>
      </NativeRouter>
    </View>
  );
};

export default Main;
