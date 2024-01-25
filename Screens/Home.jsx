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
        <View style={styles.contentContainer}></View>
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
  gridContainer: {
    flex: 0.5,
    flexDirection: "row",
    alignItems: "stretch",
    justifyContent: "space-between",
    padding: 10,
    flexWrap: "wrap",
  },
  gridItem: {
    flex: 1,
    backgroundColor: "#1A201F",
    alignItems: "center",
    justifyContent: "center",
    width: "50%",
    margin: 10,
    padding: 10,
    borderRadius: 10,
    borderTopRightRadius: 50,
    borderTopColor: "blue",
    borderTopWidth: 5,
    borderRightColor: "blue",
    borderRightWidth: 5,
    elevation: 5,
    height: 300,
    overflow: "hidden",
  },
  gridItem2: {
    flex: 1,
    backgroundColor: "#1A201F",
    alignItems: "center",
    justifyContent: "center",
    width: 400,
    margin: 10,
    padding: 10,
    borderRadius: 10,
    borderTopLeftRadius: 50,
    borderTopColor: "blue",
    borderTopWidth: 5,
    borderLeftColor: "blue",
    borderLeftWidth: 5,
    elevation: 5,
    height: 250,
    overflow: "hidden",
  },
  gridItem3: {
    backgroundColor: "#1A201F",
    alignItems: "center",
    justifyContent: "center",
    width: 400,
    borderRadius: 10,
    borderBottomLeftRadius: 50,
    borderBottomColor: "blue",
    borderBottomWidth: 5,
    borderLeftColor: "blue",
    borderLeftWidth: 5,
    elevation: 5,
    marginTop: 10,
  },
});
