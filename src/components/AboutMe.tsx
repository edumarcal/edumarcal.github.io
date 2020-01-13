import React from "react";
import { useTranslation } from "react-i18next";

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
    },
    {
      title: "Github",
      link: "https://github.com/edumarcal"
    },
    {
      title: "GitLab",
      link: "https://gitlab.com/edumarcal"
    }
  ];
  const { t } = useTranslation();
  return (
    <>
      <p>{t("about.me")} Eduardo Marçal</p>
      <p>{t("about.description")}</p>
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
