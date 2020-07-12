import React from "react";
import { render } from "@testing-library/react";
import SingleColumn from "./SingleColumn";

test("renders single column hello text", () => {
  const { getByText } = render(
    <SingleColumn>
      <h1>Hello World</h1>
    </SingleColumn>
  );

  expect(getByText("Hello World")).toBeInTheDocument();
});
