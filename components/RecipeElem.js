import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, ImageBackground } from "react-native";
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

export default function RecipeElem(props) {

    const navigation = useNavigation()

    return (
        <View style={styles.container} >
            <TouchableOpacity style={{
                width: '100%', height: 'auto',
                borderRadius: 13,
                shadowRadius: 3,
                shadowOffset: {
                    height: 2,
                    width: 2
                },
                elevation: 8,
                shadowColor: '#a6b4c8',
                shadowOpacity: 0.7,
            }}

                onPress={() => {
                    // navigation.push('RecipePage')
                    navigation.navigate('RecipePage', { id: props.id, })
                }}


            >

                <View style={{
                    height: '60%',
                }}>
                    <Image
                        source={{ uri: props.image }}
                        resizeMode='stretch'
                        style={{
                            height: '100%',
                            width: '100%',
                            borderTopRightRadius: 13, borderTopLeftRadius: 13,

                        }} />

                </View >
                <View style={{
                    backgroundColor: '#ffffff', borderBottomRightRadius: 13, borderBottomLeftRadius: 13,
                    height: '40%',
                    elevation: 3,
                }}>
                    <Text style={{
                        justifyContent: 'center',
                        margin: 5, padding: 5,
                        textAlign: 'center',
                        color: '#000000',
                        fontSize: 13,
                        height: '60%'

                    }}>{props.title}</Text>
                    <View style={{ height: '40%', flexDirection: 'row', justifyContent: 'space-around' }}>
                        <View style={{ flexDirection: 'row', }}>
                            <Ionicons name={'ios-add-circle'} style={{
                                marginRight: 2
                            }}

                                size={20}
                                color={'#b384bd'}
                            />
                            <Text >{props.used}</Text>
                        </View>

                        <View style={{ flexDirection: 'row', }}>
                            <Ionicons name={'md-remove-circle'} style={{
                                marginRight: 2
                            }}

                                size={20}
                                color={'#b384bd'}
                            />
                            <Text>{props.missing}</Text>
                        </View>
                        <View style={{ flexDirection: 'row', }}>
                            <Ionicons name={'ios-heart'} style={{
                                marginRight: 2
                            }}

                                size={20}
                                color={'#b384bd'}
                            />
                            <Text>{props.likes}</Text>
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
        </View>
    )
}
const styles = StyleSheet.create({

    container: {
        justifyContent: 'center',
        height: 250,
        width: '50%',

        padding: 8,

    }
})