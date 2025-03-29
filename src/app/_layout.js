import { Stack } from 'expo-router';
import Login from '.';

export default function MainLayout() {
    return (

        <Stack>

            <Stack.Screen name="index" options={{headerShown: false}}/>

            <Stack.Screen name="(auth)/signup/page" options={{headerShown: false}}/>

            <Stack.Screen name="(loggedin)/user/page" options={{headerShown: false}}/>

        </Stack>
        
    )
} 