import i18next from "i18next";
import React from "react";
import { useTranslation } from "react-i18next";

const ChangeLanguage: React.FC = () => {
  const handleChangeLanguage = (value: string) => (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    e.preventDefault();
    i18next.changeLanguage(value);
  };

  const isActiveLanguage = (lng: string): string => {
    return i18next.language === lng ? "-active" : "";
  };

  const { t } = useTranslation();
  return (
    <>
      <div
        className={`App-header-menu-button${isActiveLanguage("en")}`}
        onClick={handleChangeLanguage("en")}
      >
        {t("language.english")}
      </div>{" "}
      <div
        className={`App-header-menu-button${isActiveLanguage("pt")}`}
        onClick={handleChangeLanguage("pt")}
      >
        {t("language.portuguese")}
      </div>
    </>
  );
};

export default ChangeLanguage;
