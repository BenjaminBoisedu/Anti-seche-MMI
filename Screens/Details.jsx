import React from "react";

import {
  Text,
  Button,
  SafeAreaView,
  StyleSheet,
  View,
  ScrollView,
  Pressable,
  FlatList,
} from "react-native";
import StackNav from "../StackNav";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function Details({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.MainView}>
        <Text style={styles.text}>Choisissez votre lieu de triche</Text>
      </View>
      <ScrollView style={styles.gridContainer}>
        <View style={styles.gridContainerText}></View>
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
    flex: 0.1,
    backgroundColor: "#1A201F",
  },
  text: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    padding: 20,
  },
});
