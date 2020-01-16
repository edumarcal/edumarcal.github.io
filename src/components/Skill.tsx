import React from "react";
import { useTranslation } from "react-i18next";
import githubActions from "../images/actions-icon-actions.svg";
import cypress from "../images/cypress.svg";
import sqlServer from "../images/white-ms.svg";

const Skill: React.FC = () => {
  const { t } = useTranslation();
  return (
    <div className="App-horizontal-list">
      <h2>{t("skill.title")}</h2>
      <p>{t("skill.subtitle")}</p>

      <h4>{t("skill.language")}</h4>
      <ul>
        <li>
          <a href="https://golang.org/" title="Golang">
            <i className="cib-go"></i>
          </a>
        </li>
        <li>
          <a href="https://docs.microsoft.com/pt-br/dotnet/" title=".Net">
            <i className="cib-dot-net"></i>
          </a>
        </li>
        <li>
          <a href="https://www.java.com/" title="Java">
            <i className="cib-java"></i>
          </a>
        </li>
        <li>
          <a href="https://developer.android.com/" title="Android">
            <i className="cib-android"></i>
          </a>
        </li>
        <li>
          <a href="https://www.php.net/" title="PHP">
            <i className="cib-php"></i>
          </a>
        </li>
        <li>
          <a href="https://laravel.com/" title="Laravel">
            <i className="cib-laravel"></i>
          </a>
        </li>
        <li>
          <a
            href="https://developer.mozilla.org/pt-BR/docs/Web/HTML/HTML5"
            title="HTML"
          >
            <i className="cib-html5"></i>
          </a>
        </li>
        <li>
          <a
            href="https://developer.mozilla.org/pt-BR/docs/Web/CSS"
            title="CSS"
          >
            <i className="cib-css3"></i>
          </a>
        </li>
        <li>
          <a
            href="https://developer.mozilla.org/pt-BR/docs/Aprender/JavaScript"
            title="JavaScript"
          >
            <i className="cib-javascript"></i>
          </a>
        </li>
        <li>
          <a href="https://reactjs.org/" title="ReactJS">
            <i className="cib-react"></i>
          </a>
        </li>
        <li>
          <a href="https://angular.io/" title="Angular">
            <i className="cib-angular"></i>
          </a>
        </li>
        <li>
          <a href="https://vuejs.org/" title="VueJS">
            <i className="cib-vue-js"></i>
          </a>
        </li>
        <li>
          <a href="https://flutter.dev/" title="Flutter">
            <i className="cib-flutter"></i>
          </a>
        </li>
        <li>
          <a href="https://graphql.org/" title="GraphQL">
            <i className="cib-graphql"></i>
          </a>
        </li>
      </ul>

      <h4>{t("skill.db")}</h4>
      <ul>
        <li>
          <a
            href="https://www.microsoft.com/pt-br/sql-server"
            title="SQL Server"
          >
            <img
              alt="SQL Server"
              title="SQL Server"
              src={sqlServer}
              width="50px"
              height="50px"
            />
          </a>
        </li>
        <li>
          <a href="https://www.mysql.com/" title="MySQL">
            <i className="cib-mysql"></i>
          </a>
        </li>
        <li>
          <a href="https://www.postgresql.org/" title="PostgreSQL">
            <i className="cib-postgresql"></i>
          </a>
        </li>
        <li>
          <a href="https://www.mongodb.com/" title="MongoDB">
            <i className="cib-mongodb"></i>
          </a>
        </li>
        <li>
          <a href="https://redis.io/" title="Redis">
            <i className="cib-redis"></i>
          </a>
        </li>
      </ul>

      <h4>{t("skill.other")}</h4>
      <ul>
        <li>
          <a href="https://git-scm.com/" title="Git">
            <i className="cib-git"></i>
          </a>
        </li>
        <li>
          <a href="https://www.docker.com" title="Docker">
            <i className="cib-docker"></i>
          </a>
        </li>
        <li>
          <a href="https://graphql.org/" title="CircleCI">
            <i className="cib-circleci"></i>
          </a>
        </li>
        <li>
          <a href="https://www.cypress.io/" title="Cypress">
            <img
              src={cypress}
              alt="Cypress"
              title="Cypress"
              width="50px"
              height="50px"
            />
          </a>
        </li>
        <li>
          <a href="https://github.com/features/actions">
            <img
              alt="GitHub Actions"
              title="GitHub Actions"
              src={githubActions}
            />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Skill;
