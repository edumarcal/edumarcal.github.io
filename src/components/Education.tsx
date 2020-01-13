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
          date="2018"
          icon={<FontAwesomeIcon icon={faGraduationCap} />}
          iconStyle={{ background: "#74777a", color: "#fff" }}
        >
          <h3 className="vertical-timeline-element-title">
            {t("education.tads.title")}
          </h3>
          <h5 className="vertical-timeline-element-subtitle">
            {t("education.tads.institution")}
          </h5>
          <p>{t("education.tads.period")}</p>
          <p>{t("education.tads.details")}</p>
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
            {t("education.network.title")}
          </h3>
          <h5 className="vertical-timeline-element-subtitle">
            {t("education.network.institution")}
          </h5>
          <p>{t("education.network.period")}</p>
          <p>{t("education.network.details")}</p>
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
            {t("education.web.title")}
          </h3>
          <h5 className="vertical-timeline-element-subtitle">
            {t("education.web.institution")}
          </h5>
          <p>{t("education.web.period")}</p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </>
  );
};

export default Education;
