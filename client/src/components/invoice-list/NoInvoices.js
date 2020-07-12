import React from "react";
import { Container, Alert } from "react-bootstrap";
import { Link } from "react-router-dom";

const NoInvoices = () => {
  return (
    <Container className="mt-5 mb-5">
      <Alert variant="info">
        No invoices yet! <Link to="/new-invoice">Create new...</Link>
      </Alert>
    </Container>
  );
};

export default NoInvoices;
