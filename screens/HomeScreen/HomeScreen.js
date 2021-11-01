import React,{useEffect, useState} from 'react';
import {Text, SafeAreaView, StyleSheet, Image, TextInput, Dimensions, TouchableOpacity,View, FlatList} from 'react-native';
import Product from '../Product';
import AsyncStorage from '@react-native-async-storage/async-storage';

const allData = [
    {
        'id':'1',
        'name':'Modest Forever Black Nida Abaya',
        'PKR':5190,
        'image':require('./assets/hijab1.png'),
        'liked':true
    },{
        'id':'2',
        'name':'Modest Forever Black & Fawn Stitched',
        'PKR':9880,
        'image':require('./assets/hijab2.png'),
        'liked':false
    },{
        'id':'3',
        'name':'Modest Forever Black Nida Abaya',
        'PKR':5190,
        'image':require('./assets/hijab3.png'),
        'liked':false
    },{
        'id':'4',
        'name':'Modest Forever Black Nida Abaya',
        'PKR':5190,
        'image':require('./assets/hijab4.png'),
        'liked':false
    },
]


const HomeScreen =  () => { 
    
    return(
        <SafeAreaView style={styles.container}>
            
            <FlatList
            numColumns={2}
            showsVerticalScrollIndicator={true}
            data={allData}
            renderItem={({item,index}) => (
                    <Product index={index} item={item}/>
            )}
            />
            
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#FFFFFF'
    },
    
})

export default HomeScreen;