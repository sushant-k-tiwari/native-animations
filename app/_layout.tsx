import { Stack } from "expo-router";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import "./global.css";
export default function RootLayout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Stack >
        {/* <Stack.Screen name="index" /> */}
        <Stack.Screen name="(drawer)" options={{headerShown: false}}/>
      </Stack>
    </GestureHandlerRootView>
  );
}
