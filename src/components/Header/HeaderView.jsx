import React from "react";

import headerStyles from "./Header.module.css";
import logo from "../../assets/images/logo.png";

const HeaderView = () => {
  return (
    <header className={headerStyles.header}>
      <div className={headerStyles.wrapper}>
        <a href="/" className={headerStyles.logo}>
          <img src={logo} alt="logo" />
        </a>
        <div className={headerStyles.menu}>
          <div className={headerStyles.menuItem}>
            <a className={headerStyles.menuLink} href="/">
              HOW IT WORKS
            </a>
          </div>

          <div className={headerStyles.menuItem}>
            <a className={headerStyles.menuLink} href="/">
              ABOUT US
            </a>
          </div>

          <div className={headerStyles.menuItem}>
            <a href="/" className={headerStyles.menuLink}>
              RATES AND FEES
            </a>
          </div>
        </div>
        <a className={headerStyles.getStarted} href="/">
          <button type="button" className={headerStyles.button}>
            GET STARTED
          </button>
        </a>
      </div>
    </header>
  );
};

export default HeaderView;
