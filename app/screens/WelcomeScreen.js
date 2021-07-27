import React from "react";
import { Image, ImageBackground, StyleSheet, Text, View } from "react-native";
import AppText from "../components/AppText";
import AppButton from "../components/AppButton";

function WelcomeScreen(props) {
  return (
    <ImageBackground
      blurRadius={4}
      style={styles.background}
      source={require("../assets/background.jpg")}
    >
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={require("../assets/logo.png")} />
        <AppText style={styles.logoText}>Sell what you don't need</AppText>
      </View>
      <View style={styles.buttonsContainer}>
        <AppButton title={"Login"} onPress={() => console.log("it's work")} />
        <AppButton
          title={"Register"}
          onPress={() => console.log("Registering")}
          color="secondary"
        />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  buttonsContainer: {
    padding: 20,
    width: "100%",
  },
  logo: {
    width: 100,
    height: 100,
  },
  logoContainer: {
    position: "absolute",
    top: 90,
    alignItems: "center",
  },
});

export default WelcomeScreen;
