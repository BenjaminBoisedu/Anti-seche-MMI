import React from "react";
import { Modal, View, Text, Pressable, StyleSheet } from "react-native";
import { useState } from "react";

export default function RegisterModal() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  return (
    <View style={styles.ModalContainer}>
      <Modal
        animationType="slide"
        visible={isModalVisible}
        onRequestClose={() => {
          setIsModalVisible(!isModalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.headerText}>Register</Text>
            <View style={styles.InputContainer}>
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => alert("Register")}
              >
                <Text style={styles.ModalTextStyle}>Register</Text>
              </Pressable>
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => setIsModalVisible(false)}
              >
                <Text style={styles.ModalTextStyle}>Close</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>
      <Pressable
        style={[styles.buttonOpen]}
        onPress={() => setIsModalVisible(true)}
      >
        <Text style={styles.textStyle}>Register</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  ModalContainer: {
    flex: 0.4,
    alignItems: "center",
    justifyContent: "center",
  },

  centeredView: {
    flex: 1,
    backgroundColor: "#1A201F",
    alignItems: "center",
    justifyContent: "center",
  },
  modalView: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    width: 300,

    borderLeftColor: "blue",
    borderLeftWidth: 5,
    borderBottomColor: "blue",
    borderBottomWidth: 5,
    borderRadius: 10,
    borderTopRightRadius: 50,
    elevation: 5,
    backgroundColor: "white",
    padding: 20,
    margin: 20,
  },
  InputContainer: {
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    borderRadius: 10,
    marginBottom: 20,
    marginTop: 20,
  },
  textStyle: {
    fontSize: 15,
    color: "black",
    fontWeight: "bold",
    textAlign: "center",
  },
  headerText: {
    flex: 1,
    fontSize: 30,
    color: "black",
    fontWeight: "bold",
  },
  button: {
    flex: 0.2,
    padding: 20,
    borderRadius: 10,
    width: 250,
    margin: 10,
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  ModalTextStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 18,
  },
  buttonOpen: {},
  buttonClose: {
    backgroundColor: "#3F2756",
    padding: 20,
    borderRadius: 10,
  },
});
