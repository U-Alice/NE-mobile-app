import React, { useState, useEffect, useRef } from "react";
import { View, StyleSheet, Animated } from "react-native";
import { Snackbar, Button } from "react-native-paper";
import { Text } from "../Text";

const Toast = ({ visible, message, setVisible }) => {
  const progress = useRef(new Animated.Value(0)).current;

  useEffect(() => {
      Animated.timing(progress, {
        toValue: 1,
        duration: 3000, // Duration of the Snackbar
        useNativeDriver: false,
      }).start(() => {
        setVisible(false);
        // onDismiss();
        progress.setValue(0); // Reset progress
      });
    
  }, [visible, progress]);

  const animatedWidth = progress.interpolate({
    inputRange: [0, 1],
    outputRange: ["0%", "100%"],
  });

  return (
    <Snackbar
      visible={visible}
      onDismiss={() => {
        setVisible(false);
      }}
      duration={Snackbar.DURATION_SHORT}
      style={styles.snackbar}
    >
      <View className="flex flex-row items-center justify-center">
        <Text style={styles.text}>{message}</Text>
        <Animated.View style={[styles.progressBar, { width: animatedWidth }]} />
      </View>
    </Snackbar>
  );
};



const styles = StyleSheet.create({
  snackbar: {
    position: "absolute",
    right: "5%",
    left: "5%",
    bottom: 0,
    width: "90%",
    backgroundColor: "white",
    padding: 0,
    margin: 0,
  },
  text: {
    textAlign: "center",
  },
  progressBar: {
    height: 2,
    backgroundColor: "#fec57f",
    marginTop: 4,
  },
});

export default Toast;
