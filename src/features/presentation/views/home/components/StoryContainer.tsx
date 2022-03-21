import {ScrollView, StyleSheet, View} from 'react-native';
import React from 'react';
import {Colors} from '@core/common/color';
import StoryCard from '../../../components/StoryCard';

const StoryContainer = () => {
  return (
    <View style={styles.container}>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <StoryCard isCreateStory={true} />
        <StoryCard />
        <StoryCard />
        <StoryCard />
        <StoryCard />
      </ScrollView>
    </View>
  );
};

export default StoryContainer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 7,
    backgroundColor: Colors.white,
    paddingVertical: 15,
  },
});
