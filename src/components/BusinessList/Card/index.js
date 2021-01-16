import React from "react";
import PropTypes from "prop-types";

import "./Card.css";

/**
 * Card
 *
 * Restaurant card with a small informations summary
 *
 * @param {string} name - restaurant's name
 * @param {string} image_url - restaurant's cover image
 * @param {string} url - link to the restaurant's yelp page
 * @param {object} display_phone - restaurant's phone
 * @param {string} location - restaurant's address
 *
 * @return {jsx}
 */
const Card = ({ name, image_url, url, location, display_phone }) => {
  return (
    <li className="card">
      <img src={image_url} alt={name} />
      <div className="container">
        <h4>
          <a href={url}>{name}</a>
        </h4>
        {location && location.display_address && (
          <p>
            {location.display_address[0]}
            <br />
            {location.display_address[1]}
          </p>
        )}
        <p>{display_phone}</p>
      </div>
    </li>
  );
};

Card.propTypes = {
  name: PropTypes.string,
  image_url: PropTypes.string,
  url: PropTypes.string,
  location: PropTypes.object,
  display_phone: PropTypes.string
};

Card.defaultProps = {
  name: "",
  image_url: "",
  url: "",
  location: null,
  display_phone: ""
};

export default Card;
