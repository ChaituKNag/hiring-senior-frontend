const calculateTotal = expenseFields =>
  Object.values(expenseFields).reduce((acc, curr) => {
    return acc + Number(curr.hours) * Number(curr.rate);
  }, 0);

export default calculateTotal;
