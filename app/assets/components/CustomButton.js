import React from "react";
import { Text, TouchableOpacity } from "react-native";
import colors from "../../config/colors";

export default function CustomButton({ label, onPress }) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        backgroundColor: colors.primary,
        padding: 20,
        borderRadius: 10,
        marginBottom: 30,
      }}
    >
      <Text
        style={{
          textAlign: "center",
          fontWeight: "700",
          fontSize: 16,
          color: "#fff",
        }}
      >
        {label}
      </Text>
    </TouchableOpacity>
  );
}
