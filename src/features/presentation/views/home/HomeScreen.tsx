import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Navigation} from 'react-native-navigation';

const HomeScreen = (props: any) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() =>
          Navigation.push(props.componentId, {
            component: {
              name: 'SettingScreen',
              options: {
                topBar: {
                  title: {
                    text: 'Settings',
                  },
                  backButton: {
                    title: 'Imun',
                  },
                },
              },
            },
          })
        }>
        <Text>Home Screen</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
