import React from "react";

import {
  Text,
  Button,
  SafeAreaView,
  StyleSheet,
  View,
  ScrollView,
  Pressable,
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
        <View style={styles.containerItem}>
          <Text style={styles.textItem}>Audiovisuel</Text>
          <Pressable onPress={() => navigation.navigate("Chapitres")}>
            <Text style={styles.textItemNav}>
              <Ionicons name="arrow-forward" size={24} />
            </Text>
          </Pressable>
        </View>
        <View style={styles.containerItem}>
          <Text style={styles.textItem}>Web</Text>
          <Pressable onPress={() => navigation.navigate("Chapitres")}>
            <Text style={styles.textItemNav}>
              <Ionicons name="arrow-forward" size={24} />
            </Text>
          </Pressable>
        </View>
        <View style={styles.containerItem}>
          <Text style={styles.textItem}>Communication</Text>
          <Pressable onPress={() => navigation.navigate("Chapitres")}>
            <Text style={styles.textItemNav}>
              <Ionicons
                name="arrow-forward"
                size={24}
                onPress={() => navigation.navigate("Chapitres")}
              />
            </Text>
          </Pressable>
        </View>
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
  gridContainer: {
    flex: 1,
    width: 400,
    flexDirection: "column",
    padding: 10,
    margin: 10,
    flexWrap: "nowrap",
    backgroundColor: "white",
  },
  containerItem: {
    flex: 1,
    backgroundColor: "#1A201F",
    alignItems: "center",
    justifyContent: "center",
    height: 100,
    margin: 10,
    borderRadius: 10,
    borderTopRightRadius: 50,
    borderBottomLeftRadius: 50,
    borderColor: "blue",
    borderWidth: 5,
  },
  textItem: {
    color: "white",
    fontSize: 48,
    fontWeight: "bold",
    textAlign: "center",
    textShadowColor: "blue",
    textShadowOffset: { width: 10, height: 10 },
    textShadowRadius: 10,
  },
  gridItem: {
    flex: 1,
    backgroundColor: "#1A201F",
    alignItems: "center",
    justifyContent: "center",
  },
  textItemNav: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    padding: 20,
  },
});
