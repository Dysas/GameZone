import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Card = ({ children, ...restProps }) => {
  return (
    <View style={styles.cardContainer}>
      <View style={styles.cardChildContent}>{children}</View>
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  cardContainer: {
    borderRadius: 6,
    elevation: 3,
    backgroundColor: '#fff',
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    shadowColor: '#333',
    marginHorizontal: 4,
    marginVertical: 6,
  },
  cardChildContent: {
    marginHorizontal: 18,
    marginVertical: 10,
  },
});
