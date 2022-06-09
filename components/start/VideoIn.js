import React from 'react'
import { Video } from 'expo-av'
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import { createStackNavigator } from 'react-navigation';
import * as SecureStore from 'expo-secure-store';
import * as Facebook from 'expo-facebook';
import NavBar from '../NavBar'
import * as firebase from 'firebase';

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

export default class VideoIn extends React.Component {
    constructor() {
        super();
        this.state = { token: null, loading: true, uid: null, isAnonymous: 'F' }
    }

    UNSAFE_componentWillMount() {
        setTimeout(() => { this.checkForToken() }, 2000)
    }

    async checkForToken() {
        let token = await SecureStore.getItemAsync('token')
        console.log(token)
        this.setState({
            token: token,
            loading: false
        })
    }


    render() {
        if (this.state.loading === true) {
            return (
                <View style={{ width: '100%', height: '100%', backgroundColor: '#b484bd', justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ fontSize: 20, color: '#fff' }}>Loading</Text>
                </View>)
        } else if (this.state.token === null) {
            return (

                <View style={{ position: 'relative', justifyContent: 'center', alignItems: 'center' }}>
                    <Video source={require('./video-2.mp4')}
                        rate={1.0}
                        volume={1.0}
                        isMuted={false}
                        resizeMode="cover"
                        shouldPlay
                        isLooping
                        style={{ width: '100%', height: '100%' }} />

                    <View style={{ position: 'absolute', bottom: '13%', width: '65%', height: 100 }}>
                        <TouchableOpacity style={{ height: '47%', marginBottom: '3%' }} onPress={() => this.props.navigation.navigate('SignUp')}>
                            <View style={{ backgroundColor: '#b484bd', borderRadius: 23, height: '100%', justifyContent: 'center' }}>
                                <Text style={styles.font}> Sign Up</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ height: '47%', marginTop: '3%' }} onPress={() => this.props.navigation.navigate('SignIn')}>
                            <View style={{ backgroundColor: 'white', borderRadius: 23, height: '100%', justifyContent: 'center' }} >
                                <Text style={styles.font}>Sign In</Text>
                            </View>
                        </TouchableOpacity>
                    </View>

                </View>
            )
            // } else if (this.state.token !== null && firebase=== 'F') {
            //     this.signInAnonymous()
            //     // console.log(firebase.auth().currentUser.isAnonymous)
            //     return (<NavBar />)
        }
        else {

            return (<NavBar />)

        }
    }


    async signInAnonymous() {
        await firebase.auth().signInAnonymously()
            .then(() => {

                firebase.auth().onAuthStateChanged((user) => {

                    var token = user.uid;

                    if (user) {
                        var isAnonymous = user.isAnonymous ? 'T' : 'F';
                        var token = user.uid;

                        SecureStore.setItemAsync("token", token)
                        SecureStore.setItemAsync('isAnonymous', isAnonymous);
                        console.log(SecureStore.getItemAsync('isAnonymous'))
                        this.setState(() => {
                            this.state.token = token
                            this.state.isAnonymous = isAnonymous
                            return this.state
                        })
                    } else {

                    }

                });

            })
            .catch(error => {
                this.setState({ errorMessage: error.message }, () => {
                    // ToastAndroid.show(this.state.errorMessage, ToastAndroid.SHORT);
                    console.log(
                        'Auth failed and here is the error ' + JSON.stringify(error)
                    );
                })
            });


    }
}


var styles = StyleSheet.create({
    backgroundVideo: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
    },
    font: {
        textAlign: 'center',
        fontSize: 18,
        padding: 5
    },

});