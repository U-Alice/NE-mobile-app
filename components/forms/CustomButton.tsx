import { router } from "expo-router";
import React from "react";
import { Text, TouchableOpacity } from "react-native";
import { Button } from "react-native-paper";

export type StaticRoutes = any;

interface CustomButtonProps {
  href?: StaticRoutes;
  buttonText: string;
  className?: string;
  onPress? : any;
  isDisabled?: boolean
}

export default function CustomButton({
  href,
  buttonText,
  className,
  onPress,
  isDisabled
}: CustomButtonProps) {
    return (
      <Button
        mode="elevated"
        onPress={href? () => router.push(href): onPress}
        style={{
          backgroundColor: "#f7941c",
          justifyContent: "center",
          height: 54,
          borderRadius: 5,
        }}
        labelStyle={{ color: "white" , fontWeight: 200, fontSize: 16}}
        className="text-white h-full"
        disabled={isDisabled}
      >
        {buttonText}
      </Button>
    );
}
