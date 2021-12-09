import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {Navigation} from 'react-native-navigation';

const HomeScreen = (props: any) => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
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
        <Text>NExt</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;

// const styles = StyleSheet.create({});
