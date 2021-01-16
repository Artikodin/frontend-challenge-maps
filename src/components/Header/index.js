import React from "react";

import "./Header.css";

/**
 * Header
 *
 * Website header with company brand and logo
 *
 * @return {jsx}
 */
const Header = () => (
  <header className="header">
    <img src="/favicon.png" alt="logo" />
    <h1>Yelp Vimcar</h1>
  </header>
);

export default Header;
