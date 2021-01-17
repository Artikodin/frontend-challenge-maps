import React from "react";
import PropTypes from "prop-types";
import { Spin } from "antd";

import "./FetchHandler.css";

/**
 * FetchHandler
 *
 * Handle the data fetching of a component.
 * This component can render either an error message, a spinner or a component with fetched data.
 *
 * @param {Object} error - error object
 * @param {boolean} loading - loading state of the fetched data
 * @param {jsx} children - component who need to be hydrated with the fetched data
 *
 * @return {jsx}
 */
const FetchHandler = ({ error, loading, children }) => {
  if (loading)
    return (
      <div className="spinner-container">
        <Spin data-testid="spin" />
      </div>
    );

  if (error) return <p role="alert">{error.message}</p>;

  return children;
};

FetchHandler.propTypes = {
  error: PropTypes.object,
  loading: PropTypes.bool,
  children: PropTypes.node
};

FetchHandler.defaultProps = {
  error: null,
  loading: false,
  children: null
};

export default FetchHandler;
