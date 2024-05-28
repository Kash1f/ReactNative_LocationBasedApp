import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Header from '../Components/Home/Header'

export default function Home() {
  return (
    <SafeAreaView style={{padding:20}}>
      <Header/>
    </SafeAreaView>
  )
}