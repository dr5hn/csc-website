import React from "react";

import Headline from "@theme/Headline";
import styles from "./styles.module.scss";

const data = [
  {
    id: "oxidizer",
    name: "Oxidizer",
    highlighted: true,
  },
  {
    id: "diesel",
    name: "Diesel",
    highlighted: false,
  },
  {
    id: "rustorm",
    name: "RustORM",
    highlighted: false,
  },
];

const features = [
  {
    name: "Asynchronous",
    values: { oxidizer: true, diesel: false, rustorm: false },
  },
  {
    name: "Raw SQL",
    values: { oxidizer: true, diesel: true, rustorm: true },
  },
  {
    name: "PostgreSQL",
    values: { oxidizer: true, diesel: true, rustorm: true },
  },
  {
    name: "MySQL",
    values: { oxidizer: false, diesel: true, rustorm: true },
  },
  {
    name: "SQLite",
    values: { oxidizer: false, diesel: true, rustorm: true },
  },
];

function renderTable() {
  const size = 24;
  return (
    <table className={styles.table}>
      <thead>
        <tr>
          <th></th>
          {data.map((props, idx) => (
            <th key={idx}>{props.name}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {features.map((props, idx) => (
          <tr key={idx}>
            <td className={styles.label}>{props.name}</td>
            {props.values &&
              data.length &&
              data.map((item, idx) => (
                <td
                  key={idx}
                  className={item.highlighted ? styles.resultH : styles.result}
                >
                  
                </td>
              ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

function Comparison() {
  return (
    <>
      <section id="comparison" className={styles.comparison}>
        <div className="container">
          <div className="row">
            <div className="col col--4 col--offset-1">
              <Headline
                category="Comparison"
                title="How does Oxidizer compare to other popular options?"
                subtitle="Diesel and RustORM are other great ORM options for Rust. Here are the three crates compared."
              />
            </div>
            <div className="col col--6 col--offset-1">{renderTable()}</div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Comparison;
