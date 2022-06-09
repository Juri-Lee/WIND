import React from 'react';
import { StyleSheet, Text, View, Image, Linking, TouchableOpacity } from "react-native";
import { Ionicons } from '@expo/vector-icons';


export default class Provider extends React.Component {
    constructor(props) {
        super(props)
        this.state = { showDefault: true, error: false };
    }


    render() {
        return (
            <View style={styles.container}>
                <View style={styles.align}>
                    <Text style={styles.title}> {this.props.profile}</Text>
                    {/* <View style={{ width: '50%', alignItems: 'center', }}>
                        <Button title="Go to source" style={{ backgroundColor: 23 }}
                            onPress={() => Linking.openURL(this.props.sourceUrl)} color={'#b484bd'} />
                    </View> */}

                    <TouchableOpacity onPress={() => Linking.openURL(this.props.sourceUrl)} style={{ flexDirection: 'row', backgroundColor: '#b484bd', borderRadius: 50, width: '50%', justifyContent: 'center', margin: 10 }}>
                        <Ionicons name={'ios-ice-cream'}
                            touchActive="true"
                            size={25}
                            color={'#fff'}
                            style={{ alignContent: 'center', margin: 3 }}
                        />
                        <Text style={{ color: "#fff", lineHeight: 30, fontSize: 14 }} > Visit Source</Text>
                    </TouchableOpacity>
                </View>
                <Image style={styles.profileImage} onLoadEnd={() => this.setState({ showDefault: false })} source={require('../icons/userProfile.png')} resizeMode={'stretch'} />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        height: 150,
        width: '90%',
        borderColor: 'rgba(166,180,200,0.2)',
        backgroundColor: '#fff',
        borderWidth: 1,
        borderRadius: 10,
        shadowColor: '#a6b4c8',
        shadowOffset: {
            width: 1,
            height: 1,
        },
        shadowOpacity: 0.4,
        shadowRadius: 3,
        elevation: 8,
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    align: {
        width: '70%',
        margin: 10
    },

    title: {
        fontSize: 20,
        margin: 10

    },
    descript: {
        fontSize: 14,
        color: '#b48412',
        marginLeft: 5,
        shadowColor: '#a6b4c8',
        shadowOffset: {
            width: 1,
            height: 1,
        },
        shadowOpacity: 0.4,
        shadowRadius: 3,
        elevation: 8,
    },
    profileImage: {
        height: 100,
        width: 100,
        marginTop: 20,
        marginRight: 20,
        borderRadius: 50,

    }

})