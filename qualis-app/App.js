import { StatusBar } from "expo-status-bar";
import "react-native-gesture-handler";
import React from "react";
import { registerRootComponent } from "expo";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Principal from "./src/pages/Principal";
import Drawer from "./src/pages/drawer";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Principal"
          component={Principal}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Drawer"
          component={Drawer}
          options={{
            title: "Olá! :)",
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

registerRootComponent(Principal);
