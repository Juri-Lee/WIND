import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { NavigationContainer, TabActions } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SignIn from './SignIn';
import SignupEmail from './SignupEmail'
import VideoIn from './VideoIn'
import LoginEmail from './LoginEmail'
import SignUp from './SignUp'
import ProfileSetting from '../settings/ProfileSetting';


export default function Navigation({ navigation }) {

    const Stack = createStackNavigator();
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="VideoIn" screenOptions={{
                headerShown: false
            }}>
                <Stack.Screen name="VideoIn" component={VideoIn} />
                <Stack.Screen name="SignIn" component={SignIn} />
                <Stack.Screen name="SignUp" component={SignUp} />
                <Stack.Screen name="SignupEmail" component={SignupEmail} />
                <Stack.Screen name="LoginEmail" component={LoginEmail} />

            </Stack.Navigator>
        </NavigationContainer>
    );

}