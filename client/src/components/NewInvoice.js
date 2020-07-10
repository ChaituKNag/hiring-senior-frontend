import React, { Fragment } from "react";
import {
  Col,
  Row,
  Container,
  Form,
  Card,
  Table,
  Button
} from "react-bootstrap";

const TextField = ({
  label,
  id,
  placeholder,
  defaultValue,
  onChange,
  as = "input",
  required = false
}) => (
  <Form.Group as={Row} controlId={id}>
    {label && (
      <Form.Label>
        <strong>{label}</strong>
      </Form.Label>
    )}
    <Form.Control
      defaultValue={defaultValue}
      onChange={onChange}
      placeholder={placeholder}
      as={as}
      required={required}
    />
  </Form.Group>
);

const SingleColumn = ({ children, padded = false }) => (
  <Row>
    <Col className={padded ? "pl-4 pr-4" : ""}>{children}</Col>
  </Row>
);

const TwoColumn = ({ left, right }) => (
  <Row>
    <Col className="pl-4 pr-4" lg={6}>
      {left}
    </Col>
    <Col className="pl-4 pr-4" lg={6}>
      {right}
    </Col>
  </Row>
);

const NewInvoice = () => {
  const handleChange = name => e => {
    console.log(name, e);
  };
  const handleSubmit = e => {
    e.preventDefault();
    console.log(e.target);
  };
  return (
    <Container>
      <h1 className="text-center m-3">New Invoice</h1>
      <Form onSubmit={handleSubmit}>
        <Card body>
          <h2>Main details:</h2>
          <TwoColumn
            left={
              <Fragment>
                <TextField
                  id="companyName"
                  label="Your company name:"
                  placeholder="XYZ Inc."
                  onChange={handleChange("companyName")}
                  required
                />
                <TextField
                  id="employeeName"
                  label="Your name:"
                  placeholder="John Doe"
                  onChange={handleChange("employeeName")}
                  required
                />
                <TextField
                  id="companyAddress"
                  label="Your Address:"
                  placeholder="123 Bakers street, London, 51234"
                  onChange={handleChange("companyAddress")}
                  as="textarea"
                  required
                />
              </Fragment>
            }
            right={
              <Fragment>
                <TextField
                  id="clientCompanyName"
                  label="Client company name:"
                  placeholder="ABCD Inc."
                  onChange={handleChange("clientCompanyName")}
                  required
                />
                <TextField
                  id="clientName"
                  label="Client name:"
                  placeholder="Jane Doe"
                  onChange={handleChange("clientName")}
                  required
                />
                <TextField
                  id="clientAddress"
                  label="Client address:"
                  placeholder="456 Birmingham street, Yorkshire, 54321"
                  onChange={handleChange("clientAddress")}
                  as="textarea"
                  required
                />
              </Fragment>
            }
          />
          <SingleColumn padded>
            <TextField
              id="projectTitle"
              label="Project title:"
              placeholder="The Best Project Of The World"
              onChange={handleChange("projectTitle")}
              required
            />
          </SingleColumn>
          <h2>Expense details:</h2>
          <SingleColumn>
            <Table bordered hover responsive="md">
              <thead>
                <tr>
                  <th>Description of work</th>
                  <th>Hours spent</th>
                  <th>Rate ($/hr)</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <Form.Control
                      required
                      placeholder="Work description..."
                    ></Form.Control>
                  </td>
                  <td>
                    <Form.Control required placeholder="10"></Form.Control>
                  </td>
                  <td>
                    <Form.Control required placeholder="80"></Form.Control>
                  </td>
                  <td>
                    <Button variant="outline-danger">Remove</Button>
                  </td>
                </tr>
              </tbody>
            </Table>
          </SingleColumn>
          <Row>
            <Col>
              <Button variant="info">Add expense row</Button>
            </Col>
            <Col>
              <h3 className="text-right">Total: $200</h3>
            </Col>
          </Row>
        </Card>
        <Row>
          <Col
            className="pt-4"
            md={{
              span: 5,
              offset: 7
            }}
          >
            <Table borderless size="sm">
              <tbody>
                <tr>
                  <td>Invoice no:</td>
                  <td>INV001</td>
                </tr>
                <tr>
                  <td>Invoice date:</td>
                  <td>
                    <Form.Control required type="date"></Form.Control>
                  </td>
                </tr>
                <tr>
                  <td>Due date:</td>
                  <td>
                    <Form.Control required type="date"></Form.Control>
                  </td>
                </tr>
              </tbody>
            </Table>
          </Col>
        </Row>
        <Row>
          <Col
            className="text-right"
            md={{
              span: 3,
              offset: 9
            }}
          >
            <Button size="lg" variant="success" type="submit">
              Submit invoice
            </Button>
          </Col>
        </Row>
      </Form>
    </Container>
  );
};

export default NewInvoice;
