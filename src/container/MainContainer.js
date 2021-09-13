import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import IndexScreen from '../screens/IndexScreen';
import EditScreen from '../screens/EditScreen';
import CreateScreen from '../screens/CreateScreen';
import ShowScreen from '../screens/ShowScreen';
import { BlogProvider } from '../context/BlogContext';

const Stack = createNativeStackNavigator();

const MainContainer = () => {
  return (
    <BlogProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Index">
          <Stack.Screen name="Index" component={IndexScreen} options={{title: 'Blogs'}} />
          <Stack.Screen name="Edit" component={EditScreen} options={{title: 'Edit'}} />
          <Stack.Screen name="Create" component={CreateScreen} options={{title: 'Create'}} />
          <Stack.Screen name="Show" component={ShowScreen} options={{title: 'Show'}} />
        </Stack.Navigator>
      </NavigationContainer>
    </BlogProvider>
  )
  
}

export default MainContainer;