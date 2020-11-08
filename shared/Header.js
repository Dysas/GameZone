import React from 'react';
import { StyleSheet, Text, View, Dimensions, Image, ImageBackground } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const Header = ({ navigation, title, ...restProps }) => {
  const openMenu = () => {
    navigation.openDrawer();
    console.log('restProps', restProps);
  };

  return (
    <ImageBackground source={require('../assets/game_bg.png')} style={styles.header}>
      <MaterialIcons name="menu" size={28} style={styles.icon} onPress={openMenu} />
      <View style={styles.headerTitle}>
        <Image style={styles.headerLogo} source={require('../assets/heart_logo.png')} />
        <Text style={styles.headerText}>{title}</Text>
      </View>
    </ImageBackground>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {
    height: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  headerText: {
    fontWeight: 'bold',
    fontSize: 20,
    color: '#333',
    letterSpacing: 1,
  },
  icon: {
    position: 'absolute',
    left: 10,
  },
  headerTitle: {
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerLogo: {
    width: 25,
    height: 25,
    marginHorizontal: 10,
  },
});
