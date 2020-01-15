import React from "react";
import { useTranslation } from "react-i18next";

const Project: React.FC = () => {
  const { t } = useTranslation();
  return (
    <>
      <h2>{t("project.title")}</h2>
      <div className="App-card">
        <i className="fab fa-html5"></i>
        <a href="https://findies.herokuapp.com/" className="App-link">
          Findies
        </a>{" "}
        - {t("project.findies")}
      </div>
      <div className="App-card-divider"></div>
      <div className="App-card">
        <a href="https://oxedesign.herokuapp.com/" className="Ap-link">
          Oxê Design
        </a>{" "}
        - {t("project.oxeDesign")}
      </div>
    </>
  );
};

export default Project;
