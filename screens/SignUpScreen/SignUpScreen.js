import React from 'react';
import {Text, SafeAreaView, StyleSheet, Image, TextInput, Dimensions, TouchableOpacity,View} from 'react-native';

const SignUpScreen = ({navigation}) => {
    navigation.reset({
        index: 0,
        routes: [{ name: 'root', screen: 'SignUp' }]
    });
    const signUp = () => {
        navigation.navigate('SignIn')
    }
    return(
        <SafeAreaView style={styles.container}>
            <Text style={styles.letsGetText}>Let's Get <Text style={styles.startedText}>Started!</Text></Text>
            <Text style={styles.createAccountWithAbayaText}>Create an account with Abaya</Text>


            <View style={{ flexDirection: 'row',
                            borderWidth:1,borderColor:"#DBDBDB",
                            color:"#BB952D",

                            borderRadius:25,height:50,width:Dimensions.get('window').width*2/2.5,marginTop:20,
                        
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

                            borderRadius:25,height:50,width:Dimensions.get('window').width*2/2.5,marginTop:20,
                        
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

                            borderRadius:25,height:50,width:Dimensions.get('window').width*2/2.5,marginTop:20,
            }}>

            <Image
            source={require('./assets/Vectorphone.png')}
            style={styles.phoneImageStyle}
            />

            <TextInput placeholder="Phone" keyboardType="numeric" placeholderTextColor="black" style={{flex:1}} 
            />
            </View>

            <View style={{
               flexDirection: 'row',
                            borderWidth:1,borderColor:"#DBDBDB",
                            color:"#BB952D",

                            borderRadius:25,height:50,width:Dimensions.get('window').width*2/2.5,marginTop:20,
            }}>

            <Image
            source={require('./assets/Vectorpassword.png')}
            style={styles.phoneImageStyle}
            />

            <TextInput 
            placeholder="Password" secureTextEntry placeholderTextColor="#DBDBDB" style={{flex:1}}/>
            </View>

            <View style={{
               flexDirection: 'row',
                            borderWidth:1,borderColor:"#DBDBDB",
                            color:"#BB952D",

                            borderRadius:25,height:50,width:Dimensions.get('window').width*2/2.5,marginTop:20,
            }}>

            <Image
            source={require('./assets/Vectorpassword.png')}
            style={styles.phoneImageStyle}
            />
            <TextInput 
            placeholder="Confirm Password" secureTextEntry placeholderTextColor="#DBDBDB" style={{flex:1}}/>
            </View>


            <TouchableOpacity onPress={() => {signUp()}} style={{justifyContent:'center',alignItems:'center',backgroundColor:'#000000',borderWidth:1,borderColor:'#000000',borderRadius:25,height:50,width:Dimensions.get('window').width*2/3.5,marginTop:50}}>
                <Text style={{color:'white',fontSize:15,}}>Create account</Text>
            </TouchableOpacity>



            <View style={{flexDirection:'row',marginTop:28}}>
                <Text>Already have an Account?</Text>
            <TouchableOpacity style={{left:7,}}>
            <Text style={{color:'#3C5A9A'}}>Login here</Text>
            </TouchableOpacity>
            </View>


        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        backgroundColor:'#fff',
        marginTop:27,
        flexDirection:'column'
    },

    letsGetText:{
        color:'#000000',
        fontWeight:'700',
        fontSize:32,
        fontStyle:'normal',
        marginTop:20
    },

    startedText:{
        color:'#ba942d',
        fontWeight:'700',
        fontSize:32,
        fontStyle:'normal'
    },
    createAccountWithAbayaText:{
        color:'#6b6b6b',
        marginTop:18,
        fontSize:16,
        fontWeight:'400'
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
  }
    
})

export default SignUpScreen;