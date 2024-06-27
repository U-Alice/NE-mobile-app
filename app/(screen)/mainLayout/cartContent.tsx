import { Text } from "@/components/Text";
import { View } from "@/components/View";
import { AntDesign } from "@expo/vector-icons";
import { Button, Image, ScrollView, TouchableOpacity } from "react-native";
import { TextInput } from "react-native-paper";
import { drinksData } from "@/app/utils/data.dummy";
import { router } from "expo-router";
import CustomButton from "@/components/forms/CustomButton";

export default function CartContent() {
  return (
    <View className="w-full h-screen bg-white mt-12">
      <View className="flex flex-row gap-x-4 bg-white h-14 border-b border-[#e3e3e3] px-8">
        <View className="flex items-center justify-center h-12 w-12 rounded-lg  drop-shadow bg-[#f8f8fb]">
          <AntDesign name="left" size={20} color="#F7951C" />
        </View>
        <TextInput
          className="bg-white text-sm focus:outline-none outline-none"
          style={{ borderColor: "white" }}
          value="Search"
          placeholder="Search"
        ></TextInput>
      </View>
      <View className="w-full flex flex-col gap-4 text-2xl items-end ">
        <Text className="font-bold text-2xl">Choose Kigali</Text>

        <Text className="text-[#F7951C] text-xl font-light">Drinks</Text>
      </View>
      <ScrollView className="px-4 ">
        {drinksData.map((item, index) => (
          <TouchableOpacity
            key={index}
            className="flex flex-row w-full rounded-2xl bg-[#f8f8fb] py-2 mt-4 px-4"
            onPress={() => router.push("(screen)/mainLayout/placeMenu")}
          >
            <View className="h-20 w-20 rounded-2xl ">
              <Image source={item.image} className="h-full w-full rounded-xl" />
            </View>
            <View className="flex flex-col p-2 bg-[#f8f8fb]">
              <Text className="font-light text-xs text-[#666666]">
                Kaffir Lime Vodka , Lemongrass , Ginger, Citrus
              </Text>
              <Text className="font-bold text-[#666666]">
                Tom -Yummy - 12.5
              </Text>
              <View className="bg-[#f8f8fb] mt-2 flex flex-row justify-between">
                <Text className="text-[#F7951C] font-bold"> FRW 6000 </Text>
                <View className="bg-white rounded-sm flex flex-row w-16 justify-between px-2 drop-shadow shadow-sm">
                  <Text className="text-[#F7951C]">-</Text>
                  <Text>1</Text>
                  <Text className="text-[#F7951C]">+</Text>
                </View>
              </View>
            </View>
          </TouchableOpacity>
        ))}
        <View className="flex flex-row items-center justify-center gap-2">
          <Text className="text-center text-[#F7951C] py-4">More Drinks</Text>
          <AntDesign
            name="right"
            className="text-[#F7951C]"
            color={"#F7951C"}
          />
        </View>
        <View className="w-full items-center justify-between flex flex-row">
            <Text className="font-bold">Total</Text>
            <Text className="text-[#F7951c]">Frw 16,000</Text>
        </View>
        <View className="py-3 w-full mt-4">
          <CustomButton
            href="(screen)/mainLayout/payment"
            buttonText="Proceed to Checkout"
            className="text-white"
          />
        </View>
      </ScrollView>
    </View>
  );
}
