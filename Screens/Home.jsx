import React from "react";
import {
  Button,
  SafeAreaView,
  Text,
  StyleSheet,
  Pressable,
  View,
  FlatList,
  ActivityIndicator,
  StatusBar,
  Modal,
  ScrollView,
  useColorScheme,
  Switch,
} from "react-native";
import { useState, useEffect } from "react";
import { Checkbox } from "react-native-paper";

export default function Home({ navigation, route, isDarkMode }) {
  const [postList, setPostList] = useState([]);

  const [isLoading, setLoading] = useState(true);

  const [refreshing, setRefreshing] = useState(false);

  const [modalVisible, setModalVisible] = useState(false);

  const [colorScheme, setColorScheme] = useState(false);

  const toggleSwitch = () => setColorScheme((previousState) => !previousState);

  const fetchApi = async (limit = 10) => {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/todos/?_limit=${limit}`
    );
    const data = await response.json();
    setPostList(data);
    setLoading(false);
  };

  const handleRefresh = () => {
    setRefreshing(true);
    fetchApi(20);
    setRefreshing(false);
  };

  useEffect(() => {
    fetchApi();
  }, []);

  if (isLoading) {
    return (
      <SafeAreaView style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#00000" />
        <Text style={styles.text}>Loading...</Text>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: colorScheme ? "#1A201F" : "white",
        paddingTop: StatusBar.currentHeight,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <View style={styles.listContainer}>
        <StatusBar style="light" barStyle={"default"} hidden />
        <View
          style={{
            flexDirection: "row-reverse",
            justifyContent: "center",
            alignItems: "center",
            // alignSelf: "center",
            // marginRight: 10,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "flex-end",
              alignItems: "center",
              alignSelf: "center",
              // marginRight: 10,
            }}
          >
            <Text
              style={{
                color: "white",
                fontSize: 10,
                fontWeight: "bold",
              }}
            >
              {colorScheme ? "Dark Mode" : "Light Mode"}
            </Text>
            <Switch
              trackColor={{ false: "#767577", true: "#81b0ff" }}
              thumbColor={colorScheme ? "#f5dd4b" : "#f4f3f4"}
              ios_backgroundColor="#3e3e3e"
              onValueChange={toggleSwitch}
              value={colorScheme}
              style={{
                marginLeft: 10,
              }}
            />
          </View>
          <View>
            <Text style={styles.text}>TodoList</Text>
          </View>
        </View>
        <Pressable
          style={styles.button}
          onPress={() => setModalVisible(!modalVisible)}
        >
          <Text
            style={{
              color: "dodgerblue",
              backgroundColor: "white",
              padding: 5,
              borderRadius: 15,
              borderWidth: 2,
              borderColor: "dodgerblue",
              elevation: 10,
              borderStyle: "solid",
              // margin: 10,
              width: "50%",
              textAlign: "center",
              justifyContent: "center",
              alignSelf: "center",
            }}
          >
            Open Modal
          </Text>
        </Pressable>

        <FlatList
          data={postList}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View style={styles.todoList}>
              <Text style={styles.todo}>{item.title}</Text>
              <Checkbox
                status={item.completed ? "checked" : "unchecked"}
                onPress={() => {
                  alert("Completed");
                }}
              />
            </View>
          )}
          refreshing={refreshing}
          onRefresh={handleRefresh}
        />
        <Pressable style={styles.button}>
          <Text
            style={{
              color: "dodgerblue",
              backgroundColor: "white",
              padding: 5,
              borderRadius: 15,
              borderWidth: 2,
              borderColor: "dodgerblue",
              elevation: 10,
              borderStyle: "solid",
            }}
            onPress={() => navigation.navigate("Details")}
          >
            Details
          </Text>
        </Pressable>
      </View>
      <Modal
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
        animationType="slide"
        presentationStyle="pageSheet"
      >
        <View>
          <Text>Modal</Text>
          <Button
            title="Close"
            color="midnightblue"
            onPress={() => setModalVisible(false)}
          />
        </View>
      </Modal>
    </SafeAreaView>
  );
}
/**
 * Styles for the Home component.
 */
const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    backgroundColor: "#1A201F",
    alignItems: "center",
    justifyContent: "center",
  },
  listContainer: {
    flex: 1,
    backgroundColor: "#3F2756",
    width: "90%",
    marginBottom: 20,
    borderRadius: 15,
    borderTopLeftRadius: 50,
    elevation: 10,
    shadowColor: "white",
    shadowOpacity: 0.5,
    shadowRadius: 5,
    shadowOffset: {
      width: 300,
      height: 300,
    },
    padding: 10,
  },
  todoList: {
    flex: 1,
    backgroundColor: "#1A201F",
    alignItems: "Left",
    justifyContent: "center",
    flexDirection: "row",
    width: "90%",
    alignSelf: "center",
    marginBottom: 20,
    padding: 10,
    borderRadius: 15,
    borderWidth: 2,
    borderColor: "white",
    elevation: 5,
    borderStyle: "solid",
    shadowColor: "white",
    shadowOpacity: 0.5,
    shadowRadius: 5,
    shadowOffset: {
      width: 300,
      height: 300,
    },
    // overflow: "hidden",
  },
  todo: {
    color: "white",
    fontSize: 15,
    fontWeight: "bold",
    width: "80%",
    justifyContent: "center",
    alignSelf: "center",
    overflow: "hidden",
  },
  text: {
    fontSize: 30,
    color: "white",
    fontWeight: "bold",
    marginBottom: 20,
    padding: 10,
    justifyContent: "center",
    alignSelf: "center",
  },
  button: {
    color: "dodgerblue",
    backgroundColor: "white",
    padding: 10,
    justifyContent: "center",
    alignSelf: "center",
    borderTopLeftRadius: 50,
    borderWidth: 2,
    borderRadius: 15,
    borderColor: "dodgerblue",
    elevation: 10,
    borderStyle: "solid",
    marginBottom: 20,
    marginTop: 20,
  },
});
