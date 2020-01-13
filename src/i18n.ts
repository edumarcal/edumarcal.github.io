import i18next from "i18next";
import { initReactI18next } from "react-i18next";

import Backend from "i18next-xhr-backend";
import LanguageDetector from "i18next-browser-languagedetector";

i18next
  // load translation using xhr -> see /public/locales
  // learn more: https://github.com/i18next/i18next-xhr-backend
  .use(Backend)
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    fallbackLng: "en",

    interpolation: {
      escapeValue: false // not needed for react as it escapes by default
    },
    resources: {
      en: {
        translation: {
          loading: "Loading...",
          about: {
            title: "Hi, I'm",
            me: "Hi, I'm",
            contact: "You can reach me at"
          },
          education: {
            title: "Education",
            tads: {
              title: "Technologist in Analysis and Development of Systems",
              institution:
                "Federal Institute of Science and Technology of Rio Grande do Norte",
              period: "From July 2014 to April 2018",
              details:
                "Mercosul - The Free Transit Platform for Health Professionals in the MERCOSUL countries.Software Registration at BR BR 51 2018000087-8"
            },
            network: {
              title: "Computer Network Technician",
              institution: "Digital Metropolis Institute (IMD / UFRN)",
              period: "From January 2014 to December 2016",
              details: "Programming monitor for networks."
            },
            web: {
              title: "Computer Technician for Internet",
              institution: "Digital Metropolis Institute (IMD / UFRN)",
              period: "From January 2012 to December 2013"
            }
          }
        }
      },
      pt: {
        translation: {
          loading: "Caregando...",
          about: {
            title: "Olá, Eu sou",
            me: "Olá, Eu sou",
            contact: "Você pode me encontrar em"
          },
          education: {
            title: "Formação acadêmica",
            tads: {
              title: "Tecnólogo em Análise e Desenvolvimento de Sistemas",
              institution:
                "Instituto Federal de Educação, Ciência e Tecnologia do Rio Grande do Norte",
              period: "De julho de 2014 a abril de 2018",
              details: ""
            },
            network: {
              title: "Técnico em Redes de Computadores",
              institution: "Instituto Metrópole Digital - IMD / UFRN",
              period: "De janeiro de 2014 a dezembro de 2016",
              details: "Monitor de programação para redes."
            },
            web: {
              title: "Técnico em Informática para Internet",
              institution: "Instituto Metrópole Digital - IMD / UFRN",
              period: "De janeiro de 2012 a dezembro de 2013"
            }
          }
        }
      }
    }
  });

export default i18next;
