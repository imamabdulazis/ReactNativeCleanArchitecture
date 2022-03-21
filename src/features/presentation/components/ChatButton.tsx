import {StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import {Colors} from '@core/common/color';
import Ionicons from 'react-native-vector-icons/Ionicons';

const ChatButton = () => {
  return (
    <TouchableOpacity style={styles.button}>
      <Ionicons name={'ios-chatbubble-ellipses-sharp'} size={20} />
    </TouchableOpacity>
  );
};

export default ChatButton;

const styles = StyleSheet.create({
  button: {
    padding: 10,
    backgroundColor: Colors.bgGrey,
    borderRadius: 20,
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
