import React from "react";
import ImageSection from "../ImageSection";

import styles from "./LegalDisclaimer.module.css";

const LegalDisclaimerView = () => {
  return (
    <div>
      <ImageSection title="LEGAL DISCLAIMER" />
      <section className={styles.section}>
        <p>
          The owner/operator of this website does not make loan offers. The operator of this website is not a lender,
          does not make credit decisions or broker loans. This website offers a service that attempts to connect
          potential borrowers with a loan offer. The operator of this website does not charge you fees for its service
          and does not represent or endorse any participating shorter-duration loan lender. By submitting your
          information for loan request through this site, you consent to having it shared with financial service
          providers and/or other third parties for the purpose of facilitating your request, but it does not guarantee
          an offer for a loan. This website does not guarantee the approval for a shorter-duration loan. Credit checks
          may be performed by lenders from credit bureaus or other providers of credit information. Consumer reports or
          credit checks may be made by the lender through Equifax, Experian, TransUnion, or alternative providers. You
          are not obligated to use this site and are not obligated to contract with any third-party lender or service
          provider. All financial products, shopping products and services are presented without warranty. When
          evaluating offers, please review the financial institution’s Terms and Conditions. These disclosures are for
          informational purposes only and should not be considered legal advice.
        </p>
      </section>
    </div>
  );
};

export default LegalDisclaimerView;
