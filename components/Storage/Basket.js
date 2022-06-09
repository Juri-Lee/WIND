import React from 'react';
import { View, StyleSheet, Text, Image, TouchableOpacity, FlatList } from 'react-native';
import { Ionicons } from '@expo/vector-icons'
import RecipeView from './RecipeView'
import MealView from './MealView'
import * as firebase from 'firebase';
import * as SecureStore from 'expo-secure-store'
var firebaseConfig = {
    apiKey: "AIzaSyD2Y6lVYSyPQFN_3FUjcNWfoeNKjycQHvs",
    authDomain: "wind-ef153.firebaseapp.com",
    databaseURL: "https://wind-ef153.firebaseio.com",
    projectId: "wind-ef153",
    storageBucket: "wind-ef153.appspot.com",
    messagingSenderId: "945803677545",
    appId: "1:945803677545:web:8c872c3a508f804190b7f8",
    measurementId: "G-K4VE6MW6TE"
};
if (firebase.apps.length == 0) {
    firebase.initializeApp(firebaseConfig);
}

export default class Basket extends React.Component {

    state = { isRecipe: true }


    list = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21]
    recipeView = () => {
        return (
            <View style={{ width: '100%' }}>
                <FlatList
                    numColumns={3}
                    key={3}
                    maxToRenderPerBatch={9}
                    initialNumToRender={9}
                    showsVerticalScrollIndicator={false}
                    data={this.list}
                    renderItem={({ item }) => <RecipeView />}
                />
            </View>)
    }

    mealView = () => {
        return (
            <View style={{ width: '100%' }}>
                <FlatList
                    numColumns={1}
                    key={1}
                    maxToRenderPerBatch={5}
                    initialNumToRender={5}
                    showsVerticalScrollIndicator={false}
                    data={this.list}
                    renderItem={({ item }) => <MealView
                    />}
                />

            </View>)
    }


    toggleView = () => {
        return this.state.isRecipe ? this.recipeView() : this.mealView()
    }

    componentDidUpdate() {

    }

    render() {

        return (
            <View style={styles.container}>
                <View style={{
                    width: '100%',
                    height: '11%',
                    borderBottomColor: '#656084',
                    flexDirection: 'row',
                    alignItems: 'center',
                    borderBottomWidth: 0.3,
                    justifyContent: 'center',
                    paddingRight: 10,
                    paddingTop: 25,
                    backgroundColor: '#fff'
                }}>
                    {/* <Text style={{ fontSize: 19, fontWeight: 'bold', color: '#656084' }}>{firebase.auth().currentUser.isAnonymous != null && firebase.auth().currentUser.isAnonymous == true ? 'Anonymous User' : 'User'}</Text> */}
                    <Text style={{ fontSize: 19, fontWeight: 'bold', color: '#656084' }}>User</Text>
                </View>
                <View style={styles.profile} >
                    <View style={{ borderRadius: 50, height: 80, width: 80 }}>
                        <Image source={require('../../icons/userProfile.png')} style={{ height: 80, width: 80, borderRadius: 50, overflow: 'hidden' }} resizeMode={'contain'} />
                    </View>

                    <View style={{ flexDirection: 'row' }}>
                        <View style={styles.col}>
                            <Text style={{}}>Post</Text>
                            <Text>132</Text>
                        </View>

                        <View style={styles.col}>
                            <Text>Save</Text>
                            <Text>23</Text>
                        </View>
                        <View style={styles.col}>
                            <Text>followers</Text>
                            <Text>23</Text>
                        </View>
                        <View style={styles.col}>
                            <Text>following</Text>
                            <Text>23</Text>
                        </View>
                    </View>

                </View>
                <View style={styles.nav}>
                    <TouchableOpacity style={styles.navText} onPress={() => {
                        this.setState(() => {
                            this.state.isRecipe = true
                            return this.state
                        }
                        )
                        console.log('clicked: ' + this.state.isRecipe)
                    }}>
                        <Text>RECIPE</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.navText} onPress={() => {
                        this.setState(() => {
                            this.state.isRecipe = false
                            return this.state
                        }
                        )
                        console.log('clicked: ' + this.state.isRecipe)
                    }}>
                        <Text>MEAL PLAN</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ width: '100%', height: '69%', justifyContent: 'center', alignItems: 'center' }}>
                    {this.toggleView()}
                </View>
            </View>
        )
    }
}
var styles = StyleSheet.create({

    container: {
        height: '100%',
        width: '100%',

        alignItems: 'center',
        margin: 0,
        padding: 0,
    },
    row: {
        flexDirection: 'row',
        marginLeft: 10
    },
    col: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10,
    },
    name: {
        width: '100%',
        marginTop: 25
    },
    profile: {
        paddingLeft: 10,
        width: '100%',
        height: '15%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    nav: {
        width: '100%',
        height: '6%',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    navText: {
        margin: '0.2%',
        width: '49.5%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        shadowRadius: 3,
        shadowOpacity: 0.4,
        shadowColor: '#000',
        shadowOffset: {
            height: -1,
            width: -1
        },
        elevation: 2

    }
})