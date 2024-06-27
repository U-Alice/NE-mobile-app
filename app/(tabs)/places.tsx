import { View } from "@/components/View";
import { AntDesign, FontAwesome } from "@expo/vector-icons";
import { Searchbar } from "react-native-paper";
import RestaurantContent from "../(screen)/mainLayout/placesContent";
import PlacesContent from "../(screen)/mainLayout/placesContent";

export default function Restaurant(){
    return (
        <View className="w-full h-fit ">
           <PlacesContent/>
        </View>
    )
}