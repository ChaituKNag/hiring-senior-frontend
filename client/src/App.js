import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import Header from "./components/common/Header";
import InvoiceList from "./components/InvoiceList";
import NewInvoice from "./components/NewInvoice";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/home">
          <InvoiceList />
        </Route>
        <Route path="/new-invoice">
          <NewInvoice />
        </Route>
        <Route path="/">
          <Redirect to="/home" />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
