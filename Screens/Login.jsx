import React from "react";
import { View, StyleSheet } from "react-native";
import Social from "../Social";
import LoginForm from "../LoginForm";

export default function Login({ navigation }) {
  return (
    <View style={styles.container}>
      <LoginForm navigation={navigation} />
      <Social />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1A201F",
    alignItems: "center",
    justifyContent: "center",
  },
});
