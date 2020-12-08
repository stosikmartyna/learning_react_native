import React, { useState } from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import { GoalInput } from './components/GoalInput';
import { GoalItem } from './components/GoalItem';

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);

  const addGoalHandler = (goalTitle) => {
    setCourseGoals(currentGoals => [
      ...currentGoals, 
      { id: Math.random().toString(), value: goalTitle }
    ]);
  }

  const removeGoalHandler = (goalId) => {
    setCourseGoals(currentGoals => {
      return currentGoals.filter(goal => goal.id !== goalId)
    });
  }

  return (
    <View style={styles.screen}>
      <GoalInput onAddGoalHandler={addGoalHandler}/>
      <FlatList 
        keyExtractor={item => item.id}
        data={courseGoals} 
        renderItem={itemData => (
          <GoalItem 
            title={itemData.item.value}
            id={itemData.item.id}
            onDelete={removeGoalHandler}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50,
  }
})