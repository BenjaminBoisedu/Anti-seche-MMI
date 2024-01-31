import React from "react";
import { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
export default function Chapitre({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Chapitre</Text>
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
});
