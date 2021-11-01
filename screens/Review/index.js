import React from 'react'
import {Text, SafeAreaView, StyleSheet, Image, TextInput, Dimensions, TouchableOpacity,View, FlatList,ScrollView} from 'react-native';
import Product from './Product'
class Review extends React.Component {
    render(){
        return(
            <SafeAreaView style={{backgroundColor:'#FFFFFF',flex:1}}>
            <View style={{flexDirection:'row', marginTop:30, alignItems:'center',alignSelf: 'center'}}>
            <View style={{flexDirection:'column', alignItems:'center', marginTop:16}}>
            <Image style={styles.shipping} source={require('./assets/shipping1.png')}/>
            <Text>Shipping</Text>
            </View>
            <View style={{backgroundColor:'gray', width:66, height:1, marginLeft:5}}></View>
            <View style={{flexDirection:'column', alignItems:'center', marginLeft:5, marginTop:16}}>
            <Image style={styles.shipping2} source={require('./assets/shipping2.png')}/>
            <Text>Payment</Text>
            </View>
            <View style={{backgroundColor:'gray', width:66, height:1, marginLeft:5}}></View>
            <View style={{flexDirection:'column', alignItems:'center', marginLeft:5,marginTop:16}}>
            <Image style={styles.shipping} source={require('./assets/shipping3.png')}/>
            <Text>Review</Text>
            </View>
            
            
        </View>


        <ScrollView>
        <Text style={{color:'black',fontSize:30,textAlign:'center',fontWeight:'bold',marginTop:20,fontFamily:'Sen'}}>REVIEW</Text>

            <View style={{backgroundColor:'#EEEEEE',width:Dimensions.get('window').width*2/2.3,padding:10,alignSelf:'center',marginTop:15}}>
                <Text style={{color:'black',fontSize:25,}}>2 items</Text>



                <ScrollView>
                    <Product />
                    <Product />

                </ScrollView>


            </View>


            
            <View style={{backgroundColor:'#EEEEEE',width:Dimensions.get('window').width*2/2.3,padding:10,alignSelf:'center',marginTop:15}}>
                <Text style={{color:'black',fontSize:25,}}>Order Details</Text>
                </View>
            <View style={{marginTop:20,alignSelf:'center',width:Dimensions.get('window').width*2/2.3}}>
                <View style={{flexDirection:'row',justifyContent: 'space-between',}}>
                        <Text style={{fontFamily:'Sen',fontSize:20,color:'black'}}>Order Total</Text>
                        <Text style={{fontFamily:'Sen',fontSize:20,color:'black'}}>Rs. 15,070</Text>

                </View>


                <View style={{flexDirection:'row',justifyContent: 'space-between',marginTop:10}}>
                        <Text style={{fontFamily:'Sen',fontSize:20,color:'black'}}>Shipping Charges</Text>
                        <Text style={{fontFamily:'Sen',fontSize:20,color:'black'}}>Rs. 199</Text>

                </View>

                <Text style={{width:Dimensions.get('window').width*2/2.2,height:1,borderColor:'gray',borderWidth:.7,marginTop:20}}></Text>

                <View style={{flexDirection:'row',justifyContent: 'space-between',marginTop:10,marginBottom:20}}>
                        <Text style={{fontFamily:'Sen',fontSize:20,color:'black'}}>Total Payable</Text>
                        <Text style={{fontFamily:'Sen',fontSize:20,color:'black'}}>15,226</Text>

                </View>



            </View>



            <View style={{backgroundColor:'#EEEEEE',width:Dimensions.get('window').width*2/2.3,padding:10,alignSelf:'center',marginTop:15}}>
                <Text style={{color:'black',fontSize:25,}}>Delivery Address</Text>
                </View>


                <Text style={{color:'black',fontSize:20,fontWeight:'bold',left:30,marginTop:20}}>John Doe</Text>
                <Text style={{color:'black',fontSize:20,left:30,marginTop:10}}>(703) 519-9868</Text>
                <Text style={{color:'black',fontSize:20,left:30,marginTop:10}}>2928 Richmond Ln</Text>
                <Text style={{color:'black',fontSize:20,left:30,marginTop:10}}>Alexandria, Virginia(VA)</Text>



                <TouchableOpacity style={{borderColor:'black',alignSelf:'center',alignItems: 'center',backgroundColor:'black',justifyContent: 'center',borderWidth:1,borderRadius:30,width:Dimensions.get('window').width*2/3.5,marginBottom:30,marginTop:40}}>
                    <Text style={{fontFamily:'Sen',fontSize:20,color:'white',padding:10}}>Confirm Order </Text>
                    

                </TouchableOpacity>


        </ScrollView>

        </SafeAreaView>
        )
    }
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        backgroundColor:'#FFFFFF'
    },

    shipping:{
        width:32,
        height:32,
    },

    shipping2:{
        width:32,
        height:32,
    },
    imageStyle: {
        padding: 0,
        marginLeft:20,
        margin: 12,
        height: 18,
        width: 18,
        resizeMode: 'stretch',
        alignItems: 'center',
      },
    
      phoneImageStyle:{
        padding: 0,
        marginLeft:7,  
        height: 18,
        width: 18,
        resizeMode: 'stretch',
        alignItems: 'center',
        margin:12,
        marginLeft:20
      },
    Line:{
        width:62,
        borderBottomColor:'gray',
        borderBottomWidth:1,
    },

    cart:{
        marginTop:20,
        fontSize:29,
        color:'#000000',
        fontWeight:'bold',
        textAlign:'center'
        
    },

    Hijab:{
        width:Dimensions.get('window').width*2/2.2,
        height:163,
        borderRadius:37,
        borderWidth:1,
        borderColor:'gray',
        marginTop:20,
        alignItems:'center',
        flexDirection:'row',
        justifyContent:'space-around'
    },

    hijabImage:{
        width:80, 
        height:100,
    },

    hijabName:{
        fontSize:16,
        color:'#000000'
    },

    size:{
        color:'#000000',
        marginTop:30
    }
})
export default Review