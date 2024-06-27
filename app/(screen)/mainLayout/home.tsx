import { Text } from "@/components/Text";
import { View } from "@/components/View"
import React from "react";
import { Searchbar } from "react-native-paper";
import qrcode from "@/assets/images/qrcode.png";
import { Image } from "react-native";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import { router } from "expo-router";

const Home = ()=>{
    const [searchQuery, setSearchQuery] = React.useState("");

    return (
      <View className="w-full h-full bg-main flex flex-col items-center">
        <View className="h-[80%] bg-main w-[80%] m-auto">
          <Searchbar
            placeholder="Search for your favorite restaurant"
            onChangeText={setSearchQuery}
            value={searchQuery}
            mode="bar"
            className="text-[1em]"
            style={{ backgroundColor: "#fff", height: 54, fontSize: 2 }}
          />
          <View className="bg-[#F7951C]">
            <Text className="text-center py-14 font-extrabold text-xl text-[#373635]">
              or
            </Text>
          </View>
          <View className="justify-center items-center bg-[#F7951C]">
            <Image source={qrcode} />
          </View>
            {/* <TouchableWithoutFeedback onPress={()=>{
              router.push("(tabs)/restaurant")
            }}> */}
          <View className="bg-[#F7951C]">
              <Text className="font-bold text-lg text-center py-8 text-[#373635]">
                Scan, Pay & Enjoy!
              </Text>
            {/* </TouchableWithoutFeedback>  */}
          </View>
        </View>
      </View>
    );
}

export default Home;