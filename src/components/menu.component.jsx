import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Icon } from "react-native-elements";

const MenuComponent = ({ setMenuVisible }) => {
  const [selectedItem, setSelectedItem] = useState(null);

  const handlePress = (item) => {
    setSelectedItem(item);
    setMenuVisible(false);
  };

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Menu</Text>
        <TouchableOpacity onPress={() => setMenuVisible(false)}>
          <Icon name="close" type="material" color="#007aff" />
        </TouchableOpacity>
      </View>
      <View style={styles.itemContainer}>
        <TouchableOpacity
          style={[styles.item, selectedItem === "Home" && styles.selectedItem]}
          onPress={() => handlePress("Home")}
        >
          <Icon
            name="home"
            type="material"
            color={selectedItem === "Home" ? "#fff" : "#4d4d4d"}
          />
          <Text
            style={[
              styles.itemText,
              selectedItem === "Home" && styles.selectedItemText,
            ]}
          >
            Home
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.item,
            selectedItem === "Profile" && styles.selectedItem,
          ]}
          onPress={() => handlePress("Profile")}
        >
          <Icon
            name="person"
            type="material"
            color={selectedItem === "Profile" ? "#fff" : "#4d4d4d"}
          />
          <Text
            style={[
              styles.itemText,
              selectedItem === "Profile" && styles.selectedItemText,
            ]}
          >
            Profile
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.item,
            selectedItem === "Settings" && styles.selectedItem,
          ]}
          onPress={() => handlePress("Settings")}
        >
          <Icon
            name="settings"
            type="material"
            color={selectedItem === "Settings" ? "#fff" : "#4d4d4d"}
          />
          <Text
            style={[
              styles.itemText,
              selectedItem === "Settings" && styles.selectedItemText,
            ]}
          >
            Settings
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  titleContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#007aff",
  },
  itemContainer: {
    backgroundColor: "#f1f1f1",
    borderRadius: 5,
  },
  item: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  itemText: {
    fontSize: 16,
    marginLeft: 15,
    color: "#4d4d4d",
  },
  selectedItem: {
    backgroundColor: "#007aff",
  },
  selectedItemText: {
    color: "#fff",
  },
});

export default MenuComponent;
