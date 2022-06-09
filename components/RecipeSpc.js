import React, { useState, useEffect } from 'react';
import { View, SafeAreaView, Image, ScrollView, StyleSheet, Text, FlatList, SectionList, ustState, ImageBackground, Modal } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Provider from './Provider';
import Rating from './Rating';
import WritingRecipe from './WritingRecipe';
import RecipeInfo from './RecipeInfo';


const host = "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com"
const key = "5b162be8f8msh9bb5bfee2d1133cp18d6dbjsn03630a337ed2"
const definstruction = [{
    number: "No recipes",
    step: "See summary below"
}]
export default class RecipeSpc extends React.Component {

    constructor(props) {
        super(props)
        this.id = props.route.params.id
        this.information = "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/" + this.id + "/information"
        this.Instructions = "https://rapidapi.p.rapidapi.com/recipes/" + this.id + "/analyzedInstructions?stepBreakdown=true"

        this.state = {
            information: {
                vegan: false,
                vegetarian: false,
                dairyFree: false,
                veryHealthy: false,
                ketogenic: false,
                servig: 0,
                aggregateLike: 0,
                title: "",
                readyInMinutes: 0,
                image: "",
                sourceName: "",
                sourceUrl: "",
                summary: "",
                // diets: [],
                extendedIngredients: [],
            },
            recipeSteps: [],
            enableScrollViewScroll: true,
            defaultSource: false,
        }

    }

    componentDidMount() {

        const req = new Request(this.information, {
            headers: {
                "x-rapidapi-host": host,
                "x-rapidapi-key": key
            },
            method: 'GET',


        });

        fetch(req)
            .then(response => response.json())
            .then(responseJSON => {
                if (responseJSON.analyzedInstructions.length == 0) {
                    this.setState({ recipeSteps: definstruction })
                    this.setState({ defaultSource: true })
                } else {
                    this.setState({
                        recipeSteps: responseJSON.analyzedInstructions[0].steps,
                    })
                }

                this.setState({
                    information: {
                        vegan: responseJSON.vegan,
                        vegetarian: responseJSON.vegetarian,
                        dairyFree: responseJSON.dairyFree,
                        veryHealthy: responseJSON.veryHealthy,
                        ketogenic: responseJSON.ketogenic,
                        servig: responseJSON.servings,
                        aggregateLike: responseJSON.aggregateLikes,
                        title: responseJSON.title,
                        readyInMinutes: responseJSON.cookingMinutes,
                        image: responseJSON.image,
                        sourceName: responseJSON.sourceName,
                        sourceUrl: responseJSON.sourceUrl,
                        extendedIngredients: responseJSON.extendedIngredients,
                        summary: responseJSON.summary
                    },

                })

            })
            .catch(err => {
                console.log(err);

            }).done()

    }


    render() {

        const recipe = this.state.recipeSteps
        const list = recipe.map((item, num) => <WritingRecipe
            id={item.number}
            steps={item.step}
            summary={this.state.information.summary}
            defaultSource={this.state.defaultSource}
        />)

        return (
            <View style={{ position: 'relative', justifyContent: 'flex-end', flexDirection: 'column', width: '100%', height: '100%', margin: 0, padding: 0 }}>


                <View style={{ position: 'absolute', top: 0, height: '40%', width: '100%' }}>
                    <Image source={{ uri: this.state.information.image }} style={{
                        width: '100%',
                        height: '100%',
                    }} resizeMode='stretch' />
                </View>


                < View style={styles.container} >
                    <ScrollView style={{ height: '100%', width: '100%', }}>
                        <View style={styles.textArea} >
                            <Text style={{
                                fontSize: 23,
                                width: '90%',
                                marginTop: 10,
                                marginBottom: 20,
                                lineHeight: 35,
                                textAlign: 'center',
                                alignContent: 'center',
                            }}>{this.state.information.title} </Text>


                            <Provider profile={this.state.information.sourceName} sourceUrl={this.state.information.sourceUrl} />
                            <Rating like={this.state.information.aggregateLike} />
                            <RecipeInfo vegan={this.state.information.vegan} vege={this.state.information.vegetarian} dairyFree={this.state.information.dairyFree}
                                veryHealthy={this.state.information.veryHealthy} ketogenic={this.state.information.ketogenic} serving={this.state.information.servig}
                                readyInMinutes={this.state.information.readyInMinutes} extendedIngredient={this.state.information.extendedIngredients}
                            />

                            <View style={{ width: '90%', flexDirection: 'column', alignContent: 'center', justifyContent: 'center', padding: 10 }}>
                                {list}
                            </View>
                        </View>
                    </ScrollView>


                </View >


                <Ionicons name={'ios-arrow-back'} style={{
                    padding: 10,
                    position: 'absolute',
                    left: 1,
                    top: '3%',
                }}
                    touchActive="true"
                    size={40}
                    color={'#b484bd'}
                    onPress={() => { this.props.navigation.navigate('RecipeFound') }} />
            </View>
        )


    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        position: 'absolute',
        top: '35%',
        flexDirection: 'column',
        width: '100%',
        height: '70%',
        backgroundColor: '#fff',
        alignItems: 'center',
        borderRadius: 25,
        elevation: 4,
        paddingBottom: '8%'

    },
    title: {
        width: '90%',
        fontSize: 19,
        color: '#b484bd',
        backgroundColor: '#f00',
        height: 'auto',
        lineHeight: 35,
        textAlign: 'center',
        alignContent: 'center',
    },
    textArea: {
        width: '100%',
        alignItems: 'center',
    },
})