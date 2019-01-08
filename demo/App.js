/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import React, {Component} from 'react';
import Login from './Login_Registration/login';
import signup from './Login_Registration/signup';
import home from './Tab_navigator/Tabmainscreen';
import intro from './App_Intro/intro';
import { createStackNavigator, createAppContainer } from 'react-navigation';


  const Applicationstack = createStackNavigator({
    Login: {
      screen: Login,
      navigationOptions: {
        header: null,
      }
    },
    Signup: {
      screen: signup,
      navigationOptions: {
        header: null,
      }
    },
    Intro: {
      screen: intro,
      navigationOptions: {
        header: null,
      }
    },
    Home: {
      screen: home,
      navigationOptions: {
        header: null,
      }
    },
  },
    {
      initialRouteName: 'Login',
  });

export default createAppContainer(Applicationstack);
