import React from "react";
import { Row, Col } from "react-bootstrap";
import PropTypes from "prop-types";

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

TwoColumns.propTypes = {
  left: PropTypes.element.isRequired,
  right: PropTypes.element.isRequired
};

export default TwoColumns;
