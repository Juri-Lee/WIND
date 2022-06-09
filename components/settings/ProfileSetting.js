import React from 'react';
import { View, Text, StyleSheet, Image, StatusBar, DevSettings } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import firebase from 'firebase'
import { Util } from 'expo';
import * as SecureStore from 'expo-secure-store';
import * as Linking from 'expo-linking';


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

export default class ProfileSetting extends React.Component {

    constructor(props) {
        super(props)
    }
    state = {
        logout: false
    }

    logout() {

        this.setState(() => {
            this.state.logout = true
            return this.state
        }
        )
        firebase.auth().signOut()
            .then(() => {
                // this.props.navigation.navigate('Login');
                // ToastAndroid.show('Logged out successfully', ToastAndroid.SHORT);
                // const history = useHistory();
                console.log('Logged out successfully')
                // this.setState(() => {
                //     this.state.logout = true
                //     return this.state
                // }
                // )
                SecureStore.deleteItemAsync('token')
                SecureStore.deleteItemAsync('isAnonymous')
                SecureStore.deleteItemAsync("firebaseCredential")

                // Linking.makeUrl('.././start/VideoIn',);
                // userHasAuthenticated(false);
                // history.push("../start/VideoIn");

                // DevSettings.reload()
                // Util.reload()

            })
            .catch(error => {
                console.log(error)
            });
    }
    render() {

        return (

            <View style={styles.container} >
                <StatusBar
                    barStyle="light-content"
                    hidden={false}
                    translucent={true} backgroundColor={'rgba(144,137,189,0.4)'}
                    networkActivityIndicatorVisible={true}
                />
                <View style={{ width: '100%', height: '11%', borderBottomColor: '#656084', flexDirection: 'row', alignItems: 'center', borderBottomWidth: 0.5, justifyContent: 'center', paddingRight: 10, marginBottom: 5, paddingTop: 25 }}>
                    <Ionicons name={'ios-build'} style={{
                        paddingLeft: 5,
                        position: 'absolute',
                        left: 7,
                        bottom: '10%'
                    }}
                        touchActive="true"
                        size={35}
                        color={'#b484bd'}
                        onPress={() => { }
                        } />
                    {/* <Text style={{ fontSize: 19, fontWeight: 'bold', color: '#656084' }}>{firebase.auth().currentUser.isAnonymous != null && firebase.auth().currentUser.isAnonymous == true ? 'Anonymous User' : 'User'}</Text> */}
                    <Text style={{ fontSize: 19, fontWeight: 'bold', color: '#656084' }}>User</Text>
                </View>


                <View style={styles.profile}>

                    <View style={{ borderRadius: 50, }}>
                        <Image source={require("../../icons/simbol.png")}
                            style={{ width: 80, height: 80, borderRadius: 50, }}
                            resizeMode={'contain'}
                        />
                    </View>
                    <Text style={{ width: '85%', height: '30%', margin: 10, padding: 3, borderTopColor: '#9089bd', borderTopWidth: 0.5, borderBottomColor: '#9089bd', borderBottomWidth: 0.5 }}>Comments here!</Text>
                    <View style={{ width: '100%', flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                        <View style={{ flexDirection: 'row', marginRight: 13, alignItems: 'center' }}>
                            <Ionicons name={'ios-egg'} style={{ marginRight: 4 }} color={'#b484bd'} />
                            <Text>13</Text>
                        </View>
                        <View style={{ flexDirection: 'row', marginRight: 13, alignItems: 'center' }} >
                            <Ionicons name={'ios-egg'} style={{ marginRight: 4 }} color={'#656084'} />
                            <Text>132</Text>
                        </View>
                        <View style={{ flexDirection: 'row', marginRight: 13 }}>
                            <Text style={{ marginRight: 4 }}>Post</Text>
                            <Text>34</Text>
                        </View>
                        <View style={{ flexDirection: 'row', marginRight: 13 }}>
                            <Text style={{ marginRight: 4 }}>Save</Text>
                            <Text>36</Text>
                        </View>


                    </View>

                </View>



                <View style={styles.setting}>

                    <Text style={{ fontSize: 20, margin: 5, marginBottom: 10 }}>Settings</Text>
                    <View>
                        <Text style={{ fontSize: 14, marginLeft: 5, marginBottom: 5 }}>Profile Setting</Text>
                        <View>
                            {/* <Text style={{ paddingLeft: 20, fontSize: 17, marginBottom: 1 }}>Water Setting</Text> */}
                            <Text style={{ paddingLeft: 20, fontSize: 17, marginBottom: 1 }}>Invite friends</Text>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                <Text style={{ paddingLeft: 20, fontSize: 17, marginBottom: 1 }}>Food preference</Text>
                                <Text style={{ color: '#656084' }}>Meat LOVER</Text>
                            </View>
                        </View>
                    </View>

                    <View>
                        <Text style={{ fontSize: 14, marginLeft: 5, marginBottom: 5, marginTop: 10 }}>Account</Text>
                        <View>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                <Text style={{ paddingLeft: 20, fontSize: 17, marginBottom: 1 }}>Account Type</Text>
                                <Text style={{ color: '#656084' }}>Free!</Text>
                            </View>
                            <Text style={{ paddingLeft: 20, fontSize: 17, marginBottom: 1 }}>Account Setting</Text>
                            <Text
                                style={{
                                    paddingLeft: 20,
                                    fontSize: 17,
                                    marginBottom: 1
                                }}
                                onPress={() => {
                                    { this.logout() }
                                    console.log('you click signout')
                                }} >Log out</Text>
                        </View>
                    </View>

                    <View>
                        <Text style={{ fontSize: 14, marginLeft: 5, marginBottom: 5, marginTop: 10 }}>Help</Text>
                        <View>
                            <Text style={{ paddingLeft: 20, fontSize: 17, marginBottom: 1 }}>Source Licenses</Text>
                            <Text style={{ paddingLeft: 20, fontSize: 17, marginBottom: 1 }}>Terms&Conditions</Text>
                            <Text style={{ paddingLeft: 20, fontSize: 17, marginBottom: 1 }}>Prevacy Policy</Text>
                        </View>
                    </View>



                </View>


            </View >

        )
    }
}



const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        margin: 0,
        padding: 0,
        alignItems: 'center'

    },
    profile: {
        position: 'relative',
        marginTop: 5,
        marginBottom: 5,
        width: '100%',
        height: '30%',
        flexDirection: 'column',
        alignItems: 'center',

    },

    setting: {
        width: '90%',
        height: '55%',
        backgroundColor: 'rgba(180,132,189,0.5)',
        // borderColor: '#656084',
        // borderWidth: 0.5,
        padding: 10,
        marginTop: 0,
        borderRadius: 7,
        // shadowColor: '#a1a1a1',
        // shadowOpacity: 0.5,
        // elevation: 1

    },

})