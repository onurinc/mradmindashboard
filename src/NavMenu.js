import React from "react";
import {
  NavbarBrand,
  NavbarToggler,
  NavItem,
  NavLink,
  Navbar,
  Collapse,
  Nav,
} from "reactstrap";

const token = localStorage.getItem("token");

function NavMenu() {
  return (
    <>
      <div>
        <Navbar color="dark" container dark expand fixed="top">
          <NavbarBrand href="/">MovieReviewer Admin Dashboard</NavbarBrand>
          <NavbarToggler onClick={function noRefCheck() {}} />
          <Collapse navbar>
            <Nav className="me-auto" navbar>
              <NavItem>
                <NavLink href="/reviewsdashboard/">Review Dashboard</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/commentsdashboard">Comments Dashboard</NavLink>
              </NavItem>
            </Nav>
            <Nav>
              {!token ? (
                <>
                  <NavItem>
                    <NavLink href="/">Login</NavLink>
                  </NavItem>
                </>
              ) : (
                <>
                  <NavItem>
                    <NavLink href="/">Logout</NavLink>
                  </NavItem>
                </>
              )}
            </Nav>
          </Collapse>
        </Navbar>
      </div>
      <br />
    </>
  );
}

export default NavMenu;
