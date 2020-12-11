import React from 'react';
import { BasicForm } from './components/BasicForm/BasicForm';
import { CourseGoals } from './components/CourseGoals/CourseGoals';
import { Provider as PaperProvider } from 'react-native-paper';

export default function App() {
  return (
    <PaperProvider>
      <CourseGoals />
      <BasicForm />
    </PaperProvider>
  );
}