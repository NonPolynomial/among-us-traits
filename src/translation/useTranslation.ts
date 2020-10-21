import i18n from 'i18next'
import { useContext } from 'react';
import { LanguageContext } from './languageContext';

export const useTranslation = (): ReturnType<typeof i18n.getFixedT> => {
  const lang = useContext(LanguageContext);

  return i18n.getFixedT(lang);
};
