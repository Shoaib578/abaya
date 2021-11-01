import React from 'react'
import {View,Text,TouchableOpacity} from 'react-native'
import Product from './Product'

class FavoriteProducts extends React.Component {
    render(){
        return(

            <View style={{flex:1,}}>
                    
                    <View style={{flexDirection:'row',marginTop:20,padding:10,left:10}}>
                <Text style={{color:'black',fontSize:32,}}>FAVORITE</Text>
                <Text style={{color:'#BB952D',fontSize:32,left:20}}>ITEMS</Text>

                </View>

                <Product />
                <Product />

            </View>
        )
    }
}

export default FavoriteProducts