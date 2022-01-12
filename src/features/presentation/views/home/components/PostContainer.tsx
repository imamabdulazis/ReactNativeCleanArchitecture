import {screenDimensions} from '@core/common/commonConsts';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import PostCategoryContainer from './PostCategoryContainer';
import UserPostContainer from './UserPostContainer';

const PostContainer = () => {
  return (
    <View style={styles.container}>
      <UserPostContainer />
      <PostCategoryContainer />
    </View>
  );
};

export default PostContainer;

const styles = StyleSheet.create({
  container: {
    width: screenDimensions.width,
    marginVertical: 1,
  },
});
