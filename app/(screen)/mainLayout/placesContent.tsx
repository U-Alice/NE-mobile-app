import { Text } from "@/components/Text";
import { View } from "@/components/View";
import { AntDesign } from "@expo/vector-icons";
import { Image, ScrollView, TouchableOpacity } from "react-native";
import {  TextInput } from "react-native-paper";
import { router } from "expo-router";
import { useEffect } from "react";
import axios from "axios";

export default function PlacesContent() {
  const getData = async ()=>{
    const response = await axios.get('https://jsonplaceholder.typicode.com')
    console.log(response)
  }
 useEffect(()=>{
  getData()
 }, [])
  // const { restaurants } = useRestaurants();
  const restaurants :any = []
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
      <Text className="text-[#F7951C] px-8 py-4">Nearby Restaurant</Text>

      <ScrollView className="px-8 ">
        {restaurants ? restaurants.map((item: any, index: any) => (
          <TouchableOpacity
            key={index}
            className="flex flex-row w-full rounded-2xl bg-[#f8f8fb] py-4 mt-4 px-4"
            onPress={() => router.push("(screen)/mainLayout/placeMenu")}
          >
            <View className="h-24 w-24 rounded-2xl ">
              <Image source={item.title} className="h-24 w-24 rounded-xl" />
            </View>
            <TouchableOpacity className="justify-center px-4">
              <Text className="font-bold text-[#666666]">{item.userId}</Text>
              <Text className=" text-[#a6a6a8] ">{item.body}</Text>
            </TouchableOpacity>
          </TouchableOpacity>
        )) : (<View>
        <Text>
          No Data Found!!
        </Text>
      </View> )}
        
      </ScrollView>
    </View>
  );
}
