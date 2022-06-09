import React from 'react'
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import { text } from '@fortawesome/fontawesome-svg-core';

export default class SignupEmail extends React.Component {

    constructor() {
        super();
        this.state = {
            email: null,
            password: '',
            passwordConfirm: '',
            pass: false,
            passwordcheck: false,
        }
    }



    render() {

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
                    onPress={() =>
                        this.props.navigation.navigate('SignUp')
                    } />

                <View style={{ width: '100%', alignItems: 'center', justifyContent: 'center', flex: 1 }}>
                    <TextInput style={styles.Input}
                        placeholder={'Email'}
                        onChangeText={text => {
                            this.state.email = text

                        }}
                    />
                    <View style={styles.Input}>
                        <TextInput
                            placeholder={'Password'}
                            onChangeText={text => {


                                this.state.password += text[text.length - 1];
                                console.log(this.state.password);
                                let out = '';
                                for (let i = 0; i < text.length; i++) {
                                    out += '*'
                                }
                                text = out;
                                if (text.length >= 8) {
                                    this.state.pass = true;
                                }
                            }}
                        />
                        {/* {this.state.password.length > 7 ?
                            <Ionicons name={'md-close'} style={{ position: 'absolute', right: 0 }}
                                size={30}
                                color={'#f00'}
                            />
                            :
                            this.state.password.length == 0 ?
                                <Ionicons name={'md-checkmark'} style={{ position: 'absolute', right: 0 }}
                                    size={30}
                                    color={'#fff'}
                                /> :
                                <Ionicons name={'md-checkmark'} style={{ position: 'absolute', right: 0 }}
                                    size={30}
                                    color={'#0f0'}
                                />

                        } */}

                    </View>


                    <TextInput style={styles.Input}
                        placeholder={'Password confirm'}
                        enable={this.state.pass}
                        onChangeText={text => { this.state.passwordConfirm = text }}
                    />



                    <TouchableOpacity style={{ width: '70%', alignContent: 'center' }} >
                        <Text style={{ color: '#aaa', fontSize: 12 }}>By signing in, you agree to our <Text style={{ color: '#b484bd' }}>terms&conditions</Text> and <Text style={{ color: '#b484bd' }}>privacy policy</Text></Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ width: '70%', alignContent: 'center', marginTop: 30 }} >
                        <View style={styles.button}>
                            <Text style={{ padding: 6, textAlign: 'center', lineHeight: 30, fontSize: 14 }}>Sign up</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({

    container: {
        margin: 0,
        padding: 0,
        position: 'relative',
        width: '100%',
        height: '100%',
        alignItems: 'center'
    },
    Input: {
        paddingTop: 5,
        paddingRight: 35,
        paddingBottom: 5,
        paddingLeft: 5,
        width: '70%',
        borderBottomColor: '#b484bd',
        borderBottomWidth: 3,
        margin: 7,
    },
    button: {
        backgroundColor: '#b484bd',
        borderRadius: 23,
        width: '90%',
        margin: 10,
        elevation: 5,
    }


})
