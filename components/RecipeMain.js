import React, { useEffect, useState } from 'react';
import { View, ScrollView, StyleSheet, Text, TextInput, Image, StatusBar, FlatList } from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';


export default function RecipeMain() {
    const navigation = useNavigation();

    return (
        <View style={styles.container} >
            <StatusBar
                barStyle="light-content"
                hidden={false}
                translucent={true} backgroundColor={'rgba(144,137,189,0.4)'}
                networkActivityIndicatorVisible={true}
            />
            <View style={{ width: '100%', height: '25%', marginBottom: 5, backgroundColor: '#b484bd', justifyContent: 'center', alignItems: 'center', paddingTop: 25 }}>
                <Text style={{ color: '#fff', fontSize: 19 }}>Eating Happy = O cal</Text>
            </View>

            <View style={styles.searchBar}>
                <Ionicons
                    name={'md-egg'}
                    size={30}
                    color={'#b484bd'}
                    style={{
                        resizeMode: 'contain',
                        height: 35,
                        width: 35,

                    }}
                />

                <Text style={styles.textInput} onPress={() => {
                    navigation.push('Home')
                    navigation.navigate('Home')
                }}>Search</Text>

                <Ionicons name={'md-search'}
                    style={{
                        position: 'absolute',
                        right: 2,
                        bottom: 5,
                    }} touchActive="false"
                    size={35}
                    color={'#b484bd'}
                />

            </View>

            <View style={styles.ingSelect}>
                <ScrollView style={{ width: '100%' }}>

                    <View style={{ height: 140, padding: 10 }}>
                        <Text style={{ fontSize: 17, marginBottom: 10 }}>What about this?</Text>
                        <ScrollView style={{ height: '100%' }} horizontal={true} showsHorizontalScrollIndicator={false}>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                                <View style={{ height: '100%', aspectRatio: 1, backgroundColor: '#715c84', margin: 8 }}></View>
                                <View style={{ height: '100%', aspectRatio: 1, backgroundColor: '#715c84', margin: 8 }}></View>
                                <View style={{ height: '100%', aspectRatio: 1, backgroundColor: '#715c84', margin: 8 }}></View>
                                <View style={{ height: '100%', aspectRatio: 1, backgroundColor: '#715c84', margin: 8 }}></View>
                                <View style={{ height: '100%', aspectRatio: 1, backgroundColor: '#715c84', margin: 8 }}></View>
                                <View style={{ height: '100%', aspectRatio: 1, backgroundColor: '#715c84', margin: 8 }}></View>
                            </View>
                        </ScrollView>
                    </View>

                    <View style={{ height: 180, padding: 10 }}>
                        <Text style={{ fontSize: 17, marginBottom: 10 }}>NEW</Text>
                        <ScrollView style={{ height: '100%' }} horizontal={true} showsHorizontalScrollIndicator={false}>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                                <View style={{ height: '100%', aspectRatio: 1, backgroundColor: '#715c84', margin: 8 }}></View>
                                <View style={{ height: '100%', aspectRatio: 1, backgroundColor: '#715c84', margin: 8 }}></View>
                                <View style={{ height: '100%', aspectRatio: 1, backgroundColor: '#715c84', margin: 8 }}></View>
                                <View style={{ height: '100%', aspectRatio: 1, backgroundColor: '#715c84', margin: 8 }}></View>
                                <View style={{ height: '100%', aspectRatio: 1, backgroundColor: '#715c84', margin: 8 }}></View>
                                <View style={{ height: '100%', aspectRatio: 1, backgroundColor: '#715c84', margin: 8 }}></View>
                            </View>
                        </ScrollView>
                    </View>

                    <View style={{ height: 180, padding: 10 }}>
                        <Text style={{ fontSize: 17, marginBottom: 10 }}>Hot recipes</Text>
                        <ScrollView style={{ height: '100%' }} horizontal={true} showsHorizontalScrollIndicator={false}>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                                <View style={{ height: '100%', aspectRatio: 1.4, backgroundColor: '#715c84', margin: 8 }}></View>
                                <View style={{ height: '100%', aspectRatio: 1.4, backgroundColor: '#715c84', margin: 8 }}></View>
                                <View style={{ height: '100%', aspectRatio: 1.4, backgroundColor: '#715c84', margin: 8 }}></View>
                                <View style={{ height: '100%', aspectRatio: 1.4, backgroundColor: '#715c84', margin: 8 }}></View>
                                <View style={{ height: '100%', aspectRatio: 1.4, backgroundColor: '#715c84', margin: 8 }}></View>
                                <View style={{ height: '100%', aspectRatio: 1.4, backgroundColor: '#715c84', margin: 8 }}></View>
                            </View>
                        </ScrollView>
                    </View>

                </ScrollView>
            </View>

        </View >

    )

}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#ffffff',
        margin: 0,
        padding: 0,
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-end',
        overflow: 'hidden',
        alignItems: 'center',
        position: 'relative',

    },

    text: {
        color: '#ffffff',
        fontSize: 17,
        textAlign: "left",
        marginTop: 20,
        height: 'auto',
    },

    searchBar: {
        position: 'relative',
        alignItems: 'center',
        width: '90%',
        height: 'auto',
        borderBottomWidth: 3,
        borderBottomColor: '#b484bd',
        margin: 20,
        flexDirection: 'row',
    },

    textInput: {
        width: '100%',
        height: 'auto',
        paddingLeft: 10,
        paddingRight: 40,
        lineHeight: 17,
        paddingBottom: 5,
        color: '#b484bd',
        fontSize: 17,
    },

    ingSelect: {
        marginTop: 0,
        flexDirection: 'column',
        padding: 0,
        width: '100%',
        height: '66%',
    },


    onclicked: {
        borderWidth: 3,
        borderColor: '#B484bd',
        height: 50,
        width: 50,
        padding: 5,
        margin: 12,
    }
})
