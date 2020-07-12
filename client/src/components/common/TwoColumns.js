import React from "react";
import { Row, Col } from "react-bootstrap";

const TwoColumns = ({ left, right }) => {
  return (
    <Row>
      <Col className="pl-4 pr-4" lg={6}>
        {left}
      </Col>
      <Col className="pl-4 pr-4" lg={6}>
        {right}
      </Col>
    </Row>
  );
};

export default TwoColumns;
