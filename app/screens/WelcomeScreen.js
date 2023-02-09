import React from "react";
import { Image, ImageBackground, StyleSheet, Text, View } from "react-native";

function WelcomeScreen(props) {
  return (
    <ImageBackground
      style={styles.background}
      source={require("../assets/background.png")}
    >
      <View style={styles.logoContainer}>
        <Image
          style={styles.logo}
          source={require("../assets/logo-home.png")}
        />
        <Text>Advanced Safety Systems Australia</Text>
      </View>
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
    justifyContent: "flex-end",
    alignItems: "center",
  },
  loginButton: {
    width: "100%",
    height: 70,
    backgroundColor: "#Fc5c65",
    textAlign: "center",
  },
  logo: {
    width: 100,
    height: 100,
  },
  logoContainer: {
    position: "absolute",
    top: 60,
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
