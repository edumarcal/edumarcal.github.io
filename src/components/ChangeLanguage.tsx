import React from "react";
import i18next from "i18next";

const ChangeLanguage: React.FC = () => {
  const handleChangeLanguage = (e: React.ChangeEvent<HTMLInputElement>) => {
    i18next.changeLanguage(e.target.value);
  };

  return (
    <div className="control">
      <label className="radio">
        <input
          type="radio"
          name="idioma"
          value="en"
          onChange={handleChangeLanguage}
        />
        English
      </label>
      <label className="radio">
        <input
          type="radio"
          name="idioma"
          value="pt"
          onChange={handleChangeLanguage}
        />
        Português
      </label>
    </div>
  );
};

export default ChangeLanguage;
