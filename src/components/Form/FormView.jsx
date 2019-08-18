import React from "react";

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
        <input type="range" min="100" max="5000" value="100" />
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
        <a href="/">E-Consent,</a>
        {"  "}
        <a href="/">Privacy Policy,</a>
        {"  "}
        <a href="/">Terms & Conditions,</a>
        {"  "}
        <a href="/">Responsible Lending & Marketing</a>
        {" and "}
        <a href="/">Legal Disclaimers.</a>
      </div>
    </div>
  );
};

export default FormView;
