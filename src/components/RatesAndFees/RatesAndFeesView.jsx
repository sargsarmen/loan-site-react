import React from "react";
import ImageSection from "../ImageSection";

import styles from "./RatesAndFees.module.css";

const RatesAndFeesView = () => {
  return (
    <div>
      <ImageSection title="RATES & FEES" />
      <section className={styles.section}>
        <h3>Think About Important Things</h3>
        <p>
          Short term loans are useful, such as to pay unexpected bills, to make car repairs, and to fill in financial
          gaps. These types of loans are not intended to be a solution for your long-term financial issues.
        </p>
        <h3>Connection Fees For Loan</h3>
        <p>
          We will connect you with a qualified lender and lending partner. We will never charge a fee for our services.
          Once you have been connected with a third party lender and lending partner, they will disclose their rates and
          fees. Before you sign a loan agreement, please be sure to completely read the agreement so you will understand
          the fees associated with your loan. You are not obligated to sign an agreement. If you have additional
          questions about your existing loan agreement, contact your lender or lending partner directly.
        </p>
        <h3>Explanation of Representative APR Range</h3>
        <p>
          An annual percentage rate (APR) is the annual rate charged for borrowing or earned through an investment. APR
          is expressed as a percentage that represents the actual yearly cost of funds over the terms of a loan.
          ?????.com is not a lending agency or an online cash advance broker, so we are unable to quote an exact APR for
          your loan. The specific APR of your loan depends on your lender. After you are connected with a lender and an
          offer is made, the lender will state the exact terms in your online cash advance agreement, including the APR
          and any other additional charges and/or fees. A representative sample APR range could be anywhere from 200% to
          2,290%. The actual APR of a specific loan will be disclosed by the third party lender or lending partner after
          your application has been reviewed and a loan offer has been extended to you. Be sure that you fully
          understand your financial responsibility for repaying the amount of the loan and all interest and fees
          associated with your loan.
        </p>
      </section>
    </div>
  );
};

export default RatesAndFeesView;
