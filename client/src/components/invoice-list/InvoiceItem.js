import React, { Fragment } from "react";

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

export default InvoiceItem;
