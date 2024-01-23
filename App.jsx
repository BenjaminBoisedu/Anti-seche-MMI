import { StyleSheet, View, Text } from "react-native";
import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
// import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home">
          {(props) => (
            <View style={styles.container}>
              <Text>Home</Text>
            </View>
          )}
        </Stack.Screen>
        <Stack.Screen name="Details">
          {(props) => (
            <View style={styles.container}>
              <Text>Details</Text>
            </View>
          )}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#4F4D50",
    alignItems: "center",
    justifyContent: "space-around",
  },
});
