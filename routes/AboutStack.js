import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Header from '../shared/Header';

// Screens
import AboutScreen from '../screens/about';

const Stack = createStackNavigator();

const AboutStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="About"
        component={AboutScreen}
        options={({ ...navigationProps }) => ({
          headerTitle: (props) => <Header title="About" {...navigationProps} {...props} />,
        })}
      />
    </Stack.Navigator>
  );
};

export default AboutStack;
