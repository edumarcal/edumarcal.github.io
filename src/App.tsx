import React, { Suspense } from "react";
import "./App.css";
import { useTranslation } from "react-i18next";
import ChangeLanguage from "./components/ChangeLanguage";
import Education from "./components/Education";
import WorkExperience from "./components/WorkExperience";

const App: React.FC = () => {
  const { t } = useTranslation();

  return (
    <Suspense fallback={t("loading") || ""}>
      <div className="App">
        <header className="App-header">
          <ChangeLanguage />
          <p>{t("about.me")} Eduardo Marçal</p>
          <p>{t("about.contact")}</p>
          <Education />
          <WorkExperience />
        </header>
      </div>
    </Suspense>
  );
};

export default App;
