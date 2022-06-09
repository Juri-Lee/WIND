import React, { useState, useEffect, useMemo, useCallback, useRef } from 'react';
import { StyleSheet, View, Text, ImageBackground, ScrollView, StatusBar, FlatList } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import RecipeElem from './RecipeElem';
import { LinearGradient } from 'expo-linear-gradient';

export default function RecipeFound({ route, navigation }) {
    const { inputText } = route.params
    const [list, setList] = useState([]);
    // const baseurl = "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/findByIngredients?number=3000&ranking=1&ignorePantry=true&ingredients="
    // const host = "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com"
    // const key = "5b162be8f8msh9bb5bfee2d1133cp18d6dbjsn03630a337ed2"


    // let url = baseurl + inputText;
    // const req = new Request(url, {
    //     headers: {
    //         "x-rapidapi-host": host,
    //         "x-rapidapi-key": key
    //     },
    //     method: 'GET',

    // });


    // fetch(req)
    //     .then(response => response.json())
    //     .then(responseJSON => {
    //         setList(responseJSON);
    //     })
    //     .catch(err => {
    //         console.log(err);
    //     })




    return (

        <View style={styles.container}>
            <StatusBar
                barStyle="light-content"
                hidden={false}
                translucent={true} backgroundColor={'rgba(144,137,189,1)'}

                networkActivityIndicatorVisible={true}
            />




            <View style={styles.align}>

                <FlatList
                    numColumns={2}
                    maxToRenderPerBatch={5}
                    initialNumToRender={5}
                    showsVerticalScrollIndicator={false}
                    data={list}
                    renderItem={({ item }) => <RecipeElem
                        inputText={inputText}
                        id={item.id}
                        title={item.title}
                        image={item.image}
                        // missing={item.missedIngredientCount}
                        // used={item.usedIngredientCount}
                        likes={item.likes}
                    />}
                />

            </View>
            <Ionicons name={'ios-arrow-back'} style={{
                padding: 10,
                position: 'absolute',
                left: 5,
                top: '5%',
            }}
                touchActive="true"
                size={40}
                color={'#b484bd'}
                onPress={() =>
                    navigation.navigate('Home')
                } />
        </View>
    );
}



const styles = StyleSheet.create({

    container: {
        backgroundColor: '#ffffff',
        position: 'relative',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        height: 'auto',
        width: '100%',


    },
    topBar: {
        width: '100%',
        height: 100,
        borderBottomRightRadius: 27,
        borderBottomLeftRadius: 27,
        shadowRadius: 1,
        shadowOffset: {
            height: 1,
            width: 0,
        },
        shadowColor: '#a6b4c8',
        shadowOpacity: 0.9,
        elevation: 8,
    },
    align: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        paddingLeft: 5,
        paddingRight: 5,
    },


})

