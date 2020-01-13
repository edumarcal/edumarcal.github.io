import React, { Suspense } from "react";
import { useTranslation } from "react-i18next";
import "./App.css";
import AboutMe from "./components/AboutMe";
import Education from "./components/Education";
import Header from "./components/Header";
import WorkExperience from "./components/WorkExperience";
import Footer from "./components/Footer";

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
        </header>
        <Footer />
      </div>
    </Suspense>
  );
};

export default App;
