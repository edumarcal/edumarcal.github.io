import React from "react";
import DataTable from "react-data-table-component";
import { useTranslation } from "react-i18next";
import certificates from "../data/certificates.json";

interface Certificate {
  year: string;
  description: string;
  workload: string;
  institute: string;
  link: string;
}
const Competence: React.FC = () => {
  const { t } = useTranslation();

  const columns = [
    {
      name: t("competence.table.header.preview"),
      selector: "preview",
      sortable: true,
      cell: (value: Certificate) => (
        <a href={value.link}>
          <i className="cil-external-link"></i>
        </a>
      ),
      ignoreRowClick: true,
      allowOverflow: true,
      button: true
    },
    {
      name: t("competence.table.header.year"),
      selector: "year",
      sortable: true
    },
    {
      name: t("competence.table.header.description"),
      selector: "description",
      sortable: true,
      grow: 5
    },
    {
      name: t("competence.table.header.workload"),
      selector: "workload",
      sortable: true
    },
    {
      name: t("competence.table.header.institute"),
      selector: "institute"
    }
  ];

  return (
    <div className={"App-training"}>
      <h2>{t("competence.title")}</h2>
      <div className="App-training-table">
        <DataTable
          columns={columns}
          data={certificates}
          highlightOnHover
          pointerOnHover
          pagination
          noHeader
        />
      </div>
    </div>
  );
};

export default Competence;
