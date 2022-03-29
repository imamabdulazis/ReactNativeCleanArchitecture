import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {Colors} from '@components/common/color';
import {screenDimensions} from '@components/common/commonConst';

const PostCategoryContainer = () => {
  return (
    <View style={styles.container}>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <TouchableOpacity style={styles.button}>
          <Entypo name={'instagram'} size={17} color={Colors.red} />
          <Text style={styles.titleButton}>Reels</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <MaterialCommunityIcons
            name={'video-plus'}
            size={20}
            color={'purple'}
          />
          <Text style={styles.titleButton}>Room</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <MaterialCommunityIcons
            name={'account-group'}
            size={20}
            color={Colors.blue}
          />
          <Text style={styles.titleButton}>Group</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Entypo name={'video-camera'} size={17} color={Colors.red} />
          <Text style={styles.titleButton}>Live</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default PostCategoryContainer;

const styles = StyleSheet.create({
  container: {
    width: screenDimensions.width,
    backgroundColor: Colors.bgGrey,
    justifyContent: 'space-evenly',
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
  },
  button: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.white,
    borderRadius: 20,
    marginRight: 5,
    marginLeft: 10,
  },
  titleButton: {
    fontWeight: '700',
    fontSize: 15,
    marginLeft: 5,
  },
});
