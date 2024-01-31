import React from "react";
import {
  SafeAreaView,
  Text,
  StyleSheet,
  View,
  ScrollView,
  Pressable,
  FlatList,
  Image,
} from "react-native";
import { useState } from "react";
import StackNav from "../StackNav";
import { Ionicons } from "@expo/vector-icons";
import { homeScreenData } from "../data/Data";
export default function Home({ navigation }) {
  const [DarkMode, setDarkMode] = useState(false);

  return (
    <SafeAreaView
      style={
        DarkMode
          ? styles.containe
          : [styles.container, { backgroundColor: "#F4EEE0" }]
      }
    >
      <SafeAreaView style={styles.MainView}>
        <Text style={styles.text}>
          <View style={styles.header}>
            <View style={styles.headerText}>
              <Text
                style={
                  DarkMode
                    ? [styles.text, { color: "white" }]
                    : [styles.text, { color: "black" }]
                }
              >
                Bienvenue sur l'Anti-sèche MMI
              </Text>
            </View>
            <View style={styles.darkmode}>
              <Pressable
                onPress={() => setDarkMode(!DarkMode)}
                style={styles.animation}
              >
                <Ionicons
                  name={DarkMode ? "moon" : "sunny"}
                  size={30}
                  color={DarkMode ? "yellow" : "black"}
                />
              </Pressable>
            </View>
          </View>
        </Text>
        <View style={styles.flatlist}>
          <FlatList
            data={homeScreenData}
            renderItem={({ item }) => (
              <View style={styles.flatlist}>
                <Pressable
                  onPress={() => navigation.navigate("Chapitres")}
                  style={styles.PressableFlatList}
                >
                  <View style={styles.ImageFlatList}>
                    <Image source={item.image} style={styles.image} />
                  </View>
                  <View style={styles.TextFlatList}>
                    <Text
                      style={
                        DarkMode
                          ? [styles.text, { color: "white" }]
                          : [styles.text, { color: "black" }]
                      }
                    >
                      {item.title}
                    </Text>
                  </View>
                </Pressable>
              </View>
            )}
            keyExtractor={(item) => item.id}
          />
        </View>
      </SafeAreaView>
      <StackNav navigation={navigation} DarkMode={DarkMode} />
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
  containe: {
    flex: 1,
    backgroundColor: "#1A201F",
    alignItems: "center",
    justifyContent: "space-around",
  },
  MainView: {
    flex: 1,
  },
  header: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
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
  darkmode: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  animation: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  flatlist: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  PressableFlatList: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  image: {
    width: 100,
    height: 100,
    margin: 10,
  },
});
