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
        <View style={styles.gridContainerItem}>
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
        </View>
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
  gridContainer: {
    flex: 0.5,
  },
  gridContainerItem: {
    flex: 1,
    flexDirection: "row",
    alignItems: "stretch",
    justifyContent: "space-between",
    backgroundColor: "#1A201F",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    borderTopRightRadius: 50,
    borderBottomColor: "blue",
    borderBottomWidth: 5,
    elevation: 10,
  },
  textItem: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    padding: 20,
  },
  textItemNav: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    padding: 20,
  },
});
