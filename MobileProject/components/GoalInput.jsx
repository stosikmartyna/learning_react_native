import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Modal } from 'react-native';

export const GoalInput = ({ onAddGoalHandler, visible, onCancel }) => {
    const [enteredGoal, setEnteredGoal] = useState('');
    
    const goalInputHandler = (enteredText) => {
        setEnteredGoal(enteredText);
    }

    const addGoalHandler = () => {
        onAddGoalHandler(enteredGoal);
        setEnteredGoal('');
    }

    return (
        <Modal visible={visible} animationType="slide">
            <View style={styles.inputContainer}>
                <TextInput 
                    placeholder="Course goal" 
                    style={styles.input}
                    onChangeText={goalInputHandler}
                    value={enteredGoal}
                />
                <Button title="Cancel" color="red" onPress={onCancel}/>
                <Button title="Add" onPress={addGoalHandler}/>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      },
    
      input: {
        width: '80%', 
        borderBottomColor: 'black', 
        borderWidth: 1, 
        padding: 10,
        marginBottom: 10
      }
})