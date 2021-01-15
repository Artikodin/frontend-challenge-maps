import React from "react";
import PropTypes from "prop-types";
import { Select, Typography } from "antd";
import "antd/dist/antd.css";

import "./SearchableSelect.css";

const { Title } = Typography;

/**
 * SearchableSelect
 *
 * Display the searchable selector from the ant design system, a callback is triggered on every change.
 * For the purpose of the exercice the multiple mode has been removed.
 * In case the application scale and PM decide to allow filter on multiple items add isMultiple props.
 * For more infos about ant select see: https://ant.design/components/select/
 *
 * @param {Object[]} options - required - an array of object used to display the select's options
 * @param {function} onChange - triggered when an element is added or removed from the selector
 * @param {string} placeholder - explain the user action or a brief description. This is not replacing the title!
 * @param {string} title - label the SearchableSelect component. This is optional but it's strongly recommended!
 * @param {boolean} isMultiple - define if the component should accept multiple items or not
 *
 * @return {jsx}
 */
const SearchableSelect = ({
  options,
  onChange,
  placeholder,
  title,
  isMultiple
}) => (
  <div className="multiple-select">
    {title && <Title level={4}>{title}</Title>}
    <Select
      className="multiple-select__selector"
      allowClear
      mode={isMultiple ? "multiple" : ""}
      showSearch
      showArrow
      placeholder={placeholder}
      options={options}
      onChange={onChange}
    />
  </div>
);

SearchableSelect.propTypes = {
  options: PropTypes.array.isRequired,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  title: PropTypes.string,
  isMultiple: PropTypes.bool
};

SearchableSelect.defaultProps = {
  onChange: () => {},
  placeholder: "",
  title: "",
  isMultiple: false
};

export default SearchableSelect;
