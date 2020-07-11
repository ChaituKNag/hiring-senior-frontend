import React, { useEffect } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
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

  useEffect(() => {
    console.log("fetching invoices");
    dispatch(fetchInvoicesAction());
  }, [dispatch]);

  const handleNewInvoiceSubmit = invoiceDetails => {
    console.log(invoiceDetails);
  };
  return (
    <Router>
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
    </Router>
  );
}

export default App;
