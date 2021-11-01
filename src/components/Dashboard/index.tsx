import { style } from "@material-ui/system";
import React from "react";
import Summary from "../Summary";
import styles from "./Dashboard.module.scss";

const Dashboard: React.FC = () => {
  return (
    <div className={styles.container}>
      <Summary />
    </div>
  );
};

export default Dashboard;
