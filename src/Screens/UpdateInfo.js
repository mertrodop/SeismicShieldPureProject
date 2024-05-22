import React from 'react';
import {
    View,
    Text,
    ImageBackground,
    StyleSheet,
    Image,
    TouchableOpacity,
} from 'react-native';
import * as styles from '../styles/UpdateInfoStyles';

export const ProfilePhoto = ({ source }) => {
    return (
        <View style={styles.body.profilePhotoContainer}>
            <Image source={source} style={styles.body.profilePhoto} />
        </View>
    );
};

const InfoRow = ({text}) => {
    return (
        <View style={styles.body.row}>
            <View style={styles.body.bulletPoint}></View>
            <Text style={{ color: '#012775', textAlign: 'left' }}>{text}</Text>
            <View style={styles.body.infoSpace}></View>
        </View>
    );
};

export function UpdateInfo({ navigation }) {
    const navigateContacts = () => {
        navigation.navigate('ContactsInfo');
    };

    return (
        <View style={styles.main.body}>
            <View style={styles.header.navbarContainer}>

            </View>
            <View style={styles.header.titleContainer}>
                <Text style={{ fontSize: 26, textAlign: 'center', color: '#012775' }}>Kullanıcı Bilgileri</Text>
                <Text style={{ fontSize: 26, textAlign: 'center', color: '#012775' }}>Güncelleme Ekranı</Text>
            </View>
            <View style={styles.body.profileContainer}>
                <View style={styles.body.profileBox}>
                    <ProfilePhoto></ProfilePhoto>
                    <Text style={{ color: 'white' }}>İlhan Sertelli</Text>
                    <Text style={{ color: 'white' }}>Lisans Öğrencisi</Text>
                    <Text style={{ color: 'white' }}>B1 - 319</Text>
                </View>
            </View>
            <View style={styles.body.infoContainer}>
                <Text style={{ fontSize: 20, color: '#012775', fontWeight: 500, padding: 5, paddingLeft: '10%' }}>Kişisel Bilgilerim</Text>
                <InfoRow text='Üniversiteye Giriş Yılı'></InfoRow>
                <InfoRow text='Bölüm(ler)'></InfoRow>
                <InfoRow text='Öğrenci Numaram'></InfoRow>
                <InfoRow text='E-mail adresim'></InfoRow>
                <InfoRow text='Telefon Numaram'></InfoRow>
                <InfoRow text='TC Kimlik Numaram'></InfoRow>
            </View>
            <View style={styles.body.contactButtonContainer}>
                <TouchableOpacity onPress={navigateContacts} style={styles.body.contactButton}>
                    <Text style={{ fontSize: 18, textAlign: 'center', paddingTop: '2%', color: 'black' }}>
                        Acil İrtibat Kişileri
                    </Text>
                </TouchableOpacity>
            </View>
            <View style={styles.footer.logoContainer}>
                <Image
                    source={require('../assets/images/Sabanci_logo.png')} // Replace with the actual path to your image
                    style={styles.footer.logo}
                />
            </View>
        </View>
    );
};


export default UpdateInfo;