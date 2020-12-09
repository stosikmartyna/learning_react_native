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
                <View style={styles.buttonsContainer}>
                    <View style={styles.button}>
                        <Button style={styles.button} title="Cancel" color="red" onPress={onCancel}/>
                    </View>
                    <View style={styles.button}>
                        <Button style={styles.button} title="Add" onPress={addGoalHandler}/>
                    </View>
                </View>
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
      },

      buttonsContainer: {
          flexDirection: 'row',
          justifyContent: 'space-evenly',
          width: '60%'
      },

      button: {
          width: '40%'
      }
})