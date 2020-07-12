import React from "react";
import { Row, Col } from "react-bootstrap";

const SingleColumn = ({ children, padded = false }) => {
  return (
    <Row>
      <Col className={padded ? "pl-4 pr-4" : ""}>{children}</Col>
    </Row>
  );
};

export default SingleColumn;
