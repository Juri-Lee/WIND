
import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, Modal } from 'react-native';
//import { Ionicons } from 'react-native-ionicons';
import { Ionicons, Entypo } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useNavigation } from '@react-navigation/native';
import { NavigationContainer, TabActions } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import RecipeSearch from './RecipeSearch';
import RecipeFound from './RecipeFound';
import RecipeSpc from './RecipeSpc';
import ProfileSetting from './settings/ProfileSetting';
import MainPageTop from './MainPageTop';
import Calender from './meal/Calender';
import Basket from './Storage/Basket'
import RecipeMain from './RecipeMain';
import RecipeSteps from './Add/RecipeSteps';
import RecipeTitle from './Add/RecipeTitle';
import MealSteps from './Add/MealSteps';
import MealTitle from './Add/MealTitle';



//<ion-icon name="ellipse-outline"></ion-icon>
function AddScreen() {
    const Stack = createStackNavigator();
    return (

        <Stack.Navigator initialRouteName="AddMain" screenOptions={{
            headerShown: false
        }}>
            <Stack.Screen name="AddMain" component={MainPageTop} />
            <Stack.Screen name="RecipeTitle" component={RecipeTitle} />
            <Stack.Screen name="RecipeSteps" component={RecipeSteps} />
            <Stack.Screen name="MealTitle" component={MealTitle} />
            <Stack.Screen name="MealSteps" component={MealSteps} />
        </Stack.Navigator>

    );
}
function SettingsScreen() {
    return (
        <ProfileSetting />
    );
}
function MealPlanScreen() {
    return (
        <Calender />
    );
}
function RecipeScreen({ navigation }) {
    const Stack = createStackNavigator();
    return (

        <Stack.Navigator initialRouteName="Main" screenOptions={{
            headerShown: false
        }}>
            <Stack.Screen name="Main" component={RecipeMain} />
            <Stack.Screen name="Home" component={RecipeSearch} />
            <Stack.Screen name="RecipeFound" component={RecipeFound} />
            <Stack.Screen name="RecipePage" component={RecipeSpc} />
        </Stack.Navigator>

    );

}
function BasketScreen() {

    return (
        <Basket />
    );
}

const Tab = createBottomTabNavigator();

export default function NavBar() {

    return (


        <Tab.Navigator
            screenOptions={({ route }) => ({

                tabBarIcon: ({ focused, color, size }) => {
                    let IconName;

                    if (route.name === 'ADD') {
                        // IconName = focused ? 'ios-home' : 'ios-egg';
                        IconName = 'md-add-circle';
                        size = 35;
                        color = '#656084'

                    } else if (route.name === 'SETTINGS') {
                        size = focused ? 30 : 20;
                        IconName = focused ? 'ios-build' : 'ios-egg';
                    } else if (route.name === 'BASKET') {
                        size = focused ? 30 : 20;
                        IconName = focused ? 'ios-basket' : 'ios-egg';
                    } else if (route.name === "MEAL") {
                        size = focused ? 30 : 20;
                        IconName = focused ? 'ios-restaurant' : 'ios-egg';
                    } else if (route.name === 'RECIPE') {

                        IconName = focused ? 'ios-nutrition' : 'ios-egg';
                        size = focused ? 30 : 20;
                    }
                    return <Ionicons name={IconName} size={size} color={color} />;
                },
            })}

            tabBarOptions={{
                activeTintColor: '#b484bd',
                inactiveTintColor: 'gray',

            }}

            barStyle={{ paddingBottom: 48 }}
        >
            <Tab.Screen name="RECIPE" component={RecipeScreen} />
            <Tab.Screen name="MEAL" component={MealPlanScreen} />
            <Tab.Screen name="ADD" component={AddScreen} />
            <Tab.Screen name="BASKET" component={BasketScreen} />
            <Tab.Screen name="SETTINGS" component={SettingsScreen} />

        </Tab.Navigator>



    );
}



const styles = StyleSheet.create({

    container: {
        margin: 0,
        padding: 0,
        position: 'relative',
        height: '30%',
    },

    user_greeting: {
        fontSize: 25,
        position: 'absolute',
        top: '50%',
        left: '15%',
        alignContent: 'center',

    },
    imageUser: {
        position: 'absolute',
        right: '3%',
        top: '45%',
        height: 100,
        width: 100,

    },
    imageBar: {
        position: 'absolute',
        resizeMode: "stretch",
        top: '-1%',
        left: '-1.5%',
        height: '100%',
        width: '103%',


    },
});