import React from "react";
import { Button, Image, StyleSheet, Text, View } from "react-native";
const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
  languageStyle: {
    backgroundColor: "#0366d6",
    padding: 5,
    alignSelf: "flex-start",
    marginTop: 10,
    borderRadius: 5,
    color: "white",
  },
});

const ListItem = ({ item, index }) => {
  return (
    <View
      testID="repositoryItem"
      style={{ backgroundColor: "white", padding: 10 }}
      key={index}
    >
      <View style={{ display: "flex" }}>
        <View style={{ flexDirection: "row", width: "100%" }}>
          <Image
            style={{ width: 60, height: 60, borderRadius: 5 }}
            source={{ uri: item.ownerAvatarUrl }}
          />
          <View style={{ flexDirection: "column", padding: 5, width: "90%" }}>
            <Text
              testID="fullname"
              style={{ fontWeight: "bold", fontSize: 16 }}
            >
              {item.fullName}
            </Text>
            <Text testID="description" style={{ marginTop: 10 }}>
              {item.description}
            </Text>
            <View>
              <Text testID="language" style={styles.languageStyle}>
                {item.language}
              </Text>
            </View>
          </View>
        </View>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-evenly",
            width: "100%",
          }}
        >
          <View style={{ flexDirection: "column", alignItems: "center" }}>
            <Text fontWeight={"bold"}>
              {item.stargazersCount > 1000
                ? Math.round(item.stargazersCount / 100) / 10 + "k"
                : item.stargazersCount}
            </Text>
            <Text>Stars</Text>
          </View>

          <View style={{ flexDirection: "column", alignItems: "center" }}>
            <Text fontWeight={"bold"}>
              {item.forksCount > 1000
                ? Math.round(item.forksCount / 100) / 10 + "k"
                : item.forksCount}
            </Text>
            <Text>Forks</Text>
          </View>

          <View style={{ flexDirection: "column", alignItems: "center" }}>
            <Text testID="reviews" fontWeight={"bold"}>
              {item.reviewCount > 1000
                ? Math.round(item.stargazersCount / 100) / 10 + "k"
                : item.reviewCount}
            </Text>
            <Text>Reviews</Text>
          </View>

          <View style={{ flexDirection: "column", alignItems: "center" }}>
            <Text testID="rating" fontWeight={"bold"}>
              {item.ratingAverage > 1000
                ? Math.round(item.ratingAverage / 1000) / 10 + "k"
                : item.ratingAverage}
            </Text>
            <Text>Ratings</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default ListItem;
