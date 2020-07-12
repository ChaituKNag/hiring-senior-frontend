import React from "react";
import { Container, Alert } from "react-bootstrap";

const InvoicesLoading = () => {
  return (
    <Container className="mt-5 mb-5">
      <Alert variant="warning">
        Loading... If this shows longer, there is some issue with the backend.
      </Alert>
    </Container>
  );
};

export default InvoicesLoading;
