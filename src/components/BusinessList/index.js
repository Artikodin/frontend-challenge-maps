import React from "react";
import PropTypes from "prop-types";

import Card from "./Card";
import "./BusinessList.css";

/**
 * BusinessList
 *
 * List of restaurant each card contain a small descritpion
 *
 * @param {Object[]} businesses - an array of all differents businesses (restaurants)
 *
 * @return {jsx}
 */
const BusinessList = ({ businesses }) => (
  <ul>
    {businesses.map(({ id, name, image_url, url, location, display_phone }) => (
      <Card
        key={id}
        name={name}
        image_url={image_url}
        url={url}
        location={location}
        display_phone={display_phone}
      />
    ))}
  </ul>
);

BusinessList.propTypes = {
  businesses: PropTypes.array
};

BusinessList.defaultProps = {
  businesses: []
};

export default BusinessList;
