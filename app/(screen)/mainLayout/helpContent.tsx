import React from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';


const HelpPage = () => {
  return (
    <ScrollView className='flex-grow bg-white p-4'>
      <Text className='text-2xl font-bold text-center mb-6'>User Help</Text>
      
      <View className='mb-4'>
        <Text className='text-lg font-semibold'>Getting Started</Text>
        <Text className='text-base text-gray-700 mt-2'>
          To get started with our app, please follow the instructions below. If you have any questions, refer to the FAQ section.
        </Text>
      </View>

      <View className='mb-'>
        <Text className='text-lg font-semibold'>FAQ</Text>
        <Text className='text-base text-gray-700 mt-2'>
          Here are some frequently asked questions to help you navigate through common issues.
        </Text>
      </View>

      <View className='mb-4'>
        <Text className='text-lg font-semibold'>Contact Support</Text>
        <Text className='text-base text-gray-700 mt-2'>
          If you need further assistance, please contact our support team by clicking the button below.
        </Text>
        <TouchableOpacity className='mt-4 bg-blue-500 p-3 rounded'>
          <Text className='text-white text-center text-base font-semibold'>
            Contact Support
          </Text>
        </TouchableOpacity>
      </View>

      {/* <View className='mb-4'>
        <Text className='text-lg font-semibold'>Video Tutorials</Text>
        <View className='h-56 mt-2'>
          <WebView
            source={{ uri: 'https://www.youtube.com/embed/dQw4w9WgXcQ' }}
            className='flex-1'
          />
        </View>
      </View> */}
    </ScrollView>
  );
};

export default HelpPage;
