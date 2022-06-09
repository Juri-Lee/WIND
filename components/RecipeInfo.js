import React, { useState } from 'react';
import { StyleSheet, View, Text, Alert, Modal } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function RecipeInfo(props) {
    const [modalVisible, setModalVisible] = useState(false);

    let extendedIngredients = props.extendedIngredient

    const list = extendedIngredients.map((item, num) => <Text style={styles.ingText}>{item.name}: {item.measures.us.amount} {item.measures.us.unitLong}</Text>)

    return (
        <View style={styles.contatiner}>
            <View style={{ position: 'relative', width: '80%', flexDirection: 'row', justifyContent: 'space-around', margin: 5, }}>
                {props.vegan ? (<View style={styles.true}><Text style={styles.truefont}>Vegan</Text></View>) : (<View style={styles.false}><Text style={styles.falsefont}>Vegan</Text></View>)}
                {props.vegetarian ? (<View style={styles.true}><Text style={styles.truefont}>Vegetarian</Text></View>) : (<View style={styles.false}><Text style={styles.falsefont}>Vegetarian</Text></View>)}
                {props.dairyFree ? (<View style={styles.true}><Text style={styles.truefont}>Dairy Free</Text></View>) : (<View style={styles.false}><Text style={styles.falsefont}>Dairy Free</Text></View>)}
                {props.veryHealthy ? (<View style={styles.true}><Text style={styles.truefont}>Very Healthy</Text></View>) : (<View style={styles.false}><Text style={styles.falsefont}>Very Healthy</Text></View>)}
                {props.ketogenic ? (<View style={styles.true}><Text style={styles.truefont}>Ketogenic</Text></View>) : (<View style={styles.false}><Text style={styles.falsefont}>Ketogenic</Text></View>)}
            </View>


            <Text style={{ color: '#fff', fontSize: 17, textAlign: 'center', backgroundColor: '#b484bd', width: '100%', marginTop: 9, marginBottom: 9, height: 30, justifyContent: 'center' }}
                onPress={() => setModalVisible(!modalVisible)}>See ingredients</Text>


            <View style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
            }}>

                <Modal
                    animationType="fade"
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={() => {
                        Alert.alert('Modal has been closed.');
                    }}>

                    <View style={[styles.modalCenter,
                    modalVisible ? { backgroundColor: 'rgba(250,250,250,0.8)' } : '']}>
                        <View style={styles.modalView} >
                            {list}
                        </View>
                        <Ionicons name={'ios-close-circle-outline'} size={35}
                            style={{ color: '#b484bd', margin: 1, alignItems: 'center', justifyContent: 'center' }}
                            onPress={() => {
                                setModalVisible(!modalVisible);
                            }} />

                    </View>

                </Modal>
            </View>
        </View>

    )



}



const styles = StyleSheet.create({
    contatiner: {
        position: 'relative',
        width: '100%',
        padding: 0,
        marginTop: 4,
        alignItems: 'center'
    },
    true: {

        borderRadius: 13,

        padding: 4,
        margin: 3,
        height: 25,
        fontWeight: 'bold',
        backgroundColor: '#fff',
        shadowRadius: 1,
        shadowOffset: {
            height: 1,
            width: 0,
        },
        shadowColor: '#a6b4c8',
        shadowOpacity: 0.8,
        elevation: 4
    },
    truefont: {
        fontSize: 10,
        color: "#B484BD",
    },
    false: {

        borderRadius: 13,
        padding: 4,
        margin: 3,
        height: 25,
        backgroundColor: '#fff',
        shadowRadius: 1,
        shadowOffset: {
            height: 1,
            width: 0,
        },
        shadowColor: '#a6b4c8',
        shadowOpacity: 0.8,
        elevation: 2

    },
    falsefont: {
        fontSize: 10,
        color: "#c1c1c1",
    },
    ing: {
        margin: 3,
        borderRadius: 10,
        width: '30%',
        height: 28,
        justifyContent: 'center',
        backgroundColor: '#b484bd',
        shadowRadius: 1,
        shadowOffset: {
            height: 1,
            width: 1,
        },
        shadowColor: '#a6b4c8',
        shadowOpacity: 0.8,
        elevation: 5,

    },
    ingText: {
        fontSize: 17,
        margin: 3,
        color: '#000',
        textAlign: 'center'
    },
    modalCenter: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',

    },
    modalView: {
        margin: 15,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
})