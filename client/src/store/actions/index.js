import axios from "axios";

export const actionTypes = {
  LOADING: "LOADING",
  FETCH_INVOICES_SUCCESS: "FETCH_INVOICES_SUCCESS",
  FETCH_INVOICES_FAILURE: "FETCH_INVOICES_FAILURE"
};

export const loadingAction = () => ({
  type: actionTypes.LOADING
});

export const fetchInvoicesSuccessAction = invoices => ({
  type: actionTypes.FETCH_INVOICES_SUCCESS,
  invoices
});

export const fetchInvoicesFailureAction = () => ({
  type: actionTypes.FETCH_INVOICES_FAILURE
});

export const fetchInvoicesAction = () => dispatch => {
  dispatch(loadingAction());
  return axios
    .get("http://localhost:4000/")
    .then(resp => {
      return dispatch(fetchInvoicesSuccessAction(resp.data));
    })
    .catch(() => {
      return dispatch(fetchInvoicesFailureAction());
    });
};

export const addNewInvoiceAction = invoiceDetails => dispatch => {
  dispatch(loadingAction());
  return axios
    .post("http://localhost:4000/new", invoiceDetails)
    .then(resp => {
      return dispatch(fetchInvoicesSuccessAction(resp.data));
    })
    .catch(() => {
      return dispatch(fetchInvoicesFailureAction());
    });
};
