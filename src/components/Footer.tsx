import React from "react";
import { useTranslation } from "react-i18next";

const Footer: React.FC = () => {
  const { t } = useTranslation();
  return (
    <>
      <h3 className="App-footer-title">
        {t("footer.title")}{" "}
        <span className="emoji-mart-emoji">
          <span className="App-footer-heart"></span>
        </span>{" "}
        {t("footer.by")} Eduardo Marçal
      </h3>
      <p className="App-footer-subtitle">
        {t("footer.wrong")}{" "}
        <a
          href="https://github.com/edumarcal/edumarcal.github.io/issues/new"
          className="App-link"
        >
          {" "}
          {t("footer.here")}
        </a>
      </p>
    </>
  );
};

export default Footer;
