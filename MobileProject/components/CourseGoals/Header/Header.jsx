import React from 'react';
import { View, Text } from 'react-native';
import { headerStyle } from './Header.styles';

export const Header = ({ title }) => {
    return (
        <View style={headerStyle.header}>
            <Text style={headerStyle.headerTitle}>{title}</Text>
        </View>
    )
}