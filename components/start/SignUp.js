import React from 'react'
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, Alert } from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import * as Facebook from 'expo-facebook';
import { NavigationContainer } from '@react-navigation/native';
import * as SecureStore from 'expo-secure-store';
import NavBar from '../NavBar';
import SignupEmail from './SignupEmail'
import VideoIn from './VideoIn';
import firebase from 'firebase'

const firebaseConfig = {
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

export default class SignUp extends React.Component {
    constructor() {
        super();
        this.state = { token: null, loading: true, uid: null, isAnonymous: 'F' }
    }

    state = {
        password: '',
        email: '',
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

    async saveTokenToSecureStorage(token) {
        SecureStore.setItemAsync("token", token)
        this.setState({
            token: token
        })
    }
    render() {

        // if (this.state.loading === true) {
        //     return <Text>Loading</Text>;
        // } else
        if (this.state.token === null && this.state.isAnonymous === 'F') {

            return (
                <View style={styles.container}>
                    <Ionicons name={'ios-arrow-back'} style={{
                        padding: 10,
                        position: 'absolute',
                        left: 5,
                        top: '5%',
                    }}
                        touchActive="true"
                        size={40}
                        color={'#b484bd'}
                        onPress={() => { this.props.navigation.navigate('VideoIn') }
                        } />
                    <Text style={{ position: 'absolute', top: '35%', fontSize: 20, }}>Hello there!</Text>


                    <View style={{ position: 'absolute', bottom: '23%', width: '100%', alignItems: 'center', justifyContent: 'center', flex: 1 }}>

                        <TouchableOpacity style={{ width: '80%', alignContent: 'center', marginTop: 5, justifyContent: 'center' }}
                            onPress={() =>
                                this.signInAnonymous()
                            }>

                            <View style={styles.buttonW}>
                                <Ionicons name={'ios-body'} size={25} color={'#656084'} style={styles.image} />
                                <Text style={{ padding: 6, marginLeft: 15, textAlign: 'center', lineHeight: 30, fontSize: 13 }}>continue as anonymous</Text>
                            </View>

                        </TouchableOpacity>

                        <TouchableOpacity style={{ width: '80%', alignContent: 'center', marginTop: 5, justifyContent: 'center' }} onPress={
                            () => this.logIn_facebook()
                        }>

                            <View style={styles.buttonW}>
                                <Ionicons name={'logo-facebook'} size={25} color={'#656084'} style={styles.image} />
                                <Text style={{ padding: 6, marginLeft: 15, textAlign: 'center', lineHeight: 30, fontSize: 13 }}>continue with facebook</Text>
                            </View>

                        </TouchableOpacity>


                        <TouchableOpacity style={{ width: '80%', alignContent: 'center', marginTop: 5, justifyContent: 'center' }} onPress={() =>
                            // this.props.navigation.navigate('SignupEmail')
                            Alert.alert("sorry, Currently unavailable")
                        } >

                            <View style={styles.buttonP}>
                                <Ionicons name={'ios-mail'} size={25} color={'#656084'} style={styles.image} />
                                <Text style={{ padding: 6, marginLeft: 15, textAlign: 'center', lineHeight: 30, fontSize: 13 }}>Sign up with email</Text>
                            </View>

                        </TouchableOpacity>
                    </View>
                    <Text style={{ color: '#aaa', fontSize: 12, position: 'absolute', bottom: '20%' }}
                        onPress={() => { this.props.navigation.navigate('SignIn') }
                        }>Sign In</Text>
                </View>
            )

        }
        // else if (this.state.token !== null && this.state.isAnonymous === 'F') {
        //     this.signInAnonymous()
        //     return (<NavBar />)
        // } 
        else {
            return (<NavBar />)
        }
    }

    async signInAnonymous() {
        await firebase.auth().signInAnonymously()
            .then(() => {
                this.setState(() => {

                    firebase.auth().onAuthStateChanged((user) => {

                        var token = user.uid;

                        if (user) {
                            var isAnonymous = user.isAnonymous ? 'T' : 'F';
                            var token = user.uid;

                            SecureStore.setItemAsync("token", token)
                            SecureStore.setItemAsync('isAnonymous', isAnonymous);
                            this.setState(() => {
                                this.state.token = token
                                this.state.isAnonymous = isAnonymous
                                return this.state
                            })
                        } else {

                        }

                    });
                })
            })
            .catch(error => {
                this.setState({ errorMessage: error.message }, () => {
                    ToastAndroid.show(this.state.errorMessage, ToastAndroid.SHORT);
                    console.log(
                        'Auth failed and here is the error ' + JSON.stringify(error)
                    );
                })
            });


    }

    signInWithCred = () => {
        if (!this.state.showInput) {
            this.setState({
                showInput: true,
                buttonText: 'Sign In'
            })
        }
        else {

            firebase.signInWithEmailAndPassword(this.state.email, this.state.password)
                .then(() => {
                    this.setState({
                        showInput: false,
                        buttonText: 'Sign in with credentials'
                    })
                    this.props.navigation.navigate('Home', { type: 'credential' });
                })
                .catch(error => {
                    this.setState({ errorMessage: error.message }, () => {
                        ToastAndroid.show(this.state.errorMessage, ToastAndroid.SHORT);
                    })
                });
        }
    }

    async logIn_facebook() {
        try {
            await Facebook.initializeAsync('819950658856232');
            const {
                type,
                token,
                expires,
                permissions,
                declinedPermissions,
            } = await Facebook.logInWithReadPermissionsAsync({
                permissions: ['public_profile'],
            });
            if (type === 'success') {
                const response = await fetch(`https://graph.facebook.com/me?access_token=${token}`);
                this.saveTokenToSecureStorage(token)
                Alert.alert('Logged in !', `Hi ${(await response.json()).name}!`)
            } else {

            }
        } catch ({ message }) {
            alert(`Facebook Login Error : ${message}`)
        }
    }

}

const styles = StyleSheet.create({

    container: {
        margin: 0,
        padding: 0,
        position: 'relative',
        width: '100%',
        height: '100%',
        alignItems: 'center',
        flex: 1,

    },
    buttonW: {

        backgroundColor: 'white',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 23,
        width: '90%',
        height: 45,
        margin: 10,
        elevation: 5,
        shadowColor: '#aaa',
        shadowOffset: {
            height: 2,
            width: 2
        },
        shadowRadius: 3,
        shadowOpacity: 1,
    },
    buttonP: {
        backgroundColor: '#b484bd',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 23,
        width: '90%',
        height: 45,
        margin: 10,
        elevation: 5,
        shadowColor: '#aaa',
        shadowOffset: {
            height: 2,
            width: 2
        },
        shadowRadius: 3,
        shadowOpacity: 1,
    },
    image: {
        position: 'absolute',
        top: "20%",
        left: '10%',

        height: 25,
        width: 25
    },


})