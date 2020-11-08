import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { globalStyles } from '../styles/global';

const about = () => {
  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.titleText}>About screen</Text>
    </View>
  );
};

export default about;

const styles = StyleSheet.create({});
