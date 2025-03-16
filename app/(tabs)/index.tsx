import {
  Text,
  SafeAreaView,
  View,
  StyleSheet,
  TextInput,
  Button,
} from "react-native";
import { useState } from "react";

export default function HomeScreen() {
  const [text, setText] = useState("");

  return (
    <SafeAreaView>
      <View style={styles.parent}>
        <View style={styles.container}>
          <Text style={styles.text}>Home</Text>
        </View>
        <View style={styles.container2}>
          <Text style={styles.text}>Home</Text>
          <Text style={styles.text}>Home</Text>
          <Text style={styles.text}>Home</Text>
        </View>
      </View>
      <TextInput value={text} onChangeText={setText} style={styles.input} />
      <Button
        title="Click me"
        onPress={() => {
          alert("Button pressed");
          console.log("Button pressed");
        }}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  parent: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  container: {
    backgroundColor: "yellow",
  },
  container2: {
    backgroundColor: "blue",
  },
  text: {
    fontSize: 30,
    fontWeight: "bold",
    color: "red",
  },
  input: {
    borderWidth: 1,
    borderColor: "black",
    padding: 10,
  },
});
