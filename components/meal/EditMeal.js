import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { ScrollView } from 'react-native-gesture-handler';


export default class EditMeal extends React.Component {

    constructor() {
        super();
    }


    render() {
        var list = [];
        var matrix = [{
            'time': 'Breakfast',
            'name': 'firstItem',
            'key': '1234',
        },
        {
            'time': 'Lunch',
            'name': 'secondItem',
            'key': '4556',
        }];

        list = matrix.map((item, index) => {
            return (
                <View style={{ backgroundColor: 'rgba(144,137,189,0.3)', width: '75%', height: 35, marginTop: 10, marginBottom: 0, justifyContent: 'flex-start', flexDirection: 'row', alignItems: 'center' }}>
                    <Text style={{ marginLeft: 7, marginRight: 7, fontWeight: 'bold', color: '#656084' }} >{item.time} </Text>
                    <Text style={{ color: '#715c84' }} >{item.name} </Text>
                </View>
            )
        })

        return (
            <View style={styles.contatiner}>


                <LinearGradient
                    colors={['#A2D1C7', '#D8D8E0', '#D8D8E0', '#EBDAE9']}
                    style={styles.linearGr}>
                    <Text style={styles.textinGr}>OCTOBER 8</Text>

                </LinearGradient>


                <Ionicons name={'ios-arrow-back'} style={{
                    padding: 10,
                    position: 'absolute',
                    left: 5,
                    top: '5%',
                }}
                    touchActive="true"
                    size={40}
                    color={'#b484bd'}
                    onPress={() => { }
                    } />
                <ScrollView style={styles.scroll}>
                    <View style={{ width: '100%', height: '100%', alignItems: 'center' }}>
                        <View style={{ margin: 5, width: '100%', alignItems: 'center', justifyContent: 'center' }}>
                            {list}
                        </View>
                        <View style={{ backgroundColor: '#b484bd', borderRadius: 25, width: '70%', margin: 10 }}>
                            <TouchableOpacity style={styles.add}>

                                <Ionicons name={'ios-add'}
                                    style={{
                                        marginRight: 20
                                    }} touchActive="true"
                                    size={35}
                                    color={'#ffffff'}
                                />
                                <Text style={{ color: '#fff', fontWeight: 'bold' }}> Add another session </Text>

                            </TouchableOpacity>
                        </View>
                        <View style={styles.bookmarkContainer}>
                            <Ionicons name={'ios-star'} size={25} style={{ margin: 10, position: 'absolute', left: 3, top: 0 }} color={'#656084'} />
                            <View style={{ width: '95%', alignItems: 'center', justifyContent: 'center', marginTop: 40 }}>
                                <View style={{ borderWidth: 2, borderColor: '#656084', width: '85%', height: 100, }}>

                                </View>
                            </View>
                        </View>
                    </View>
                </ScrollView>
            </View>
        )
    }

}

const styles = StyleSheet.create({
    contatiner: {
        position: 'relative',
        margin: 0,
        padding: 0,
        flexDirection: 'column',
        height: '100%',
        width: '100%',
        alignItems: 'center'

    },
    linearGr: {
        height: '30%',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',

    },
    scroll: {
        width: '100%',
        height: '70%',

    },
    textinGr: {
        fontSize: 30,
        alignItems: 'center',
        textAlign: 'center',
        justifyContent: 'center'
    },
    add: {
        flexDirection: 'row',
        height: 35,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',

    },
    bookmarkContainer: {
        margin: 10,
        padding: 5,
        width: '80%',
        // height: '50%',
        borderColor: 'rgba(101,96,132,0.3)',
        borderRadius: 15,
        borderWidth: 2,
        justifyContent: 'center',
        alignItems: 'center'

    }

})