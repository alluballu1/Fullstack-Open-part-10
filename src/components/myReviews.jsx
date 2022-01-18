import React from "react";
import { FlatList, Text, View, StyleSheet, Button, Alert } from "react-native";
import { useHistory } from "react-router-native";
import useMyReview from "../hooks/useMyReview";
import useReview from "../hooks/useReview";
import useReviewDeletion from "../hooks/useReviewDeletion";

const MyReviews = () => {

    const [deletion] = useReviewDeletion() 
  const styles = StyleSheet.create({
    separator: {
      height: 10,
      padding: 5,
    },
    usernameStyle: {
      fontWeight: "bold",
    },
    ratingStyle: {
      margin: 5,
      borderRadius: 35 / 2,
      color: "blue",
      borderWidth: 3,
      borderColor: "blue",
      textAlign: "center",
      textAlignVertical: "center",
      height: 35,
      width: 35,
    },
  });
  const history = useHistory();
  const { userData, loading, refetch } = useMyReview();

  if (loading) {
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    );
  }

  const routerFunct = (id) => {
    history.push(`/item/${id}`);
  };

  const deletionFunct = (id) => {
    Alert.alert(
      "ALERT",
      `Do you want to delete the comment on the repository: ${id}?`,
      [
        {
          text: "Cancel",
          onPress: () => console.log("cancel pressed"),
          style: "cancel",
        },
        {
          text: "Delete",
          onPress: () => deletionHandler(id),
        },
      ]
    );
  };

  const deletionHandler = (id) => {
    deletion(id);
    refetch();
  };
  const data = userData
    ? userData?.authorizedUser?.reviews?.edges.map((element) => element.node)
    : [];

  const ItemSeparator = () => <View style={styles.separator} />;

  return (
    <FlatList
      data={data}
      ItemSeparatorComponent={ItemSeparator}
      renderItem={({ item, index }) => (
        <View style={{ backgroundColor: "white" }}>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              padding: 10,
            }}
          >
            <Text style={styles.ratingStyle}>{item.rating}</Text>
            <View style={{ width: "80%" }}>
              <Text style={styles.usernameStyle}>{item.user.username}</Text>
              <Text>{new Date(item.createdAt).toLocaleDateString()}</Text>
              <Text>{item.text}</Text>
            </View>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-evenly",
              padding: 5,
            }}
          >
            <Button
              onPress={() => routerFunct(item.repository.id)}
              color={"blue"}
              title="View Repository"
            />
            <Button
              onPress={() => deletionFunct(item.id)}
              color={"red"}
              title="Delete Review"
            />
          </View>
        </View>
      )}
    />
  );
};

export default MyReviews;
