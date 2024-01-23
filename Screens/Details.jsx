import React from "react";

import { View, Text, Button } from "react-native";

export default function Details({ navigation }) {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#ffff",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Text
        style={{
          fontSize: 30,
          color: "#000000",
          fontWeight: "bold",
        }}
      >
        Details Screen
      </Text>
      <Button
        title="Go Back"
        onPress={() => navigation.goBack()}
        style={{
          color: "white",
          backgroundColor: "white",
          shadowColor: "black",
        }}
      />
    </View>
  );
}
