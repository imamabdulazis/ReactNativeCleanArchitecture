import {Colors} from '@core/common/color';
import {screenDimensions} from '@core/common/commonConsts';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const PostCategoryContainer = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button}>
        <Entypo name={'video-camera'} size={20} color={Colors.red} />
        <Text style={styles.titleButton}>Live</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <MaterialIcons name={'photo-library'} size={20} color={Colors.green} />
        <Text style={styles.titleButton}>Photo</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <MaterialCommunityIcons
          name={'video-plus'}
          size={25}
          color={'purple'}
        />
        <Text style={styles.titleButton}>Room</Text>
      </TouchableOpacity>
    </View>
  );
};

export default PostCategoryContainer;

const styles = StyleSheet.create({
  container: {
    width: screenDimensions.width,
    backgroundColor: Colors.white,
    justifyContent: 'space-evenly',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 1,
  },
  button: {
    padding: 15,
    flexDirection: 'row',
    alignItems: 'center',
  },
  titleButton: {
    fontWeight: '700',
    fontSize: 15,
    marginLeft: 5,
  },
});
