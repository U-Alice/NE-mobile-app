import { Image, StyleSheet, Platform } from "react-native";

import { HelloWave } from "@/components/HelloWave";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import Login from "../(screen)/auth/login";
import { View } from "@/components/View";
import Signup from "../(screen)/auth/signup";
import Home from "../(screen)/mainLayout/home";
import Restaurant from "./places";

export default function HomeScreen() {
  return (
    <View>
      <Restaurant />
    </View>
  );
}
