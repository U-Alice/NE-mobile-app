import { Tabs } from 'expo-router';
import React from 'react';
import { useColorScheme } from '@/hooks/useColorScheme';
import { AntDesign, EvilIcons, Feather } from '@expo/vector-icons';
import { Colors } from '@/utils/constants/Colors';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color, focused }) => (
            <AntDesign name="home" size={20} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="places"
        options={{
          title: "Places",
          tabBarIcon: ({ color, focused }) => (
            <EvilIcons name="location" size={24} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="placeMenu"
        options={{
          title: "Menu",
          tabBarIcon: ({ color, focused }) => (
            <Feather name="list" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="cart"
        options={{
          title: "Cart",
          tabBarIcon: ({ color, focused }) => (
            <Feather name="shopping-cart" size={24} color={color} />
          ),
        }}
      />
       <Tabs.Screen
        name="help"
        options={{
          title: "Help",
          tabBarIcon: ({ color, focused }) => (
            <Feather name="help-circle" size={24} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
