/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { useFonts } from '@expo-google-fonts/aileron';
import React from 'react';
import Swiper from 'react-native-swiper';
//import type { PropsWithChildren } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { PagerView } from 'react-native-pager-view';
import FastImage from 'react-native-fast-image';
import { BlurView } from '@react-native-community/blur';
import { mainStyles, getShadowStyle, topStyles, bodyStyles, footerStyles} from '../styles/LandingPageStyles';
import { 
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    TouchableOpacity,
    View,
    Image,
    ImageBackground,
    Platform
} from 'react-native';

import {
    Colors,
    DebugInstructions,
    Header,
    LearnMoreLinks,
    ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import PreScreen from './PreScreen';
import SignUp from './SignUp';

export default function LandingPage({navigation}) {
    const goToLogin = () => {
        navigation.navigate('Login');
    };

    const goToSignUp = () => {
        navigation.navigate('SignUp');
    };

    return (
        <ImageBackground
            source={require('../assets/images/Kampüs.jpg')}
            style={mainStyles.body}>
            {/* Your App Content Goes Here */}
            <View style={mainStyles.header}>
                <Image
                    source={require('../assets/images/ShieldLogo.png')} // Replace with the actual path to your image
                />
            </View>
            <View style={mainStyles.container}>
                <View style={[mainStyles.form, getShadowStyle()]}>
                    <View style={topStyles.inner_form1}>
                        <Text style={topStyles.text_header}>Welcome</Text>
                        <Text style={topStyles.text_body}>You are more than secure with us</Text>
                    </View>
                    <View style={bodyStyles.inner_form2}> 
                        <TouchableOpacity onPress={goToLogin} style={[bodyStyles.button, getShadowStyle()]}>
                            <Text style={bodyStyles.button_text}>Login</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={goToSignUp} style={[bodyStyles.button, getShadowStyle()]}>
                            <Text style={bodyStyles.button_text}>Register</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={footerStyles.inner_form3}>
                        <Image
                            source={require('../assets/images/Sabanci_logo.png')} // Replace with the actual path to your image
                            style={footerStyles.SU_logo}
                        />
                    </View>
                </View>
            </View>
        </ImageBackground>
    );
};


