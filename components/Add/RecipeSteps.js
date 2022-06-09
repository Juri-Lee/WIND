import React from 'react'
import { View, Text, StyleSheet, StatusBar, TextInput, ScrollView, Image, TouchableOpacity, Alert } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { LinearGradient } from 'expo-linear-gradient';
import * as ImagePicker from 'expo-image-picker';
import * as firebase from 'firebase';

// var firebaseConfig = {
//     apiKey: "AIzaSyD2Y6lVYSyPQFN_3FUjcNWfoeNKjycQHvs",
//     authDomain: "wind-ef153.firebaseapp.com",
//     databaseURL: "https://wind-ef153.firebaseio.com",
//     projectId: "wind-ef153",
//     storageBucket: "wind-ef153.appspot.com",
//     messagingSenderId: "945803677545",
//     appId: "1:945803677545:web:8c872c3a508f804190b7f8",
//     measurementId: "G-K4VE6MW6TE"
// };
// if (firebase.apps.length == 0) {
//     firebase.initializeApp(firebaseConfig);
// }

export default class RecipeSteps extends React.Component {

    constructor(props) {
        super(props)
        this.title = props.route.params.title
        this.vegetarian = props.route.params.vegetarian
        this.ketogenic = props.route.params.ketogenic
        this.vegan = props.route.params.vegan
        this.dariyfree = props.route.params.dariyfree
        this.veryhealth = props.route.params.veryhealth
        this.selectImage = props.route.params.selectImage
    }
    state = {
        ingred: [],
        steps: [
            {
                'image': '',
                "instr": ''
            },
        ],
        counts: 0,
    }

    async openImagePickerAsyn(item, index) {
        let permissionResult = await ImagePicker.requestCameraRollPermissionsAsync()
        if (permissionResult.granted === false) {
            alert("Permisson to access camera roll is required!");
            return;
        }

        let PickerResult = await ImagePicker.launchImageLibraryAsync();
        // console.log(PickerResult);

        if (PickerResult.cancelled === true) {
            return;
        }
        this.setState(() => {
            item.image = PickerResult.uri
            return this.state
        })
        // console.log(item.image)
    }

    uploadImage = async (uri, imageName) => {

        if (uri !== null) {
            const response = await fetch(uri);
            const blob = await response.blob();


            var ref = firebase.storage().ref().child("images/recipe/" + imageName + '/main');
            return ref.put(blob);
        } else {
            return
        }

    }

    uploadImagewSteps = async (imageName, uri, index) => {
        if (uri != '') {
            const response = await fetch(uri);
            const blob = await response.blob();
            var ref = firebase.storage().ref().child("images/recipe/" + imageName + '/' + index);
            return ref.put(blob);
        } else {
            return
        }
    }

    createTwoButtonAlert = () =>
        Alert.alert(
            "Alert Title",
            "My Alert Msg",
            [
                {
                    text: "Cancel",
                    onPress: () => console.log("Cancel Pressed"),
                    style: "cancel"
                },
                { text: "OK", onPress: () => console.log("OK Pressed") }
            ],
            { cancelable: false }
        );

