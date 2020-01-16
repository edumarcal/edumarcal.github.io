import React from "react";
import { useTranslation } from "react-i18next";
import DotsProgress from "../components/DotsProgress";

const Language: React.FC = () => {
  const { t } = useTranslation();
  return (
    <>
      <h2>{t("language.title")}</h2>
      <p>{t("language.subtitle")}</p>

      <div className="row">
        <div className="col-1">
          <p className="App-language-title">{t("language.portuguese")}</p>
          <span>
            <i>{t("language.native")}</i>
          </span>
        </div>
        <div className="col-2">
          <DotsProgress maxNumberOfDots={10} numberOfActiveDots={10} />
        </div>
      </div>

      <div className="row">
        <div className="col-1">
          <p className="App-language-title">{t("language.english")}</p>
          <span>
            <i>{t("language.basic")}</i>
          </span>
        </div>
        <div className="col-2">
          <DotsProgress maxNumberOfDots={10} numberOfActiveDots={4} />
        </div>
      </div>
    </>
  );
};

export default Language;
