import React from 'react';
import {Text, SafeAreaView, StyleSheet, Image, TextInput, Dimensions, TouchableOpacity,View, FlatList,ScrollView} from 'react-native';

class Adress extends React.Component {
    render(){
        return (
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
                <Image style={styles.shipping} source={require('./assets/shipping2.png')}/>
                <Text>Review</Text>
                </View>
            </View>


            <ScrollView>
            <Text style={{color:'black',fontSize:28,textAlign:'center',fontWeight:'bold',marginTop:20}}>ADDRESS</Text>

            <View style={{alignItems:'center'}}>

            <View style={{ flexDirection: 'row',
                            borderWidth:1,borderColor:"#DBDBDB",
                            color:"#BB952D",

                            borderRadius:25,height:50,width:Dimensions.get('window').width*2/2.3,marginTop:20,
                        
                            }}>

            <Image
            source={require('./assets/username.png')}
            style={styles.imageStyle}
          />
            <TextInput 
            placeholder="John Doe"  placeholderTextColor="#DBDBDB" style={{flex:1}}/>

            </View>



            <View style={{ flexDirection: 'row',
                            borderWidth:1,borderColor:"#DBDBDB",
                            color:"#BB952D",

                            borderRadius:25,height:50,width:Dimensions.get('window').width*2/2.3,marginTop:20,
                        
                            }}>

            <Image
            source={require('./assets/Vectoremail.png')}
            style={styles.imageStyle}
          />

            <TextInput 
            placeholder="Email" placeholderTextColor="#DBDBDB" style={{flex:1}}/>
            </View>


            <View style={{
               flexDirection: 'row',
                            borderWidth:1,borderColor:"#DBDBDB",
                            color:"#BB952D",

                            borderRadius:25,height:50,width:Dimensions.get('window').width*2/2.3,marginTop:20,
            }}>

            <Image
            source={require('./assets/Vectorphone.png')}
            style={styles.phoneImageStyle}
            />

            <TextInput placeholder="Phone" keyboardType="numeric" placeholderTextColor="black" style={{flex:1}} 
            />
            </View>


            <View style={{ flexDirection: 'row',
                            borderWidth:1,borderColor:"#DBDBDB",
                            color:"#BB952D",

                            borderRadius:25,height:50,width:Dimensions.get('window').width*2/2.3,marginTop:20,
                        
                            }}>

            <Image
            source={require('./assets/address.png')}
            style={styles.imageStyle}
          />

            <TextInput 
            placeholder="Address" placeholderTextColor="#DBDBDB" style={{flex:1}}/>
            </View>



            <View style={{ flexDirection: 'row',
                            borderWidth:1,borderColor:"#DBDBDB",
                            color:"#BB952D",

                            borderRadius:25,height:50,width:Dimensions.get('window').width*2/2.3,marginTop:20,
                        
                            }}>

            <Image
            source={require('./assets/city.png')}
            style={styles.imageStyle}
          />

            <TextInput 
            placeholder="City" placeholderTextColor="#DBDBDB" style={{flex:1}}/>
            </View>


            
            <View style={{ flexDirection: 'row',
                            borderWidth:1,borderColor:"#DBDBDB",
                            color:"#BB952D",

                            borderRadius:25,height:50,width:Dimensions.get('window').width*2/2.3,marginTop:20,
                        
                            }}>

            <Image
            source={require('./assets/postalcode.png')}
            style={styles.imageStyle}
          />

            <TextInput 
            placeholder="Postal Code" placeholderTextColor="#DBDBDB" style={{flex:1}}/>
            </View>




            <TouchableOpacity style={{borderColor:'black',alignSelf:'center',alignItems: 'center',backgroundColor:'black',justifyContent: 'center',borderWidth:1,borderRadius:30,width:Dimensions.get('window').width*2/3.5,marginBottom:30,marginTop:30}}>
                        <View style={{flexDirection:'row',justifyContent: 'center'}}>
                        <Text style={{fontFamily:'Sen',fontSize:20,color:'white',padding:10}}>Proceed </Text>
                        <Text style={{fontFamily:'Sen',fontSize:28,color:'white',padding:5}}>{'>'}</Text>

                        </View>
                    </TouchableOpacity>
            </View>
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

export default Adress;