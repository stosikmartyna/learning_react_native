import React, { useState } from 'react';
import { StyleSheet, View, TextInput, Button, Text, FlatList } from 'react-native';

export default function App() {
  const [enteredGoal, setEnteredGoal] = useState('');
  const [courseGoals, setCourseGoals] = useState([]);

  const goalInputHandler = (enteredText) => {
    setEnteredGoal(enteredText);
  }

  const addGoalHandler = () => {
    setCourseGoals(currentGoals => [
      ...currentGoals, 
      { id: Math.random().toString(), value: enteredGoal }
    ]);
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
      <FlatList 
        keyExtractor={item => item.id}
        data={courseGoals} 
        renderItem={itemData => (
          <View style={styles.listItem}>
            <Text>{itemData.item.value}</Text>
          </View>
        )}
      />
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