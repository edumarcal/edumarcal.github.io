import React from "react";
import { useTranslation } from "react-i18next";

const TalkWorkshop: React.FC = () => {
  const { t } = useTranslation();
  return (
    <>
      <h2>{t("talks.title")}</h2>
      <div className="App-card">
        <h3 className="App-card-title">
          <a
            href="https://drive.google.com/file/d/1oZrB3Ya89C_6x6jJj9ARpdafsedRTII8/view?usp=sharing"
            className="App-link"
          >
            2017 Laravel (Dusk)
          </a>
        </h3>
        <p className="App-card-content">{t("talks.navi")}</p>
      </div>
      <div className="App-card-divider"></div>
      <div className="App-card">
        <h3 className="App-card-title">
          <a
            href="https://drive.google.com/drive/folders/1nNzCpwfpdTDNlLEyjP31YAEMKTGbVqkC?usp=sharing"
            className="App-link"
          >
            2016 PM-CE
          </a>
        </h3>
        <p className="App-card-content">{t("talks.pmce")}</p>
      </div>
    </>
  );
};

export default TalkWorkshop;
