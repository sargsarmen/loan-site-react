import React from "react";
import PropTypes from "prop-types";

import styles from "./ImageSection.module.css";

const ImageSectionView = ({ title }) => {
  return (
    <section className={styles.container}>
      <div className={styles.overlay}>{title && <div className={styles.titleWrap}>{title}</div>}</div>
    </section>
  );
};

ImageSectionView.defaultProps = {
  title: null
};

ImageSectionView.propTypes = {
  title: PropTypes.string
};

export default ImageSectionView;
