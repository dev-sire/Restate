import { View, Text, Image } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import icons from '@/constants/icons'

const TabIcon = ({ focused, icon, title }: { focused: boolean, icon: any, title: string }) => (
    <View className='flex flex-1 mt-3 items-center flex-col'>
        <Image source={icon} tintColor={focused ? "#0061ff" : "#666876"} resizeMode='contain' className='size-6' />
        <Text className={`${focused ? 'text-primary-300 font-rubik-medium' : 'text-black-200 font-rubik'} text-xs w-full mt-1 text-center`}>
            {title}
        </Text>
    </View>
)

const TabsLayout = () => {
    return (
        <Tabs
            screenOptions={{
                tabBarShowLabel: false,
                tabBarStyle: {
                    backgroundColor: "white",
                    position: "absolute",
                    borderTopColor: "#0061FF1A",
                    borderTopWidth: 1,
                    minHeight: 70,
                }
            }}
        >
            <Tabs.Screen 
                name="index"
                options={{
                    title: "Home",
                    headerShown: false,
                    tabBarIcon: ({ focused }) => (
                        <TabIcon icon={icons.home} focused={focused} title='Home' />
                    )
                }}
            />
            <Tabs.Screen 
                name="explore"
                options={{
                    title: "Explore",
                    headerShown: false,
                    tabBarIcon: ({ focused }) => (
                        <TabIcon icon={icons.search} focused={focused} title='Explore' />
                    )
                }}
            />
            <Tabs.Screen 
                name="profile"
                options={{
                    title: "Profile",
                    headerShown: false,
                    tabBarIcon: ({ focused }) => (
                        <TabIcon icon={icons.person} focused={focused} title='Profile' />
                    )
                }}
            />
        </Tabs>
    )
}

export default TabsLayout