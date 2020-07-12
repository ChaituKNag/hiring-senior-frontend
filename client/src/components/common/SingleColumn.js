import React from "react";
import { Row, Col } from "react-bootstrap";
import PropTypes from "prop-types";

const SingleColumn = ({ children, padded = false }) => {
  return (
    <Row>
      <Col className={padded ? "pl-4 pr-4" : ""}>{children}</Col>
    </Row>
  );
};

SingleColumn.propTypes = {
  children: PropTypes.element.isRequired,
  padded: PropTypes.bool
};

export default SingleColumn;
