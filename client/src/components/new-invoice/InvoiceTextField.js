import React from "react";
import { Form, Row } from "react-bootstrap";
import PropTypes from "prop-types";

const InvoiceTextField = ({ label, id, as = "input", ...restProps }) => {
  return (
    <Form.Group as={Row} controlId={id}>
      {label && (
        <Form.Label>
          <strong>{label}</strong>
        </Form.Label>
      )}
      <Form.Control as={as} {...restProps} />
    </Form.Group>
  );
};

InvoiceTextField.propTypes = {
  label: PropTypes.string,
  id: PropTypes.string.isRequired,
  as: PropTypes.string
};

InvoiceTextField.defaultProps = {
  as: "input"
};

export default InvoiceTextField;
