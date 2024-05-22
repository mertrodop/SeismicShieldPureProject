import React from 'react';
import {
    View,
    Text,
    ImageBackground,
    StyleSheet,
    Image,
    TouchableOpacity,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { main, header, body, footer, getShadowStyle } from '../styles/PreScreenStyles';
import { UpdateInfo } from './UpdateInfo';
import * as styles from '../styles/ContactsInfoStyles';
import {ProfilePhoto} from './UpdateInfo';

const InfoRow = ({text}) => {
    return (
        <View style={styles.mainBody.infoRow}>
            <Text style={{color: 'black', paddingLeft: '11%', fontSize: 14}}>{text}</Text>
            <View style={styles.mainBody.infoSpace}></View>
        </View>
    );
};

export function ContactsInfo({navigation}) {

    return(
        <View style={styles.main.body}>
            <View style={styles.header.navbarContainer}>

            </View>
            <View style={styles.header.titleContainer}>
                <Text style={{ fontSize: 26, textAlign: 'center', color: '#012775' }}>Kullanıcı Bilgileri</Text>
                <Text style={{ fontSize: 26, textAlign: 'center', color: '#012775' }}>Güncelleme Ekranı</Text>
            </View>
            <View style={styles.profile.profileContainer}>
                <View style={styles.profile.profileBox}>
                    <ProfilePhoto></ProfilePhoto>
                    <Text style={{ color: 'white' }}>İlhan Sertelli</Text>
                    <Text style={{ color: 'white' }}>Lisans Öğrencisi</Text>
                    <Text style={{ color: 'white' }}>B1 - 319</Text>
                </View>
            </View>
            <View style={styles.bodyTitle.titleContainer}>
                <Text style={{ fontSize: 20, color: '#012775', padding: 5}}>
                    Acil İrtibat Kişileri
                </Text>
            </View>
            <View style={styles.mainBody.main}>
                <View style={styles.mainBody.contactInfoContainer}>
                    <Text style={{ fontSize: 18, color: '#012775', fontWeight: 400, padding: 5, paddingLeft: '10%' }}>
                        1. Kişiye Ait Bilgiler
                    </Text>
                    <InfoRow text="Yakınlık Derecesi"></InfoRow>
                    <InfoRow text="Yaşadığı Şehir"></InfoRow>
                    <InfoRow text="İletişim Numarası"></InfoRow>
                    <InfoRow text="Mail Adresi"></InfoRow>
                    <InfoRow text="Adres"></InfoRow>
                </View>
                <View style={styles.mainBody.contactInfoContainer}>
                    <Text style={{ fontSize: 18, color: '#012775', fontWeight: 400, padding: 5, paddingLeft: '10%' }}>
                        2. Kişiye Ait Bilgiler
                    </Text>
                    <InfoRow text="Yakınlık Derecesi"></InfoRow>
                    <InfoRow text="Yaşadığı Şehir"></InfoRow>
                    <InfoRow text="İletişim Numarası"></InfoRow>
                    <InfoRow text="Mail Adresi"></InfoRow>
                    <InfoRow text="Adres"></InfoRow>
                </View>
            </View>
            <View style={styles.footer.logoContainer}>
                <Image
                    source={require('../assets/images/Sabanci_logo.png')} // Replace with the actual path to your image
                    style={styles.footer.logo}
                />
            </View>
        </View>
    );
}