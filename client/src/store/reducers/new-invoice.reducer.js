import { actionTypes } from "../actions/new-invoice.actions";

export const defaultState = {
  mainFields: {
    companyName: "",
    employeeName: "",
    companyAddress: "",
    clientCompanyName: "",
    clientName: "",
    clientAddress: "",
    projectTitle: ""
  },
  expenseFields: {
    expense_1: {
      description: "",
      hours: "",
      rate: ""
    }
  },
  otherFields: {
    invoiceId: "",
    invoiceStartDate: "",
    invoiceDueDate: "",
    status: "Outstanding"
  }
};

export function newInvoiceReducer(state = defaultState, action) {
  switch (action.type) {
    case actionTypes.UPDATE_FIELD_VALUE:
      const sectionKey = `${action.fieldType}Fields`;
      if (action.fieldType === "expense") {
        return {
          ...state,
          [sectionKey]: {
            ...state[sectionKey],
            [action.key]: {
              ...state[sectionKey][action.key],
              [action.field]: action.value
            }
          }
        };
      }
      return {
        ...state,
        [sectionKey]: {
          ...state[sectionKey],
          [action.key]: action.value
        }
      };
    case actionTypes.ADD_EXPENSE_ROW:
      const expenseCount = Object.keys(state.expenseFields).length;
      console.log(expenseCount);
      return {
        ...state,
        expenseFields: {
          ...state.expenseFields,
          [`expense_${expenseCount + 1}`]: {
            ...defaultState.expenseFields.expense_1
          }
        }
      };
    case actionTypes.REMOVE_EXPENSE_ROW:
      const newState = {
        ...state,
        expenseFields: {
          ...state.expenseFields
        }
      };
      delete newState.expenseFields[action.key];
      return newState;
    case actionTypes.RESET_ALL_VALUES:
      return defaultState;
    default:
      return state;
  }
}
