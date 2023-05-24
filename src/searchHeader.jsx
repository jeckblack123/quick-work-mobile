import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { Header, SearchBar } from "react-native-elements";

const SearchHeader = ({ onSearch }) => {
  const [searchText, setSearchText] = useState("");

  const handleSearch = () => {
    onSearch(searchText);
  };

  return (
    <Header
      containerStyle={styles.headerContainer}
      leftComponent={{ icon: "menu", color: "#fff" }}
      centerComponent={{ text: "My App", style: styles.headerTitle }}
      rightComponent={{ icon: "search", color: "#fff", onPress: handleSearch }}
    >
      <SearchBar
        containerStyle={styles.searchContainer}
        inputContainerStyle={styles.searchInputContainer}
        inputStyle={styles.searchInput}
        placeholder="Search"
        onChangeText={setSearchText}
        onSubmitEditing={handleSearch}
        value={searchText}
      />
    </Header>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: "orange",
  },
  headerTitle: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
  },
  searchContainer: {
    backgroundColor: "#fff",
    borderTopWidth: 0,
    borderBottomWidth: 0,
    paddingHorizontal: 10,
  },
  searchInputContainer: {
    backgroundColor: "#f2f2f2",
  },
  searchInput: {
    fontSize: 16,
  },
});

export default SearchHeader;
