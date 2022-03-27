import {Image, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {windowWidth} from '@components/common/commonConsts';
import {Colors} from '@components/common/color';

const StoryCard = ({isCreateStory = false}: any) => {
  return (
    <TouchableOpacity style={styles.container}>
      <Image
        source={{
          uri: 'https://media.istockphoto.com/photos/image-projection-on-a-woman-using-a-smart-phone-picture-id1341661060?s=612x612',
        }}
        style={{width: windowWidth / 3.5, height: windowWidth / 2.5}}
      />
      {isCreateStory ? (
        <View style={{...styles.cardBottom}}>
          <TouchableOpacity style={styles.addButton}>
            <AntDesign name="pluscircle" size={25} color={Colors.blue} />
          </TouchableOpacity>
          <Text style={styles.createStoryTitle}>Create a Story</Text>
        </View>
      ) : (
        <Text style={styles.name}>StoryCard</Text>
      )}
    </TouchableOpacity>
  );
};

export default StoryCard;

const styles = StyleSheet.create({
  container: {
    width: windowWidth / 4,
    backgroundColor: Colors.white,
    overflow: 'hidden',
    borderRadius: 10,
    marginLeft: 7,
    borderWidth: 0.5,
    borderColor: Colors.bgMain,
  },
  createStoryTitle: {
    position: 'absolute',
    bottom: 5,
    fontWeight: 'bold',
    color: Colors.black,
    alignSelf: 'center',
    paddingHorizontal: 5,
    textAlign: 'center',
  },
  name: {
    position: 'absolute',
    bottom: 10,
    fontWeight: 'bold',
    color: Colors.white,
    alignSelf: 'center',
    paddingHorizontal: 5,
    textAlign: 'center',
  },
  cardBottom: {
    position: 'absolute',
    bottom: 0,
    backgroundColor: Colors.white,
    height: windowWidth / 7,
    width: windowWidth / 4,
    justifyContent: 'center',
  },
  addButton: {
    position: 'absolute',
    top: -15,
    alignSelf: 'center',
    borderWidth: 4,
    borderColor: Colors.white,
    borderRadius: 30,
    backgroundColor: Colors.white,
  },
});
