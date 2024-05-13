import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native'; // Import the hook

const Header = ({ title, icon }) => {
  const navigation = useNavigation(); // Access navigation object

  const handleBackPress = () => {
    navigation.goBack(); // Go back to the previous screen
  };

  return (
    <View style={styles.header}>
      <TouchableOpacity style={styles.backBtn} onPress={handleBackPress} >
        <Image source={icon} style={styles.back} />
      </TouchableOpacity>

      <Text style={[styles.title, { marginLeft: 10 }]}>{title}</Text>
    </View>
  );
}

export default Header;

const styles = StyleSheet.create({
  header: {
    height: 60,
    width: '100%',
    flexDirection: 'row',
    backgroundColor: '#fff',
    elevation: 5,
    alignItems: 'center',
    paddingLeft: 20,
  },
  back: {
    width: 24,
    height: 24,
    marginTop: 4,
  },
  backBtn: {
    width: 30,
    height: 30,
    borderRadius: 15,
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
  },
});
