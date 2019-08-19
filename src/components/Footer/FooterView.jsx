import React from "react";
import { Link } from "react-router-dom";
import * as pathnames from "../../constants/pathnames";

import styles from "./Footer.module.css";
import logo from "../../assets/images/logo.png";

const FooterView = () => {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.wrapper}>
        <div className={styles.links}>
          <div>
            <Link className={styles.logo} to={pathnames.privacyPolicy}>
              <img src={logo} alt="logo" />
            </Link>
          </div>
          <div>
            <Link to={pathnames.privacyPolicy}>ABOUT US</Link>
            <Link to={pathnames.privacyPolicy}>HOW IT WORKS</Link>
            <Link to={pathnames.privacyPolicy}>FAQ</Link>
          </div>
          <div>
            <Link to={pathnames.eConsent}>E-CONSENT</Link>
            <Link to={pathnames.privacyPolicy}>PRIVACY POLICY</Link>
            <Link to={pathnames.termsConditions}>TERMS & CONDITIONS</Link>
          </div>
          <div>
            <Link to={pathnames.legalDisclaimer}>LEGAL DISCLAIMERS</Link>
            <Link to={pathnames.contactUs}>CONTACT US</Link>
            <Link to={pathnames.unsubscribe}>UNSUBSCRIBE</Link>
          </div>
        </div>
        <div className={styles.copyright}>
          <p>3614 W Magnolia Blvd, Burbank, CA 91505.</p>
          <p>{`© 2017-${year} Uploan Corp. All Rights Reserved.`}</p>
        </div>
      </div>
    </footer>
  );
};

export default FooterView;
