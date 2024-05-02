import React from 'react';
import {
    View,
    Text,
    ImageBackground,
    StyleSheet,
    Image,
    TouchableOpacity,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {main, header, body, footer, getShadowStyle} from '../styles/PreScreenStyles';
import {UpdateInfo} from './UpdateInfo';

const ProfilePhoto = ({ source }) => {
    return (
        <View style={body.profilePhoto}>
            <Image source={source} style={body.pp} />
        </View>
    );
};

export function PreScreen({navigation}) {
    const goToUpdate = () => {
        navigation.navigate('UpdateInfo');
    };
    
    return (
        <View style={main.body}>
            <ImageBackground style={main.bg} source={require('../assets/images/SecondScreenBg.png')}></ImageBackground>
            <View style={header.container}>
                <View style={header.logoContainer}>
                    <Image style={header.logo} source={require('../assets/images/Sabanci_logo.png')}></Image>
                </View>
                <View style={header.title}>
                    <Text style={{ fontSize: 30, textAlign: 'center', color: '#012775' }}>Afet Öncesi Ekranı</Text>
                    <Text style={{ color: '#012775' }}>Olası bir afet anında <Text style={{ fontWeight: 700, color: '#012775', }}>Afet Anı Ekranı</Text>na yönlendirileceksiniz</Text>
                </View>
            </View>
            <View style={body.container}>

                <View style={body.profileSection}>
                    <TouchableOpacity onPress={goToUpdate} style={[body.profileContainer, getShadowStyle()]}>
                        <ProfilePhoto></ProfilePhoto>
                        <View style={{ paddingLeft: 16 }}>
                            <Text style={{ color: 'white', fontWeight: 700 }}>İlhan Sertelli</Text>
                            <Text style={{ color: 'white', fontSize: 12, }}>Lisans Öğrencisi</Text>
                            <Text style={{ color: 'white' }}>B1 - 319</Text>
                        </View>
                    </TouchableOpacity>
                </View>

                <View style={body.mainBody}>
                    <TouchableOpacity style={[body.button, getShadowStyle()]}>
                        <View style={body.block}>
                            <Text style={body.buttonText}>Acil</Text>
                            <Text style={body.buttonText}>Durum</Text>
                            <Text style={body.buttonText}>Çantam</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={[body.button, getShadowStyle()]}>
                        <View style={body.block}>
                            <Text style={body.buttonText}>Afet</Text>
                            <Text style={body.buttonText}>Bilgilendirme</Text>
                            <Text style={body.buttonText}>Eğitimlerim</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={[body.button, getShadowStyle()]}>
                        <View style={body.block}>
                            <Text style={body.buttonText}>Afet</Text>
                            <Text style={body.buttonText}>Öncesi</Text>
                            <Text style={body.buttonText}>Tatbikatlar</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={[body.button, getShadowStyle()]}>
                        <View style={body.block}>
                            <Text style={body.buttonText}>Acil</Text>
                            <Text style={body.buttonText}>Durum</Text>
                            <Text style={body.buttonText}>Telefonları</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={[body.button, getShadowStyle()]}>
                        <View style={body.block}>
                            <Text style={body.buttonText}>Toplanma</Text>
                            <Text style={body.buttonText}>Alanları</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={[body.button, getShadowStyle()]}>
                        <View style={body.block}>
                            <Text style={body.buttonText}>Tehlike</Text>
                            <Text style={body.buttonText}>Avı</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={[body.button, getShadowStyle()]}>
                        <View style={body.block}>
                            <Text style={body.buttonText}>Afet</Text>
                            <Text style={body.buttonText}>Planım</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={[body.button, getShadowStyle()]}>
                        <View style={body.block}>
                            <Text style={body.buttonText}>SUAK</Text>
                            <Text style={body.buttonText}>Events</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={body.messageSection}>
                    <View style={[body.message, getShadowStyle()]}>
                        <Text style={{ fontWeight: 700, fontSize: 17, color: 'white', marginVertical: 10 }}>Günün Sözü</Text>
                        <Text style={{ fontSize: 14, color: 'white' }}>"Deprem değil, tedbirsizlik öldürür."</Text>
                    </View>
                </View>
            </View>
            <View style={footer.bottom}>
                
            </View>
        </View>
    );
};


