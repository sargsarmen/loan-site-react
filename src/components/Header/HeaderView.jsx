import React from "react";
import { Link } from "react-router-dom";
import * as pathnames from "../../constants/pathnames";

import headerStyles from "./Header.module.css";
import logo from "../../assets/images/logo.png";

const HeaderView = () => {
  return (
    <header className={headerStyles.header}>
      <div className={headerStyles.wrapper}>
        <Link to={pathnames.home} className={headerStyles.logo}>
          <img src={logo} alt="logo" />
        </Link>
        <div className={headerStyles.menuWrap}>
          <div className={headerStyles.menu}>
            <div className={headerStyles.menuItem}>
              <Link to={pathnames.privacyPolicy} className={headerStyles.menuLink}>
                HOW IT WORKS
              </Link>
            </div>

            <div className={headerStyles.menuItem}>
              <Link to={pathnames.privacyPolicy} className={headerStyles.menuLink}>
                ABOUT US
              </Link>
            </div>

            <div className={headerStyles.menuItem}>
              <Link to={pathnames.ratesAndFees} className={headerStyles.menuLink}>
                RATES AND FEES
              </Link>
            </div>
          </div>
          <a className={headerStyles.getStarted} href="/">
            <button type="button" className={headerStyles.button}>
              GET STARTED
            </button>
          </a>
        </div>
      </div>
    </header>
  );
};

export default HeaderView;
