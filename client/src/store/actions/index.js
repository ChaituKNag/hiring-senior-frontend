import mockInvoices from "../../mocks/invoices.json";

export const actionTypes = {
  FETCHING_INVOICES: "FETCHING_INVOICES",
  FETCH_INVOICES_SUCCESS: "FETCH_INVOICES_SUCCESS",
  FETCH_INVOICES_FAILURE: "FETCH_INVOICES_FAILURE"
};

export const fetchInvoicesAction = () => dispatch => {
  dispatch(fetchInvoicesSuccessAction(mockInvoices));
};

export const fetchingInvoicesAction = () => ({
  type: actionTypes.FETCHING_INVOICES
});

export const fetchInvoicesSuccessAction = invoices => ({
  type: actionTypes.FETCH_INVOICES_SUCCESS,
  invoices
});

export const fetchInvoicesFailureAction = () => ({
  type: actionTypes.FETCH_INVOICES_FAILURE
});
