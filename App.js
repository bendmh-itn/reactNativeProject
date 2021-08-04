import Constants from "expo-constants";
import React from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import MessagesScreen from "./app/screens/MessagesScreen";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <MessagesScreen />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //paddingTop: Platform.OS == "android" ? StatusBar.currentHeight : 0, //Permet de laisser de la place sur android en haut
    paddingTop: Constants.statusBarHeight, //Meilleur façon de faire
  },
});
