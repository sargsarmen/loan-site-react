import React from "react";
import PropTypes from "prop-types";
import Header from "../Header";
import Footer from "../Footer";

const LayoutView = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};

LayoutView.propTypes = {
  children: PropTypes.node.isRequired
};

export default LayoutView;
