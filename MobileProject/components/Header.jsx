import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export const Header = ({ title }) => {
    return (
        <View style={styles.header}>
            <Text style={styles.headerTitle}>{title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 18,
    },

    headerTitle: {
        color: 'purple',
        fontSize: 36,
    }
})