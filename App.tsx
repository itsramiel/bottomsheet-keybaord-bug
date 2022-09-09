import { GestureHandlerRootView } from "react-native-gesture-handler";
// Utility Imports
import BottomSheet from "@gorhom/bottom-sheet";
import { Button, Keyboard, StyleSheet, Text, TextInput } from "react-native";

const snapPoints = ["90%"];

export default function App() {
  return (
    <GestureHandlerRootView style={styles.container}>
      <Button title="close" onPress={() => Keyboard.dismiss()} />
      <TextInput style={styles.input} placeholder={"message"} />
      <BottomSheet
        snapPoints={snapPoints}
        index={-1}
        enablePanDownToClose
        backgroundStyle={{ backgroundColor: "#ccc" }}
      >
        <Text>Hello there</Text>
      </BottomSheet>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-around",
    backgroundColor: "white",
  },
  input: {
    backgroundColor: "#eee",
    padding: 8,
  },
});
