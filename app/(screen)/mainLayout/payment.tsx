import { Text } from "@/components/Text";
import { View } from "@/components/View";
import CustomButton from "@/components/forms/CustomButton";
import { AntDesign } from "@expo/vector-icons";

export default function Payment(){
    return (
      <View className="h-full w-full bg-black py-12">
        <View className="bg-black flex flex-col gap-y-2">
          <Text className="text-[#F7951C] text-center">Payment Success</Text>
          <Text className="text-white text-center p-12">We will send in order details on your email and invoice on your contact number</Text>
        </View>

        <View className="flex flex-row items-center justify-center gap-x-2 bg-black">
          <Text className="text-center text-[#F7951C] py-4">More Drinks</Text>
          <AntDesign
            name="right"
            className="text-[#F7951C]"
            color={"#F7951C"}
          />
        </View>

        <View className="py-4 w-full px-12 bg-black">
          <CustomButton
            href="(tabs)"
            buttonText="Download Invoice"
            className="text-white"
          />
        </View>
        <View className="rounded-3xl flex flex-row items-center mt-4 bg-black justify-center">
          <Text className="text-4xl text-white font-extrabold">Supa</Text>
          <Text className="text-4xl font-extrabold text-[#F7951C]">Menu</Text>
        </View>
      </View>
    );
}