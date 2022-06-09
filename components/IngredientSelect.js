import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Image, TouchableOpacity } from 'react-native'


export default function IngredientSelect(props) {
    const list = [require('../icons/png/002-avocado.png'), require('../icons/png/007-tomato-1.png'), require('../icons/png/006-lemon.png'), require('../icons/png/011-garlic.png'),
    require('../icons/png/012-carrot-1.png'), require('../icons/png/013-peas.png'), require('../icons/png/035-mushroom-1.png'), require('../icons/png/026-onion-2.png'),
    require('../icons/png/004-bell-pepper.png'), require('../icons/png/017-cabbage.png'), require('../icons/png/022-potato.png'), require('../icons/png/018-coconut.png'),
    require('../icons/png/045-broccoli.png'), require('../icons/png/024-lettuce-1.png'), require('../icons/png/025-pumpkin.png'), require('../icons/png/033-cucumber.png'),
    require('../icons/png/005-melon-1.png'), require('../icons/png/028-banana.png'), require('../icons/png/038-chili.png'), require('../icons/png/040-radish.png'),
    require('../icons/png/050-apple.png'), require('../icons/png/014-berries.png'), require('../icons/png/021-lime.png'), require('../icons/png/031-beet.png'),
    require('../icons/png/032-watermelon.png'), require('../icons/png/030-plum.png'), require('../icons/png/015-grenade.png'), require('../icons/png/016-artichoke.png'),
    require('../icons/png/023-kiwi.png'), require('../icons/png/003-pear.png'), require('../icons/png/008-orange-1.png'), require('../icons/png/043-eggplant.png'),
    require('../icons/png/037-pineapple.png'), require('../icons/png/036-mango.png'), require('../icons/png/034-strawberry.png'), require('../icons/png/048-cherry.png')]

    return (

        < View style={{
            flex: 1,
            alignContent: 'center',
            justifyContent: 'center',
        }}>
            <TouchableOpacity style={{
                height: 50,
                width: 50,
                margin: 17,
                justifyContent: 'center',
            }}
                onPress={props.addItem}
            >
                <Image
                    source={list[props.id]}
                    style={styles.ImagesSetting}
                />
            </TouchableOpacity>
        </View >
    )
}

const styles = StyleSheet.create({
    ImagesSetting: {
        height: 50,
        width: 50,
        shadowRadius: 1,
        shadowOffset: {
            height: 1,
            width: 0,
        },
        shadowColor: '#a6b4c8',
        shadowOpacity: 0.8,
        margin: 1
    },
})