import { Account, Avatars, Client, OAuthProvider } from "react-native-appwrite"
import * as Linking from "expo-linking"
import { openAuthSessionAsync } from "expo-web-browser"

export const config = {
    platform: 'com.jsm.restate',
    endpoint: process.env.EXPO_PUBLIC_APPWRITE_ENDPOINT,
    projectId: process.env.EXPO_PUBLIC_APPWRITE_PROJECT_ID,
}

export const client = new Client()
client.setEndpoint(config.endpoint!).setProject(config.projectId!).setPlatform(config.platform!)

export const avatar = new Avatars(client)
export const account = new Account(client)

export async function login(){
    try {
        const redirectUri = Linking.createURL("/")
        const response = await account.createOAuth2Token(OAuthProvider.Google, redirectUri)

        if(!response) throw new Error('Failed to login')

        const browserResult = await openAuthSessionAsync(response.toString(), redirectUri)

        if(browserResult.type !== 'success') throw new Error('Failed to login')
        
        const url = new URL(browserResult.url)

        const secret = url.searchParams.get('secret')?.toString()
        const userId = url.searchParams.get('userId')?.toString()

        if(!secret || !userId) throw new Error('Failed to login')
        
        const session = await account.createSession(userId, secret)

        if(!session) throw new Error('Failed to create a session')

        return true

    } catch (error) {
        console.error(error)
        return false
    }
}
export async function logout() {
    try {
        await account.deleteSession('current')
        return true        
    } catch (error) {
        console.log(error)
        return false
    }
}
export async function getCurrentUser(){
    try {
        const response = await account.get()
        
        if(response.$id){
            const userAvatar = avatar.getInitials(response.name)

            return{
                ...response,
                avatar: userAvatar.toString()
            }
        }

    } catch (error) {
        console.log(error)
        return null   
    }
}