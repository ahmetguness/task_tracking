import en from "../../locale/en.json";
import tr from "../../locale/tr.json";
import id from "../../locale/id.json";
import ja from "../../locale/ja.json";
import ms from "../../locale/ms.json";
import th from "../../locale/th.json";
import i18next, { Resource } from "i18next";
import { initReactI18next } from "react-i18next";

const languageResources: Resource = {
  en: { translation: en },
  tr: { translation: tr },
  id: { translation: id },
  ja: { translation: ja },
  ms: { translation: ms },
  th: { translation: th },
};

i18next.use(initReactI18next).init({
  compatibilityJSON: "v4",
  lng: "en",
  fallbackLng: "en",
  resources: languageResources,
});

export default i18next;