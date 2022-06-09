import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';

export default function WritingRecipe(props) {
    let summary = props.summary
    summary = summary.split('<b>').join('');
    summary = summary.split('</b>').join('');

    return (
        <View style={styles.container}>

            {props.defaultSource == true ?
                <Text></Text>

                : <LinearGradient
                    colors={['#A2D1C7', '#D8D8E0', '#D8D8E0', '#EBDAE9']}
                    style={styles.image}>
                    <Text
                        style={{
                            backgroundColor: 'transparent',
                            fontSize: 20,
                            color: '#fff',

                        }}>
                        Image {props.id}
                    </Text>
                </LinearGradient>}

            {props.defaultSource == true ?
                (<Text style={{ margin: 10, fontSize: 19, color: '#a1a1a1' }}>Go and check the source site!</Text>)
                : (<View style={styles.text}>
                    <Text style={styles.step}> step {props.id}:  </Text>
                    <Text style={styles.phara}>{props.steps} </Text>
                </View>)}


        </View>

    )

}

const styles = StyleSheet.create({

    container: {

        width: '100%',
        flexDirection: 'row',
        justifyContent: 'center',
        borderBottomColor: '#e1e1e1',
        borderBottomWidth: 1,
        marginTop: 7,
        marginBottom: 7,

    },

    image: {
        width: 150,
        height: 100,
        margin: 5,
        borderRadius: 3
    },
    text: {
        width: '50%',
        margin: 5,


    },
    step: {
        fontSize: 18,
        textAlign: 'left'

    },
    phara: {
        fontSize: 16
    },
    summary: {
        flexDirection: 'column',
        width: '100%',


    }
})