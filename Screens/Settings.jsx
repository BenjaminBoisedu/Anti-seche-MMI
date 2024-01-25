import React from "react";
import { View, Text, SafeAreaView, StyleSheet, ScrollView } from "react-native";
import StackNav from "../StackNav";

export default function Settings({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.MainView}>
        <Text style={styles.text}>Setting Page</Text>
        <View style={styles.contentContainer}></View>
      </ScrollView>
      <StackNav navigation={navigation} />
    </SafeAreaView>
  );
}

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
    height: 100,
    margin: 1,
  },
  contentContainer: {
    flex: 1,
    backgroundColor: "#1A201F",
    alignItems: "center",
    justifyContent: "center",
  },
});
