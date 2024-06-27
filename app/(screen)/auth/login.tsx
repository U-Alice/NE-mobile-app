import { Text } from "@/components/Text";
import { View } from "@/components/View";
import CustomButton from "@/components/forms/CustomButton";
import CustomInput from "@/components/forms/CustomInput";
import { router } from "expo-router";
import { Image, Pressable, TouchableOpacity } from "react-native";
import { TextInput } from "react-native-paper";
import google from "@/assets/images/google.png";
import facebook from "@/assets/images/facebook.png";
import React, { useEffect } from "react";
import { api } from "@/utils/fetch";
import Toast from "@/components/Toast";
import { useAuth } from "@/context/AuthProvider";
import useStorage from "@/hooks/useStorage";

export default function Login() {
  const [data, setData] = React.useState({
    email: "",
    password: "",
  });
  const [visible, setVisible] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState("");
  const [message, setMessage] = React.useState("");
  const { storeData } = useStorage();
  const {token, setToken, setUser } = useAuth();

  const onLogin = async () => {
    await api
      .post("/auth/signIn", data)
      .then(({ data }) => {
        setMessage(data.data.message);
        setVisible(true);
        setError("");
        setLoading(false);
        storeData("token", data.data.token);
        setToken(data.data.token);
        router.push("/(tabs)");
      })
      .catch((err) => {
        console.log(err.response.data.message);
        setMessage(err.response.data.message);
        setVisible(true);
        setLoading(false);
      });
  };
  useEffect(()=>{
    console.log("here")
    console.log(token);
  }, [])
  return (
    <View className="w-full h-full bg-[#F7951C]">
      <View className="w-full h-[92%] mt-[20%] rounded-3xl items-center">
        <View className="rounded-3xl flex flex-row items-center mt-4">
          <Text className="text-4xl font-extrabold">Supa</Text>
          <Text className="text-4xl font-extrabold text-[#F7951C]">Menu</Text>
        </View>
        <View>
          <Text className="text-sm font-bold text-[#bcc1cf] mt-4 text-center">
            Back on Board!
          </Text>
          <Text className="text-sm font-bold mt-4 text-center text-[#bcc1cf] font-poppins">
            Please fill in the information
          </Text>
          {error ? (
            <Text className="text-red-500 text-sm text-center">{error}</Text>
          ) : null}
        </View>
        <View className="w-[90%] mt-4">
          <View className="py-4">
            <CustomInput
              onChangeText={(text: any) => setData({ ...data, email: text })}
              textContentType="emailAddress"
              left={<TextInput.Icon icon="mail" />}
              label="Your Email"
              secureTextEntry={false}
            />
            <CustomInput
              onChangeText={(text: any) => setData({ ...data, password: text })}
              left={<TextInput.Icon icon="lock" />}
              label="Password"
              textContentType={"password"}
              secureTextEntry={true}
            />
          </View>
          <View />
        </View>
        <View className="py-3 w-[90%]">
          <CustomButton
            // href="(tabs)"
            onPress={onLogin}
            buttonText={loading ? "Loading..." : "Sign In"}
            className="text-white"
          />
        </View>
        <View className="w-[90%] flex flex-row items-center gap-x-2 my-2">
          <View className="h-[1px] w-[45%] bg-gray-200"></View>
          <Text className="text-[#9098b1] font-bold">OR</Text>
          <View className="h-[1px] w-[45%] bg-gray-200"></View>
        </View>
        <View className="w-[90%]">
          <TouchableOpacity
            className="py-4 border-[1px] w-full flex m-auto border-gray-200 rounded-lg mt-2 mb-2"
            onPress={() => console.log("pressed")}
          >
            <View className="flex flex-row justify-center gap-2 bg-transparent">
              <Image source={google} style={{ height: 20, width: 20 }} />
              <Text className="text-center text-[#9098b1] font-bold">
                Login with Google
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            className="py-4 border-[1px] w-full flex m-auto border-gray-200 rounded-lg mt-2 mb-2"
            onPress={() => console.log("pressed")}
          >
            <View className="flex flex-row justify-center gap-2 bg-transparent">
              <Image source={facebook} style={{ height: 20, width: 20 }} />
              <Text className="text-center text-[#9098b1] font-bold">
                Login with Facebook
              </Text>
            </View>
          </TouchableOpacity>

          <View className="w-full flex items-center mt-2 ">
            <Text className="text-[#fec57f] font-bold">Forgot password?</Text>

            <View className="flex flex-row gap-x-2 mt-4">
              <Text className="text-[#bcc1cf] inline">
                Don't have an account?
              </Text>
              <Pressable onPress={() => router.push("/(screen)/auth/signup")}>
                <Text className="text-[#fec57f] font-bold inline">
                  Register
                </Text>
              </Pressable>
            </View>
          </View>
        </View>
      </View>
      <Toast visible={visible} message={message} setVisible={setVisible} />
    </View>
  );
}
