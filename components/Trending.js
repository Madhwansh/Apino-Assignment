import { View, Text, ScrollView, Image, StyleSheet } from "react-native";
import React from "react";
import { TrendingData } from "../constants";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";
import { TouchableOpacity } from "react-native-gesture-handler";

const Trending = () => {
  const chunkedData = [];
  for (let i = 0; i < TrendingData.length; i += 4) {
    chunkedData.push(TrendingData.slice(i, i + 4));
  }

  return (
    <View style={styles.container}>
      {chunkedData.map((chunk, rowIndex) => (
        <ScrollView
          key={rowIndex}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.scrollViewContent}
        >
          {chunk.map((item, index) => (
            <TouchableOpacity key={index} style={styles.itemContainer}>
              <View style={styles.card}>
                <Image source={item.image} style={styles.itemImage} />
                <Text style={styles.itemText}>{item.name}</Text>
              </View>
            </TouchableOpacity>
          ))}
        </ScrollView>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
  },
  scrollViewContent: {
    paddingBottom: 15,
  },
  itemContainer: {
    alignItems: "center",
    marginHorizontal: 5,
  },
  card: {
    backgroundColor: "white",
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 15,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 1.84,
    elevation: 1,
  },
  itemImage: {
    width: hp(3),
    height: hp(3),
    marginRight: 8,
  },
  itemText: {
    fontSize: hp(2.0),
    color: "#525252",
    textAlign: "center",
    fontWeight: "900",
  },
});

export default Trending;
