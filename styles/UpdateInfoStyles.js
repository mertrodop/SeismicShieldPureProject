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

export const body = StyleSheet.create({
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
    infoContainer: {
        flex: 0,
        flexDirection: 'column',
        justifyContent: 'center',
        width: '100%',
        height: '40%',
    },
    row: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between', 
        height: '10%',    
    },
    bulletPoint: {
        aspectRatio: 1,
        width: '7%',
        backgroundColor: '#9ad0d3',
        borderRadius: 16,
        borderWidth: 1,
        borderColor: 'rgb(216, 241, 246)',
        marginLeft: '12%',
    },
    infoSpace: {
        height: '60%',
        width: '25%',
        borderRadius: 16,
        borderStyle: 'solid',
        borderWidth: 1,
        backgroundColor: 'white',
        marginRight: '10%',
    }, 
    contactButtonContainer: {
        height: '10%',
        width: '100%',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    contactButton: {
        width: '75%',
        height: '50%',
        borderStyle: 'solid',
        borderWidth: 2,
        borderRadius: 32,
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
