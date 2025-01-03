import { View, Text, SafeAreaView, ScrollView, Image, TouchableOpacity, Alert } from 'react-native'
import React from 'react'
import images from '@/constants/images'
import icons from '@/constants/icons'
import { login } from '@/lib/appwrite'
import { useGlobalContext } from '@/lib/global-provider'
import { Redirect } from 'expo-router'

const SignIn = () => {

    const { refetch, loading, isLogged } = useGlobalContext()

    if(!loading && isLogged) return <Redirect href="/" />

    const handleLogin = async () => {
        const result = await login()

        if(result){
            refetch()
        }else{
            Alert.alert('Error, Failed to login')
        } 
    }

    return (
        <SafeAreaView className='bg-white h-full'>
            <ScrollView contentContainerStyle={{ height: "100%" }}>
                <Image source={images.onboarding} className='w-full h-4/6' resizeMode='contain' />
                <View className='px-10'>
                    <Text className='text-base text-black-200 text-center uppercase font-rubik'>Welcome to Restate</Text>
                    <Text className='text-3xl text-center text-black-300 font-rubik-bold mt-2'>
                        Let's Get you Closer to {"\n"} <Text className='text-primary-300'>Your Ideal Home</Text>
                    </Text>
                    <Text className='text-lg font-rubik text-center text-black-200 mt-10'>
                        Login to ReState with Google
                    </Text>
                    <TouchableOpacity onPress={handleLogin} className='bg-white shadow-md shadow-zinc-300 rounded-full w-full py-4 mt-2'>
                        <View className='flex flex-row items-center justify-center'>
                            <Image source={icons.google} className='w-5 h-5' resizeMode='contain' />
                            <Text className='text-lg font-rubik-medium text-black-300 ml-2'>Continue With Google</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default SignIn