import React from "react";

import Form from "../Form";
import styles from "./HomePage.module.css";

const HomePageView = () => {
  return (
    <main>
      <section className={styles.container}>
        <div className={styles.overlay}>
          <div className={styles.formCont}>
            <Form />
          </div>
        </div>
      </section>
      <section className={styles.section}>
        <h2>Why Us</h2>
        <p>
          ??????.com offers an easy way to get money keeping your security. This ia a loan for everything from home
          repairs to rental payments,from car repairs to other bills and expenses. Our loan connection service is free
          and connecting you with one of trusted third party lenders and lending partners within a several minutes to
          get you up to $5,000.To get the process started you need to fill out our secure online application
        </p>
      </section>
      <section className={styles.section}>
        <div className={styles.factsWrapp}>
          <div className={styles.factsCont}>
            <div className={styles.facts}>
              <div className={styles.factWrap}>
                <span className={styles.count}>65K</span>
                <span className={styles.title}>Loans Taken</span>
              </div>
            </div>
            <div className={styles.facts}>
              <div className={styles.factWrap}>
                <span className={styles.count}>18</span>
                <span className={styles.title}>Offices</span>
              </div>
            </div>
            <div className={styles.facts}>
              <div className={styles.factWrap}>
                <span className={styles.count}>100%</span>
                <span className={styles.title}>Happy Clients</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.section}>
        <div className={styles.row}>
          <div className={styles.card}>
            <img src="https://payday-loans.cmsmasters.net/wp-content/uploads/2015/11/Без-имени-1.png" alt="1" />
            <h3 className={styles.cardTitle}>Get Started</h3>
            <div className={styles.cardContent}>
              <p>
                Take a few minutes to fill out our simple loan request form. Don’t worry about your information being
                safe; our website is secured by the latest technology. We don’t ask for a lot of information, only what
                is necessary to get your loan request accepted. If your loan request is approved, we will try to find
                you a lender or lending partner right away. If we are unable to connect you with a lender or lending
                partner, you will find out immediatel
              </p>
            </div>
          </div>
          <div className={styles.card}>
            <img src="https://payday-loans.cmsmasters.net/wp-content/uploads/2015/11/Без-имени-3.png" alt="2" />

            <h3 className={styles.cardTitle}>Get Connected</h3>
            <div className={styles.cardContent}>
              <p>
                After we connect you with a third party lender or lending partner, you are redirected to their website.
                The lender or lending partner makes you a loan offer, presents you with terms, and asks for your
                approval. If you approve of the terms, you’re one step closer to getting your money. If you change your
                mind and don’t want the loan, simply decline it.
              </p>
            </div>
          </div>
          <div className={styles.card}>
            <img src="https://payday-loans.cmsmasters.net/wp-content/uploads/2015/11/Без-имени-2.png" alt="3" />
            <h3 className={styles.cardTitle}>Get Your Money</h3>
            <div className={styles.cardContent}>
              <p>
                Once you agree to the lender’s terms and are approved for a loan, your money will be deposited into your
                personal bank account, usually as soon as the next business day. It couldn’t be simpler to get your
                money!
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default HomePageView;
