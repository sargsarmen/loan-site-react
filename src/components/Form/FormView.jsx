import React from "react";
import { Link } from "react-router-dom";
import * as pathnames from "../../constants/pathnames";

import styles from "./Form.module.css";

const FormView = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.titleWrapp}>
        <p>I&apos;D LIKE TO BORROW:</p>
        <p>$2,000</p>
      </div>
      <div className={styles.sliderWrapp}>
        <p>Drag the slider below to the amount you&apos;d like to borrow</p>
        <input type="range" min="100" max="5000" defaultValue="2000" />
        <div>
          <p>100$</p>
          <p>5000$</p>
        </div>
      </div>
      <div className={styles.inputWrapp}>
        <div className={styles.inputRow}>
          <input className={styles.input} type="text" placeholder="First Name" />
          <input className={styles.input} type="text" placeholder="Last Name" />
        </div>
        <div className={styles.inputRow}>
          <input className={styles.input} type="text" placeholder="Email" />
          <input className={styles.input} type="text" placeholder="ZIP" />
        </div>
      </div>
      <input className={styles.button} type="button" value="GET STARTED" />
      <div className={styles.agree}>
        By clicking &apos;Get Started&apos;, I consent and agree to the
        {"  "}
        <Link to={pathnames.eConsent}>E-Consent,</Link>
        {"  "}
        <Link to={pathnames.privacyPolicy}>Privacy Policy,</Link>
        {"  "}
        <Link to={pathnames.termsConditions}>Terms & Conditions,</Link>
        {"  "}
        <Link to={pathnames.privacyPolicy}>Responsible Lending & Marketing,</Link>
        {" and "}
        <Link to={pathnames.legalDisclaimer}>Legal Disclaimers,</Link>
      </div>
    </div>
  );
};

export default FormView;
