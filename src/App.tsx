import React, { Suspense } from "react";
import "./App.css";
import { useTranslation } from "react-i18next";
import ChangeLanguage from "./components/ChangeLanguage";

const App: React.FC = () => {
  const { t } = useTranslation();

  return (
    <Suspense fallback={t("loading") || ""}>
      <div className="App">
        <header className="App-header">
          <ChangeLanguage />
          <p>{t("about.me")} Eduardo Marçal</p>
        </header>
      </div>
    </Suspense>
  );
};

export default App;
