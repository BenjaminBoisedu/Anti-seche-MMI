import React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function Social() {
  return (
    <View style={styles.socialContainer}>
      <View style={styles.Social}>
        <View style={styles.FacebookContainer}>
          <Pressable style={styles.Facebook}>
            <Ionicons name="logo-facebook" size={35} color="black" />
          </Pressable>
        </View>
        <View style={styles.GoogleContainer}>
          <Pressable
            style={styles.Google}
            onPress={() => navigation.navigate("Home")}
          >
            <Ionicons
              name="logo-google"
              size={35}
              color="
              black
              "
            />
          </Pressable>
        </View>
        <View style={styles.TwitterContainer}>
          <Pressable style={styles.Twitter}>
            <Ionicons name="logo-twitter" size={35} color="black" />
          </Pressable>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  socialContainer: {
    flex: 0.3,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    borderRadius: 10,
    shadowColor: "white",
  },
  Social: {
    flex: 0.5,
    backgroundColor: "#ffff",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    borderRadius: 10,
    borderTopColor: "#000000",
    borderTopWidth: 1,
    elevation: 10,
    shadowColor: "white",
    shadowOpacity: 1,
    shadowRadius: 10,
    shadowOffset: {
      width: 400,
      height: 400,
    },
    width: 300,
  },
  Facebook: {
    alignItems: "center",
    justifyContent: "center",
    width: 50,
    height: 50,
    borderRadius: 10,
    margin: 10,
  },
  Google: {
    alignItems: "center",
    justifyContent: "center",
    width: 50,
    height: 50,
    borderRadius: 10,
    margin: 10,
  },
  Twitter: {
    alignItems: "center",
    justifyContent: "center",
    width: 50,
    height: 50,
    borderRadius: 10,
    margin: 10,
  },
});
