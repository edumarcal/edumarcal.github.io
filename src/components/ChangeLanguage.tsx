import i18next from "i18next";
import React from "react";

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

  return (
    <>
      <div
        className={`App-header-menu-button${isActiveLanguage("en")}`}
        onClick={handleChangeLanguage("en")}
      >
        English
      </div>{" "}
      <div
        className={`App-header-menu-button${isActiveLanguage("pt")}`}
        onClick={handleChangeLanguage("pt")}
      >
        Português
      </div>
    </>
  );
};

export default ChangeLanguage;
