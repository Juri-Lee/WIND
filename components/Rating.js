import React from 'react';
import { StyleSheet, Text, View, Image } from "react-native";
import { Ionicons } from '@expo/vector-icons';

export default class Rating extends React.Component {
    constructor(props) {
        super(props)

    }
    render() {
        return (
            <View style={stylepro.container}>

                <View style={stylepro.iconcontainer}>
                    <Ionicons name={'md-thumbs-up'} style={stylepro.icons} touchActive="true" size={20} color={'#999'} onPress={() => {

                    }} />
                    <Text style={stylepro.text}>{this.props.like}</Text>
                </View>

                <View style={stylepro.iconcontainer}>
                    <Ionicons name={'md-thumbs-down'} style={stylepro.icons} touchActive="true" size={20} color={'#999'} onPress={() => {

                    }} />
                    <Text style={stylepro.text}>none</Text>
                </View>

                <View style={stylepro.iconcontainer}>
                    <Ionicons name={'md-share-alt'} style={stylepro.icons} touchActive="true" size={20} color={'#999'} onPress={() => {

                    }} />
                    <Text style={stylepro.text}>Share</Text>
                </View>

                <View style={stylepro.iconcontainer}>
                    <Ionicons name={'ios-download'} style={stylepro.icons} touchActive="true" size={20} color={'#999'} onPress={() => {

                    }} />
                    <Text style={stylepro.text}>download</Text>
                </View>

                <View style={stylepro.iconcontainer}>
                    <Ionicons name={'md-star-outline'} style={stylepro.icons} touchActive="true" size={20} color={'#999'} onPress={() => {

                    }} />
                    <Text style={stylepro.text}>Bookmark</Text>
                </View>


            </View>

        )
    }

}
const stylepro = StyleSheet.create({
    container: {
        height: 55,
        width: '90%',
        borderBottomWidth: 1.5,
        borderBottomColor: '#d1d1d1',
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: 7,
    },
    iconcontainer: {
        flexDirection: 'column',
        alignItems: 'center',

    },
    icons: {
        padding: 3,
    },
    text: {
        fontSize: 10,
        lineHeight: 12,
    },
})