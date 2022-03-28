import {
  GestureResponderEvent,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {Colors} from '@components/common/color';
import Ionicons from 'react-native-vector-icons/Ionicons';

const SettingButton = (props: {
  onClick?: ((event: GestureResponderEvent) => void) | undefined;
}) => {
  return (
    <TouchableOpacity onPress={props.onClick} style={styles.button}>
      <Ionicons name={'settings-sharp'} size={25} />
    </TouchableOpacity>
  );
};

export default SettingButton;

const styles = StyleSheet.create({
  button: {
    padding: 5,
    backgroundColor: Colors.bgGrey,
    borderRadius: 20,
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
