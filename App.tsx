import { StatusBar } from "expo-status-bar";
import "react-native-gesture-handler";
import Navigation from "./navigation";
import { NativeBaseProvider } from "native-base";
export default function App() {
  return (
    <NativeBaseProvider>
      <Navigation />
      <StatusBar style="dark" />
    </NativeBaseProvider>
  );
}
