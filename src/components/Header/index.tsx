import React from "react";
import Logo from "../../assets/logo.svg";
import styles from "./Header.module.scss";

const Header: React.FC = () => {
  return (
    <header className={styles.container}>
      <div className={styles.content}>
        <img src={Logo} alt="dt Money" />
        <button> Nova Transação</button>
      </div>
    </header>
  );
};

export default Header;
