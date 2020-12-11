import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button, TextInput } from 'react-native-paper';

export const BasicForm = () => {
    const [inputsValues, setInputsValues] = useState({
        name: '',
        email: '',
        password: '',
    });

    return (
        <View style={styles.formContainer}>
            <Text style={styles.header}>Registration</Text>
            <TextInput
                style={styles.input} 
                label={'Name'}
                mode={'outlined'}
                onChangeText={(value) => setInputsValues({...inputsValues, name: value})}
            />
            <TextInput 
                style={styles.input} 
                label={'Mail'}
                mode={'outlined'}
                keyboardType={'email-address'}
                onChangeText={(value) => setInputsValues({...inputsValues, email: value})}
            />
            <TextInput 
                style={styles.input} 
                label={'Password'}
                mode={'outlined'}
                secureTextEntry={true}
                onChangeText={(value) => setInputsValues({...inputsValues, password: value})}
            />
            <Button mode='contained' style={styles.button}>
                Sign up
            </Button>
        </View>
    )
}

const styles = StyleSheet.create({
    formContainer: {
       alignItems: 'center' 
    },

    header: {
        borderBottomColor: '#095D78',
        borderBottomWidth: 1,
        fontSize: 24,
        marginBottom: 40,
        paddingBottom: 10,
        width: 300,
    },

    input: {
        width: 300,
    },

    button: {
        backgroundColor: '#095D78',
        marginTop: 20,
    }
})