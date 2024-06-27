import { ThemeProps, useThemeColor } from "@/hooks/useThemeColor";
import { MaterialIcons } from "@expo/vector-icons";
import React, { useState } from "react";
import { KeyboardType, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import TextInput from "react-native-paper/src/components/TextInput/TextInput";

export type TextInputProps = ThemeProps;
interface FormInputProps extends TextInputProps {
  error?: string,
  label: string;
  required?: boolean;
  value?: any;
  onChangeText?: any;
  secureTextEntry?: boolean;
  right?: React.ReactNode;
  left?: React.ReactNode;
  type?: "text" | "password" | "secure-text";
  keyboardType?: KeyboardType;
  textContentType?: any;
  onBlur? : any;
}

const CustomInput: React.FC<FormInputProps> = ({
  error,
  label,
  type,
  required,
  value,
  onChangeText,
  secureTextEntry,
  lightColor,
  darkColor,
  keyboardType,
  right,
  left,
  onBlur,
  ...otherProps
}) => {
  const backgroundColor = useThemeColor(
    { light: lightColor, dark: darkColor },
    "background"
  );
  const textColor = useThemeColor(
    { light: lightColor, dark: darkColor },
    "text"
  );
  const [hidePassword, setHidePassword] = useState(true);
  const handleToggleHidePassword = () => {
    setHidePassword((prev) => !prev);
  };

  return (
    <View className='flex gap-y-2 my-2'>
    <TextInput
      style={{
        backgroundColor,
        fontSize: 12,
        color: "black",
        marginTop: 6,
      }}
      textColor={textColor}
      label={label}
      mode="outlined"
      autoCapitalize="none"
      outlineColor="#E6E8EE"
      activeOutlineColor="#F7951C"
      onBlur={onBlur}
      value={value}
      onChangeText={onChangeText}
      secureTextEntry={secureTextEntry}
      left={left}
      right={secureTextEntry && (
        <TouchableOpacity onPress={handleToggleHidePassword}>
          {hidePassword ? (
            <MaterialIcons name='visibility-off' size={18} color='#b1b6c8' />
          ) : (
            <MaterialIcons name='visibility' size={18} color='#b1b6c8' />
          )}
        </TouchableOpacity>
      )}
      {...otherProps}
      
    />
    {error && <Text className=' text-xs pl-3 mt-4' style={{color:"red"}}>{error}</Text>}
     </View>
  );
};

export default CustomInput;
