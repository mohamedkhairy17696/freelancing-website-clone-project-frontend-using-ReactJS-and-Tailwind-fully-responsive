import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import translationsEN from "./locale/en.json";
import translationsAR from "./locale/ar.json";

const resources = {
  en: {
    translation: translationsEN,
  },
  ar: {
    translation: translationsAR,
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    fallbackLng: "en", // default language
    keySeparator: false, // we do not use keys in form messages.welcome
    interpolation: {
      escapeValue: false, // react already safes from xss
    },
    react: {
      useSuspence: false,
    },
  });

export default i18n;
