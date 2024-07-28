import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "./screens/Home";
import Search from "./screens/Search";
import Sports from "./screens/Sports";
import Portfolio from "./screens/Portfolio";
import Wallet from "./screens/Wallet";
import Icon from "react-native-vector-icons/MaterialIcons"; // Import icons
import { Text } from "react-native"; // Import Text

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const HomeStack = () => (
  <Stack.Navigator
    initialRouteName="Home"
    screenOptions={{ headerShown: false }}
  >
    <Stack.Screen name="Home" component={Home} />
  </Stack.Navigator>
);

const App = () => {
  return (
    <NavigationContainer independent={true}>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            switch (route.name) {
              case "Home":
                iconName = "home"; // Valid icon name
                break;
              case "Search":
                iconName = "search"; // Valid icon name
                break;
              case "Sports":
                iconName = "sports"; // Valid icon name
                break;
              case "Portfolio":
                iconName = "account-balance"; // Valid icon name
                break;
              case "Wallet":
                iconName = "wallet"; // Changed to a valid icon name
                break;
              default:
                iconName = "circle"; // Fallback icon
            }

            // Return the icon component
            return (
              <Icon
                name={iconName}
                size={35}
                color={focused ? "black" : color}
              />
            );
          },
          tabBarLabel: ({ focused }) => (
            <Text
              style={{
                fontWeight: focused ? "bold" : "normal", // Bold when focused
                color: focused ? "black" : "gray", // Black when focused, gray otherwise
              }}
            >
              {route.name}
            </Text>
          ),
        })}
      >
        <Tab.Screen name="Home" component={HomeStack} />
        <Tab.Screen name="Search" component={Search} />
        <Tab.Screen name="Sports" component={Sports} />
        <Tab.Screen name="Portfolio" component={Portfolio} />
        <Tab.Screen name="Wallet" component={Wallet} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
