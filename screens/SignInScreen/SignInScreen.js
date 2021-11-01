import React from "react";
import { Text, SafeAreaView, StyleSheet, Image, TextInput, Dimensions, TouchableOpacity, View } from 'react-native';

const SignInScreen = ({ navigation }) => {

    React.useEffect(() => {
        // console.log(navigation);
    })
    const signInToHome = () => {
        navigation.navigate('Home')
    }
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.welcomeText}>Welcome <Text style={styles.backText}>Back!</Text></Text>
            <Text style={styles.loginToYourAccText}>Login to your existing account</Text>
            <View style={{
                flexDirection: 'row',
                borderWidth: 1, borderColor: "#DBDBDB",
                color: "#BB952D",
                borderRadius: 25, height: 50, width: Dimensions.get('window').width * 2 / 2.5, marginTop: 20,
            }}>

                <Image
                    source={require('./assets/Vectorusername.png')}
                    style={styles.imageStyle}
                />
                <TextInput
                    placeholder="John Doe" placeholderTextColor="#DBDBDB" style={{ flex: 1 }} />

            </View>

            <View style={{
                flexDirection: 'row',
                borderWidth: 1, borderColor: "#DBDBDB",
                color: "#BB952D",
                borderRadius: 25, height: 50, width: Dimensions.get('window').width * 2 / 2.5, marginTop: 20,
            }}>

                <Image
                    source={require('./assets/Vectorpassword.png')}
                    style={styles.imageStyle}
                />
                <TextInput
                    placeholder="John Doe" placeholderTextColor="#DBDBDB" style={{ flex: 1 }} />

            </View>

            <TouchableOpacity style={styles.forgotPassword}>
                <Text style={{ color: '#6b6b6b' }}>Forgot Password?</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => { signInToHome() }} style={styles.loginBtn}>
                <Text style={{ color: '#fff', fontSize: 15, fontWeight: '400' }}>LOG IN</Text>
            </TouchableOpacity>
            <View style={{ flexDirection: 'row', marginTop: 20 }}>
                <View style={{ borderBottomColor: '#6b6b6b', borderBottomWidth: 0.6, width: 150, marginRight: 10 }}></View>
                <Text style={{ top: 7, fontSize: 16, color: '#6b6b6b' }}>or</Text>
                <View style={{ borderBottomColor: '#6b6b6b', borderBottomWidth: 0.6, width: 150, marginLeft: 10 }}></View>
            </View>

            <TouchableOpacity style={styles.facebookBtn}>
                <Image source={require('./assets/facebook.png')} style={styles.facebookIcon} />
                <Text style={{ color: '#fff', marginLeft: 10 }}>Continue with Facbook</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.googleBtn}>
                <Image source={require('./assets/googleIcon.png')} style={styles.facebookIcon} />
                <Text style={{ color: '#000000', marginLeft: 10 }}>Continue with Google</Text>
            </TouchableOpacity>

            <View style={{ flexDirection: 'row', marginTop: 25 }}>
                <Text>Don't have an Account?</Text>
                <TouchableOpacity style={{ left: 7, }}>
                    <Text style={{ color: '#3C5A9A' }}>Sign up</Text>
                </TouchableOpacity>
            </View>

            {/* <View style={{ flexDirection: 'row', marginTop: 25 }}>
                <TouchableOpacity style={{ left: 7, }} onPress={() => {
                    navigation.reset({
                        index: 0,
                        routes: [{ name: 'root', screen: 'AbayaHome' }]
                    });
                }}>
                    <Text style={{ color: '#3C5A9A' }}>Go Back</Text>
                </TouchableOpacity>
            </View> */}
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#fff',
        marginTop: 27,
        flexDirection: 'column'
    },

    welcomeText: {
        color: '#000000',
        fontWeight: '700',
        fontSize: 32,
        fontStyle: 'normal',
        marginTop: 20
    },

    backText: {
        color: '#ba942d',
        fontWeight: '700',
        fontSize: 32,
        fontStyle: 'normal'
    },

    loginToYourAccText: {
        color: '#6b6b6b',
        marginTop: 13,
        fontSize: 16,
        fontWeight: '400'
    },

    imageStyle: {
        padding: 0,
        marginLeft: 20,
        margin: 12,
        height: 18,
        width: 18,
        resizeMode: 'stretch',
        alignItems: 'center',
    },

    forgotPassword: {
        marginLeft: 210,
        marginTop: 10
    },

    loginBtn: {
        backgroundColor: '#000000',
        width: 240,
        height: 50,
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 28
    },

    facebookBtn: {
        width: 308,
        height: 50,
        backgroundColor: '#3C5A9A',
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 30,
        flexDirection: 'row'
    },

    facebookIcon: {
        width: 20,
        height: 20
    },

    googleBtn: {
        width: 308,
        height: 50,
        backgroundColor: '#FFFFFF',
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
        flexDirection: 'row',
        borderWidth: 1,
        borderColor: '#D3D3D3'
    }

})

export default SignInScreen;