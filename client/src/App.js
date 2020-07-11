import React, { useEffect, Fragment } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Switch, Route, Redirect, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Header from "./components/common/Header";
import InvoiceList from "./components/InvoiceList";
import NewInvoice from "./components/NewInvoice";
import { fetchInvoicesAction } from "./store/actions";

function App() {
  const [invoices, count] = useSelector(state => [
    state.invoices,
    state.count,
    state.loading
  ]);
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    console.log("fetching invoices");
    dispatch(fetchInvoicesAction());
  }, [dispatch]);

  const handleNewInvoiceSubmit = invoiceDetails => {
    console.log(invoiceDetails);
    history.push("/home");
  };
  return (
    <Fragment>
      <Header />
      <Switch>
        <Route path="/home">
          <InvoiceList invoices={invoices} />
        </Route>
        <Route path="/new-invoice">
          <NewInvoice
            invoiceId={`INV_${count + 1}`}
            onSubmit={handleNewInvoiceSubmit}
          />
        </Route>
        <Route path="/">
          <Redirect to="/home" />
        </Route>
      </Switch>
    </Fragment>
  );
}

export default App;
