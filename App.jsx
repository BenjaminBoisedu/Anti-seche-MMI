import { StyleSheet, StatusBar, Pressable, Text, Button } from "react-native";
import { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Ionicons } from "@expo/vector-icons";
import Home from "./Screens/Home";
import Details from "./Screens/Details";
import Login from "./Screens/Login";
import Settings from "./Screens/Settings";

const Stack = createNativeStackNavigator();

export default function App() {
  const [DarkMode, setDarkMode] = useState(false);

  return (
    <>
      <StatusBar style="light" />
      <NavigationContainer style={styles.container}>
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{
            headerStyle: {
              backgroundColor: "#1A201F",
            },

            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold",
            },
          }}
        >
          <Stack.Screen name="Home" component={Home} DarkMode />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Chapitres" component={Details} />
          <Stack.Screen name="Settings" component={Settings} />
          <Stack.Screen name="Logout" component={Login} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-around",
  },
});
