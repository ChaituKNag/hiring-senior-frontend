export const actionTypes = {
  UPDATE_FIELD_VALUE: "UPDATE_FIELD_VALUE",
  RESET_ALL_VALUES: "RESET_ALL_VALUES",
  ADD_EXPENSE_ROW: "ADD_EXPENSE_ROW",
  REMOVE_EXPENSE_ROW: "REMOVE_EXPENSE_ROW"
};

export const updateFieldValueAction = (fieldType, key, value, field = "") => ({
  type: actionTypes.UPDATE_FIELD_VALUE,
  fieldType,
  key,
  field,
  value
});

export const addExpenseRowAction = () => ({
  type: actionTypes.ADD_EXPENSE_ROW
});

export const removeExpenseRowAction = key => ({
  type: actionTypes.REMOVE_EXPENSE_ROW,
  key
});

export const resetAllValuesAction = () => ({
  type: actionTypes.RESET_ALL_VALUES
});
