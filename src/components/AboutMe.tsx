import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useTranslation } from "react-i18next";
import github from "../images/Github-595b40b65ba036ed117d442f.svg";
import gitlab from "../images/Gitlab-595b40b65ba036ed117d415e.svg";

const AboutNetwork: React.FC = () => {
  return (
    <p>
      <a
        href="https://github.com/edumarcal"
        className="App-header-menu-network"
      >
        <img src={github} alt="Github" height="28" width="28" />
      </a>
      <a
        href="https://gitlab.com/edumarcal"
        className="App-header-menu-network"
      >
        <img src={gitlab} alt="Github" height="28" width="28" />
      </a>
    </p>
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
        <FontAwesomeIcon icon={faMapMarkerAlt} /> Natal, RN
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
