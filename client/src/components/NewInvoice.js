import React, { Fragment, useReducer, useEffect } from "react";
import {
  Col,
  Row,
  Container,
  Form,
  Card,
  Table,
  Button
} from "react-bootstrap";

import { actionTypes } from "../store/actions/new-invoice.actions";
import {
  defaultState,
  newInvoiceReducer
} from "../store/reducers/new-invoice.reducer";

const TextField = ({
  label,
  id,
  placeholder,
  defaultValue,
  value,
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
      value={value}
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

const NewInvoice = ({ invoiceDetails = defaultState, onSubmit }) => {
  const [state, dispatch] = useReducer(newInvoiceReducer, invoiceDetails);

  const handleChange = (section, name) => e => {
    dispatch({
      type: actionTypes.UPDATE_FIELD_VALUE,
      fieldType: section,
      key: name,
      value: e.target.value
    });
  };
  const handleExpenseChange = (name, field) => e => {
    dispatch({
      type: actionTypes.UPDATE_FIELD_VALUE,
      fieldType: "expense",
      key: name,
      field,
      value: e.target.value
    });
  };
  const handleAddExpenseRow = () => {
    dispatch({
      type: actionTypes.ADD_EXPENSE_ROW
    });
  };
  const handleRemoveExpenseRow = key => () => {
    dispatch({
      type: actionTypes.REMOVE_EXPENSE_ROW,
      key
    });
  };
  const handleSubmit = e => {
    e.preventDefault();
    onSubmit(state);
  };
  const handleReset = () => {
    dispatch({
      type: actionTypes.RESET_ALL_VALUES
    });
  };

  const expenseRows = Object.keys(state.expenseFields);
  return (
    <Container className="mb-5">
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
                  onChange={handleChange("main", "companyName")}
                  required
                  value={state.mainFields.companyName}
                />
                <TextField
                  id="employeeName"
                  label="Your name:"
                  placeholder="John Doe"
                  onChange={handleChange("main", "employeeName")}
                  required
                  value={state.mainFields.employeeName}
                />
                <TextField
                  id="companyAddress"
                  label="Your Address:"
                  placeholder="123 Bakers street, London, 51234"
                  onChange={handleChange("main", "companyAddress")}
                  as="textarea"
                  required
                  value={state.mainFields.companyAddress}
                />
              </Fragment>
            }
            right={
              <Fragment>
                <TextField
                  id="clientCompanyName"
                  label="Client company name:"
                  placeholder="ABCD Inc."
                  onChange={handleChange("main", "clientCompanyName")}
                  required
                  value={state.mainFields.clientCompanyName}
                />
                <TextField
                  id="clientName"
                  label="Client name:"
                  placeholder="Jane Doe"
                  onChange={handleChange("main", "clientName")}
                  required
                  value={state.mainFields.clientName}
                />
                <TextField
                  id="clientAddress"
                  label="Client address:"
                  placeholder="456 Birmingham street, Yorkshire, 54321"
                  onChange={handleChange("main", "clientAddress")}
                  as="textarea"
                  required
                  value={state.mainFields.clientAddress}
                />
              </Fragment>
            }
          />
          <SingleColumn padded>
            <TextField
              id="projectTitle"
              label="Project title:"
              placeholder="The Best Project Of The World"
              onChange={handleChange("main", "projectTitle")}
              required
              value={state.mainFields.projectTitle}
            />
          </SingleColumn>
          <h2>Expense details:</h2>
          {expenseRows.length > 0 && (
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
                  {expenseRows.map(expenseKey => (
                    <tr key={expenseKey}>
                      <td>
                        <Form.Control
                          required
                          placeholder="Work description..."
                          onChange={handleExpenseChange(
                            expenseKey,
                            "description"
                          )}
                          value={state.expenseFields[expenseKey].description}
                        ></Form.Control>
                      </td>
                      <td>
                        <Form.Control
                          required
                          placeholder="10"
                          onChange={handleExpenseChange(expenseKey, "hours")}
                          value={state.expenseFields[expenseKey].hours}
                        ></Form.Control>
                      </td>
                      <td>
                        <Form.Control
                          required
                          placeholder="80"
                          onChange={handleExpenseChange(expenseKey, "rate")}
                          value={state.expenseFields[expenseKey].rate}
                        ></Form.Control>
                      </td>
                      <td>
                        <Button
                          variant="outline-danger"
                          onClick={handleRemoveExpenseRow(expenseKey)}
                        >
                          Remove
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </SingleColumn>
          )}
          <Row>
            <Col>
              <Button variant="info" onClick={handleAddExpenseRow}>
                Add expense row
              </Button>
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
            <Table bordered size="sm">
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
                <tr>
                  <td>Invoice status:</td>
                  <td>
                    <Form.Control required as="select">
                      <option value="Outstanding" default>
                        Outstanding
                      </option>
                      <option value="Paid">Paid</option>
                      <option value="Late">Late</option>
                    </Form.Control>
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
              span: 5,
              offset: 7
            }}
          >
            <Button
              className="mr-4"
              variant="outline-danger"
              type="reset"
              onClick={handleReset}
            >
              Reset
            </Button>
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
