import React, { Suspense } from "react";
import { useTranslation } from "react-i18next";
import "./App.css";
import AboutMe from "./components/AboutMe";
import Competence from "./components/Competence";
import Education from "./components/Education";
import Footer from "./components/Footer";
import Header from "./components/Header";
import WorkExperience from "./components/WorkExperience";
import Project from "./components/Project";

const App: React.FC = () => {
  const { t } = useTranslation();

  return (
    <Suspense fallback={t("loading") || ""}>
      <div className="App">
        <Header />
        <header className="App-header">
          <AboutMe />
          <Education />
          <WorkExperience />
          <Project />
        </header>
        <Competence />
        <Footer />
      </div>
    </Suspense>
  );
};

export default App;
