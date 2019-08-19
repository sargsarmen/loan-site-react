import React from "react";
import ImageSection from "../ImageSection";

import styles from "./EConsent.module.css";

const EConsentView = () => {
  return (
    <div>
      <ImageSection title="E-CONSENT" />
      <section className={styles.section}>
        <p>?????.com reserves the right to modify these terms and conditions at our discretion, without notice.</p>
        <h3>INTRODUCTION</h3>
        <p>
          You are submitting a request to be connected with one of our third party lenders or lending partners. In order
          to offer you a loan, the third party lenders or lending partners need your consent to use and accept
          electronic signatures, records, and disclosures (“E-Consent”). This form notifies you of your rights when
          receiving electronic disclosures, notices, and information. By clicking on the link assenting to our terms,
          you acknowledge that you received this E-Consent and that you consent to conduct transactions using electronic
          signatures, electronic disclosures, electronic records, and electronic contract documents (“Disclosures”).
        </p>
        <h3>OPTION FOR PAPER RECORDS/DISCLOSURES </h3>
        <p>
          If you would like to receive a paper copy of any Disclosures, please contact your third party lender or
          lending partner directly. These Disclosures may be available to you by the third party lender or lending
          partner. Please note, some lenders or lending partners may charge a fee for sending you paper copies of
          Disclosures. The Lender or Lending Partner will retain all Disclosures as the applicable law requires.
        </p>
        <h3>SCOPE OF CONSENT</h3>
        <p>
          This E-Consent applies to all interactions online concerning you and the third party lender or lending partner
          and includes those interactions engaged in on any mobile device, including phones, smart-phones, and tablets.
          By exercising this E-Consent, the third party lender or lending partner may process your information and
          interact during all online interactions with you electronically. They may also send you notices electronically
          related to its interactions and transactions. Disclosures may be provided online at our or third party
          lenders’ or lending partners’ websites, and may be provided by e-mail.
        </p>
      </section>
    </div>
  );
};

export default EConsentView;
