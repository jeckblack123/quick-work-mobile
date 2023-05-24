import React, { useState } from "react";
import { StyleSheet, View, FlatList } from "react-native";
import CategoryCard from "./category.component";
import { categoryData } from "../categories";

export default function CategoryList({ data, onPress }) {
  const [filteredData, setFilteredData] = useState(data);

  const handleCategoryPress = (categoryId) => {
    const filtered = categoryData.filter((item) => item.title === categoryId);
    setFilteredData(filtered);
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={filteredData}
        keyExtractor={(item) => item.id.toString()}
        horizontal={true}
        onPress={() => onPress(item)}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <CategoryCard
            id={item.id}
            title={item.title}
            icon={item?.icon}
            color={item.color}
            onPress={() => handleCategoryPress(item.title)}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 16,
  },
});
