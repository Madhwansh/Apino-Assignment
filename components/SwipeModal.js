import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Modal,
  Dimensions,
  StyleSheet,
  BackHandler,
  Image,
} from "react-native";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
  runOnJS,
  interpolateColor,
  useAnimatedGestureHandler,
} from "react-native-reanimated";
import {
  PanGestureHandler,
  GestureHandlerRootView,
} from "react-native-gesture-handler";
import { AntDesign } from "@expo/vector-icons";
import ipl from "../assets/icons/ipl.png"; // Adjust the path as needed

const { width: screenWidth } = Dimensions.get("window");

const SwipeModal = ({ visible, onClose, type }) => {
  const translateX = useSharedValue(0);
  const [orderSuccess, setOrderSuccess] = useState(false);

  useEffect(() => {
    const backAction = () => {
      onClose();
      return true;
    };

    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      backAction
    );

    return () => backHandler.remove();
  }, []);

  const gestureHandler = useAnimatedGestureHandler({
    onActive: (event) => {
      translateX.value = event.translationX;
    },
    onEnd: () => {
      if (translateX.value > screenWidth * 0.5) {
        runOnJS(setOrderSuccess)(true);
        translateX.value = withSpring(screenWidth * 0.7, {}, () =>
          runOnJS(onClose)()
        );
      } else {
        translateX.value = withSpring(0);
      }
    },
  });

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: translateX.value }],
  }));

  const containerStyle = useAnimatedStyle(() => {
    const backgroundColor = interpolateColor(
      translateX.value,
      [0, screenWidth * 0.7],
      [type === "yes" ? "#E0EBFF" : "#FFE0E0", "green"]
    );
    return { backgroundColor };
  });

  useEffect(() => {
    translateX.value = withSpring(0);
    setOrderSuccess(false);
  }, [visible]);

  return (
    <Modal visible={visible} transparent={true} animationType="slide">
      <GestureHandlerRootView style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <Image source={ipl} style={styles.image} />
          <Text style={styles.title}>Kolkata to win the match vs Mumbai?</Text>
          <View style={styles.buttonsContainer}>
            <View
              style={[
                styles.optionButton,
                type === "yes"
                  ? styles.selectedButton
                  : styles.unselectedButton,
              ]}
            >
              <Text style={styles.optionButtonText}>Yes ₹ 5.3</Text>
            </View>
            <View
              style={[
                styles.optionButton,
                type === "no" ? styles.selectedButton : styles.unselectedButton,
              ]}
            >
              <Text style={styles.optionButtonText}>No ₹ 4.7</Text>
            </View>
          </View>
          <Text style={styles.priceText}>Price</Text>
          <Text style={styles.priceValue}>₹ 5.3</Text>
          <Text style={styles.quantity}>132045 qty available</Text>
          <Animated.View style={[styles.swipeContainer, containerStyle]}>
            <PanGestureHandler onGestureEvent={gestureHandler}>
              <Animated.View style={[styles.arrowContainer, animatedStyle]}>
                <AntDesign name="forward" size={24} color="black" />
              </Animated.View>
            </PanGestureHandler>
            <View style={styles.swipeTextContainer}>
              <Text style={styles.swipeText}>
                Swipe for {type === "yes" ? "Yes" : "No"}
              </Text>
            </View>
          </Animated.View>
          {orderSuccess && (
            <Text style={styles.successText}>Order Success</Text>
          )}
        </View>
      </GestureHandlerRootView>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    width: screenWidth * 0.9,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 20,
    alignItems: "center",
  },
  image: {
    width: 50,
    height: 50,
    marginBottom: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  optionButton: {
    width: "45%",
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
  },
  selectedButton: {
    backgroundColor: "#E0EBFF",
  },
  unselectedButton: {
    backgroundColor: "white",
    borderColor: "#E0EBFF",
    borderWidth: 1,
  },
  optionButtonText: {
    color: "black",
    fontSize: 16,
  },
  priceText: {
    fontSize: 16,
    marginBottom: 5,
    textAlign: "center",
  },
  priceValue: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center",
  },
  quantity: {
    fontSize: 14,
    color: "#666",
    marginBottom: 20,
    textAlign: "center",
  },
  swipeContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
    borderRadius: 5,
    width: "100%",
    backgroundColor: "#E0EBFF",
  },
  swipeTextContainer: {
    flex: 1,
    alignItems: "center",
  },
  swipeText: {
    fontSize: 16,
    color: "#333",
  },
  arrowContainer: {
    width: 30,
    alignItems: "center",
  },
  successText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "green",
    marginTop: 10,
    textAlign: "center",
  },
});

export default SwipeModal;
