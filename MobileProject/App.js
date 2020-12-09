import React, { useState } from 'react';
import { StyleSheet, View, FlatList, Button } from 'react-native';
import { Header } from './components/Header';
import { GoalInput } from './components/GoalInput';
import { GoalItem } from './components/GoalItem';

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);
  const [isAddMode, setIsAddMode] = useState(false);

  const addGoalHandler = (goalTitle) => {
    setCourseGoals(currentGoals => [
      ...currentGoals, 
      { id: Math.random().toString(), value: goalTitle }
    ]);
    setIsAddMode(false);
  }

  const removeGoalHandler = (goalId) => {
    setCourseGoals(currentGoals => {
      return currentGoals.filter(goal => goal.id !== goalId)
    });
  }

  const handleIsAddMode = () => {
    setIsAddMode(true);
  }

  const cancelGoalAdditionHandler = () => {
    setIsAddMode(false);
  }

  return (
    <View style={styles.screen}>
      <Header  title="Hello world!"/>
      <Button title="Add new goal" onPress={handleIsAddMode}/>
      <GoalInput onAddGoalHandler={addGoalHandler} visible={isAddMode} onCancel={cancelGoalAdditionHandler}/>
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