import React, { useState } from "react";

import {
  Text,
  SafeAreaView,
  StyleSheet,
  View,
  Pressable,
  FlatList,
} from "react-native";
import StackNav from "../StackNav";
import Ionicons from "@expo/vector-icons/Ionicons";
import { chapitres } from "../data/Data";

export default function Details({ navigation }) {
  const [Selected, setSelected] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.MainView}>
        <Text style={styles.text}>Choisissez votre lieu de triche</Text>
      </View>
      <View style={styles.gridContainer}>
        <FlatList
          horizontal={true}
          data={chapitres}
          renderItem={({ item }) => (
            <Pressable
              onPress={() => navigation.navigate("Chapitre", { item })}
              style={styles.gridPressable}
            >
              <View style={styles.gridView}>
                <Text
                  style={{
                    color: "white",
                    backgroundColor: "black",
                    fontSize: 15,
                    fontWeight: "bold",
                    textAlign: "center",
                    padding: 10,
                    borderRadius: 50,
                    elevation: 10,
                    shadowColor: "white",
                    shadowOpacity: 0.5,
                    shadowRadius: 10,
                    shadowOffset: {
                      width: 1,
                      height: 1,
                    },
                  }}
                >
                  <Ionicons name="checkmark" size={25} color="white" />
                  {item.title}
                </Text>
              </View>
            </Pressable>
          )}
          keyExtractor={(item) => item.id}
        />
      </View>
      <StackNav navigation={navigation} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1A201F",
    alignItems: "center",
    justifyContent: "space-around",
    flexDirection: "column",
  },
  MainView: {
    flex: 0.1,
    backgroundColor: "#1A201F",
  },
  text: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    padding: 20,
  },
  gridContainer: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap",
    backgroundColor: "#1A201F",
  },
  gridFlatList: {
    flex: 1,
    backgroundColor: "#1A201F",
    flexBasis: 0,
    flexDirection: "column",
  },
  gridPressable: {
    flex: 1,
    backgroundColor: "#1A201F",
    height: 100,
    width: 180,
    borderRadius: 20,
    margin: 10,
    alignContent: "center",
    justifyContent: "center",
  },
});