    render() {

        var step = this.state.steps.map((item, index) => {




            return (
                <View style={styles.component}>
                    <Text style={{ width: '5%', fontSize: 18 }}>{index + 1}</Text>
                    <TouchableOpacity style={{ width: '38%', aspectRatio: 1 }} onPress={() => this.openImagePickerAsyn(item, index)}>
                        {item.image == '' ?
                            <LinearGradient colors={['#A2D1C7', '#D8D8E0', '#D8D8E0', '#EBDAE9']} style={{ width: '100%', height: '100%', justifyContent: 'center', alignItems: 'center' }}>
                                <Text style={{ fontSize: 13, color: '#a1a1a1' }}>Click to add photo</Text>
                            </LinearGradient>
                            : <Image source={{ uri: item.image }} style={{ width: '100%', height: '100%' }} resizeMode={'cover'} />}
                    </TouchableOpacity>
                    <TextInput
                        placeholder={'Instructions...'}
                        style={{ width: '50%', padding: 10 }}
                        multiline={true}
                        onChangeText={(text) => {
                            item.instr = text
                            console.log(item.instr)
                        }}
                    />
                    {index == this.state.counts ?
                        <Ionicons
                            name={'ios-remove-circle-outline'}
                            size={25}
                            color={'#f12'}
                            style={{ width: '7%' }}
                            onPress={() => {
                                this.setState(() => {
                                    this.state.steps.pop();
                                    this.state.counts -= 1;
                                    return this.state
                                }
                                )
                            }} />
                        : <View style={{ width: '7%' }}></View>}

                </View>
            )
        })

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
                        onPress={() => { this.props.navigation.navigate('RecipeTitle') }
                        } />
                    <Text style={{ fontSize: 19, fontWeight: 'bold', color: '#656084' }}>Recipe</Text>
                </View>

                <ScrollView style={{}}>
                    <View style={{ width: '100%', alignItems: 'center', paddingBottom: 5 }}>
                        <View style={styles.gredientslist}>
                            <Text style={{ fontSize: 19 }}>Ingredients</Text>
                            <TextInput
                                style={{
                                    fontSize: 15,
                                    borderColor: '#656084',
                                    borderWidth: 1,
                                    borderRadius: 7,
                                    padding: 5,
                                    margin: 10,
                                }}
                                multiline={true}
                                placeholder={'type ingredients'}
                                onChangeText={(text) => {
                                    text = text.replace(/\n/g, ",");
                                    text = text.replace(".", ",");
                                    text = text.replace("/", ",");
                                    text = text.replace("\\", ",");
                                    text = text.replace(" ", ",");
                                    this.setState(() => {


                                        this.state.ingred = text.split(',')
                                    })
                                    console.log(this.state.ingred)
                                }}
                            />
                        </View>

                        <View style={styles.steps}>
                            <Text style={{ fontSize: 19 }}>Steps</Text>
                        </View>
                        <View style={{ width: '100%', justifyContent: 'center', alignItems: 'center' }}>
                            {step}
                        </View>
                        <Ionicons
                            name={'ios-add-circle'}
                            touchActive={true}
                            size={35}
                            color={'#656084'}
                            style={{
                                alignItems: 'center'
                            }}
                            onPress={() => {
                                this.setState(() => {
                                    this.state.steps.push({ "image": '', "instr": '' });
                                    this.state.counts += 1;
                                    return this.state
                                }
                                )
                            }} />
                        <LinearGradient
                            style={styles.post}
                            colors={['#656084', '#9089bd', '#715c84',]}
                            start={[0.1, 0.3]}
                            end={[1, 1]
                            }
                        >
                            <TouchableOpacity style={{ width: '100%', height: '100%', justifyContent: 'center', alignItems: 'center' }} onPress={() => {
                                // let user = firebase.auth().currentUser.uid;
                                let user = 'tF8DoToL0IesY13tNOxeCaUgIO92'
                                var year = new Date().getFullYear()
                                var month = new Date().getMonth() + 1
                                var date = new Date().getDate()
                                var hours = new Date().getHours()
                                var min = new Date().getMinutes()
                                var sec = new Date().getSeconds()

                                console.log(user)



                                var currentTime = `${year}/${month}/${date}/${hours}/${min}/${sec}`

                                Alert.alert(
                                    "Confirm",
                                    "Click OK to post",
                                    [
                                        {
                                            text: "Cancel",
                                            onPress: () => console.log("Cancel Pressed"),
                                            style: "cancel"
                                        },
                                        {
                                            text: "OK", onPress: () => {
                                                console.log("OK Pressed")


                                                var key = firebase
                                                    .database()
                                                    .ref('recipeSteps/')
                                                    .push()
                                                    .getKey()

                                                firebase
                                                    .database()
                                                    .ref('recipeSteps/' + key)
                                                    .set({
                                                        steps: this.state.steps
                                                    })

                                                var recipeKey = firebase
                                                    .database()
                                                    .ref('recipes/')
                                                    .push()
                                                    .getKey()
                                                firebase
                                                    .database()
                                                    .ref('recipes/' + recipeKey)
                                                    .set({
                                                        title: this.title,
                                                        titleImage: this.selectImage,
                                                        uid: user,
                                                        ingredientList: this.state.ingred,
                                                        liked: 0,
                                                        disliked: 0,
                                                        dietary: {
                                                            "vegiterian": this.vegetarian,
                                                            "ketogenic": this.ketogenic,
                                                            "vegan": this.vegan,
                                                            "dairyfree": this.dariyfree,
                                                            "veryhealth": this.veryhealth
                                                        },
                                                        recipeStepKey: key
                                                    });


                                                firebase
                                                    .database()
                                                    .ref('users/' + user + '/postingInfo/post/recipe')
                                                    .push({
                                                        key: recipeKey,
                                                        date: currentTime
                                                    })

                                                this.uploadImage(this.selectImage, recipeKey)
                                                    .then(() => {
                                                        console.log("main image upload success")
                                                    })
                                                    .catch(() => {
                                                        Alert.alert("main error : " + error)
                                                    })

                                                this.state.steps.map((item, index) => {
                                                    this.uploadImagewSteps(recipeKey, item.image, index)
                                                        .then(() => {
                                                            console.log("Success")
                                                        })
                                                        .catch((error) => {
                                                            Alert.alert(error);
                                                        });
                                                })

                                                this.props.navigation.navigate('AddMain')

                                            }
                                        }
                                    ],
                                    { cancelable: false }
                                );
                            }}>
                                <Text style={{ color: '#eee', fontSize: 17 }}
                                >Post</Text>
                            </TouchableOpacity>
                        </LinearGradient>
                    </View>

                </ScrollView>

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
    gredientslist: {
        width: '100%',
        padding: 10
    },
    steps: {
        width: '100%',
        padding: 10
    },
    component: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: '95%',
        padding: 5,
        margin: 5,
        borderBottomColor: 'rgba(101,96,132,0.3)',
        borderBottomWidth: 0.5,
    },
    post: {
        marginTop: 5,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        height: 45,
        shadowOpacity: 1,
        shadowColor: '#000',
        elevation: 4
    }
})