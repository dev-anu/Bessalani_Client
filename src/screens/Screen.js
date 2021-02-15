import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Screen = () => {
  return (
    <View style={styles.screen}>
      <Text>Screen..</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Screen;