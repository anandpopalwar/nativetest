import { Link } from "expo-router";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Login = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Login</Text>
      <Link href="/" >
        <Text style={{ marginTop: 20, color: "blue" }}>Go Back</Text>
      </Link>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({});
