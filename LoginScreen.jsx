import { Image,StyleSheet, Text, TextInput,TouchableOpacity, View } from 'react-native'
import React from 'react';
import FontAwsome from  'react-native-vector-icons/FontAwesome'; 
import Fontisto from  'react-native-vector-icons/Fontisto';
import AntDesign from  'react-native-vector-icons/AntDesign';
import LinearGradient from 'react-native-linear-gradient';
import { useNavigation } from '@react-navigation/native';
const LoginScreen = () => {
  const navigation= useNavigation();  
  const handleRegister= ()=>{
    navigation.navigate("SignUp");
  };
  return (
    <View style={styles.contaier}>

        <View style={styles.namecontainer}>
            <Text style={styles.sss}>Sabanci SeismicShield</Text>
        </View>
        <View>
            <Text style={styles.signintext}>Please login into your SU account</Text>
        </View>
        <View style={styles.inputcontainer}>
            <FontAwsome name={"user"} size={24} color={"#9A9A9A"} style={styles.inputicon} ></FontAwsome>
            <TextInput style={styles.textinput} placeholder='Sabanci mail'></TextInput>
        </View>
        <View style={styles.inputcontainer}>
            <Fontisto name={"locked"} size={24} color={"#9A9A9A"} style={styles.inputicon} secureTextEntry={true} ></Fontisto>
            <TextInput style={styles.textinput} placeholder='Password'></TextInput>
        </View>
        <View><Text style={styles.forgottext}>Forgot your password ?</Text></View>
        <View style={styles.signinbuttoncontainer}>
            <Text style={styles.signin}>Sign in</Text>
            <LinearGradient colors={['#F97794', '#623AA2']} style={styles.linearGradient}>
                <AntDesign name={"arrowright"} size={24} color={"#9A9A9A"} style={styles.inputicon} ></AntDesign>
            </LinearGradient>
        </View>
        <TouchableOpacity onPress={handleRegister}>
            <Text style={styles.footertext}>Don't have an account ?</Text>
        </TouchableOpacity>
        <View style={styles.imageContainer}>
            <Image source={require('./assests/sagalt.png')} style={styles.bottomImage} />
        </View>
        <View style={styles.imageContainer1}>
            <Image source={require('./assests/sabancilogo.png')} style={styles.bottomImage1} />
        </View>
        <View style={styles.imageContainer2}>
            <Image source={require('./assests/solust.png')} style={styles.topImageImage} />
        </View>
    </View>
  )
}

export default LoginScreen

const styles = StyleSheet.create({
    contaier:{
        backgroundColor:"#F5F5F5",
        flex:1,
    },
    topimagecontaiercontaier:{
       


    },
    topimage:{
        width: "%100",
        height: 130,
    },
    namecontainer:{
        borderWidth:1,
    },
    sss:{
        textAlign: "center",
        fontSize: 40,
        fontWeight:"500",
        color:"#262626",
        zIndex: 1,
    },
    signintext:{
        textAlign: "center",
        fontSize: 16,
        color:"#262626",
        marginBottom:30,
    },
    inputcontainer:{
        backgroundColor:"#FFFFFF",
        flexDirection:"row",
        borderRadius:20,
        marginHorizontal:40,
        elevation:10,
        marginVertical:20,
        allignItems: "center",
        height: 50,
    },
    inputicon:{
        marginLeft:15,
        marginRight:5,
    },
    textinput:{
        flex:1,
    },
    forgottext:{
        color:"#BEBEBE",
        textAlign:"right",
        width:"%70",
        fontSize:15,

    },
    signinbuttoncontainer:{
        flexDirection:"row",
        marginTop:100,
        justifyContent:"center",
        width:"%90",
        justifyContent:"flex-end",


    },
    signin:{
        color:"#262626",
        fontSize:25,
        fontWeight:"bold",
    },
    linearGradient:{
        height:34,
        width:56,
        borderRadius:17,
        allignItems:"center",
        justifyContent:"center",
        marginHorizontal: 10,

    },
    footertext:{
        color:"#262626",
        textAlign:"center",
        fontSize:15,
        marginTop:120,

    },
    imageContainer: {
        position: 'absolute', // Positioned absolutely to stay at the bottom right
        bottom: 10,            // Distance from the bottom
        right: 10,             // Distance from the right
    },
    bottomImage: {
        width: 100,            // Specify your desired width
        height: 100,           // Specify your desired height
    },
    imageContainer1: {
        position: 'absolute', // Positioned absolutely to stay at the bottom right
        bottom: 10,            // Distance from the bottom
        right: 120,             // Distance from the right
    },
    bottomImage1: {
        width: 200,            // Specify your desired width
        height: 120,                // Specify your desired height
    },
    imageContainer2:{
        position: "absolute",
        top: 0,    
        left: 0,
        zIndex: -1,
    },
    topImage: {
        width: 50,            // Specify your desired width
        height: 50,           // Specify your desired height
    },
})
