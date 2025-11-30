import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Welcome.</Text>

      <Link href="./Login">
        <Text style={{ marginTop: 20, color: "blue" }}>Go to Login</Text>
      </Link>
    </View>
  );
}
