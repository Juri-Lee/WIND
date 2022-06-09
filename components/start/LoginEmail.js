import React from 'react'
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native'
import { Ionicons } from '@expo/vector-icons';

export default class LoginEmail extends React.Component {


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
                        this.props.navigation.navigate('SignIn')
                    } />

                <View style={{ width: '100%', alignItems: 'center', justifyContent: 'center', flex: 1 }}>
                    <TextInput style={styles.Input} placeholder={'Email'} />
                    <TextInput style={styles.Input} placeholder={'Password'} />
                    <TouchableOpacity style={{ marginBottom: 7, }}>
                        <Text style={{ color: '#aaa' }}>Forget your password?</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ width: '70%', alignContent: 'center', marginTop: 30 }} >
                        <View style={styles.button}>
                            <Text style={{ padding: 6, textAlign: 'center', lineHeight: 30, fontSize: 14 }}>LOG IN</Text>
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
        padding: 5,
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
        elevation: 6,
    }


})
