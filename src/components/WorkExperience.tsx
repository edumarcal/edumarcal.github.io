import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGraduationCap, faSchool } from "@fortawesome/free-solid-svg-icons";
import { useTranslation } from "react-i18next";

const WorkExperience: React.FC = () => {
  const { t } = useTranslation();

  return (
    <>
      <h2>{t("experience.title")}</h2>
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          contentStyle={{ background: "#fff", color: "#74777a" }}
          contentArrowStyle={{
            borderRight: "7px solid #74777a"
          }}
          date="2019"
          icon={<FontAwesomeIcon icon={faGraduationCap} />}
          iconStyle={{ background: "#74777a", color: "#fff" }}
        >
          <h3 className="vertical-timeline-element-title">
            {t("experience.maisData.title")}
          </h3>
          <h5 className="vertical-timeline-element-subtitle">
            {t("experience.maisData.institution")}
          </h5>
          <p>{t("experience.maisData.period")}</p>
          <p>{t("experience.maisData.details")}</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          contentStyle={{ background: "#fff", color: "#74777a" }}
          contentArrowStyle={{
            borderRight: "7px solid #74777a"
          }}
          date="2017"
          icon={<FontAwesomeIcon icon={faSchool} />}
          iconStyle={{ background: "#74777a", color: "#fff" }}
        >
          <h3 className="vertical-timeline-element-title">
            {t("experience.navi.title")}
          </h3>
          <h5 className="vertical-timeline-element-subtitle">
            {t("experience.navi.institution")}
          </h5>
          <p>{t("experience.navi.period")}</p>
          <p>{t("experience.navi.details")}</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          contentStyle={{ background: "#fff", color: "#74777a" }}
          contentArrowStyle={{
            borderRight: "7px solid #74777a"
          }}
          date="2017"
          icon={<FontAwesomeIcon icon={faSchool} />}
          iconStyle={{ background: "#74777a", color: "#fff" }}
        >
          <h3 className="vertical-timeline-element-title">
            {t("experience.ccsl.title")}
          </h3>
          <h5 className="vertical-timeline-element-subtitle">
            {t("experience.ccsl.institution")}
          </h5>
          <p>{t("experience.ccsl.period")}</p>
          <p>{t("experience.ccsl.details")}</p>
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
            {t("experience.pmce.title")}
          </h3>
          <h5 className="vertical-timeline-element-subtitle">
            {t("experience.pmce.institution")}
          </h5>
          <p>{t("experience.pmce.period")}</p>
          <p>
            {t("experience.pmce.details", {
              link:
                "http://www.institutoaocp.org.br/concursos/arquivos/anexo1_abert_pmce.pdf"
            })}{" "}
            <i>
              <a
                href="http://www.institutoaocp.org.br/concursos/arquivos/anexo1_abert_pmce.pdf"
                className="App-link"
              >
                ( link )
              </a>
            </i>
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          contentStyle={{ background: "#fff", color: "#74777a" }}
          contentArrowStyle={{
            borderRight: "7px solid #74777a"
          }}
          date="2011"
          icon={<FontAwesomeIcon icon={faSchool} />}
          iconStyle={{ background: "#74777a", color: "#fff" }}
        >
          <h3 className="vertical-timeline-element-title">
            {t("experience.instrutor.title")}
          </h3>
          <h5 className="vertical-timeline-element-subtitle">
            {t("experience.instrutor.institution")}
          </h5>
          <p>{t("experience.instrutor.period")}</p>
          <p>{t("experience.instrutor.details")}</p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </>
  );
};

export default WorkExperience;
