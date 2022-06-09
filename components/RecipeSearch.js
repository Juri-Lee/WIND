import React, { useEffect, useState } from 'react';
import { View, ScrollView, StyleSheet, Text, TextInput, Image, StatusBar, FlatList, Alert } from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import data from './ElementList.json'
import IngredientSelect from './IngredientSelect';


export default function RecipeSearch() {

    const [text, setText] = useState('');
    const [pressed, setPressed] = useState([]);
    const navigation = useNavigation();

    let addItem = id => {

        data.map(item => {
            if (item.id == id) {
                setPressed([...pressed, { id: item.id, checked: true }]);
                text === '' ? setText(`${item.name}`) : setText(`${text}, ${item.name}`)
            }
        })

    };

    let deleteItem = id => {
        data.map(item => {
            if (item.id == id) {
                setText(text.replace(item.name, ''))
                item.checked = false
            }
            if (item.checked == false) {
                setPressed(
                    pressed.filter(pressed => {
                        if (pressed.id !== id) return true;
                    })
                )
            }
        })

    }

    const numColoums = 4;


    return (

        <View style={styles.container} >
            <StatusBar
                barStyle="light-content"
                hidden={false}
                translucent={true} backgroundColor={'rgba(144,137,189,0.4)'}
                networkActivityIndicatorVisible={true}
            />
            <Ionicons name={'ios-arrow-back'} style={{
                padding: 10,
                position: 'absolute',
                left: 5,
                top: '5%',
            }}
                touchActive="true"
                size={40}
                color={'#fff'}
                onPress={() =>
                    navigation.navigate('Main')
                } />
            <View>
                <Text style={styles.text}>Hey,{"\n"}
                        let's see what you can make{"\n"}
                        Just, type or click :){"\n"}
                </Text>
            </View>

            <View style={styles.searchBar}>
                <Ionicons
                    name={'md-egg'}
                    size={30}
                    color={'#fff'}
                    style={{

                        height: 35,
                        width: 35,

                    }}

                />

                <TextInput style={styles.textInput}
                    multiline={true}
                    maxLength={70}
                    onChangeText={text => { setText(text) }}
                    defaultValue={text}
                    editable={true}
                    placeholder={'Type ingredients'}
                    placeholderTextColor={'#d1d1d1'} />

                <Ionicons name={'md-search'}
                    style={{
                        position: 'absolute',
                        right: 2,
                        bottom: 5,
                    }} touchActive="true"
                    size={35}
                    color={'#ffffff'}
                    onPress={() => {
                        setText('')
                        // navigation.push('RecipeFound')
                        // navigation.navigate('RecipeFound', { inputText: text })
                        Alert.alert("Sorry, searching is currently unavailable")
                    }} />


            </View >

            <View style={styles.ingSelect}>


                <FlatList
                    numColumns={numColoums}
                    data={data}
                    renderItem={({ item }) =>
                        <IngredientSelect
                            pressed={item.checked}
                            addItem={() => addItem(item.id)}
                            name={item.name}
                            id={item.id}
                            text={text} />
                    }
                />


            </View>
        </View >


    )



}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#b484bd',
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
        borderBottomColor: '#ffffff',
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
        color: '#ffffff',
        fontSize: 17,
    },

    ingSelect: {

        margin: 20,
        flexDirection: 'column',
        justifyContent: 'center',
        borderRadius: 25,
        width: '90%',
        height: '60%',
        backgroundColor: '#ffffff',
        shadowRadius: 5,
        shadowOffset: {
            height: -1,
            width: -1
        },
        elevation: 8,
        shadowColor: '#a6b4c8',
        shadowOpacity: 0.8,
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
