import React, { useState } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import ipl from "../assets/icons/ipl.png";
import SwipeModal from "./SwipeModal"; // Adjust the path if necessary

const Question = () => {
  const [isModalVisible, setModalVisible] = useState(false);
  const [modalType, setModalType] = useState("");

  const openModal = (type) => {
    setModalType(type);
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <View style={styles.headerContainer}>
          <View style={styles.textContainer}>
            <Text style={styles.questionText}>
              Kolkata to win the match vs Mumbai?
            </Text>
            <Text style={styles.answerText}>
              H2H last 5 T20: Kolkata 4, Mumbai 1, Draw 0
            </Text>
          </View>
          <Image source={ipl} style={styles.logo} />
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.yesButton}
            onPress={() => openModal("yes")}
          >
            <Text style={(styles.buttonText, styles.yesButtonText)}>
              Yes ₹ 5.3
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.noButton}
            onPress={() => openModal("no")}
          >
            <Text style={(styles.buttonText, styles.noButtonText)}>
              No ₹ 4.7
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <SwipeModal
        visible={isModalVisible}
        onClose={closeModal}
        type={modalType}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
    paddingTop: 10,
  },
  card: {
    backgroundColor: "white",
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 15,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 1.84,
    elevation: 1,
  },
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  textContainer: {
    flex: 1,
  },
  questionText: {
    fontSize: 17,
    fontWeight: "700",
  },
  answerText: {
    fontSize: 12,
    marginTop: 5,
  },
  logo: {
    width: 40,
    height: 40,
    resizeMode: "contain",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
  },
  yesButton: {
    backgroundColor: "#E0EBFF",
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginRight: 10,
    flex: 1,
    alignItems: "center",
  },
  noButton: {
    backgroundColor: "#FFE0E0",
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 20,
    flex: 1,
    alignItems: "center",
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "700",
  },
  yesButtonText: {
    color: "#3366FF",
    fontWeight: "800",
  },
  noButtonText: {
    color: "#FF0000",
    fontWeight: "800",
  },
});

export default Question;
