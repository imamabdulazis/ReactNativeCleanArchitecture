import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import {Colors} from '@components/common/color';

const MainMenuItem = ({icon, title, onPress}: any) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Ionicons name={icon} size={27} />
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};

export default MainMenuItem;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 5,
    paddingHorizontal: 20,
    backgroundColor: Colors.white,
  },
  title: {
    fontSize: 16,
    fontWeight: '400',
    marginLeft: 10,
  },
});
