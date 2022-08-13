import i18next from "i18next";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";

const ChangeLanguage: React.FC = () => {
  const [language, setLanguage] = useState("en");
  const handleChangeLanguage = (value: string) => (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    e.preventDefault();
    setLanguage(value);
    i18next.changeLanguage(value);
  };

  const isActiveEnLanguage = () => {
    return language === "en" ? "-active" : "";
  };

  const isActivePtBrLanguage = () => {
    return language === "pt" || language === "pt-BR" ? "-active" : "";
  };

  const { t } = useTranslation();
  return (
    <>
      <div
        className={`App-header-menu-button${isActiveEnLanguage()}`}
        onClick={handleChangeLanguage("en")}
      >
        {t("language.english")}
      </div>{" "}
      <div
        className={`App-header-menu-button${isActivePtBrLanguage()}`}
        onClick={handleChangeLanguage("pt")}
      >
        {t("language.portuguese")}
      </div>
    </>
  );
};

export default ChangeLanguage;
