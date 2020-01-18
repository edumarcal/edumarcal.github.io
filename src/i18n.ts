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
            description: "...",
            contact: "You can reach me at",
            or: "or"
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
          },
          experience: {
            title: "Work experience",
            maisData: {
              title: "Full Stack Developer / Mais Data Comunicação LTDA - ME",
              institution: "Mais Data Comunicação LTDA - ME",
              period: "From August 2018 to December 2019",
              details:
                "Web application development, as well as implementing new features of Cabo Telecom's Second Way Appbot, having as main technologies: Golang, Laravel, ReactJS, GraphQL, MongoDB, PostgreSQL and Git for code versioning."
            },
            navi: {
              title: "Junior Tester / Núcleo Avançado de Inovação",
              institution:
                "Federal Institute of Science and Technology of Rio Grande do Norte",
              period: "From June 2017 - Until December 2017",
              details:
                "Development of activities in the creation and performance of platform acceptance tests, in addition to web development. Technologies used: PHP (Laravel), PostgreSQL, Travis and Git for version control."
            },
            ccsl: {
              title: "Trainee / Centro de Competências em Software Livre",
              institution:
                "Federal Institute of Science and Technology of Rio Grande do Norte",
              period: "From March 2017 - Until June 2017",
              details:
                "Development of an application for management of the institute's access control, using the technologies: Qt in C ++ and Raspberry Pi integration test with sensors."
            },
            pmce: {
              title:
                "Teacher / Dr. Concurso (preparatory to the PM-EC competition)",
              institution: "Dr. Concurso",
              period: "From July 2016 - Until September 2016",
              details:
                "Taught the informatics contents for the PM-CE contest, governed by the Edital 01/2016"
            },
            instrutor: {
              title: "Computing instructor / Fatex | Escola de Profissões",
              institution: "Fatex | Escola de Profissões",
              period: "From January 2010 - Until December 2011",
              details:
                "Teaching basic computing (Windows, Word, Excel, PowerPoint, Outlook and Browsers) and advanced computing (CorelDRAW, PhotoShop and AutoCAD)."
            }
          },
          competence: {
            title: "Training",
            table: {
              header: {
                preview: "Preview",
                year: "Year",
                workload: "Workload",
                description: "Description",
                institute: "Institute"
              }
            }
          },
          project: {
            title: "Projects",
            findies: "Sports management platform.",
            oxeDesign: "Startup Interior Designer Projects."
          },
          talks: {
            title: "Talks and Workshops",
            pmce:
              "Public Tender for entry to the position of PM Soldier of the career of military police squares of the military police of Ceará",
            navi: "Development of functional tests in Laravel (Dusk)"
          },
          skill: {
            title: "Profissional Skill",
            subtitle: "I can say I'm good at",
            language: "LANGUAGES",
            db: "DATABASE",
            other: "OTHERS"
          },
          language: {
            title: "Languages",
            subtitle: "I speak",
            native: "Native",
            basic: "Elementary proficiency",
            portuguese: "Portuguese",
            english: "English"
          },
          footer: {
            title: "Made with",
            by: "by",
            wrong: "See something wrong? Report",
            here: "here"
          }
        }
      },
      pt: {
        translation: {
          loading: "Carregando...",
          about: {
            title: "Olá, Eu sou",
            me: "Olá, Eu sou",
            description: "...",
            contact: "Você pode me encontrar em",
            or: "ou"
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
          },
          experience: {
            title: "Experiências profissionais",
            maisData: {
              title:
                "Desenvolvedor Full Stack / Mais Data Comunicação LTDA - ME",
              institution: "Mais Data Comunicação LTDA - ME",
              period: "De agosto de 2018 a dezembro de 2019",
              details:
                "Desenvolvimento de aplicações web, além de implementar novas funcionalidades do Appbot de Segunda via da Cabo Telecom, tendo como principais tecnologias: Golang, Laravel, ReactJS, GraphQL, MongoDB, PostgreSQL e Git para o versionamento de código."
            },
            navi: {
              title: "Junior Tester / Núcleo Avançado de Inovação",
              institution:
                "Instituto Federal de Educação, Ciência e Tecnologia do Rio Grande do Norte",
              period: "De junho de 2017 - Até dezembro de 2017",
              details:
                "Desenvolvimento de atividades na criação e realização de testes de aceitação da plataforma, além do desenvolvimento web. Tecnologias utilizadas: PHP (Laravel), PostgreSQL, Travis e Git para controle de versão."
            },
            ccsl: {
              title: "Estagiário / Centro de Competências em Software Livre",
              institution:
                "Instituto Federal de Educação, Ciência e Tecnologia do Rio Grande do Norte",
              period: "De março de 2017 - Até junho 2017",
              details:
                "Desenvolvimento de uma aplicação para gerenciamento de o controle de acesso do instituto, utilizando as tecnologias: Qt em C++ e teste de integração do Raspberry Pi com os sensores."
            },
            pmce: {
              title:
                "Professor / Dr. Concurso (preparatório para o concurso da PM-CE)",
              institution: "Dr. Concurso",
              period: "De julho de 2016 - Até setembro 2016",
              details:
                "Ministrado os conteúdos de informática para o concurso da PM-CE, regido pelo Edital 01/2016"
            },
            instrutor: {
              title: "Instrutor de Informática / Fatex | Escola de Profissões",
              institution: "Fatex | Escola de Profissões",
              period: "De janeiro de 2010 - Até dezembro 2011",
              details:
                "Ensinando informática básica (Windows, Word, Excel, PowerPoint, Outlook e Navegadores) e informática avançada (CorelDRAW, PhotoShop e AutoCAD)."
            }
          },
          competence: {
            title: "Capacitações",
            table: {
              header: {
                preview: "Visualizar",
                year: "Ano",
                workload: "Carga Horária",
                description: "Descrição",
                institute: "Instituição"
              }
            }
          },
          project: {
            title: "Projetos",
            findies: "Plataforma de gerenciamento de partidas esportivas.",
            oxeDesign: "Startup de projetos de Designer de interiores."
          },
          talks: {
            title: "Palestras e Workshops",
            pmce:
              "Concurso Público para ingresso no cargo de Soldado PM da carreira de praças policiais militares da polícia militar do Ceará",
            navi: "Desenvolvimento de testes funcionais no Laravel (Dusk)"
          },
          skill: {
            title: "Habilidades",
            subtitle: "Eu posso dizer que sou bom em",
            language: "LINGUAGENS",
            db: "BANCO DE DADOS",
            other: "OUTROS"
          },
          language: {
            title: "Idiomas",
            subtitle: "Eu falo",
            native: "Nativo",
            basic: "Nível básico",
            portuguese: "Português",
            english: "Inglês"
          },
          footer: {
            title: "Feito",
            by: "por",
            wrong: "Viu algo errado? informe",
            here: "aqui"
          }
        }
      }
    },
    react: {
      useSuspense: false
    }
  });

export default i18next;
