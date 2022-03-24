import {
  GestureResponderEvent,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {Colors} from '@components/common/color';
import Ionicons from 'react-native-vector-icons/Ionicons';

const SearchButton = (props: {
  onClick: ((event: GestureResponderEvent) => void) | undefined;
}) => {
  return (
    <TouchableOpacity onPress={props.onClick} style={styles.button}>
      <Ionicons name={'md-search'} size={25} />
    </TouchableOpacity>
  );
};

export default SearchButton;

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
