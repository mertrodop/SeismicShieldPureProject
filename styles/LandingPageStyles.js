import React from 'react';
import {
    StyleSheet,  
} from 'react-native';

export const getShadowStyle = () => {
    return {
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.5,
        shadowRadius: 2,
        elevation: 6, // This property is used on Android
    };
};

// ============== Top Styles of the Form ================

export const topStyles = StyleSheet.create({
    inner_form1: {
        width: '100%',
        height: '25%',
        alignItems: 'center',
    },
    text_header: {
        color: 'black',
        fontSize: 24,
        paddingTop: 15,
    },
    text_body: {
        color: 'black',
        fontSize: 15,
        paddingTop: 4,
    },
});

// ============== Body Styles of the Form ================

export const bodyStyles = StyleSheet.create({
    inner_form2: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '55%',
    },
    button: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        maxWidth: '30%',
        height: '20%',
        backgroundColor: '#012775',
        marginHorizontal: 15,
        borderRadius: 20,
    },
    button_text: {
        color: 'white',
        fontSize: 15,
    },
});

// ============== Bottom Styles of the Form ================
export const footerStyles = StyleSheet.create({
    inner_form3: {
        alignItems: 'center',
        width: '100%',
        height: '20%',
    },
    SU_logo: {
        width: '30%',
        height: '80%',
    },
});

// ============== Main Styles ================
export const mainStyles = StyleSheet.create({
    background: {
        flex: 1,
        resizeMode: 'cover',
    },
    body: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 45,
        fontWeight: 'bold',
        color: 'white',
        textShadowColor: 'black',
        textShadowOffset: { width: 2, height: 2 },
        textShadowRadius: 5,
    },
    header: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '55%',
    },
    container: {
        flex: 1,
        width: '100%',
        height: '45%',
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    form: {
        width: '80%',
        height: '90%',
        backgroundColor: 'white',
        borderTopLeftRadius: 32,
        borderTopRightRadius: 32,
    },
});