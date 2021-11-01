import React,{useState} from 'react';

import {Text, SafeAreaView, StyleSheet, Image, TextInput, Dimensions, TouchableOpacity,View, FlatList} from 'react-native';

const Product = (props) => {
    const [isLiked, setIsLiked] = useState(false);
    const likeDress = () => {
        setIsLiked(!isLiked);
    }
    return (
        <View>
                        {props.index == 0 ?
                        <Text style={styles.trendingText}>Trending <Text style={styles.nowText}>Now</Text></Text>
                       : null}

                       {props.index == 1 ?
                        <Text style={styles.DisAppearedTrendingText}>Trending Now</Text>
                       : null}

                    <View style={{width:150, marginBottom:50, marginLeft:33}}>
                    <Image style={{width:155, height:268}} source={props.item.image}/>
                        {isLiked ? <TouchableOpacity onPress={() => {likeDress()}}><Image style={styles.heart} source={require('./HomeScreen/assets/likedHeart.png')}/></TouchableOpacity> : <TouchableOpacity onPress={() => {likeDress()}}><Image style={styles.heart} source={require('./HomeScreen/assets/unlikedHeart.png')}/></TouchableOpacity>}
                    <Text style={{position:'absolute', top:270, color:'#000000'}}>{props.item.name}</Text>
                    <Text style={{color:'#ba942d', position:"absolute", top:305}}>PKR{props.item.PKR}</Text>
                    </View>
                    </View>
    )
}

const styles = StyleSheet.create({
    DisAppearedTrendingText:{
        color:'#FFFFFF',
        fontWeight:'400',
        fontSize:27,
        fontStyle:'normal',
        marginLeft:33,
        marginTop:25,
        marginBottom:18,
    },

    trendingText:{
        color:'#000000',
        fontWeight:'400',
        fontSize:22,
        fontStyle:'normal',
        marginTop:25,
        marginBottom:25,
        marginLeft:28
        
    },

    nowText:{
        color:'#ba942d',
        fontWeight:'400',
        fontSize:20,
        fontStyle:'normal',
        marginTop:25,
        marginBottom:25
    },

    heart:{
        width:19,
        height:17,
        top:-255,
        left:120
    },
})
export default Product;