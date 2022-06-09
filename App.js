
import * as React from 'react';
import { StyleSheet, Text, View, Image, setState, TouchableOpacity, StatusBar } from 'react-native';
//import MainPage from './components/MainPage.js';
import Constants from 'expo-constants';
import NavBar from './components/NavBar';
import SignIn from './components/start/SignIn';
import Navigation from './components/start/Navigation'
import EditMeal from './components/meal/EditMeal';
import ProfileSetting from './components/settings/ProfileSetting';
import Basket from './components/Storage/Basket'
import RecipeSearch from './components/RecipeSearch';
import RecipeMain from './components/RecipeMain';
import RecipeTitle from './components/Add/RecipeTitle';
import RecipeSteps from './components/Add/RecipeSteps';
import MealTitle from './components/Add/MealTitle';
import MealSteps from './components/Add/MealSteps'

import { NavigationContainer, TabActions } from '@react-navigation/native';

export default class App extends React.Component {

  state = {
    loaded: false
  }

  constructor() {
    super();
    CountThree.load(v => this.setState({ loaded: true }));
  }

  elementcarrot = (
    <View style={styles.container}>
      <Image source={require("./icons/logo.png")} />
      <Text style={styles.text_logo}>WIND</Text>
    </View>
  );

  // render() {

  //   return (this.state.loaded === false) ? this.elementcarrot : (<NavBar />);

  // }

  render() {
    return (

      <Navigation />


      // <MealSteps />
    )
  }

}


class CountThree {

  static load(cb) {
    setTimeout(cb, 4000);
  }
}

class carrotLoad extends React.Component {
  render() {
    let element = (
      <View style={styles.container}>
        <Image source={require("./icons/logo.png")} />
        <Text style={styles.text_logo}>La carotte</Text>
      </View>
    );
    return element;
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#B484BD',
    alignItems: 'center',
    justifyContent: 'center',
  },

  text_logo: {
    color: 'white',
    padding: 20,
    fontSize: 20,

  },

});

