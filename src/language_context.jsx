import React, { createContext, useState, useEffect } from 'react';
import i18next from './i18n';

export const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  debugger;
  const [language, setLanguage] = useState('en');

  useEffect(() => {
    console.log(`Language changed to: ${language}`);
    i18next.changeLanguage(language).then(() => {
      console.log(`i18next language changed to: ${language}`);
    }).catch((error) => {
      console.error('Error changing language:', error);
    });
  }, [language]);

  const changeLanguage = (lang) => {
    console.log(`Changing language to: ${lang}`);
    setLanguage(lang);
  };

  return (
    <LanguageContext.Provider value={{ language, changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};
