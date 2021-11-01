import React, { useEffect, useState } from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { NavigationContainer, useNavigation, DrawerActions, createNavigationContainerRef, useNavigationState } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from './screens/HomeScreen/HomeScreen';
import ReturnPolicyScreen from './screens/ReturnPolicyScreen/ReturnPolicyScreen';
import NoProductsScreen from './screens/NoProductsScreen/NoProductsScreen';
import ShoesScreen from './screens/ShoesScreen/ShoesScreen';
import BagsScreen from './screens/BagsScreen/BagsScreen';

const Drawer = createDrawerNavigator();


const AbayaHomeDrawerNavigation = () => {
    const navigation = useNavigation();
    return (
      <Drawer.Navigator screenOptions={{ drawerPosition: 'left' }}>
        <Drawer.Screen options={{
  
          headerLeft: () => (
            <View style={{ width: 8 }}></View>
          ),
          headerRight: () => (
            <TouchableOpacity>
              <Image style={{ width: 21, height: 23, marginRight: 25 }} source={require('./screens/HomeScreen/assets/Vectorhamburger.png')} />
            </TouchableOpacity>
          ),
          headerTitle: () => <Text style={{ fontSize: 23, color: '#000000' }}>Categories</Text>,
          headerTitleAlign: 'left',
          headerStyle: {
            height: 60
          },
          drawerLabel: 'Long Shirts',
          drawerActiveBackgroundColor: '#F9F9F9',
          drawerLabelStyle: { fontSize: 17, color: '#000000', alignSelf: 'center' },
          drawerStyle: { backgroundColor: '#F9F9F9', width: '100%', marginTop: 60 },
          drawerItemStyle: { borderBottomColor: '#D3D3D3', borderBottomWidth: 1.5 }
  
  
        }} name='Shirts' component={HomeScreen} />
  
  
        <Drawer.Screen options={{
  
          headerLeft: () => (
            <View style={{ width: 8 }}></View>
          ),
          headerRight: () => (
            <TouchableOpacity>
              <Image style={{ width: 21, height: 23, marginRight: 25 }} source={require('./screens/HomeScreen/assets/Vectorhamburger.png')} />
            </TouchableOpacity>
          ),
          headerTitle: () => <Text style={{ fontSize: 23, color: '#000000' }}>Categories</Text>,
          headerTitleAlign: 'left',
          headerStyle: {
            height: 60
          },
  
          drawerLabel: 'Hijab',
          drawerActiveBackgroundColor: '#F9F9F9',
          drawerLabelStyle: { fontSize: 17, color: '#000000', alignSelf: 'center' },
          drawerStyle: { backgroundColor: '#F9F9F9', width: '100%', marginTop: 60 },
          drawerItemStyle: { borderBottomColor: '#D3D3D3', borderBottomWidth: 1.5 }
  
        }} name='hijab' component={NoProductsScreen} />
  
  
        <Drawer.Screen options={{
  
          headerLeft: () => (
            <View style={{ width: 8 }}></View>
          ),
          headerRight: () => (
            <TouchableOpacity>
              <Image style={{ width: 21, height: 23, marginRight: 25 }} source={require('./screens/HomeScreen/assets/Vectorhamburger.png')} />
            </TouchableOpacity>
          ),
          headerTitle: () => <Text style={{ fontSize: 23, color: '#000000' }}>Categories</Text>,
          headerTitleAlign: 'left',
          headerStyle: {
            height: 60
          },
  
          drawerLabel: 'Shoes',
          drawerActiveBackgroundColor: '#F9F9F9',
          drawerLabelStyle: { fontSize: 17, color: '#000000', alignSelf: 'center' },
          drawerStyle: { backgroundColor: '#F9F9F9', width: '100%', marginTop: 60 },
          drawerItemStyle: { borderBottomColor: '#D3D3D3', borderBottomWidth: 1.5 }
  
        }} name='shoes' component={ShoesScreen} />
  
  
        <Drawer.Screen options={{
  
          headerLeft: () => (
            <View style={{ width: 8 }}></View>
          ),
          headerRight: () => (
            <TouchableOpacity>
              <Image style={{ width: 21, height: 23, marginRight: 25 }} source={require('./screens/HomeScreen/assets/Vectorhamburger.png')} />
            </TouchableOpacity>
          ),
          headerTitle: () => <Text style={{ fontSize: 23, color: '#000000' }}>Categories</Text>,
          headerTitleAlign: 'left',
          headerStyle: {
            height: 60
          },
  
          drawerLabel: 'Abaya',
          drawerActiveBackgroundColor: '#F9F9F9',
          drawerLabelStyle: { fontSize: 17, color: '#000000', alignSelf: 'center' },
          drawerStyle: { backgroundColor: '#F9F9F9', width: '100%', marginTop: 60 },
          drawerItemStyle: { borderBottomColor: '#D3D3D3', borderBottomWidth: 1.5 }
  
        }} name='abaya' component={NoProductsScreen} />
  
  
        <Drawer.Screen options={{
  
          headerLeft: () => (
            <View style={{ width: 8 }}></View>
          ),
          headerRight: () => (
            <TouchableOpacity>
              <Image style={{ width: 21, height: 23, marginRight: 25 }} source={require('./screens/HomeScreen/assets/Vectorhamburger.png')} />
            </TouchableOpacity>
          ),
          headerTitle: () => <Text style={{ fontSize: 23, color: '#000000' }}>Categories</Text>,
          headerTitleAlign: 'left',
          headerStyle: {
            height: 60
          },
  
          drawerLabel: 'Bags',
          drawerActiveBackgroundColor: '#F9F9F9',
          drawerLabelStyle: { fontSize: 17, color: '#000000', alignSelf: 'center' },
          drawerStyle: { backgroundColor: '#F9F9F9', width: '100%', marginTop: 60 },
          drawerItemStyle: { borderBottomColor: '#D3D3D3', borderBottomWidth: 1.5 }
  
        }} name='bags' component={BagsScreen} />
  
        <Drawer.Screen options={{
  
          headerLeft: () => (
            <View style={{ width: 8 }}></View>
          ),
          headerRight: () => (
            <TouchableOpacity>
              <Image style={{ width: 21, height: 23, marginRight: 25 }} source={require('./screens/HomeScreen/assets/Vectorhamburger.png')} />
            </TouchableOpacity>
          ),
          headerTitle: () => <Text style={{ fontSize: 23, color: '#000000' }}>Categories</Text>,
          headerTitleAlign: 'left',
          headerStyle: {
            height: 60
          },
  
          drawerLabel: 'Training Suits',
          drawerActiveBackgroundColor: '#F9F9F9',
          drawerLabelStyle: { fontSize: 17, color: '#000000', alignSelf: 'center' },
          drawerStyle: { backgroundColor: '#F9F9F9', width: '100%', marginTop: 60 },
          drawerItemStyle: { borderBottomColor: '#D3D3D3', borderBottomWidth: 1.5 }
  
        }} name='trainingSuits' component={NoProductsScreen} />
  
  
        <Drawer.Screen options={{
  
          headerLeft: () => (
            <View style={{ width: 8 }}></View>
          ),
          headerRight: () => (
            <TouchableOpacity>
              <Image style={{ width: 21, height: 23, marginRight: 25 }} source={require('./screens/HomeScreen/assets/Vectorhamburger.png')} />
            </TouchableOpacity>
          ),
          headerTitle: () => <Text style={{ fontSize: 23, color: '#000000' }}>Categories</Text>,
          headerTitleAlign: 'left',
          headerStyle: {
            height: 60
          },
  
          drawerLabel: 'Maxi Dressess',
          drawerActiveBackgroundColor: '#F9F9F9',
          drawerLabelStyle: { fontSize: 17, color: '#000000', alignSelf: 'center' },
          drawerStyle: { backgroundColor: '#F9F9F9', width: '100%', marginTop: 60 },
          drawerItemStyle: { borderBottomColor: '#D3D3D3', borderBottomWidth: 1.5 }
  
        }} name='maxiDressess' component={NoProductsScreen} />
  
        <Drawer.Screen options={{
  
          headerLeft: () => (
            <View style={{ width: 8 }}></View>
          ),
          headerRight: () => (
            <TouchableOpacity>
              <Image style={{ width: 21, height: 23, marginRight: 25 }} source={require('./screens/HomeScreen/assets/Vectorhamburger.png')} />
            </TouchableOpacity>
          ),
          headerTitle: () => <Text style={{ fontSize: 23, color: '#000000' }}>Categories</Text>,
          headerTitleAlign: 'left',
          headerStyle: {
            height: 60
          },
  
          drawerLabel: 'Home Decorations',
          drawerActiveBackgroundColor: '#F9F9F9',
          drawerLabelStyle: { fontSize: 17, color: '#000000', alignSelf: 'center' },
          drawerStyle: { backgroundColor: '#F9F9F9', width: '100%', marginTop: 60 },
          drawerItemStyle: { borderBottomColor: '#D3D3D3', borderBottomWidth: 1.5 }
  
        }} name='HomeDecorations' component={NoProductsScreen} />
  
  
        <Drawer.Screen options={{
  
          headerLeft: () => (
            <View style={{ width: 8 }}></View>
          ),
          headerRight: () => (
            <TouchableOpacity>
              <Image style={{ width: 21, height: 23, marginRight: 25 }} source={require('./screens/HomeScreen/assets/Vectorhamburger.png')} />
            </TouchableOpacity>
          ),
          headerTitle: () => <Text style={{ fontSize: 23, color: '#000000' }}>Categories</Text>,
          headerTitleAlign: 'left',
          headerStyle: {
            height: 60
          },
  
          drawerLabel: 'Ramadan Decorations',
          drawerActiveBackgroundColor: '#F9F9F9',
          drawerLabelStyle: { fontSize: 17, color: '#000000', alignSelf: 'center' },
          drawerStyle: { backgroundColor: '#F9F9F9', width: '100%', marginTop: 60 },
          drawerItemStyle: { borderBottomColor: '#D3D3D3', borderBottomWidth: 1.5 }
  
        }} name='ramadanDecorations' component={NoProductsScreen} />
  
        <Drawer.Screen options={{
  
          headerLeft: () => (
            <View style={{ width: 8 }}></View>
          ),
          headerRight: () => (
            <TouchableOpacity>
              <Image style={{ width: 21, height: 23, marginRight: 25 }} source={require('./screens/HomeScreen/assets/Vectorhamburger.png')} />
            </TouchableOpacity>
          ),
          headerTitle: () => <Text style={{ fontSize: 23, color: '#000000' }}>Categories</Text>,
          headerTitleAlign: 'left',
          headerStyle: {
            height: 60
          },
  
          drawerLabel: 'Eid Decorations',
          drawerActiveBackgroundColor: '#F9F9F9',
          drawerLabelStyle: { fontSize: 17, color: '#000000', alignSelf: 'center' },
          drawerStyle: { backgroundColor: '#F9F9F9', width: '100%', marginTop: 60 },
          drawerItemStyle: { borderBottomColor: '#D3D3D3', borderBottomWidth: 1.5 }
  
        }} name='EidDecorations' component={NoProductsScreen} />
  
  
        <Drawer.Screen options={{
          headerShown:false,
  
          // drawerLabelStyle: { color: '#fff' },
          // headerTitle: () => (<Text style={{ fontSize: 23, color: '#000000', marginTop: 29 }}>RETURN <Text style={{ fontSize: 23, color: '#ba942d' }}>POLICY</Text></Text>
          // ),
  
          // headerTitleAlign: 'center',
          // headerStyle: {
          //   height: 100
          // },
          // headerLeftContainerStyle: {
          //   left: 30,
          //   marginTop: 29
          // },
  
          // headerLeft: () => (
  
          //   <Image style={{ width: 30, height: 19 }} source={require('./screens/AboutUsScreen/assets/backArrow.png')} />
  
          // ),
  
          drawerLabel: 'Our Return Policy',
          drawerActiveBackgroundColor: '#F9F9F9',
          drawerLabelStyle: { fontSize: 17, color: 'gray', alignSelf: 'center' },
          drawerStyle: { backgroundColor: '#F9F9F9', width: '100%', marginTop: 60 },
          drawerItemStyle: { borderBottomColor: '#D3D3D3', borderBottomWidth: 1.5 }
  
        }} name='OurReturnPolicy' component={ReturnPolicyScreen} />
  
      </Drawer.Navigator>
    )
  }

  export default AbayaHomeDrawerNavigation;