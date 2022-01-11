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
  const apolloClient = useApolloClient();
  const { data } = useQuery(AUTHORIZED_USER);
  const history = useHistory();
  const authorizedUser = data ? data.authorizedUser : null;
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

        {!authorizedUser ? (
          <Link to={"/login"}>
            <Text style={styles.titleStyle}>Sign in</Text>
          </Link>
        ) : (
          <TouchableOpacity onPress={onSignOut}>
            <Text style={styles.titleStyle}>Sign out</Text>
          </TouchableOpacity>
        )}
      </ScrollView>
    </View>
  );
};

export default AppBar;
