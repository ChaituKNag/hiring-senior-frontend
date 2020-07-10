import React, { useState, useEffect } from "react";
import { Navbar, Nav, Button } from "react-bootstrap";
import { useHistory, useLocation } from "react-router-dom";

const Header = () => {
  const history = useHistory();
  const location = useLocation();
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    setShowButton(location.pathname === "/home");
  }, [location.pathname]);

  const goTo = path => e => {
    e.preventDefault();
    history.push(path);
  };

  return (
    <div>
      <Navbar expand="lg" variant="light" bg="light">
        <Navbar.Brand>
          <img
            src="/via-logo-black.png"
            alt="Via.work logo"
            width="80"
            height="27"
            className="d-inline-block align-top"
          />
          {` `}
          <span>Invoices</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse>
          <Nav className="mr-auto">
            <Nav.Link href="/home" onClick={goTo("/home")}>
              Home
            </Nav.Link>
          </Nav>
          {showButton && (
            <Button variant="outline-primary" onClick={goTo("/new-invoice")}>
              New Invoice
            </Button>
          )}
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
