/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useEffect, useState } from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { NavigationContainer, useNavigation, DrawerActions, createNavigationContainerRef, useNavigationState } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import SignInScreen from './screens/SignInScreen/SignInScreen';
import CartScreen from './screens/CartScreen/CartScreen';
import ContactUsScreen from './screens/ContactUsScreen/ContactUsScreen';
import AbayaHomeDrawerNavigation from './AbayaHomeDrawerNavigation';
import AboutUsScreen from './screens/AboutUsScreen/AboutUsScreen';
import Payment from './screens/Payment/';
const Stack = createStackNavigator();
const HomeStack = createStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

const Upperdrawer = () => {
  return(
    <Drawer.Navigator>
      <Drawer.Screen name="contactus" component={ContactUsScreen}/>
    </Drawer.Navigator>
  )
}


const HomeComponent = () => {
  const navigation = useNavigation();
  
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen options={{
        headerTitle: () => <Image
          resizeMode="contain"
          style={{ width: 135 }}
          source={require('./screens/HomeScreen/assets/logo.png')} />,
        headerTitleAlign: 'center',
        headerLeftContainerStyle: {
          marginLeft: 15
        },
        headerRightContainerStyle: {
          marginRight: 15
        },
        headerLeft: () => (
          <TouchableOpacity onPress={() => navigation.dispatch(DrawerActions.openDrawer())}>
            <Image style={{ width: 21, height: 23, marginLeft: 25 }} source={require('./screens/HomeScreen/assets/dotIcon.png')} />
          </TouchableOpacity>
        ),
        headerRight: () => (
          <TouchableOpacity>
            <Image style={{ width: 21, height: 23, marginRight: 25 }} source={require('./screens/HomeScreen/assets/Vectorsearch.png')} />
          </TouchableOpacity>),
        headerStyle: {
          height: 90
        },

      }}
        name="Home" component={AbayaHomeDrawerNavigation} />
        <HomeStack.Screen name="upperDrawer" component={Upperdrawer}/>
    </HomeStack.Navigator>
  )
}

const bottomTabNavigations = (navigator) => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          height: 70,
          justifyContent: 'center'

        },
      }}>
      <Tab.Screen options={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarIcon: () => <Image style={{ width: 32, height: 32 }} source={require('./assets/VectorhomeIcon.png')} />,
      }} name="AbayaHome" component={HomeComponent} />
      <Tab.Screen options={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarIcon: () => {
          return (
            <TouchableOpacity onPress={() => {
              navigator.navigation.reset({
                index: 0,
                routes: [{ name: 'auth', screen: 'SignIn' }]
              });
            }}>
              <Image style={{ width: 32, height: 32 }} source={require('./assets/registerationIcon.png')} />
            </TouchableOpacity>
          )
        },
      }} name="SignUp" component={AuthNavigator} />
      <Tab.Screen options={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarIcon: () => {
          return(
            <TouchableOpacity onPress={() => {
              navigator.navigation.reset({
                index: 0,
                routes: [{ name: 'myCart', screen: 'Cart' }]
              });
            }}>
        <Image style={{ width: 32, height: 32 }} source={require('./assets/cart.png')} /> 
        </TouchableOpacity>
          )
      },
      }} name="mycart" component={CartNavigator} />
    </Tab.Navigator >
  )
}

const AuthNavigator = (navigator) => {
  const navigation = useNavigation();
  return (
    <Stack.Navigator>
      <Stack.Screen options={{ headerShown: true, 
      headerTitleAlign:'center', 
      headerLeft:() => (
        <TouchableOpacity onPress={() => navigation.navigate('root')} style={{left:30}}>
        <Image style={{ width: 30, height: 19 }} source={require('./screens/AboutUsScreen/assets/backArrow.png')} />
        </TouchableOpacity>
      ) }} name="SignIn" component={SignInScreen} />
    </Stack.Navigator>
  )
}

const CartNavigator = (navigator) => {
  const navigation = useNavigation();
  return (
    <Stack.Navigator>
      <Stack.Screen options={{ headerShown: true, 
      headerTitleAlign:'center', 
      headerLeft:() => (
        <TouchableOpacity onPress={() => navigation.navigate('root')} style={{left:30}}>
        <Image style={{ width: 30, height: 19 }} source={require('./screens/AboutUsScreen/assets/backArrow.png')} />
        </TouchableOpacity>
      ) }} name="Cart" component={CartScreen} />
    </Stack.Navigator>
  )
}

const App = () => {

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen options={{ headerShown: false }} name="root" component={bottomTabNavigations} />
        <Stack.Screen options={{ headerShown: false }} name="auth" component={AuthNavigator} />
        <Stack.Screen options={{ headerShown: false }} name="myCart" component={CartNavigator} />
        <Stack.Screen name="AboutUs" component={AboutUsScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;
