import React from "react";
import PropTypes from "prop-types";

import { Header } from "..";
import "./Layout.css";

/**
 * Layout
 *
 * Page layout with the company header
 *
 * @param {jsx} children - components you want to render
 *
 * @return {jsx}
 */
const Layout = ({ children }) => (
  <>
    <Header />
    <main>{children}</main>
  </>
);

Layout.propTypes = {
  children: PropTypes.node
};

Layout.defaultProps = {
  children: null
};

export default Layout;
