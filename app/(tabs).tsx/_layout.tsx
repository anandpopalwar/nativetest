import { Tabs } from "expo-router";
import React from "react";
import { StyleSheet } from "react-native";

const _layout = () => {
  return (
    <Tabs
      screenOptions={{
        // tabBarShowLabel: false,

        tabBarItemStyle: {
          width: "100%",
          height: 50,
          justifyContent: "center",
          alignItems: "center",
          borderRadius: 99,
          backgroundColor: "white",
        },
        tabBarStyle: {
          backgroundColor: "grey",
          borderRadius: 99,
          marginBottom: 30,
          marginHorizontal: 10,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-around",
          padding: 10,
          gap: 5,
          height: 50,
          overflow: "hidden",
          borderColor: "lightblue",
          borderWidth: 2,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{ title: "home", headerShown: false }}
      />
      <Tabs.Screen
        name="Login"
        options={{ title: "Login", headerShown: false }}
      />
      <Tabs.Screen
        name="About"
        options={{ title: "About", headerShown: false }}
      />
    </Tabs>
  );
};

export default _layout;

const styles = StyleSheet.create({});
