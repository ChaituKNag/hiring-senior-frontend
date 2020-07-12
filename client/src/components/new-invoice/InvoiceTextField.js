import React from "react";
import { Form, Row } from "react-bootstrap";

const InvoiceTextField = ({
  label,
  id,
  defaultValue,
  as = "input",
  ...restProps
}) => {
  return (
    <Form.Group as={Row} controlId={id}>
      {label && (
        <Form.Label>
          <strong>{label}</strong>
        </Form.Label>
      )}
      <Form.Control defaultValue={defaultValue} as={as} {...restProps} />
    </Form.Group>
  );
};

export default InvoiceTextField;
