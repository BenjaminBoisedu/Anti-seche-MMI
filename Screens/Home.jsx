import React from "react";
import { SafeAreaView, Text, StyleSheet, View, ScrollView } from "react-native";
import StackNav from "../StackNav";
export default function Home({ navigation }) {
  const getMoviesFromApiAsync = async () => {
    try {
      const response = await fetch("https://reactnative.dev/movies.json");
      const json = await response.json();
      return json.movies;
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.MainView}>
        <Text style={styles.text}>
          Bienvenue sur l'application Anti-sèche MMI
        </Text>
        <View style={styles.contentContainer}>
          <View style={styles.gridContainer}>
            <View style={styles.gridItem}>
              <Text style={styles.text}>Chapitres</Text>
            </View>
            <View style={styles.gridItem2}>
              <Text style={styles.text}>Quiz</Text>
            </View>
            <View style={styles.gridItem3}>
              <Text style={styles.text}>A propos</Text>
            </View>
          </View>
        </View>
      </ScrollView>
      <StackNav navigation={navigation} />
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
  },
  text: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    padding: 20,
  },
  contentContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
