import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Hello from "./src/compo/Hello";

export default function App() {
  return (
    <View style={styles.container}>
      <Hello hiki="World" bang={true}></Hello>
      <Hello hiki="World" bang={false} style={{ fontSize: 16 }}></Hello>
      <Text>Open up App.tsx to start working on your app!!!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
