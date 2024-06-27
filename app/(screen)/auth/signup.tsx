import { Text } from "@/components/Text";
import Toast from "@/components/Toast";
import { View } from "@/components/View";
import CustomButton from "@/components/forms/CustomButton";
import CustomInput from "@/components/forms/CustomInput";
import { api } from "@/utils/fetch";
// import { useToastController } from "@tamagui/toast";
import { router } from "expo-router";
import React, { useState } from "react";
import { Pressable, StyleSheet } from "react-native";
import { Button, TextInput } from "react-native-paper";
import * as Yup from "yup";
import { Formik } from "formik";
import { AuthRegisterRequestPayload } from "@/types/schema";

export default function Signup() {
  const [data, setData] = React.useState({
    fullName: "",
    phoneNumber: "",
    email: "",
    password: "",
  });
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState("");
  const [visible, setVisible] = useState(false);
  const [message, setMessage] = useState("");

  const initialValues: AuthRegisterRequestPayload = {
    email: "",
    phoneNumber: "",
    fullName: "",
    password: ""
  };

  const validationSchema = Yup.object().shape({
    fullName: Yup.string().required("Full Name is required"),
    phoneNumber: Yup.string().required("Last Name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    password:Yup.string()
    .required('Password is required')
    .min(8, 'Password must be at least 8 characters long')
    .matches(/[a-z]/, 'Password must contain at least one lowercase letter')
    .matches(/[A-Z]/, 'Password must contain at least one uppercase letter')
    .matches(/[0-9]/, 'Password must contain at least one number')
    .matches(/[!@#$%^&*(),.?":{}|<>]/, 'Password must contain at least one special character')

  });


  const onRegister = async (payload : AuthRegisterRequestPayload) => {
    // if (!data.fullName || !data.phoneNumber || !data.email || !data.password) {
    //   setMessage("Please fill all fields");
    //   setVisible(true);
    //   return;
    // }
    console.log("payload");
    console.log(payload);
    
    setLoading(true);
    await api
      .post("/users/createAccount", payload)
      .then(({ data }) => {
        setMessage(data.message);
        setVisible(true);
        setError("");
        setLoading(false);
        router.push("/(screen)/auth/login");
      })
      .catch((err) => {
        setMessage(err.response.data.message);
        setVisible(true);
        setLoading(false);
      });
  };

  return (
    <View className="w-full h-full bg-[#F7951C]">
      <View className="w-full h-[92%] mt-[20%] rounded-3xl items-center">
        <View className="rounded-3xl flex flex-row items-center mt-4">
          <Text className="text-4xl font-extrabold ">Supa</Text>
          <Text className="text-4xl font-extrabold text-[#F7951C]">Menu</Text>
        </View>
        <View>
          <Text className="text-sm font-bold text-[#bcc1cf] mt-4 text-center ">
            Welcome on Board!
          </Text>
          {error ? (
            <Text className="text-red-500 text-sm text-center">{error}</Text>
          ) : null}
        </View>

        <View className="w-[90%] mt-4">
          <View className="py-4">
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={onRegister}
            >
              {({
                handleChange,
                handleBlur,
                handleSubmit,
                values,
                errors,
                touched,
                isValid
              }) => (
                <>
                  <CustomInput
                   onChangeText={handleChange("fullName")}
                    onBlur={handleBlur("fullName")}
                    left={<TextInput.Icon icon="mail" />}
                    value={values.fullName}
                    error={touched.fullName ? errors.fullName : ""}
                    // onChangeText={(text: any) => setData({ ...data, fullName: text })}
                    label="Full Name"
                  />
                  <CustomInput
                    onBlur={handleBlur("phoneNumber")}
                    error={touched.phoneNumber ? errors.phoneNumber : ""}
                    value={values.phoneNumber}
                    onChangeText={handleChange("phoneNumber")}
                    left={<TextInput.Icon icon="phone" />}
                    label="Phone Number"
                  />
                  <CustomInput
                    onBlur={handleBlur("email")}
                    error={touched.email ? errors.email : ""}
                    value={values.email}
                    left={<TextInput.Icon icon="mail" />}
                    label="Email"
                    onChangeText={handleChange("email")}
                    />
                  <CustomInput
                    onBlur={handleBlur("password")}
                    error={touched.password ? errors.password : ""}
                    onChangeText={handleChange("password")}
                    left={<TextInput.Icon icon="lock" />}
                    value={values.password}
                    secureTextEntry={true}
                    label="password"
                  />
                  <View className="py-3 w-[90%]">
                    <CustomButton
                      isDisabled={!isValid}
                      onPress={()=>handleSubmit}
                      // href="(tabs)"
                      buttonText={loading ? "Registering.." : "Register"}
                      className="text-white"
                    />
                  </View>
                </>
              )}

            </Formik>
          </View>
        </View>

        <View className="w-[90%] flex flex-row items-center gap-x-2 my-2">
          <View className="h-[1px] w-[45%] bg-gray-200"></View>
          <Text className="text-[#9098b1] font-bold">OR</Text>
          <View className="h-[1px] w-[45%] bg-gray-200"></View>
        </View>
        <View className="w-[90%]">
          <View className="w-full flex items-center mt-2 ">
            <View className="flex flex-row gap-x-2 mt-4">
              <Text className="text-[#bcc1cf] inline">
                Already have an account?
              </Text>
              <Pressable onPress={() => router.push("/(screen)/auth/login")}>
                <Text className="text-[#fec57f] font-bold inline">Sign In</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </View>
      <Toast visible={visible} message={message} setVisible={setVisible} />
    </View>
  );
}
