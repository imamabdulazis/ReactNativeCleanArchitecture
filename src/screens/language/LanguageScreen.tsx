import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useCallback, useEffect, useState} from 'react';
import {Navigation} from 'react-native-navigation';
import {useTranslation} from 'react-i18next';

import {useTranslationContext} from '@contexts/translationContext/TranslationContext';
import {Colors} from '@components/common/color';
import {language} from '@components/common/languageConst';

const LanguageScreen = (props: any) => {
  const {componentId} = props;
  const {t} = useTranslation();
  const {switchLang, lang} = useTranslationContext();

  const [currentLang, setCurrentLang] = useState(lang);

  const onSaveLanguage = useCallback(() => {
    switchLang(currentLang);
  }, [currentLang, switchLang]);

  /**
   * Listen save button clicked
   */
  useEffect(() => {
    const navigationButtonEventListener =
      Navigation.events().registerNavigationButtonPressedListener(
        ({buttonId}) => {
          if (buttonId === 'SAVE_LANGUAGE') {
            onSaveLanguage();
          }
        },
      );
    return () => {
      navigationButtonEventListener.remove();
    };
  }, [currentLang, onSaveLanguage]);

  /**
   * Change Language
   */
  useEffect(() => {
    Navigation.mergeOptions(componentId, {
      topBar: {
        title: {
          text: t('Select Language'),
        },
        rightButtons: [
          {
            id: 'SAVE_LANGUAGE',
            text: t('Save'),
          },
        ],
      },
    });
  }, [t, componentId]);

  return (
    <View style={styles.container}>
      <ScrollView>
        <Text>
          {t("You'll have the option to translate posts into this language")}
        </Text>
        {language.map((e, index): any => (
          <TouchableOpacity
            key={index}
            onPress={() => setCurrentLang(e.code)}
            style={styles.langButton}>
            <Text>{e.name}</Text>
            <Text>{e.subName}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

LanguageScreen.options = () => ({});

export default LanguageScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: Colors.white,
  },
  saveButton: {
    padding: 10,
    marginTop: 10,
    borderWidth: 1,
    borderColor: Colors.bgGrey,
  },
  langButton: {
    paddingVertical: 20,
    paddingHorizontal: 10,
    borderBottomColor: Colors.gray,
    borderBottomWidth: 1,
  },
});
