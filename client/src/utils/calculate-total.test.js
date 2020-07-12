import calculateTotal from "./calculate-total";
import mockExpenseFields from "../mocks/expense-data.json";

test("calculates total for expense list", () => {
  expect(calculateTotal(mockExpenseFields)).toBe(1700);
});
