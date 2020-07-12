import React, { useReducer } from "react";
import {
  Col,
  Row,
  Container,
  Form,
  Card,
  Table,
  Button
} from "react-bootstrap";
import PropTypes from "prop-types";
import MainFields from "./MainFields";
import ExpenseFields from "./ExpenseFields";
import TextField from "./InvoiceTextField";
import {
  updateFieldValueAction,
  addExpenseRowAction,
  removeExpenseRowAction,
  resetAllValuesAction
} from "../../store/actions/new-invoice.actions";
import {
  defaultState,
  newInvoiceReducer
} from "../../store/reducers/new-invoice.reducer";

const NewInvoice = ({ invoiceId, onSubmit }) => {
  const [state, dispatch] = useReducer(newInvoiceReducer, defaultState);

  const handleChange = (section, name) => e => {
    dispatch(updateFieldValueAction(section, name, e.target.value));
  };
  const handleExpenseChange = (name, field) => e => {
    dispatch(updateFieldValueAction("expense", name, e.target.value, field));
  };
  const handleAddExpenseRow = () => {
    dispatch(addExpenseRowAction());
  };
  const handleRemoveExpenseRow = key => () => {
    dispatch(removeExpenseRowAction(key));
  };
  const handleSubmit = e => {
    e.preventDefault();
    onSubmit({
      ...state,
      invoiceId
    });
  };
  const handleReset = () => {
    dispatch(resetAllValuesAction());
  };

  return (
    <Container className="mb-5">
      <h1 className="text-center m-3">New Invoice</h1>
      <Form onSubmit={handleSubmit}>
        <Card body>
          <MainFields
            mainFields={state.mainFields}
            handleChange={handleChange}
          />

          <ExpenseFields
            expenseFields={state.expenseFields}
            handleExpenseChange={handleExpenseChange}
            handleAddExpenseRow={handleAddExpenseRow}
            handleRemoveExpenseRow={handleRemoveExpenseRow}
          />

          <Row>
            <Col className="p-4">
              <TextField
                id="invoiceNotes"
                label="Notes about the invoice:"
                placeholder="How to pay, where to send checks..."
                onChange={handleChange("other", "invoiceNotes")}
                as="textarea"
                required
                value={state.otherFields.invoiceNotes}
                rows="5"
              />
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
                  <td>{invoiceId}</td>
                </tr>
                <tr>
                  <td>Invoice date:</td>
                  <td>
                    <Form.Control
                      required
                      type="date"
                      onChange={handleChange("other", "invoiceStartDate")}
                      value={state.otherFields.invoiceStartDate}
                    ></Form.Control>
                  </td>
                </tr>
                <tr>
                  <td>Due date:</td>
                  <td>
                    <Form.Control
                      required
                      type="date"
                      onChange={handleChange("other", "invoiceDueDate")}
                      value={state.otherFields.invoiceDueDate}
                    ></Form.Control>
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

NewInvoice.propTypes = {
  invoiceId: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired
};

export default NewInvoice;
