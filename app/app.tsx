import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { Ionicons } from "@expo/vector-icons";
import { View, Text, TouchableOpacity } from "react-native";

// Define the Stack Navigator types
type RootStackParamList = {
  Home: undefined;
  TransferFunds: undefined;
  Transactions: undefined;
  Account: undefined;
};

type BottomTabParamList = {
  Home: undefined;
  TransferFunds: undefined;
  Transactions: undefined;
  Account: undefined;
};

// Screens
const HomeScreen = () => <Text>Home Screen</Text>;
const TransferFundsScreen = () => <Text>Transfer Funds Screen</Text>;
const TransactionsScreen = () => <Text>Transactions Screen</Text>;
const AccountScreen = () => <Text>Account Screen</Text>;

// Stack Navigator
const Stack = createStackNavigator<RootStackParamList>();
const StackNavigator = () => (
  <Stack.Navigator initialRouteName="Home">
    <Stack.Screen name="Home" component={HomeScreen} />
    <Stack.Screen name="TransferFunds" component={TransferFundsScreen} />
    <Stack.Screen name="Transactions" component={TransactionsScreen} />
    <Stack.Screen name="Account" component={AccountScreen} />
  </Stack.Navigator>
);

// Tab Navigator
const Tab = createBottomTabNavigator<BottomTabParamList>();
const TabNavigator = () => (
  <Tab.Navigator>
    <Tab.Screen name="Home" component={HomeScreen} />
    <Tab.Screen name="TransferFunds" component={TransferFundsScreen} />
    <Tab.Screen name="Transactions" component={TransactionsScreen} />
    <Tab.Screen name="Account" component={AccountScreen} />
  </Tab.Navigator>
);

// Main App Component
const App = () => {
  return (
    <NavigationContainer>
      <TabNavigator />  {/* Use the TabNavigator */}
    </NavigationContainer>
  );
};

export default App;
