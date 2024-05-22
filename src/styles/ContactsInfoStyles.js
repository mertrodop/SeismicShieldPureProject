import React from 'react';
import {
    StyleSheet,
} from 'react-native';

// ============== HEADER ================

export const main = StyleSheet.create({
    body: {
        flex: 1,
        flexDirection: 'column',
        width: '100%',
        height: '100%',
        backgroundColor: '#f2f8fb',
    },
});

export const header = StyleSheet.create({
    navbarContainer: {
        width: '100%',
        height: '10%',
    },
    titleContainer: {
        width: '100%',
        height: '8%',
    },
});

export const profile = StyleSheet.create({
    profileContainer: {
        width: '100%',
        height: '22%',
        alignItems: 'center',
    },
    profileBox: {
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: 10,
        width: '40%',
        height: '90%',
        backgroundColor: '#5271FF',
        borderRadius: 24,
        borderStyle: 'solid',
        borderWidth: 2,
        borderColor: 'rgb(196, 212, 226)',
    },
    profilePhotoContainer: {
        marginVertical: '6%',
        aspectRatio: 1,
        height: '40%',
        backgroundColor: 'grey',
        borderRadius: 12,
        borderWidth: 2,
        borderColor: 'white',
    },
    profilePhoto: {
        width: '100%', // Take up all available width
        height: '100%', // Take up all available height
    },   
});

export const bodyTitle = StyleSheet.create({
    titleContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        height: '5%',
        width: '100%',
    },
});
export const mainBody = StyleSheet.create({
    main: {
        height: '45%',
        width: '100%',
    },
    contactInfoContainer: {
        height: '50%',
        width: '100%',
    },
    infoRow: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    infoSpace: {
        borderStyle: 'solid',
        borderWidth: 1,
        backgroundColor: 'white',
        borderRadius: 16,
        width: '40%',
        paddingRight: '8%',
        borderColor: 'black',
        height: '75%',
        marginRight: '10%',
    }
});

export const footer = StyleSheet.create({
    logoContainer: {
        alignItems: 'center',
        width: '100%',
        height: '10%',
    },
    logo: {
        width: '30%',
        height: '80%',
    },
});
