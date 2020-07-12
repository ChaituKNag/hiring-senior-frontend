import formatDate from "./format-date";

test("format of date works", () => {
  expect(formatDate(new Date("2020-08-14"))).toBe("8/14/2020");
});
