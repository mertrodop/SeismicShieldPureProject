import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import React from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Fontisto from 'react-native-vector-icons/Fontisto';
import AntDesign from 'react-native-vector-icons/AntDesign';
import LinearGradient from 'react-native-linear-gradient';
import PreScreen from './PreScreen';


export function SignUp({ navigation }) {
    const goToPreScreen = () => {
        navigation.navigate('PreScreen');
    };
    const goToLogin= () => {
        navigation.navigate('Login');
    };

    return (
        <View style={styles.container}>
            <View style={styles.nameContainer}>
                <Text style={styles.sss}>Sabanci SeismicShield</Text>
            </View>
            <View>
                <Text style={styles.signinText}>Create your account</Text>
            </View>
            <View style={styles.inputContainer}>
                <FontAwesome name="user" size={24} color="#9A9A9A" style={styles.inputIcon} />
                <TextInput style={styles.textInput} placeholder='Sabanci Mail' />
            </View>
            <View style={styles.inputContainer}>
                <FontAwesome name="user" size={24} color="#9A9A9A" style={styles.inputIcon} />
                <TextInput style={styles.textInput} placeholder='Student Number' />
            </View>
            <View style={styles.inputContainer}>
                <FontAwesome name="phone" size={24} color="#9A9A9A" style={styles.inputIcon} />
                <TextInput style={styles.textInput} placeholder='Phone Number' />
            </View>
            <View style={styles.inputContainer}>
                <Fontisto name="locked" size={24} color="#9A9A9A" style={styles.inputIcon} />
                <TextInput style={styles.textInput} placeholder='Password' secureTextEntry />
            </View>
            <View style={styles.inputContainer}>
                <Fontisto name="locked" size={24} color="#9A9A9A" style={styles.inputIcon} />
                <TextInput style={styles.textInput} placeholder='Password again' secureTextEntry />
            </View>
            <View><Text style={styles.forgotText}>Forgot your password?</Text></View>
            <View style={styles.signinButtonContainer}>
                <Text style={styles.signin}>Sign up</Text>
                <TouchableOpacity onPress={goToPreScreen} >
                    <LinearGradient colors={['#F97794', '#623AA2']} style={styles.linearGradient}>
                        <AntDesign name="arrowright" size={24} color="#9A9A9A" style={styles.inputIcon} />
                    </LinearGradient>
                </TouchableOpacity>
            </View>
            <TouchableOpacity onPress={goToLogin}>
                <Text style={styles.footerText}>Or login into your mysu account</Text>
            </TouchableOpacity>
            <View style={styles.imageContainer}>
                <Image source={require('../assets/images/sagalt.png')} style={styles.bottomImage} />
            </View>
            <View style={styles.imageContainer2}>
                <Image source={require('../assets/images/solust.png')} style={styles.topImage} />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#F5F5F5",
        flex: 1,
    },
    nameContainer: {
        borderWidth: 1,
    },
    sss: {
        textAlign: "center",
        fontSize: 40,
        fontWeight: "500",
        color: "#262626",
    },
    signinText: {
        textAlign: "center",
        fontSize: 16,
        color: "#262626",
        marginBottom: 30,
        fontWeight: "bold",
    },
    inputContainer: {
        backgroundColor: "#FFFFFF",
        flexDirection: "row",
        borderRadius: 20,
        marginHorizontal: 40,
        elevation: 10,
        marginVertical: 20,
        alignItems: "center",
        height: 50,
    },
    inputIcon: {
        marginLeft: 15,
        marginRight: 5,
    },
    textInput: {
        flex: 1,
    },
    forgotText: {
        color: "#BEBEBE",
        textAlign: "right",
        width: "70%",
        fontSize: 15,
    },
    signinButtonContainer: {
        flexDirection: "row",
        marginTop: 100,
        justifyContent: "center",
        width: "90%",
        justifyContent: "flex-end",
        zIndex: 1,
        marginRight: 20,
    },
    signin: {
        color: "#262626",
        fontSize: 25,
        fontWeight: "bold",
    },
    linearGradient: {
        height: 34,
        width: 56,
        borderRadius: 17,
        alignItems: "center",
        justifyContent: "center",
        marginHorizontal: 10,
    },
    footerText: {
        color: "#262626",
        textAlign: "center",
        fontSize: 15,
        marginTop: 120,
    },
    imageContainer: {
        position: 'absolute',
        bottom: 10,
        right: 10,
        zIndex: 0,
    },
    bottomImage: {
        width: 100,
        height: 100,
    },
    imageContainer2: {
        position: "absolute",
        top: 0,
        left: 0,
        zIndex: -1,
    },
    topImage: {
        width: 50,
        height: 50,
    },
});
