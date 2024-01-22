import {
  StyleSheet,
  Text,
  SafeAreaView,
  Button,
  Image,
  ActivityIndicator,
} from "react-native";
import React, { useState } from "react";
import Home from "./Home";
import { NavigationContainer } from "@react-navigation/native";

export default function App() {
  const [isLoading, setLoading] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <NavigationContainer></NavigationContainer>
      <Text style={styles.text}>Les Lp Sucrés au Sucre d'Emilien</Text>
      <Image
        style={styles.image}
        onLoad={() => console.log("Image chargée")}
        source={{
          uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJlmLLdQaVY9ZzMda3jHiK9npgpnr1EIJ69w&usqp=CAU",
        }}
      />
      <ActivityIndicator size="large" color="#00ff00" animating={isLoading} />
      <Button
        title="Cliquez ici pour voir les Lp Sucrés"
        onPress={() => setLoading(!isLoading)}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#4F4D50",
    alignItems: "center",
    justifyContent: "space-around",
  },
  text: {
    color: "white",
    fontSize: 20,
  },

  button: {
    backgroundColor: "red",
    color: "white",
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 100,
    resizeMode: "cover",
  },
});
