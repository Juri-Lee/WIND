import React from 'react'
import { View, StyleSheet, Text, Image } from 'react-native'

export default function RecipeView() {

    return (
        <View style={{ width: '33%', aspectRatio: 1, borderColor: 'rgba(0,0,0,0.2)', borderWidth: 0.5 }}>
            <Image source={require('../../icons/carrotbackground.png')} resizeMode={'cover'} style={{ width: '100%', height: '100%' }} />
        </View>
    )



}
var styles = StyleSheet.create({
    container: {

    }
})