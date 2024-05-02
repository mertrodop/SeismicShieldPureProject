import { MaterialCommunityIcons } from '@expo/vector-icons';
import React from 'react';
import { View } from 'react-native';

export function HomeIcon() {
    return (
        <View>
            {/* Use the home icon from MaterialCommunityIcons */}
            <MaterialCommunityIcons name="home" size={24} color="black" />
        </View>
    );
}
