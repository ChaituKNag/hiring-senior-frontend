import React, { Fragment } from "react";
import SingleColumn from "../common/SingleColumn";
import { Table, Form, Button, Row, Col } from "react-bootstrap";
import calculateTotal from "../../utils/calculate-total";

const ExpenseFields = ({
  expenseFields,
  handleExpenseChange,
  handleRemoveExpenseRow,
  handleAddExpenseRow
}) => {
  const expenseRows = Object.keys(expenseFields);
  const total = calculateTotal(expenseFields);
  return (
    <Fragment>
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
                      onChange={handleExpenseChange(expenseKey, "description")}
                      value={expenseFields[expenseKey].description}
                    ></Form.Control>
                  </td>
                  <td>
                    <Form.Control
                      required
                      placeholder="10"
                      type="number"
                      onChange={handleExpenseChange(expenseKey, "hours")}
                      value={expenseFields[expenseKey].hours}
                    ></Form.Control>
                  </td>
                  <td>
                    <Form.Control
                      required
                      placeholder="80"
                      type="number"
                      onChange={handleExpenseChange(expenseKey, "rate")}
                      value={expenseFields[expenseKey].rate}
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
          <h3 className="text-right">Total: ${total}</h3>
        </Col>
      </Row>
    </Fragment>
  );
};

export default ExpenseFields;
