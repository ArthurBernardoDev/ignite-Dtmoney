import React from "react";
import Summary from "../Summary";
import TransactionsTable from "../TransactionsTable";
import styles from "./Dashboard.module.scss";

const Dashboard: React.FC = () => {
  return (
    <div className={styles.container}>
      <Summary />
      <TransactionsTable />
    </div>
  );
};

export default Dashboard;
