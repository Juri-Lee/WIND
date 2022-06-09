import React from 'react'
import { View, StyleSheet, Text, Image } from 'react-native'

export default function MealView() {

    return (
        <View style={{ width: '100%', aspectRatio: 2, borderColor: 'rgba(0,0,0,0.2)', borderWidth: 0.5, justifyContent: 'center', alignItems: 'center' }}>
            <Image source={require('../../icons/carrotbackground.png')} resizeMode={'cover'} style={{ width: '100%', height: '100%' }} />
        </View>
    )



}
var styles = StyleSheet.create({
    container: {

    }
})