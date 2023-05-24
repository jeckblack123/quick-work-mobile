import React, { useState } from "react";
import {
  View,
  TextInput,
  Button,
  Text,
  StyleSheet,
  Dimensions,
} from "react-native";

const LoginScreen = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    // Пример проверки, для демонстрации
    if (username === "admin" && password === "password") {
      console.log("Успешный вход в систему");
    } else {
      console.log("Неверное имя пользователя или пароль");
    }
  };

  return (
    <View style={[styles.container, { width, height }]}>
      <Text style={styles.appName}>QUICK WORK</Text>
      <TextInput
        style={styles.input}
        placeholder="Имя пользователя"
        value={username}
        onChangeText={(text) => setUsername(text)}
        placeholderTextColor="black"
      />
      <TextInput
        style={styles.input}
        placeholder="Пароль"
        secureTextEntry
        value={password}
        onChangeText={(text) => setPassword(text)}
        placeholderTextColor="black"
      />
      <Button title="Войти" onPress={handleLogin} color="black" />
      <Text style={styles.registerText}>
        Нет аккаунта? Зарегистрируйтесь здесь!
      </Text>
    </View>
  );
};
const { width, height } = Dimensions.get("window");
const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFA500", // Оранжевый фон
  },
  appName: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#000000", // Черный цвет для названия приложения
    marginBottom: 16,
  },
  input: {
    width: "80%",
    height: 40,
    borderColor: "white", // Черная граница для текстовых полей
    borderWidth: 1,
    marginBottom: 16,
    borderRadius: 10,
    paddingHorizontal: 10,
    backgroundColor: "white",
    color: "black", // Черный цвет для ввода текста
  },
  registerText: {
    marginTop: 16,
    color: "#000000", // Черный цвет для текста
  },
});

export default LoginScreen;
