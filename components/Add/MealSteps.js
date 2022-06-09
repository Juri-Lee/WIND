import React from 'react'
import { View, Text, StyleSheet, StatusBar, TextInput, ScrollView, Image, TouchableOpacity, Alert } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { LinearGradient } from 'expo-linear-gradient';
import { Picker } from '@react-native-picker/picker';
import * as firebase from 'firebase';

export default class RecipeSteps extends React.Component {

    constructor(props) {
        super(props)
        this.lenth = parseInt(props.route.params.duration)
        this.title = props.route.params.title
        this.vegetarian = props.route.params.vegetarian
        this.ketogenic = props.route.params.ketogenic
        this.vegan = props.route.params.vegan
        this.dariyfree = props.route.params.dariyfree
        this.veryhealth = props.route.params.veryhealth
        this.selectImage = props.route.params.mainImage
    }
    state = {
        meal: []
    }

    UNSAFE_componentWillMount() {

        var generateMealform = () => {
            for (var i = 0; i < this.lenth; i++) {
                this.state.meal.push([
                    {
                        "time": 'choose',
                        "recipe": 'choose'
                    },
                    {
                        "time": 'choose',
                        "recipe": 'choose'
                    },
                    {
                        "time": 'choose',
                        "recipe": 'choose'
                    }
                ])
            }
        }

        generateMealform();
    }

    listcomp = (item) => {

        var l = item.map((i, index) => {
            return (
                <View style={{ width: '100%', flexDirection: 'row', alignItems: 'center' }}>
                    <Picker
                        selectedValue={i.time}
                        style={{ width: '40%' }}
                        onValueChange={(itemValue, itemIndex) => {
                            this.setState(() => {
                                i.time = itemValue
                                return this.state
                            }
                            )
                        }}
                        mode={'dropdown'}
                    >
                        <Picker.Item label="Breakfast" value="breakfast" />
                        <Picker.Item label="Lunch" value="lunch" />
                        <Picker.Item label="Dinner" value="dinner" />
                        <Picker.Item label="Snack" value="snack" />
                    </Picker>
                    <TextInput style={{ width: '50%', borderBottomColor: '#9089bd', borderBottomWidth: 1 }}
                        placeholder={'select recipe'}
                        onChangeText={(text) => {
                            i.recipe = text
                        }} />
                    {index == item.length - 1 ?
                        <Ionicons
                            name={'ios-remove-circle-outline'}
                            size={25}
                            color={'#f12'}
                            style={{ width: '9%', marginLeft: '1%' }}
                            onPress={() => {
                                this.setState(() => {
                                    item.pop();
                                    return this.state
                                }
                                )
                            }} />
                        : <View style={{ width: '10%' }}></View>}

                </View>
            )
        }
        )

        return l
    }

    uploadImage = async (uri, imageName) => {
        if (uri !== '') {
            const response = await fetch(uri);
            const blob = await response.blob();


            var ref = firebase.storage().ref().child("images/mealplans/" + imageName + '/main');
            return ref.put(blob);
        } else {
            return
        }

    }

    render() {

        var step = this.state.meal.map((item, index) => {

            return (
                <View style={styles.component}>
                    <Text style={{ width: '100%', fontSize: 18 }}> Day {index + 1}</Text>

                    { this.listcomp(item)}
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
                                item.push({
                                    "time": 'breakfast',
                                    "recipe": 'choose'
                                });

                                return this.state
                            }
                            )
                        }} />
                </View>

            )

        })

        return (
            <View style={styles.container} >
                <StatusBar
                    barStyle="light-content"
                    hidden={false}
                    translucent={true} backgroundColor={'rgba(144,137,189,0.4)'}
                    networkActivityIndicatorVisible={true}
                />

                <View style={{ width: '100%', height: '6%', borderBottomColor: '#656084', flexDirection: 'row', alignItems: 'center', borderBottomWidth: 0.5, justifyContent: 'center', paddingRight: 10, marginBottom: 5, marginTop: 25 }}>
                    <Ionicons name={'ios-arrow-back'} style={{
                        paddingLeft: 5,
                        position: 'absolute',
                        left: 7,
                        bottom: 0
                    }}
                        touchActive="true"
                        size={40}
                        color={'#b484bd'}
                        onPress={() => { this.props.navigation.navigate('MealTitle') }
                        } />
                    <Text style={{ fontSize: 19, fontWeight: 'bold', color: '#656084' }}>Meal Plan</Text>
                </View>

                <ScrollView style={{}}>
                    <View style={{ width: '100%', alignItems: 'center', paddingBottom: 5 }}>

                        <View style={{ width: '100%', justifyContent: 'center', alignItems: 'center' }}>
                            {step}
                        </View>

                        <LinearGradient
                            style={styles.post}
                            colors={['#656084', '#9089bd', '#715c84',]}
                            start={[0.1, 0.3]}
                            end={[1, 1]}>
                            <TouchableOpacity style={{ width: '100%', height: '100%', justifyContent: 'center', alignItems: 'center' }} onPress={() => {
                                // let user = firebase.auth().currentUser.uid;
                                let user = 'tF8DoToL0IesY13tNOxeCaUgIO92'
                                var year = new Date().getFullYear()
                                var month = new Date().getMonth() + 1
                                var date = new Date().getDate()
                                var hours = new Date().getHours()
                                var min = new Date().getMinutes()
                                var sec = new Date().getSeconds()

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

                                                var key = firebase
                                                    .database()
                                                    .ref('mealPlan/')
                                                    .push({
                                                        duration: this.lenth,
                                                        title: this.title,
                                                        titleImage: this.selectImage,
                                                        uid: user,
                                                        liked: 0,
                                                        disliked: 0,
                                                        dietary: {
                                                            "vegiterian": this.vegetarian,
                                                            "ketogenic": this.ketogenic,
                                                            "vegan": this.vegan,
                                                            "dairyfree": this.dariyfree,
                                                            "veryhealth": this.veryhealth
                                                        },
                                                        plan: this.state.meal,
                                                        date: currentTime
                                                    })
                                                    .getKey()

                                                firebase
                                                    .database()
                                                    .ref('users/' + user + '/postingInfo/post/mp')
                                                    .push({
                                                        key: key,
                                                        date: currentTime
                                                    })

                                                this.uploadImage(this.selectImage, key)
                                                    .then(() => {
                                                        console.log('success')
                                                    })
                                                    .catch((error) => {
                                                        console.log(error)
                                                    })
                                                this.props.navigation.navigate('AddMain')

                                            }
                                        }
                                    ],
                                    { cancelable: false }
                                );
                            }}>
                                <Text style={{ color: '#eee', fontSize: 17 }}>Post</Text>
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
        flexDirection: 'column',
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