import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { Text, View } from 'react-native'
import { styled } from 'nativewind'

import Barber from './src/assets/barber.svg'

export default function App() {
  return (
    <View className="bg-back flex-1 items-center justify-center bg-black">
      <Text className="items-center justify-center text-white">dasdasdas</Text>
      <StatusBar style="light" translucent />
    </View>
  )
}
