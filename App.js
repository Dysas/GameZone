import React from 'react';
import { AppLoading } from 'expo';
import { useFonts } from 'expo-font';
import Navigator from './routes/Drawer';

export default function App() {
  let [fontsLoaded] = useFonts({
    'roboto-bold': require('./assets/fonts/Roboto-Bold.ttf'),
    'roboto-regular': require('./assets/fonts/Roboto-Regular.ttf'),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return <Navigator />;
  }
}
