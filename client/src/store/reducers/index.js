import { actionTypes } from "../actions";

export const defaultState = {
  loading: false,
  invoices: null,
  count: 0
};

export function rootReducer(state, action) {
  switch (action.type) {
    case actionTypes.FETCHING_INVOICES:
      return {
        ...state,
        loading: true
      };
    case actionTypes.FETCH_INVOICES_SUCCESS:
      return {
        ...state,
        loading: false,
        invoices: action.invoices,
        count: action.invoices.length
      };
    case actionTypes.FETCH_INVOICES_FAILURE:
      return {
        ...state,
        loading: false
      };
    default:
      return state;
  }
}
