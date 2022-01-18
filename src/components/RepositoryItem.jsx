import React, { useEffect } from "react";
import { Button, Linking, Text, View } from "react-native";
import { useHistory } from "react-router-native";
import useRepository from "../hooks/useRepository";
import ListItem from "./ListItem";
import ReviewList from "./ReviewList";
const RepositoryItem = (props) => {
  const history = useHistory();
  let currentPathId = history.location.pathname.slice(6);
  const { repository, loading } = useRepository(currentPathId);
  if (loading) {
    return (
      <View>
        <Text>...Loading</Text>
      </View>
    );
  }
  return (
    <View style={{ height: "87.75%" }}>
      <ListItem item={repository.repository} />
      <Button
        onPress={() => Linking.openURL(repository.repository.url)}
        title="Open in GitHub"
      />

      <ReviewList reviews={repository.repository} />
    </View>
  );
};

export default RepositoryItem;
