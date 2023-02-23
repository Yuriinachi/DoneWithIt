import React from "react";
import {
  Text,
  StyleSheet,
  View,
  SafeAreaView,
  StatusBar,
  TouchableOpacity,
  Image,
} from "react-native";

import CustomButton from "../assets/components/CustomButton";
import colors from "../config/colors";
import SVGimg from "../assets/assalogo.svg";

const ASSAHome = ({ navigation }) => {
  return (
    <SafeAreaView
      style={{
        backgroundColor: colors.fill,
        flex: 1,
      }}
    >
      <StatusBar barStyle={"light-content"} />
      <StatusBar backgroundColor={colors.darkgreen} />
      <View
        style={{
          backgroundColor: colors.darkgreen,
          width: "100%",
          height: "13%",
          marginTop: "-15%",
        }}
      />
      <View
        style={{
          backgroundColor: colors.lightgreen,
          width: "100%",
          height: "2%",
        }}
      />
      <View
        style={{ backgroundColor: colors.fill, width: "100%", height: 100 }}
      />
      <Text style={styles.header}>HOME PAGE</Text>
      <View
        style={{
          marginRight: 25,
          marginLeft: 25,
          width: "87%",
          height: 100,
          justifyContent: "center",
          position: "relative",
          bottom: 80,
        }}
      >
        <View>
          <Image style={styles.glass} source={require("../assets/glass.png")} />
          <CustomButton
            label={"Search"}
            onPress={() => navigation.navigate("SearchBar")}
          />
        </View>
      </View>

      <View
        style={{
          marginRight: 25,
          marginLeft: 25,
          width: "87%",
          height: 100,
          justifyContent: "center",
          position: "relative",
          bottom: 80,
        }}
      >
        <View>
          <Image style={styles.swms} source={require("../assets/swms.png")} />
          <CustomButton
            label={"SWMS"}
            onPress={() => navigation.navigate("SearchBar")}
          />
        </View>
      </View>

      <View
        style={{
          marginRight: 25,
          marginLeft: 25,
          width: "87%",
          height: 100,
          justifyContent: "center",
          position: "relative",
          bottom: 60,
        }}
      >
        <View>
          <Image style={styles.iir} source={require("../assets/iir.png")} />
          <CustomButton
            label={"IIR CASES"}
            onPress={() => navigation.navigate("SearchBar")}
          />
        </View>
      </View>

      <View
        style={{
          marginRight: 25,
          marginLeft: 25,
          width: "87%",
          height: 100,
          justifyContent: "center",
          position: "relative",
          bottom: 80,
        }}
      >
        <View>
          <Image style={styles.chat} source={require("../assets/chat.png")} />
          <CustomButton
            label={"LIVE CHAT"}
            onPress={() => navigation.navigate("SearchBar")}
          />
        </View>
      </View>

      <View
        style={{
          marginLeft: 25,
          width: "15%",
          height: "10%",
          justifyContent: "center",
          position: "absolute",
          bottom: "96%",
          left: "78%",
        }}
      >
        <View>
          <Image
            style={styles.profile}
            source={require("../assets/Dicks.png")}
          />
          <CustomButton
            label={""}
            onPress={() => navigation.navigate("SearchBar")}
          />
        </View>
      </View>
      <SVGimg style={styles.logo} width={100} height={100} alignSelf="center" />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  header: {
    fontSize: 30,
    fontWeight: "500",
    color: "green",
    marginTop: 120,
    alignSelf: "center",
    position: "absolute",
    zIndex: 1,
  },
  logo: {
    bottom: 0,
    position: "absolute",
  },
  buttons: {
    alignSelf: "center",
  },
  glass: {
    width: 60,
    height: 60,
    position: "relative",
    top: 60,
    zIndex: 1,
  },
  swms: {
    width: 60,
    height: 60,
    position: "relative",
    top: 60,
    zIndex: 1,
  },
  chat: {
    width: 60,
    height: 60,
    position: "relative",
    top: 60,
    zIndex: 1,
  },
  iir: {
    width: 10,
    height: 10,
    position: "relative",
    top: 60,
    zIndex: 1,
  },
  profile: {
    width: 10,
    height: 10,
    position: "relative",
    top: 30,
    zIndex: 1,
  },
});
export default ASSAHome;
