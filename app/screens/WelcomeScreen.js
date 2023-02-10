import React from "react";
import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  View,
  StatusBar,
} from "react-native";

import SVGimg from "../assets/assalogo.svg";

function WelcomeScreen(props) {
  return (
    <ImageBackground
      style={styles.background}
      source={require("../assets/background.png")}
    >
      <View>
        <Text> LOGIN </Text>
        <Text> Please sign in to continue</Text>
      </View>
      <SVGimg style={styles.logo} width={100} height={100} />

      <View style={styles.loginButton}>
        <Text style={styles.loginButton}> LOGIN PLACEHOLDER</Text>
      </View>
      <View style={styles.registerButton}>
        <Text style={styles.registerButton}>REGISTER PLACEHOLDER</Text>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  loginButton: {
    width: "100%",
    height: 70,
    backgroundColor: "#Fc5c65",
    textAlign: "center",
  },
  logo: {
    bottom: 0,
    position: "absolute",
  },
  logoContainer: {
    top: 0,
    alignItems: "center",
  },
  registerButton: {
    width: "100%",
    height: 70,
    backgroundColor: "#4ecdc4",
    textAlign: "center",
  },
});
export default WelcomeScreen;
