import React from "react";
import {
  Container,
  Alert,
  Card,
  Row,
  Col,
  Badge,
  Table
} from "react-bootstrap";
import { Link } from "react-router-dom";

const calculateTotal = invoice =>
  Object.values(invoice.expenseFields).reduce((acc, curr) => {
    return acc + Number(curr.hours) * Number(curr.rate);
  }, 0);

const formatDate = dateString => new Date(dateString).toLocaleDateString();

const InvoiceList = ({ invoices }) => {
  if (!invoices) {
    return (
      <Container className="mt-5 mb-5">
        <Alert variant="warning">
          Loading... If this shows longer, there is some issue with the backend.
        </Alert>
      </Container>
    );
  }

  if (invoices.length === 0) {
    return (
      <Container className="mt-5 mb-5">
        <Alert variant="info">
          No invoices yet! <Link to="/new-invoice">Create new...</Link>
        </Alert>
      </Container>
    );
  }

  return (
    <Container>
      <h1 className="mt-4 mb-4">List of Invoices</h1>
      {invoices.map((invoice, idx) => (
        <Card key={invoice.invoiceId} className="mb-4">
          <Card.Body>
            <Card.Title>
              <h4 className="d-flex justify-content-between">
                <span>
                  {invoice.mainFields.projectTitle}{" "}
                  {invoice.otherFields.status === "Paid" && (
                    <Badge variant="success">
                      {invoice.otherFields.status}
                    </Badge>
                  )}
                  {invoice.otherFields.status === "Outstanding" && (
                    <Badge variant="warning">
                      {invoice.otherFields.status}
                    </Badge>
                  )}
                  {invoice.otherFields.status === "Late" && (
                    <Badge variant="danger">{invoice.otherFields.status}</Badge>
                  )}
                </span>
                <span className="d-inline-block ml-auto text-secondary">
                  #{invoice.invoiceId}
                </span>
              </h4>
            </Card.Title>
            <h5 className="mt-4 mb-4">Main Details</h5>
            <Row>
              <Col md={6} className="mb-2">
                <Card>
                  <Card.Body>
                    <p>
                      <strong>Company name</strong>
                    </p>
                    <p>{invoice.mainFields.companyName}</p>
                    <p>
                      <strong>Employee name</strong>
                    </p>
                    <p>{invoice.mainFields.employeeName}</p>
                    <p>
                      <strong>Company address</strong>
                    </p>
                    <p>{invoice.mainFields.companyAddress}</p>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={6} className="mb-2">
                <Card>
                  <Card.Body>
                    <p>
                      <strong>Client company name</strong>
                    </p>
                    <p>{invoice.mainFields.clientCompanyName}</p>
                    <p>
                      <strong>Client name</strong>
                    </p>
                    <p>{invoice.mainFields.clientName}</p>
                    <p>
                      <strong>Client address</strong>
                    </p>
                    <p>{invoice.mainFields.clientAddress}</p>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
            <h5 className="mt-4 mb-4">Expenses details</h5>

            <Table responsive bordered>
              <thead>
                <tr>
                  <td>Description</td>
                  <td>Hours</td>
                  <td>Rate</td>
                </tr>
              </thead>
              <tbody>
                {Object.keys(invoice.expenseFields).map(expenseKey => (
                  <tr key={expenseKey}>
                    <td>{invoice.expenseFields[expenseKey].description}</td>
                    <td>{invoice.expenseFields[expenseKey].hours}</td>
                    <td>{invoice.expenseFields[expenseKey].rate}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
            <h2 className="text-right text-info">
              Total: ${calculateTotal(invoice)}
            </h2>
            <h5 className="mt-4 mb-4">Other details</h5>
            <p>
              <strong>Notes:</strong>
            </p>
            <p>{invoice.otherFields.invoiceNotes}</p>
            <p>
              <strong>Invoice start date:</strong>
            </p>
            <p>{formatDate(invoice.otherFields.invoiceStartDate)}</p>
            <p>
              <strong>Invoice due date:</strong>
            </p>
            <p className="text-danger">
              {formatDate(invoice.otherFields.invoiceDueDate)}
            </p>
          </Card.Body>
        </Card>
      ))}
    </Container>
  );
};

export default InvoiceList;
