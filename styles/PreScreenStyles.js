import React from 'react';
import {
    StyleSheet,
} from 'react-native';


export const getShadowStyle = () => {
    return {
        shadowColor: 'black',
        shadowOffset: { width: 2, height: 2 },
        shadowOpacity: 0.5,
        shadowRadius: 3,
        elevation: 5, // This property is used on Android
    };
};


// =============== Main ================
export const main = StyleSheet.create({
    body: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    bg: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        opacity: 0.5,
    },
});

// ============ Header =============

export const header = StyleSheet.create({
    container: {
        width: '100%',
        height: '18%',
    },
    logoContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'flex-end',
        width: '100%',
        height: '50%',
    },
    logo: {
        width: '25%',
        height: '80%',
        marginHorizontal: 25,
        marginTop: 'auto',
    },
    title: {
        flex: 1,
        width: '100%',
        height: '30%',
        justifyContent: 'center',
        alignItems: 'center',
    }
});

// ============ Body ============

export const body = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        height: '76%',
        width: '100%',
    },
    profileSection: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '15%',
    },
    profileContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10,
        width: '70%',
        height: '100%',
        backgroundColor: '#5271FF',
        borderRadius: 24,
        borderStyle: 'solid',
        borderColor: 'blue',

    },
    profilePhoto: {
        aspectRatio: 1,
        height: '75%',
        backgroundColor: 'grey',
        marginLeft: '10%',
        borderRadius: 12,
        borderWidth: 2,
        borderColor: 'white',
    },
    pp: {
        flex: 1,
        width: '100%', // Take up all available width
        height: '100%', // Take up all available height
    },
    mainBody: {
        paddingTop: 10,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '67%',
        flexWrap: 'wrap',
    },
    button: {
        width: '35%',
        height: '20%',
        backgroundColor: '#9ad0d3',
        margin: 8,
        borderRadius: 12,
    },
    messageSection: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingBottom: 16,
        width: '100%',
        height: '18%',
    },
    message: {
        paddingLeft: 15,
        width: '70%',
        height: '100%',
        backgroundColor: '#5271FF',
        borderRadius: 24,
        borderStyle: 'solid',
        borderColor: 'blue',
        marginVertical: 16,
    },
    buttonText: {
        color: 'black',
        textAlign: 'left',
    },
    block: {
        width: '100%',
        height: '100%',
        padding: 10,
    }
});

// ============= Footer =============

export const footer = StyleSheet.create({
    bottom: {
        width: '100%',
        height: '6%',
        backgroundColor: '#012775'
    }
});