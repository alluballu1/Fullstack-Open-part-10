import React from "react";
import { Button, FlatList, StyleSheet, Text, View } from "react-native";

const ReviewList = (props) => {
  const data = props.reviews.reviews.edges.map((element) => element.node);
  const styles = StyleSheet.create({
    separator: {
      height: 10,
      padding: 10,
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

  const ItemSeparator = () => <View style={styles.separator} />;

  return (
    <FlatList
      data={data}
      ItemSeparatorComponent={ItemSeparator}
      renderItem={(item, index) => (
        <View
          style={{ display: "flex", flexDirection: "row" }}
        >
          <Text style={styles.ratingStyle}>{item.item.rating}</Text>
          <View style={{width:"80%"}}>
            <Text style={styles.usernameStyle}>{item.item.user.username}</Text>
            <Text>{new Date(item.item.createdAt).toLocaleDateString()}</Text>
            <Text>{item.item.text}</Text>
          </View>
        </View>
      )}
    />
  );
};

export default ReviewList;
