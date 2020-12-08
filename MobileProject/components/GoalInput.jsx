import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

export const GoalInput = ({ onAddGoalHandler }) => {
    const [enteredGoal, setEnteredGoal] = useState('');
    
    const goalInputHandler = (enteredText) => {
        setEnteredGoal(enteredText);
    }

    return (
        <View style={styles.inputContainer}>
            <TextInput 
                placeholder="Course goal" 
                style={styles.input}
                onChangeText={goalInputHandler}
                value={enteredGoal}
            />
            <Button title="Add" onPress={() => onAddGoalHandler(enteredGoal)}/>
        </View>
    )
}

const styles = StyleSheet.create({
    inputContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
      },
    
      input: {
        width: '80%', 
        borderBottomColor: 'black', 
        borderWidth: 1, 
        padding: 10,
      }
})