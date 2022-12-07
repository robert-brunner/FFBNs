import React, {useEffect, useState } from 'react';
import { NavLink as RRNavLink } from "react-router-dom";
import { getCurrentUser, logout } from '../../managers/UserProfileManager';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';

export default function Header({ isLoggedIn, setIsLoggedIn }) {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const [localUser, setLocalUser] = useState("");

//   useEffect(() => {
//     const loggedInUser = getCurrentUser()
//     setLocalUser(loggedInUser)
//   }, [isLoggedIn]);

  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand tag={RRNavLink} to="/">Paw-Or-Not</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          
          <Nav className="mr-auto" navbar>
            { /* When isLoggedIn === true, we will render the Home link */}
            {isLoggedIn &&
                <div style={{display: 'flex'}}>
              <NavItem>
                <NavLink tag={RRNavLink} to="/">Test</NavLink>
              </NavItem>
            </div>
            }
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}
