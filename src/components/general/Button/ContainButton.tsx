import React from 'react';
import PropTypes from 'prop-types';
import {StyleSheet, Text, TouchableHighlight} from 'react-native';
import {screenDimensions} from '@components/common/commonConst';
import {Colors} from '@components/common/color';

export default function ContainButton({onPress, children}: any) {
  return (
    <TouchableHighlight style={styles.button} onPress={onPress}>
      <Text style={styles.title}>{children}</Text>
    </TouchableHighlight>
  );
}

ContainButton.defaultProps = {
  children: null,
  onPress: () => {},
};

ContainButton.propTypes = {
  children: PropTypes.node,
  onPress: PropTypes.func,
};

const styles = StyleSheet.create({
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    width: screenDimensions.width - 40,
    backgroundColor: Colors.primary,
    borderRadius: 10,
    padding: 10,
  },
  title: {
    color: 'white',
    fontWeight: '900',
  },
});
