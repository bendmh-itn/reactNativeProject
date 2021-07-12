import React from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  TouchableWithoutFeedback,
  Button,
  Alert,
  StatusBar,
  Platform,
} from "react-native";

export default function App() {
  const handlePress = () => {
    console.log("text pressed");
  };
  return (
    <SafeAreaView style={[styles.container, containerStyle]}>
      <Text>Test n°2</Text>
      {/*<TouchableWithoutFeedback onPress={() => console.log("image tapped")}>
        <Image
          blurRadius={10}
          fadeDuration={1000}
          source={{
            width: 200,
            height: 300,
            uri: "https://picsum.photos/200/300"
          }} 
        />
        </TouchableWithoutFeedback>*/}

      <Button
        title="Click me"
        color="#841584"
        onPress={() =>
          Alert.alert("My title", "My message", [
            { text: "Yes", onPress: () => console.log("yes") },
            { text: "No", onPress: () => console.log("No") },
          ])
        }
      />
    </SafeAreaView>
  );
}

const containerStyle = { backgroundColor: "orange" };

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: (Platform.OS = "android" ? StatusBar.currentHeight : 0),
  },
});
