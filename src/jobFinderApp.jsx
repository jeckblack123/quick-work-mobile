import React, { useState } from "react";
import {
  StyleSheet,
  SafeAreaView,
  View,
  Text,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { SearchBar, Card, Button, CheckBox, Icon } from "react-native-elements";
import MenuComponent from "./components/menu.component";
import { categoryData } from "./categories";
import CategoryList from "./components/categoryList.component";
import LoginScreen from "./screens/loginScreen";

const jobData = [
  {
    id: "1",
    title: "Уборщик",
    company: 'ООО "Чистый дом"',
    location: "Москва",
    category: "Уборка",
    salary: "25 000 руб.",
    date: "01.05.2023",
    description:
      "Требуется уборщик в частный дом. Обязанности: уборка дома, приготовление пищи, уход за растениями. Требования: опыт работы от 3 лет, ответственность, чистоплотность.",
  },
  {
    id: "2",
    title: "Менеджер по продажам",
    company: 'ООО "Продукты питания"',
    location: "Санкт-Петербург",
    category: "Продажи",
    salary: "50 000 руб.",
    date: "15.05.2023",
    description:
      "Требуется менеджер по продажам в компанию, занимающуюся производством и продажей продуктов питания. Обязанности: поиск новых клиентов, продажа товаров, работа с документацией. Требования: опыт работы от 2 лет, знание продуктов питания, коммуникабельность.",
  },
  {
    id: "3",
    title: "Программист",
    company: 'ООО "Разработчики программ"',
    location: "Казань",
    category: "IT",
    salary: "80 000 руб.",
    date: "20.05.2023",
    description:
      "Требуется программист на полный рабочий день в IT-компанию. Обязанности: разработка и сопровождение программного обеспечения. Требования: знание языков программирования (Java, C++, Python), опыт работы от 3 лет, ответственность.",
  },
  {
    id: "4",
    title: "Медсестра",
    company: 'ГБУЗ "Городская поликлиника"',
    location: "Сочи",
    category: "Медицина",
    salary: "35 000 руб.",
    date: "10.05.2023",
    description:
      "Требуется медсестра на полный рабочий день в городскую поликлинику. Обязанности: оказание медицинской помощи пациентам, работа с медицинской документацией. Требования: образование медицинского профиля, опыт работы от 2 лет, ответственность.",
  },
];

const JobFinderApp = () => {
  const [searchText, setSearchText] = useState("");
  const [filteredData, setFilteredData] = useState(jobData);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [menuVisible, setMenuVisible] = useState(false);

  const handleSearch = (text) => {
    const newData = jobData.filter((item) => {
      const itemData = item.title.toUpperCase();
      const textData = text.toUpperCase();
      return itemData.indexOf(textData) > -1;
    });

    setSearchText(text);
    setFilteredData(newData);
  };

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  const handleFilter = (category) => {
    console.log(category);
    const categories = [...selectedCategories.title];
    if (categories.includes(category)) {
      const index = categories.indexOf(category);
      categories.splice(index, 1);
    } else {
      categories.push(category);
    }
    setSelectedCategories(categories);

    const newData = jobData.filter((item) => {
      if (categories.length === 0) {
        return true;
      }
      return categories.includes(item.category);
    });

    setFilteredData(newData);
  };

  const renderItem = ({ item }) => (
    <Card>
      <Text style={styles.jobTitle}>{item.title}</Text>
      <Text style={styles.jobLocation}>{item.location}</Text>
      <Text style={styles.jobCompany}>{item.company}</Text>
      <Text style={styles.jobSalary}>{item.salary}</Text>
      <Button title="Откликнуться" />
    </Card>
  );

  return (
    <SafeAreaView style={styles.container}>
      <LoginScreen></LoginScreen>
      {/* <View style={styles.header}>
        <View style={styles.menuIcon}>
          <TouchableOpacity onPress={toggleMenu}>
            <Icon name="menu" type="material" color="#fff" />
          </TouchableOpacity>
        </View>
        <View style={styles.searchBar}>
          <SearchBar
            containerStyle={styles.searchContainer}
            inputContainerStyle={styles.searchInputContainer}
            inputStyle={styles.searchInput}
            placeholder="Search"
            onChangeText={handleSearch}
            value={searchText}
          />
        </View>
      </View>
      <View style={styles.filterContainer}>
        <Text style={styles.filterTitle}>Категории:</Text>
        <CategoryList data={categoryData} onPress={handleFilter} />
      </View>
      <FlatList
        data={filteredData}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.flatListContainer}
      />
      {menuVisible && <MenuComponent setMenuVisible={setMenuVisible} />} */}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    flexDirection: "row",
    backgroundColor: "orange",
    alignItems: "center",
    paddingHorizontal: 15,
    paddingTop: 50,
    paddingBottom: 10,
  },
  searchContainer: {
    backgroundColor: "transparent",
    borderTopWidth: 0,
    borderBottomWidth: 0,
    padding: 0,
  },
  searchInputContainer: {
    backgroundColor: "#EDEDED",
  },
  searchInput: {
    fontSize: 16,
  },
  filterContainer: {
    backgroundColor: "#F2F2F2",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#CCCCCC",
  },
  filterTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 10,
  },
  filterListContainer: {
    paddingBottom: 10,
  },
  flatListContainer: {
    padding: 10,
  },
  jobTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
  jobLocation: {
    fontSize: 16,
    marginBottom: 5,
  },
  searchBar: {
    flex: 6,
  },
  jobCompany: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
  },
  menuIcon: {
    flex: 1,
  },
  jobSalary: {
    fontSize: 16,
    color: "#666666",
    marginBottom: 10,
  },
});

export default JobFinderApp;
