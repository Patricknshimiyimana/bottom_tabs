import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import MyTabs from "./components/MyTabs";
import { StatusBar } from "expo-status-bar";

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="light" />
      <MyTabs />
    </NavigationContainer>
  );
}
