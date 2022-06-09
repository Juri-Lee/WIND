
import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, StatusBar } from 'react-native';
import { Navbar } from './NavBar';

export default class MainPageTop extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <View style={styles.container}>

                <StatusBar
                    barStyle="light-content"
                    hidden={false}
                    translucent={true} backgroundColor={'rgba(144,137,189,0.4)'}
                    networkActivityIndicatorVisible={true}
                />
                <View style={styles.select}>
                    <TouchableOpacity onPress={() => {
                        this.props.navigation.navigate('RecipeTitle')
                    }}>
                        <View style={styles.button}>
                            <Text style={styles.buttonText}>Add Recipe</Text>
                        </View>

                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => {
                        this.props.navigation.navigate('MealTitle')
                    }}>
                        <View style={styles.button}>
                            <Text style={styles.buttonText}>Add Meal Plan</Text>
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
        height: '100%',
        backgroundColor: '#656084',
        justifyContent: 'center',
        alignItems: 'center',
    },
    select: {
        justifyContent: 'space-around',
        height: '30%',
        width: '50%',

    },
    button: {
        width: '100%',
        height: 50,
        borderRadius: 25,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOpacity: 1,
        elevation: 5

    },
    buttonText: {
        fontSize: 20,


    }
});
