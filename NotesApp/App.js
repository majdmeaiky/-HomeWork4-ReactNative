import { useState } from 'react';
import Categories from './Pages/Categories';
import NotesPerCategory from './Pages/NotesPerCategory';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {SharedArraysContext} from './Pages/Context';

export default function App() {
  const Stack = createNativeStackNavigator();
  const [categories, setCategories] = useState([]);
  const [notes, setNotes] = useState({});

  return (
<SharedArraysContext.Provider value={{categories, setCategories,notes, setNotes }}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Categories">
          <Stack.Screen name="Categories" component={Categories} />
          <Stack.Screen name="Notes" component={NotesPerCategory} />
        </Stack.Navigator>
      </NavigationContainer>
          </SharedArraysContext.Provider>

  );
}


