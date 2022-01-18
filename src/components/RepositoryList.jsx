import React, { useState } from "react";
import {
  FlatList,
  View,
  StyleSheet,
  TouchableOpacity,
  Button,
  TextInput,
} from "react-native";
import { useHistory } from "react-router-native";
import useRepositories from "../hooks/useRepositories";
import ListItem from "./ListItem";
import Text from "./Text";
import { Picker } from "@react-native-picker/picker";
import { useDebounce } from "use-debounce";

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

const ItemSeparator = () => <View style={styles.separator} />;

export class RepositoryListContainer extends React.Component {
  renderHeader = () => {
    const props = this.props;
    return (
      <View style={{marginBottom:5}}>
        <TextInput
          onChangeText={(val) => this.props.setText(val)}
          placeholder="Filter"
          style={{
            backgroundColor: "white",
            padding: 5,
            borderRadius: 10,
            marginBottom: 5,
          }}
        />
        <Picker
          style={{ backgroundColor: "white" }}
          selectedValue={props.selectedFilter}
          onValueChange={(itemValue, itemIndex) => {
            this.props.setSelectedFilter(itemValue);
          }}
        >
          {props.filters.map((element, index) => {
            return (
              <Picker.Item key={index} label={element.label} value={index} />
            );
          })}
        </Picker>
      </View>
    );
  };

  render() {
    const onEndReach = this.props.onEndReach;
    const repositories = this.props.repositories;
    const repositoryNodes = repositories;
    return (
      <FlatList
        ListHeaderComponent={this.renderHeader}
        testID="repositoryItem"
        data={repositoryNodes}
        keyExtractor={({ id }) => id}
        renderItem={({ item, index }) => (
          <TouchableOpacity onPress={() => this.props.routerFunct(item.id)}>
            <ListItem index={index} item={item} />
          </TouchableOpacity>
        )}
        ItemSeparatorComponent={ItemSeparator}
        onEndReached={onEndReach}
        onEndReachedThreshold={0.5}
      />
    );
  }
}

const RepositoryList = ({ tempdata }) => {
  const filters = [
    { label: "Latest repositories", value: { orderBy: "CREATED_AT" } },
    {
      label: "Highest rated repositories",
      value: { orderBy: "RATING_AVERAGE", orderDirection: "DESC" },
    },
    {
      label: "Lowest rated repositories",
      value: { orderBy: "RATING_AVERAGE", orderDirection: "ASC" },
    },
  ];
  const onEndReach = () => {
    fetchMore()
  };

  const [selectedFilter, setSelectedFilter] = useState(1);
  const [text, setText] = useState("");
  const [value] = useDebounce(text, 500);
  const history = useHistory();
  const routerFunct = (id) => {
    history.push(`/item/${id}`);
  };

  const { repositories, loading, fetchMore } = useRepositories(
    filters[selectedFilter].value,
    value,
    6,
  );

  if (loading) {
    return (
      <View>
        <Text>Loading</Text>
      </View>
    );
  }

  const anotherTest = tempdata
    ? tempdata.edges.map((element) => element.node)
    : repositories.repositories.edges.map((element) => element.node);

  return (
    <RepositoryListContainer
      routerFunct={(id) => routerFunct(id)}
      repositories={anotherTest}
      selectedFilter={selectedFilter}
      setSelectedFilter={setSelectedFilter}
      filters={filters}
      setText={setText}
      onEndReach={onEndReach}
    />
    /* <View style={{ height: "87.5%" }}>
      <FlatList
        data={anotherTest}
        ItemSeparatorComponent={ItemSeparator}
        ListHeaderComponentStyle={{ padding: 20 }}
        ListHeaderComponent={
          <View>
            <TextInput onChangeText={(val) => setText(val)} placeholder="Filter" style={{backgroundColor:"white", padding:5, borderRadius:10, marginBottom:5}}/>
            <Picker style={{backgroundColor:"white"}}
              selectedValue={selectedFilter}
              onValueChange={(itemValue, itemIndex) => {
                setSelectedFilter(itemValue);
              }}
            >
              {filters.map((element, index) => {
                return (
                  <Picker.Item
                    key={index}
                    label={element.label}
                    value={index}
                  />
                );
              })}
            </Picker>
          </View>
        }
        renderItem={({ item, index }) => (
          <TouchableOpacity onPress={() => routerFunct(item.id)}>
            <ListItem index={index} item={item} />
          </TouchableOpacity>
        )}
      />
    </View> */
  );
};

export default RepositoryList;
