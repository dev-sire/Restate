import { View, Text } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

export default function Index() {
    return (
        <View className='h-full w-full flex justify-center items-center'>
            <Text className='my-10 text-3xl font-rubik font-bold text-primary-300'>Welcome To ReState!</Text>
            <Link href="/sign-in">Sign In Page</Link>
        </View>
    )
}