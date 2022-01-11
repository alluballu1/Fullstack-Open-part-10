
import React from "react";
import { NativeRouter } from "react-router-native";

import { ApolloProvider } from "@apollo/client";
import Main from "./src/screens/Main.jsx";
import createApolloClient from "./src/utils/apolloClient";
import AuthStorage from "./src/utils/authStorage.js";
import AuthStorageContext from './src/contexts/AuthStorageContext';

const authStorage = new AuthStorage();

const apolloClient = createApolloClient(authStorage);

export default function App() {
  return (
    <>
      <NativeRouter>
        <ApolloProvider client={apolloClient}>
        <AuthStorageContext.Provider value={authStorage}>
            <Main />
            </AuthStorageContext.Provider>
        </ApolloProvider>
      </NativeRouter>
    </>
  );
}
