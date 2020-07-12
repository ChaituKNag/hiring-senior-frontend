import React from "react";
import { Container, Card, Row, Col, Badge, Table } from "react-bootstrap";
import InvoicesLoading from "./InvoicesLoading";
import NoInvoices from "./NoInvoices";
import InvoiceItem from "./InvoiceItem";
import formatDate from "../../utils/format-date";
import calculateTotal from "../../utils/calculate-total";

const InvoiceList = ({ invoices }) => {
  if (!invoices) {
    return <InvoicesLoading />;
  }

  if (invoices.length === 0) {
    return <NoInvoices />;
  }

  return (
    <Container>
      <h1 className="mt-4 mb-4 text-center">List of Invoices</h1>
      {invoices.map(invoice => (
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
                    <InvoiceItem
                      label="Company name"
                      value={invoice.mainFields.companyName}
                    />
                    <InvoiceItem
                      label="Employee name"
                      value={invoice.mainFields.employeeName}
                    />
                    <InvoiceItem
                      label="Company address"
                      value={invoice.mainFields.companyAddress}
                    />
                  </Card.Body>
                </Card>
              </Col>
              <Col md={6} className="mb-2">
                <Card>
                  <Card.Body>
                    <InvoiceItem
                      label="Client company name"
                      value={invoice.mainFields.clientCompanyName}
                    />
                    <InvoiceItem
                      label="Client name"
                      value={invoice.mainFields.clientName}
                    />
                    <InvoiceItem
                      label="Client address"
                      value={invoice.mainFields.clientAddress}
                    />
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
              Total: ${calculateTotal(invoice.expenseFields)}
            </h2>
            <h5 className="mt-4 mb-4">Other details</h5>
            <InvoiceItem
              label="Notes"
              value={invoice.otherFields.invoiceNotes}
            />
            <InvoiceItem
              label="Invoice start date"
              value={formatDate(invoice.otherFields.invoiceStartDate)}
            />
            <InvoiceItem
              label="Invoice due date"
              value={formatDate(invoice.otherFields.invoiceDueDate)}
              className="text-danger"
            />
          </Card.Body>
        </Card>
      ))}
    </Container>
  );
};

export default InvoiceList;
