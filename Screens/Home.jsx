import React from "react";
import { SafeAreaView, Text, StyleSheet, View } from "react-native";
export default function Home({ navigation, isDarkMode }) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.MainView}>
        <Text style={styles.text}>
          Bienvenue sur l'application Anti-sèche MMI
        </Text>
      </View>
      <View style={styles.TabNavContainer}>
        <View style={styles.TabNav}>
          <Text
            style={styles.textNav}
            onPress={() => navigation.navigate("Details")}
          >
            Details
          </Text>
        </View>
        <View style={styles.TabNav}>
          <Text
            style={styles.textNav}
            onPress={() => navigation.navigate("Login")}
          >
            Login
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
}
/**
 * Styles for the Home component.
 */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1A201F",
    alignItems: "center",
    justifyContent: "space-around",
  },
  MainView: {
    flex: 1,
    backgroundColor: "#1A201F",
    alignItems: "center",
    justifyContent: "space-around",
  },
  text: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    padding: 20,
  },
  TabNavContainer: {
    flex: 0.3,
    backgroundColor: "#ffffff",
    alignItems: "center",
    justifyContent: "space-around",
    flexDirection: "row",
  },
  TabNav: {
    flex: 1,
    // backgroundColor: "#1A201F",²
    alignItems: "center",
    justifyContent: "space-around",
    flexDirection: "row",
  },
  textNav: {
    color: "#1A201F",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    padding: 20,
  },
});
