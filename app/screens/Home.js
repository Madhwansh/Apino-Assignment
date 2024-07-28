import { View, Image, StyleSheet, Dimensions, Text } from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";
import { Feather } from "@expo/vector-icons";
import { ScrollView } from "react-native-gesture-handler";
import Trending from "../../components/Trending";
import Categories from "../../components/Categories";
import Question from "../../components/Question";

const { width: screenWidth } = Dimensions.get("window");

const Home = () => {
  return (
    <View style={styles.container}>
      <StatusBar style="dark" />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollViewContent}
      >
        <View style={styles.header}>
          <Image
            source={require("../../assets/images/user.png")}
            style={styles.userImage}
          />
          <Feather name="bell" size={hp(4)} color="gray" />
        </View>
        <View style={{ paddingRight: 4, paddingLeft: 4 }}>
          <Image
            source={require("../../assets/images/banner.jpg")}
            style={styles.bannerImage}
            resizeMode="cover"
          />
        </View>
        {/* Category */}
        <View style={{ marginTop: 10 }}>
          <Categories />
        </View>
        {/*Trending */}
        <View style={{ marginTop: 15, marginBottom: 10 }}>
          <View style={{ marginBottom: 10, paddingLeft: 15 }}>
            <Text style={{ fontSize: 20, fontWeight: "900" }}>
              Trending Now
            </Text>
          </View>
          <Trending />
        </View>
        {/* Question */}
        <Question />
        <Question />
        <Question />
        <Question />
        <Question />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f7f7f7",
  },
  scrollViewContent: {
    paddingBottom: 30,
    paddingTop: hp(2),
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 5,
    marginBottom: 8,
  },
  userImage: {
    height: hp(4),
    width: hp(4),
    marginRight: "auto",
  },
  bannerImage: {
    width: screenWidth,
    height: screenWidth * 0.45,
    padding: 5,
    marginTop: 3,
  },
});

export default Home;
