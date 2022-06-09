import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, StatusBar, TextInput, Image } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import * as ImagePicker from 'expo-image-picker';


export default class RecipeTitle extends React.Component {
    constructor(props) {
        super(props)
    }

    state = {
        mainimage: '',
        title: '',
        vegetarian: false,
        ketogenic: false,
        vegan: false,
        dariyfree: false,
        veryhealth: false,
        selectImage: null,
        imageupload: false,
        uploadtitle: false
    };

    async openImagePickerAsyn() {
        let permissionResult = await ImagePicker.requestCameraRollPermissionsAsync()
        if (permissionResult.granted === false) {
            alert("Permisson to access camera roll is required!");
            return;
        }

        let PickerResult = await ImagePicker.launchImageLibraryAsync();
        console.log(PickerResult);

        if (PickerResult.cancelled === true) {
            return;
        }
        this.setState(() => {
            this.state.selectImage = { localUri: PickerResult.uri }
            this.state.imageupload = !this.state.imageupload
            console.log(this.state.selectImage.localUri)
            return this.state
        })
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
                <View style={styles.topbar}>
                    <Ionicons name={'ios-arrow-back'} style={{
                        paddingLeft: 5,
                        position: 'absolute',
                        left: 7,
                        bottom: 0
                    }}
                        touchActive="true"
                        size={40}
                        color={'#b484bd'}
                        onPress={() => { this.props.navigation.navigate('AddMain') }
                        } />
                    <Text style={{ fontSize: 19, fontWeight: 'bold', color: '#656084' }}>Recipe</Text>
                </View>
                <View style={styles.title}>
                    <Text style={{ width: '13%', fontSize: 18 }}>Title: </Text>
                    <TextInput style={{
                        width: '70%',
                        borderBottomColor: '#606484',
                        borderBottomWidth: 1,
                        paddingLeft: 5
                    }}
                        placeholder={'Title'}
                        onChangeText={(text) => {
                            this.setState(() => {
                                this.state.title = text
                                if (text != '') {
                                    this.state.uploadtitle = true
                                } else {
                                    this.state.uploadtitle = false
                                }
                                return this.state
                            })
                        }
                        } />
                </View>
                <View style={styles.image}>
                    <TouchableOpacity
                        style={{
                            height: '100%',
                            width: '100%',
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}
                        onPress={() => this.openImagePickerAsyn()}>{
                            this.state.selectImage === null ?

                                <View style={styles.Imageselect}>
                                    <Text style={{ fontSize: 18 }}>Click to add Image</Text>
                                </View>
                                :
                                <View style={styles.ImageselectWithImage} >
                                    <Image source={{ uri: this.state.selectImage.localUri }} style={{
                                        width: '100%',
                                        height: '100%',
                                        resizeMode: "cover"
                                    }} />
                                </View>
                        }
                    </TouchableOpacity>

                </View>
                <View style={styles.seletDiet}>

                    <View style={{ flexDirection: 'row', height: '50%', justifyContent: 'space-around', alignItems: 'center' }}>
                        <TouchableOpacity
                            style={this.state.vegetarian ? styles.onbuttonclick : styles.button}
                            onPress={() => {
                                this.setState(() => {
                                    this.state.vegetarian = !this.state.vegetarian
                                    return this.state
                                })
                            }}>
                            <View>
                                <Text style={{ fontSize: 15 }}>Vegetarian</Text>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={this.state.ketogenic ? styles.onbuttonclick : styles.button}
                            onPress={() => {
                                this.setState(() => {
                                    this.state.ketogenic = !this.state.ketogenic
                                    return this.state
                                })
                            }}>
                            <View>
                                <Text style={{ fontSize: 15 }}>Ketogenic</Text>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={this.state.vegan ? styles.onbuttonclick : styles.button}
                            onPress={() => {
                                this.setState(() => {
                                    this.state.vegan = !this.state.vegan
                                    return this.state
                                })
                            }}>
                            <View>
                                <Text style={{ fontSize: 15 }}>Vegan</Text>
                            </View>
                        </TouchableOpacity>
                    </View>

                    <View style={{ flexDirection: 'row', height: '50%', justifyContent: 'space-between', alignItems: 'center' }}>
                        <TouchableOpacity
                            style={this.state.dariyfree ? styles.onbuttonclick : styles.button
                            }
                            onPress={() => {
                                this.setState(() => {
                                    this.state.dariyfree = !this.state.dariyfree
                                    return this.state
                                })
                            }}>
                            <View>
                                <Text style={{ fontSize: 15 }}>Dariy Free</Text>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={this.state.veryhealth ? styles.onbuttonclick : styles.button}
                            onPress={() => {
                                this.setState(() => {
                                    this.state.veryhealth = !this.state.veryhealth
                                    return this.state
                                })
                            }}>
                            <View>
                                <Text style={{ fontSize: 15 }}>Very Healty</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{ width: '100%', height: '9%', flexDirection: 'row', justifyContent: 'flex-end', margin: 5 }}>
                    <TouchableOpacity style={[styles.next, { backgroundColor: this.state.imageupload && this.state.uploadtitle ? '#715c84' : '#b1b1b1', }]} onPress={() => {
                        // console.log(this.state.title)
                        this.props.navigation.navigate('RecipeSteps',
                            {
                                title: this.state.title,
                                vegetarian: this.state.vegetarian,
                                ketogenic: this.state.ketogenic,
                                vegan: this.state.vegan,
                                dariyfree: this.state.dariyfree,
                                veryhealth: this.state.veryhealth,
                                selectImage: this.state.selectImage.localUri
                            })

                    }}

                        disabled={!this.state.imageupload}
                    >
                        <View>

                            <Text style={{ color: '#eee', fontSize: 17 }}>Next</Text>

                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

var styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        margin: 0,
        padding: 0,
        backgroundColor: '#fff'
    },
    topbar: {
        width: '100%',
        height: '11%',
        borderBottomColor: '#656084',
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomWidth: 0.5,
        justifyContent: 'center',
        paddingRight: 10,
        marginBottom: 5,
        paddingTop: 25
    },
    title: {
        width: '100%',
        height: '10%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    image: {
        width: '100%',
        height: '50%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    Imageselect: {
        backgroundColor: 'rgba(101,96,132,0.7)',
        height: '85%',
        aspectRatio: 1.2,
        justifyContent: 'center',
        alignItems: 'center'
    },
    ImageselectWithImage: {
        height: '85%',
        aspectRatio: 1.2,
        justifyContent: 'center',
        alignItems: 'center'
    },
    seletDiet: {
        width: '100%',
        height: '13%',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    button: {
        backgroundColor: '#ccc',
        height: '80%',
        width: 100,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 5,
        borderRadius: 23,
        shadowRadius: 3,
        shadowOpacity: 0.4,
        shadowColor: '#000',
        shadowOffset: {
            height: -1,
            width: -1
        },
        elevation: 4
    },
    onbuttonclick: {
        backgroundColor: '#9089bd',
        height: '80%',
        width: 100,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 5,
        borderRadius: 23,
        shadowRadius: 3,
        shadowOpacity: 0.4,
        shadowColor: '#000',
        shadowOffset: {
            height: -1,
            width: -1
        },
        elevation: 4
    },
    next: {
        marginTop: 10,
        marginRight: 10,
        width: '30%',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        height: '80%',

        borderRadius: 7,
        shadowRadius: 3,
        shadowOpacity: 0.4,
        shadowColor: '#000',
        shadowOffset: {
            height: -1,
            width: -1
        },
        elevation: 4
    }
})