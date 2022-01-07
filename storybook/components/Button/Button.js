import React from 'react';
import PropTypes from 'prop-types';
import {StyleSheet, Text, TouchableHighlight} from 'react-native';

export default function Button({onPress, children}) {
  return (
    <TouchableHighlight style={styles.button} onPress={onPress}>
      <Text style={styles.title}>{children}</Text>
    </TouchableHighlight>
  );
}

Button.defaultProps = {
  children: null,
  onPress: () => {},
};

Button.propTypes = {
  children: PropTypes.node,
  onPress: PropTypes.func,
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'red',
    padding: 20,
    margin: 20,
    color: 'white',
  },
  title: {
    color: 'white',
    fontWeight: '900',
  },
});
