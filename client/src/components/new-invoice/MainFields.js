import React, { Fragment } from "react";
import TwoColumns from "../common/TwoColumns";
import TextField from "./InvoiceTextField";
import SingleColumn from "../common/SingleColumn";

const MainFields = ({ mainFields, handleChange }) => {
  return (
    <Fragment>
      <h2>Main details:</h2>
      <TwoColumns
        left={
          <Fragment>
            <TextField
              id="companyName"
              label="Your company name:"
              placeholder="XYZ Inc."
              onChange={handleChange("main", "companyName")}
              required
              value={mainFields.companyName}
            />
            <TextField
              id="employeeName"
              label="Your name:"
              placeholder="John Doe"
              onChange={handleChange("main", "employeeName")}
              required
              value={mainFields.employeeName}
            />
            <TextField
              id="companyAddress"
              label="Your Address:"
              placeholder="123 Bakers street, London, 51234"
              onChange={handleChange("main", "companyAddress")}
              as="textarea"
              required
              value={mainFields.companyAddress}
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
              value={mainFields.clientCompanyName}
            />
            <TextField
              id="clientName"
              label="Client name:"
              placeholder="Jane Doe"
              onChange={handleChange("main", "clientName")}
              required
              value={mainFields.clientName}
            />
            <TextField
              id="clientAddress"
              label="Client address:"
              placeholder="456 Birmingham street, Yorkshire, 54321"
              onChange={handleChange("main", "clientAddress")}
              as="textarea"
              required
              value={mainFields.clientAddress}
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
          value={mainFields.projectTitle}
        />
      </SingleColumn>
    </Fragment>
  );
};

export default MainFields;
