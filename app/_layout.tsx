import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <>
      {/* <SafeAreaProvider>
        <SafeAreaView>
          <StatusBar barStyle="dark-content" />
          <Stack>
            <Stack.Screen
              name="(tabs).tsx"
              options={{ title: "tabs", headerShown: false }}
            />
          </Stack>
        </SafeAreaView>
      </SafeAreaProvider> */}
      <Stack>
        <Stack.Screen
          name="(tabs).tsx"
          options={{ title: "tabs", headerShown: false }}
        />
      </Stack>
    </>
  );
}
