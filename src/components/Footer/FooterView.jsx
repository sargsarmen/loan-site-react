import React from "react";

import styles from "./Footer.module.css";
import logo from "../../assets/images/logo.png";

const FooterView = () => {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.wrapper}>
        <div className={styles.links}>
          <div>
            <a href="/" className={styles.logo}>
              <img src={logo} alt="logo" />
            </a>
          </div>
          <div>
            <a href="/">ABOUT US</a>
            <a href="/">HOW IT WORKS</a>
            <a href="/">FAQ</a>
          </div>
          <div>
            <a href="/">E-CONSENT</a>
            <a href="/">PRIVACY POLICY</a>
            <a href="/">TERMS & CONDITIONS</a>
          </div>
          <div>
            <a href="/">LEGAL DISCLAIMERS</a>
            <a href="/">CONTACT US</a>
            <a href="/">UNSUBSCRIBE</a>
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
