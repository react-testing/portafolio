import i18next from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import ChainedBackend from "i18next-chained-backend";
import HttpBackend from "i18next-http-backend";
import LocalStorageBackend from "i18next-localstorage-backend";
import { initReactI18next } from "react-i18next";

i18next
  .use(initReactI18next)
  .use(ChainedBackend)
  .use(LanguageDetector)

  .init({
    backend: {
      backends: [LocalStorageBackend, HttpBackend],
      backendOptions: [
        {
          expirationTime: 7 * 24 * 60 * 60 * 1000, // 7 days
        },
        {
          loadPath: "../../public/locales/{{lng}}/{{ns}}.json",
        },
      ],
    },
    fallbackLng: "en",
  });
