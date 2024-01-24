import React from "react";
import { useState } from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import { TextInput } from "react-native-paper";
import { users } from "../data/Data";
import { Ionicons } from "@expo/vector-icons";

export default function Login({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.formContainer}>
        <Text style={styles.text}>Login</Text>

        <TextInput label="Name" style={styles.EmailInput} />
        <TextInput label="Password" secureTextEntry style={styles.PswdInput} />
        <View style={styles.buttonContainer}>
          <Pressable style={styles.button}>
            <Text
              style={styles.LoginButton}
              onPress={() => navigation.navigate("Home")}
            >
              Login
            </Text>
          </Pressable>
        </View>
      </View>
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
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1A201F",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 30,
    color: "#000000",
    fontWeight: "bold",
  },
  formContainer: {
    flex: 0.5,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    borderRadius: 10,
    borderTopRightRadius: 50,

    borderTopColor: "blue",
    borderTopWidth: 5,
    borderRightColor: "blue",
    borderRightWidth: 5,
    elevation: 20,
    shadowColor: "white",
    shadowOpacity: 1,
    shadowRadius: 10,
    shadowOffset: {
      width: 400,
      height: 400,
    },

    width: 300,
    margin: 10,
    padding: 10,
  },
  EmailInput: {
    width: 250,
    height: 50,
    margin: 10,
    backgroundColor: "transparent",
  },
  PswdInput: {
    width: 250,
    height: 50,
    margin: 10,
    backgroundColor: "transparent",
  },

  buttonContainer: {
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    borderRadius: 10,
    marginBottom: 20,
    marginTop: 20,
  },
  button: {
    alignItems: "center",
    justifyContent: "",
    backgroundColor: "#3F2756",
    width: 100,
    height: 50,
    borderRadius: 10,
    marginTop: 10,
    elevation: 10,
    shadowColor: "black",

    shadowOpacity: 1,
    shadowRadius: 10,
    shadowOffset: {
      width: 400,
      height: 400,
    },
  },
  LoginButton: {
    fontSize: 20,
    color: "#ffffff",
    fontWeight: "bold",
    margin: 10,
  },
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
