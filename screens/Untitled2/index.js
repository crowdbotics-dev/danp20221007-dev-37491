import { Pressable } from "react-native";
import React from "react";
import { View, StyleSheet } from "react-native";

const Untitled2 = () => {
  return <View style={_styles.ELNwmJgU}>
      <Pressable onPress={() => navigation.navigate("Untitled3")} style={_styles.igfvfsUT}><View style={_styles.KLjjlphZ}></View></Pressable><Pressable onPress={() => navigation.navigate("Untitled1")} style={_styles.CnOwtyWt}><View style={_styles.UMgtTrCx}></View></Pressable></View>;
};

export default Untitled2;

const _styles = StyleSheet.create({
  ELNwmJgU: {
    backgroundColor: "#f0f0f1",
    padding: 10,
    position: "relative",
    height: "100%"
  },
  KLjjlphZ: {
    left: 48,
    top: 90,
    position: "absolute",
    height: 60,
    width: 140,
    backgroundColor: "#E4E4E4",
    borderRadius: 0,
    color: "#777777"
  },
  UMgtTrCx: {
    left: 42,
    top: 252,
    position: "absolute",
    height: 60,
    width: 140,
    backgroundColor: "#E4E4E4",
    borderRadius: 0,
    color: "#777777"
  },
  CZJLuZIM: {
    position: "unset"
  },
  CnOwtyWt: {
    position: "unset"
  },
  igfvfsUT: {
    position: "unset"
  }
});