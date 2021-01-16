import React from "react";

import "./Pin.css";

/**
 * Pin
 *
 * Custom Pin shaped as Vimcar logo
 *
 * @return {jsx}
 */
const Pin = () => {
  return (
    <div className="pin">
      <img src="/favicon.png" alt="pin" className="pin__img" />
    </div>
  );
};

export default Pin;
