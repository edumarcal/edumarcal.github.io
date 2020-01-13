import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGraduationCap, faSchool } from "@fortawesome/free-solid-svg-icons";
import { useTranslation } from "react-i18next";

const Education: React.FC = () => {
  const { t } = useTranslation();

  return (
    <>
      <h2>{t("education.title")}</h2>
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          contentStyle={{ background: "#fff", color: "#74777a" }}
          contentArrowStyle={{
            borderRight: "7px solid #74777a"
          }}
          date="2017"
          icon={<FontAwesomeIcon icon={faGraduationCap} />}
          iconStyle={{ background: "#74777a", color: "#fff" }}
        >
          <h3 className="vertical-timeline-element-title">
            Tecnólogo em Análise e Desenvolvimento de Sistemas
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Instituto Federal de Educação, Ciência e Tecnologia do Rio Grande do
            Norte
          </h4>
          <p>De julho de 2014 a abril de 2018</p>
          <p>
            Mercosul – A Plataforma de Livre-Trânsito de Profissionais de saúde
            nos países do MERCOSUL (Registro de Software no BR 51 2018000087-8).
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          contentStyle={{ background: "#fff", color: "#74777a" }}
          contentArrowStyle={{
            borderRight: "7px solid #74777a"
          }}
          date="2016"
          icon={<FontAwesomeIcon icon={faSchool} />}
          iconStyle={{ background: "#74777a", color: "#fff" }}
        >
          <h3 className="vertical-timeline-element-title">
            Técnico em Redes de Computadores
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Instituto Metrópole Digital (IMD/UFRN)
          </h4>
          <p>De janeiro de 2014 a dezembro de 2016</p>
          <p>Monitor de programação para redes.</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          contentStyle={{ background: "#fff", color: "#74777a" }}
          contentArrowStyle={{
            borderRight: "7px solid #74777a"
          }}
          date="2014"
          icon={<FontAwesomeIcon icon={faSchool} />}
          iconStyle={{ background: "#74777a", color: "#fff" }}
        >
          <h3 className="vertical-timeline-element-title">
            Técnico em Informática para Internet
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Instituto Metrópole Digital (IMD/UFRN)
          </h4>
          <p>De janeiro de 2012 a dezembro de 2013</p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </>
  );
};

export default Education;
