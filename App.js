// // App lol
// ⡤⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
// ⠣⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
// ⠀⠈⠲⠆⢦⣾⣿⢻⣷⣦⣴⣠⣀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣀⣴⣶⡶
// ⠀⠀⠀⠈⢾⡿⣿⣿⣷⣏⣹⣏⡿⡿⢷⣶⣎⣹⣉⣈⣿⣷⣾⡿⣿⣏⠷⠀
// ⠀⠀⠀⠀⠈⢿⣷⣻⡾⣽⣯⢿⣽⡷⣿⣻⢯⣟⣯⣷⣟⣾⣽⡻⠗⠁⠀⠀
// ⠀⠀⠀⠀⠀⠀⠈⠓⠛⠿⣾⣻⣷⣻⣯⣟⣿⠽⠻⠾⠽⠚⠁⠀⠀⠀⠀⠀
// ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⡀⠀⠀⠀⠀⠤⠠⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
import * as React from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import RegisterScreen from "./app/screens/RegisterScreen";
import ASSAHome from "./app/screens/ASSAHome";
import SearchScreen from "./app/screens/SearchScreen";

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Main"
          component={WelcomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Home"
          component={ASSAHome}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Register"
          component={RegisterScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SearchBar"
          component={SearchScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
