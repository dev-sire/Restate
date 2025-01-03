import { View, Text } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

export default function Index() {
    return (
        <View className='h-full w-full flex justify-center items-center'>
            <Text className='my-10 text-3xl font-rubik font-bold text-primary-300'>Root Index of the app</Text>
            <Link href="/explore">Explore Page</Link>
            <Link href="/profile">Profile Page</Link>
            <Link href="/properties/23">properties Page</Link>
            <Link href="/sign-in">Sign In Page</Link>
        </View>
    )
}