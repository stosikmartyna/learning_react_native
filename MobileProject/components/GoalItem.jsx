import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export const GoalItem = ( {title}) => {
    return (
        <View style={styles.listItem}>
            <Text>{title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    listItem: {
        padding: 20,
        backgroundColor: '#ccc',
        borderColor: 'black',
        borderWidth: 1,
        marginTop: 10
    }
})