export class RepositoryListContainer extends React.Component {
  renderHeader = () => {
    // this.props contains the component's props
    const props = this.props;

    // ...

    return (
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
    );
  };

  render() {
    return (
        <View style={{ height: "87.5%" }}>
        <FlatList
          data={anotherTest}
          ItemSeparatorComponent={ItemSeparator}
          ListHeaderComponentStyle={{ padding: 20 }}
          ListHeaderComponent={this.renderHeader}
          renderItem={({ item, index }) => (
            <TouchableOpacity onPress={() => routerFunct(item.id)}>
              <ListItem index={index} item={item} />
            </TouchableOpacity>
          )}
        />
      </View>
    );
  }
}
