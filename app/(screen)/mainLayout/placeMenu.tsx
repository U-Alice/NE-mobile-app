import { Text } from "@/components/Text";
import { View } from "@/components/View";
import { AntDesign, MaterialIcons } from "@expo/vector-icons";
import { useEffect, useState } from "react";
import { Alert, BackHandler, Image, ScrollView, TouchableOpacity, TouchableWithoutFeedback } from "react-native";
import { TextInput } from "react-native-paper";
import { stockData } from "@/app/utils/data.dummy";
import { useRestaurants } from "@/useData/useRestaurant";

export default function PlaceMenu() {
  const [viewItems, setViewItems] = useState(false);
   useEffect(() => {
     const backAction = () => {
      //  Alert.alert("Hold on!", "Are you sure you want to go back?", [
      //    {
      //      text: "Cancel",
      //      onPress: () => null,
      //      style: "cancel",
      //    },
      //    { text: "YES", onPress: () => BackHandler.exitApp() },
      //  ]);
      //  return true;
      if(!viewItems){ 
        console.log(viewItems);   
        setViewItems(false);
        console.log(viewItems)
      }
      return true;
     };

     const backHandler = BackHandler.addEventListener(
       "hardwareBackPress",
       backAction
     );

     return () => backHandler.remove();
   }, []);
  return (
    <View>
      {!viewItems ? (
        <View className="h-full w-full bg-black py-12">
          <Text className="text-main text-center text-xl font-bold">
            Choose Kigali
          </Text>
          <View className="flex flex-row px-12 bg-black">
            <View className="bg-black mt-14 border px-8 border-r-[#61390b]">
              <MaterialIcons name="table-bar" size={64} color={"#61390b"} />
              <Text className="text-white text-xl">Ordered</Text>
            </View>
            <View className="bg-black mt-14 border-r-[#F7951C] px-8 flex flex-col items-center">
              <AntDesign name="customerservice" size={64} color={"#61390b"} />
              <Text className="text-white text-xl font-bold">Call waiter</Text>
            </View>
          </View>

          <Text className="text-main text-center text-xl font-bold mt-16 ">
            Menu
          </Text>

          <View className="px-12 bg-black mt-12 flex flex-col">
            <View className="bg-black flex flex-row w-full justify-between ">
              <Text className="text-white text-xl">Appetizer</Text>
              <TouchableOpacity onPress={() => setViewItems(true)}>
                <AntDesign name="right" size={30} color={"white"} />
              </TouchableOpacity>
            </View>
            <View className="bg-black flex flex-row w-full justify-between mt-12">
              <Text className="text-white text-xl">Starter</Text>
              <AntDesign name="right" size={30} color={"white"} />
            </View>
            <View className="bg-black flex flex-row w-full justify-between mt-12">
              <Text className="text-white text-xl">Main</Text>
              <AntDesign name="right" size={30} color={"white"} />
            </View>
            <View className="bg-black flex flex-row w-full justify-between mt-12">
              <Text className="text-white text-xl">Dessert</Text>
              <AntDesign name="right" size={30} color={"white"} />
            </View>
          </View>
        </View>
      ) : (
        <View className="w-full h-screen bg-white mt-12">
          <View className="flex flex-row gap-x-4 bg-white h-14 border-b border-[#e3e3e3] px-8">
            <TouchableWithoutFeedback className="flex items-center justify-center h-12 w-12 rounded-lg  drop-shadow bg-[#f8f8fb]" onPress={()=> setViewItems(false)}>
              <AntDesign name="left" size={20} color="#F7951C" />
            </TouchableWithoutFeedback>
            <TextInput
              className="bg-white text-sm focus:outline-none outline-none"
              style={{ borderColor: "white" }}
              value="Search"
              placeholder="Search"
            ></TextInput>
          </View>

          <ScrollView className="px-4 ">
            <View className="w-full flex flex-col gap-1 text-2xl items-end ">
              <Text className="font-bold text-2xl">Choose Kigali</Text>
              <Text className="text-[#F7951C] text-xl font-light">Drinks</Text>
            </View>
            {stockData.map((item, index) => (
              <TouchableOpacity
                key={index}
                className="flex flex-row w-full rounded-2xl bg-[#f8f8fb] py-2 mt-4 px-4"
                onPress={() => {}}
              >
                <View className="h-20 w-20 rounded-2xl ">
                  <Image
                    source={item.image}
                    className="h-full w-full rounded-xl"
                  />
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
          </ScrollView>
        </View>
      )}
    </View>
  );
}
