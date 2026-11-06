import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import enCommon from "./i18n/en/common.json";
import arCommon from "./i18n/ar/common.json";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      common: enCommon,
    },
    ar: {
      common: arCommon,
    },
  },

  lng: localStorage.getItem("language") || "en",
  fallbackLng: "en",

  defaultNS: "common",

  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
