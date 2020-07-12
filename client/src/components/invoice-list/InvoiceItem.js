import React, { Fragment } from "react";
import PropTypes from "prop-types";

const InvoiceItem = ({ label, value, className }) => {
  return (
    <Fragment>
      <p>
        <strong>{label}</strong>
      </p>
      <p className={className || ""}>{value}</p>
    </Fragment>
  );
};

InvoiceItem.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  className: PropTypes.string
};

export default InvoiceItem;
