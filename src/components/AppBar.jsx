import React, { useContext } from "react";
import {
  View,
  StyleSheet,
  Text,
  ScrollView,
  TouchableOpacity,
  Button,
} from "react-native";
import Constants from "expo-constants";
import { Link } from "react-router-native";
import { useApolloClient, useQuery } from "@apollo/client";
import { AUTHORIZED_USER } from "../sevices/queries";
import AuthStorageContext from "../contexts/AuthStorageContext";
import { useHistory } from "react-router-native";
import useAuthorizedUser from "../hooks/useAuthorizedUser";

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: "#24292e",
  },
  titleStyle: {
    padding: 20,
    color: "white",
  },
  // ...
});
const AppBar = () => {
  const apolloClient = useApolloClient();
  const history = useHistory();
  const { authorizedUser } = useAuthorizedUser();
  const authStorage = useContext(AuthStorageContext);

  const onSignOut = async () => {
    await authStorage.removeAccessToken();
    apolloClient.resetStore();
    history.push("/");
  };
  return (
    <View style={styles.container}>
      <ScrollView horizontal>
        <Link to={"/"}>
          <Text style={styles.titleStyle}>Repositories</Text>
        </Link>

        {authorizedUser && (
          <Link to={"/review"}>
            <Text style={styles.titleStyle}>Create a review</Text>
          </Link>
        )}
        {authorizedUser && (
          <Link to={"/my_review"}>
            <Text style={styles.titleStyle}>My reviews</Text>
          </Link>
        )}
        {!authorizedUser ? (
          <Link to={"/login"}>
            <Text style={styles.titleStyle}>Sign in</Text>
          </Link>
        ) : (
          <TouchableOpacity onPress={onSignOut}>
            <Text style={styles.titleStyle}>Sign out</Text>
          </TouchableOpacity>
        )}
        {!authorizedUser && (
          <Link to={"/register"}>
            <Text style={styles.titleStyle}>Register</Text>
          </Link>
        )}
      </ScrollView>
    </View>
  );
};

export default AppBar;
