/* eslint-disable react/jsx-no-constructed-context-values */
import { createContext, ReactNode, useState } from 'react';

interface CtxProps {
  isSoundOn: boolean;
  handleToggleSound: any;
  language: 'pt' | 'en';
  handleToggleLanguage: any;
}

export const SettingsContext = createContext({} as CtxProps);

export const SettingsContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [isSoundOn, setIsSoundOn] = useState(true);
  const [language, setLanguage] = useState<'pt' | 'en'>('pt');

  function handleToggleLanguage() {
    setLanguage((prevLang) => (prevLang === 'pt' ? 'en' : 'pt'));
  }

  function handleToggleSound() {
    setIsSoundOn((prevState) => !prevState);
  }

  return (
    <SettingsContext.Provider
      value={{ isSoundOn, language, handleToggleSound, handleToggleLanguage }}
    >
      {children}
    </SettingsContext.Provider>
  );
};
