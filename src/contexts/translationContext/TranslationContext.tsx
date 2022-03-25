import i18next from 'i18next';
import {initReactI18next} from 'react-i18next';
import React, {useContext, useEffect, useCallback, useState} from 'react';

import {useIsMountedRef} from '@hooks/useIsMountedRef';

//resource lang
import translationsEN from '@i18n/en.json';
import translationsID from '@i18n/id.json';
import translationsFR from '@i18n/fr.json';
import translationsJA from '@i18n/ja.json';
import AsyncStorage from '@react-native-async-storage/async-storage';

const defaultNS = 'translation';
const defaultLng = 'en';

const resources = {
  en: {[defaultNS]: translationsEN},
  id: {[defaultNS]: translationsID},
  fr: {[defaultNS]: translationsFR},
  ja: {[defaultNS]: translationsJA},
};

export type TranslationContextValue = {
  switchLang: (language: string) => void;
};

export const TranslationContext = React.createContext<TranslationContextValue>({
  switchLang: (language: string) => language,
});

export const TranslationProvider: React.FC<{}> = ({children}) => {
  const isMounted = useIsMountedRef();
  const [lang, setLang] = useState<string>('en');

  useEffect(() => {
    try {
      i18next.use(initReactI18next).init({
        lng: lang,
        resources,
        fallbackLng: defaultLng,
        fallbackNS: defaultNS,
        keySeparator: false,
        interpolation: {
          escapeValue: false,
        },
      });
    } catch (error) {
      if (__DEV__) {
        console.log('Something went wrong when register lang LOG:', error);
      }
    }
  }, [lang]);

  useEffect(() => {
    (async () => {
      const userLang = await AsyncStorage.getItem('USER_LANG');
      setLang(userLang ?? 'en');
    })();
  }, []);

  console.log(lang);

  const switchLang = useCallback(
    (language: string) => {
      if (__DEV__) {
        console.log(language);
      }
      if (lang && isMounted.current) {
        i18next.changeLanguage(language);
        setLang(lang);
        AsyncStorage.setItem('USER_LANG', language);
      }
    },
    [lang, isMounted],
  );

  return (
    <TranslationContext.Provider value={{switchLang}}>
      {children}
    </TranslationContext.Provider>
  );
};

export const useTranslationContext = () => useContext(TranslationContext);
