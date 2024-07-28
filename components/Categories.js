import { View, Text, ScrollView, Image, StyleSheet } from "react-native";
import React from "react";
import { categoryData } from "../constants";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";
import { TouchableOpacity } from "react-native-gesture-handler";

const Categories = () => {
  return (
    <View style={styles.container}>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollViewContent}
      >
        {categoryData.map((cat, index) => {
          return (
            <TouchableOpacity key={index} style={styles.categoryContainer}>
              <View style={styles.imageContainer}>
                <Image source={cat.image} style={styles.categoryImage} />

                <Text style={styles.categoryText}>{cat.name}</Text>
              </View>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
  },
  scrollViewContent: {
    paddingHorizontal: 15,
  },
  categoryContainer: {
    alignItems: "center",
    marginHorizontal: 8, // Replacing space-x-4 (space between items) with margin
  },
  imageContainer: {
    backgroundColor: "white",
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 25,
    alignItems: "center",
    justifyContent: "center",
  },
  categoryImage: {
    width: hp(6),
    height: hp(6),
    borderRadius: hp(3), // Make the image fully rounded
  },
  categoryText: {
    color: "#525252", // Neutral 600
    fontSize: hp(1.6),
    marginTop: 4,
    fontWeight: "700",
  },
});

export default Categories;
