import React from "react";
import { View, Text, StyleSheet, Pressable, TextInput } from "react-native";

export default function LoginForm({ navigation }) {
  return (
    <View style={styles.formContainer}>
      <Text style={styles.text}>Login</Text>
      <View style={styles.InputContainer}>
        <TextInput label="Name" style={styles.NameInput} placeholder="Name" />
        <TextInput
          label="Password"
          secureTextEntry
          style={styles.PswdInput}
          placeholder="Password"
        />
      </View>
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
  );
}

const styles = StyleSheet.create({
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

  InputContainer: {
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    borderRadius: 10,
    marginBottom: 20,
    marginTop: 20,
  },

  NameInput: {
    width: 250,
    height: 50,
    margin: 10,
    padding: 10,
    color: "#000000",
    borderRadius: 10,
    borderBottomColor: "gray",
    borderBottomWidth: 1,
  },
  PswdInput: {
    width: 250,
    height: 50,
    margin: 10,
    padding: 10,
    color: "white",
    borderRadius: 10,
    borderBottomColor: "gray",
    borderBottomWidth: 1,
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
});
