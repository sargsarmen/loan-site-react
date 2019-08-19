import React from "react";
import ImageSection from "../ImageSection";

import styles from "./PrivacyPolicy.module.css";

const PrivacyPolicyView = () => {
  return (
    <div>
      <ImageSection title="PRIVACY POLICY" />
      <section className={styles.section}>
        <h3>This Privacy Policy is effective as of: September, 2019</h3>
        <p>
          The Privacy Policy of this website (also referred to as “Policy”) applies to lgbt.com (also referred to as
          “Company,” “Site,” “we,” and “our”). We understand the importance of protecting your privacy and our policy
          notifies you, as the site user, about our services, how we collect, use and share your information,safeguard
          the personal information you provide to us and to assist you in making informed decisions when using our site.
          The operation of the Website is aligned with federal, state and local laws of the USA. By using this Site and
          by sharing your personal information on this Site, you acknowledge that you have read, understood, and agree
          to this Policy and other policies on this Site and that You are a legal resident of the United States over 18
          years old. Please read this Policy in full before using this Site.
        </p>
        <h3>What Information Do We Collect?</h3>
        <p>
          In order to use this Site and its services, You need to provide Your personally identifiable information (PII)
          via the online form on the Site and “Non-Personally Identifiable Information” (“NPII”) from You. Personally
          Identifiable Information (“PII”) is any information that can be used to identify, contact, or locate an
          individual. This information may include, but is not limited to: your name, date of birth, Social Security
          Number, telephone number, physical address, email address, driver’s license number and state, employment
          information, active military information, information about home ownership, citizenship status, frequency and
          amount of paychecks, and your banking information. Non-Personally Identifiable Information (“NPII”)includes
          but is not limited to the user’s behavioral data, such as Internet Protocol (IP) data, browser details, geo
          position, user’s operating system, the pages of referral and exiting, date and time details, Internet service
          provider details etc. This information may be obtained directly through the use of “cookies,” which is data
          sent to your computer when visiting a website. The disabling of cookies may prevent access to certain areas of
          this Site. This Company has no control over cookie technology.This information may be summarized and shared
          with third parties for the analysis of trends and statistics and is in no way linked to your PII.
        </p>
        <h3>The use of information and security</h3>
        <p>
          We collect, store, share and use Your PII information under the provisions of this Privacy Policy. This Site
          uses a number of security measures to protect your personal information from unauthorized retrieval, use,
          disclosure or destruction. This includes
        </p>
      </section>
    </div>
  );
};

export default PrivacyPolicyView;
