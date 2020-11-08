import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Header from '../shared/Header';
// Screens
import HomeScreen from '../screens/home';
import ReviewDetailsScreen from '../screens/reviewDetails';

const Stack = createStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={({ ...navigationProps }) => ({
          headerTitle: (props) => <Header title="GameZone" {...navigationProps} {...props} />,
        })}
      />
      <Stack.Screen
        name="Review-details"
        component={ReviewDetailsScreen}
        options={{
          title: 'Details',
        }}
      />
    </Stack.Navigator>
  );
};

export default HomeStack;
