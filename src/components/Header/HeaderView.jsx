import React, { useEffect, useRef, useCallback, useState } from "react";
import { Link } from "react-router-dom";
import className from "classnames";
import * as pathnames from "../../constants/pathnames";

import styles from "./Header.module.css";
import logo from "../../assets/images/logo.png";

const cx = className.bind(styles);

const HeaderView = () => {
  const [visible, setVisible] = useState(true);
  const menuEl = useRef(null);
  const onClick = useCallback(() => {
    setVisible(!visible);
  }, [visible]);

  useEffect(() => {
    menuEl.current.addEventListener("click", onClick);

    return () => {
      menuEl.current.removeEventListener("click", onClick);
    };
  }, []);

  return (
    <header className={styles.header}>
      <div className={styles.wrapper}>
        <Link to={pathnames.home} className={styles.logo}>
          <img src={logo} alt="logo" />
        </Link>
        <button type="button" className={cx([styles.toggle], { [styles.active]: visible })} onClick={onClick}>
          <s className={styles.bar} />
          <s className={styles.bar} />
          <s className={styles.bar} />
        </button>
        <div ref={menuEl} className={cx([styles.menuWrap], { [styles.show]: visible })}>
          <div className={styles.menu}>
            <div className={styles.menuItem}>
              <Link to={pathnames.privacyPolicy} className={styles.menuLink}>
                HOW IT WORKS
              </Link>
            </div>

            <div className={styles.menuItem}>
              <Link to={pathnames.privacyPolicy} className={styles.menuLink}>
                ABOUT US
              </Link>
            </div>

            <div className={styles.menuItem}>
              <Link to={pathnames.ratesAndFees} className={styles.menuLink}>
                RATES AND FEES
              </Link>
            </div>
            <div className={cx([styles.menuItem], [styles.hidden])}>
              <button type="button" className={styles.button}>
                GET STARTED
              </button>
            </div>
          </div>
          <a className={styles.getStarted} href="/">
            <button type="button" className={styles.button}>
              GET STARTED
            </button>
          </a>
        </div>
      </div>
    </header>
  );
};

export default HeaderView;
