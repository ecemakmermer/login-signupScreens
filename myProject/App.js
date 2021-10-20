/*import React, { Component } from 'react';
import{ StyleSheet,ImageBackground,Image,Button,ActivityIndicator,AsyncStorage,StatusBar,TextInput,Text, TouchableOpacity, View} from 'react-native';
import {createSwitchNavigator,createAppContainer} from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import bgImage from './assets/background.jpg';
import firebase from 'firebase';
import LoginScreen from './screens/LoginScreen'
import HomeScreen from './screens/HomeScreen'*/
import { View, TextInput, ImageBackground,StyleSheet, TouchableOpacity, Text, Button } from 'react-native'
import React,{Component} from 'react'
import LoginScreen from './screens/LoginScreen'
import SignupScreen from './screens/SignupScreen'
import HomeScreen from './screens/HomeScreen'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

export default class App extends React.Component {
    render() {
        return (   
          <NavigationContainer>
          <MyStack />
          </NavigationContainer>)
    }
}
//regex kontrolü mail doğrulama
const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen name="SignupScreen" component={SignupScreen} />
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      
    </Stack.Navigator>
  );
}