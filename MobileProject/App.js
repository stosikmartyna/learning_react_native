import React, { useState } from 'react';
import { StyleSheet, View, TextInput, Button, Text, ScrollView } from 'react-native';

export default function App() {
  const [enteredGoal, setEnteredGoal] = useState('');
  const [courseGoals, setCourseGoals] = useState([]);

  const goalInputHandler = (enteredText) => {
    setEnteredGoal(enteredText);
  }

  const addGoalHandler = () => {
    setCourseGoals(currentGoals => [...currentGoals, enteredGoal]);
  }

  return (
    <View style={styles.screen}>
      <View style={styles.inputContainer}>
        <TextInput 
          placeholder="Course goal" 
          style={styles.input}
          onChangeText={goalInputHandler}
          value={enteredGoal}
        />
        <Button title="Add" onPress={addGoalHandler}/>
      </View>
      <ScrollView>
        {courseGoals.map(goal => {
          return (
            <View style={styles.listItem} key={goal}>
              <Text>{goal}</Text>
            </View>
          )
        })}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50,
  },

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
  },

  listItem: {
    padding: 20,
    backgroundColor: '#ccc',
    borderColor: 'black',
    borderWidth: 1,
    marginTop: 10
  }
})