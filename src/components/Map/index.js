import React from "react";
import PropTypes from "prop-types";
import GoogleMapReact from "google-map-react";

import "./Map.css";
import { COORDS } from "./utils";
import Pin from "./Pin";

/**
 * Map
 *
 * Google map filled with Pins according to businesses location.
 * To integrate the map in a seamless way in react the library google-map-react is used.
 * For more infos about library see: https://github.com/google-map-react/google-map-react
 *
 * @param {Object[]} businesses - an array of all differents businesses (restaurants)
 *
 * @return {jsx}
 */
const Map = ({ businesses }) => {
  return (
    <div className="places-map">
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_MAPS_API_KEY }}
        defaultCenter={COORDS["Europe/Berlin"]}
        defaultZoom={8}
      >
        {businesses.map(({ alias, coordinates: { latitude, longitude } }) => (
          <Pin key={alias} lat={latitude} lng={longitude} />
        ))}
      </GoogleMapReact>
    </div>
  );
};

Map.propTypes = {
  businesses: PropTypes.array
};

Map.defaultProps = {
  businesses: []
};

export default Map;
