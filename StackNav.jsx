import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";

export default function StackNav({ navigation }, { DarkMode }) {
  const [login, setLogin] = useState(false);

  return (
    <View style={styles.TabNavContainer}>
      <View style={styles.TabNav}>
        <Text
          style={styles.textNav}
          onPress={() => navigation.navigate("Chapitres")}
        >
          <Ionicons
            name="book"
            size={24}
            color="#1A201F"
            onPress={() => navigation.navigate("Chapitres")}
          />
        </Text>
      </View>
      <View style={styles.TabNav}>
        <Text
          style={styles.textNav}
          onPress={() => navigation.navigate("Settings")}
        >
          <Ionicons
            name="settings"
            size={24}
            color="black"
            onPress={() => navigation.navigate("Settings")}
          />
        </Text>
      </View>
      <View style={styles.TabNav}>
        <Text
          style={styles.textNav}
          onPress={() => navigation.navigate("Login")}
        >
          <Ionicons
            name={login ? "person" : "person-outline"}
            size={24}
            color="black"
            onPress={() => navigation.navigate("Login")}
          />
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  TabNavContainer: {
    flex: 0.13,
    backgroundColor: "#ffffff",
    alignItems: "center",
    justifyContent: "space-around",
    flexDirection: "row",
    borderTopLeftRadius: 50,

    position: "absolute",
    bottom: 0,
    width: "100%",
    height: 75,
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
    textTransform: "capitalize",
  },
});
