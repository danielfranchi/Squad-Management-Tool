import React, { useState } from "react";
import { Redirect } from "react-router-dom";

import styles from "./Header.module.scss";

const Header = () => {
  const [menuHome, setMenuHome] = useState(false);

  const header = () => {
    setMenuHome(true);
  };

  return (
    <header className={styles.header}>
      <h2 onClick={header} className={styles.h2}>
        Squad Management Tool
      </h2>

      <div className={styles.headerUser}>
        <span>John Doe</span>
        <p>JD</p>
      </div>

      {menuHome !== false && <Redirect to="/" />}
    </header>
  );
};

export default Header;
