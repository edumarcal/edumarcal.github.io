import React from "react";
import { useTranslation } from "react-i18next";

const AboutNetwork: React.FC = () => {
  return (
    <div className="App-horizontal-list">
      <ul>
        <li>
          <a href="https://github.com/edumarcal" title="Github">
            <i className="cib-github"></i>
          </a>
        </li>
        <li>
          <a href="https://gitlab.com/edumarcal" title="Gitlab">
            <i className="cib-gitlab"></i>
          </a>
        </li>
      </ul>
    </div>
  );
};

const AboutMe: React.FC = () => {
  const social = [
    {
      title: "WhatsApp",
      link: "https://api.whatsapp.com/send?phone=55084991632045"
    },
    {
      title: "Telegram",
      link: "https://telegram.me/edumarcal"
    },
    {
      title: "Facebook",
      link: "https://www.facebook.com/eduardo.marcal.techlife"
    },
    {
      title: "Instagram",
      link: "https://www.instagram.com/eduardomarcaloliveira/"
    },
    {
      title: "Twitter",
      link: "https://twitter.com/edumarcalnet"
    }
  ];
  const { t } = useTranslation();
  return (
    <>
      <h1>{t("about.me")} Eduardo Marçal</h1>
      <p>{t("about.description")}</p>
      <p>
        <i className="cil-location-pin"></i>
        Natal, RN
      </p>
      <AboutNetwork />
      <p>
        {t("about.contact")}{" "}
        {social.map((s, idx) => (
          <a href={s.link} key={idx} className="App-link">
            {s.title}
            {idx + 1 !== social.length ? ", " : " "}
          </a>
        ))}
        {t("about.or")}{" "}
        <a href="mailto:edumarcalnet@gmail.com" className="App-link">
          email
        </a>
      </p>
    </>
  );
};

export default AboutMe;
