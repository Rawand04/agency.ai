import { useTranslation } from "react-i18next";

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const currentLanguage = i18n.language;

  const changeLanguage = (lang: "en" | "ar") => {
    i18n.changeLanguage(lang);
    localStorage.setItem("language", lang);
  };

  return (
    <div className="flex gap-2">
      <button
        onClick={() => changeLanguage("en")}
        className={
          currentLanguage === "en"
            ? "hidden"
            : "px-3 py-1 bg-primary text-white rounded-full"
        }
      >
        En
      </button>

      <button
        onClick={() => changeLanguage("ar")}
        className={
          currentLanguage === "ar"
            ? "hidden"
            : "px-3 py-1 bg-primary text-white rounded-full"
        }
      >
        Ar
      </button>
    </div>
  );
}
