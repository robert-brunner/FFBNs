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

  return (
    <div className="Header">
      <Navbar color="light" light expand="md">
        <NavbarBrand tag={RRNavLink} to="/PotentialPlaymate">Paw-Or-Not</NavbarBrand>
        <NavLink tag={RRNavLink} to="/userEdit" className="nav-link">Edit Pawfile</NavLink>
        
        <NavLink tag={RRNavLink} to="/CurrentUserPawfile" className="nav-link">User PawFile</NavLink>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          
          <Nav className="mr-auto" navbar>
            { /* When isLoggedIn === true, we will render the Home link */}
            {isLoggedIn &&
                <div style={{display: 'flex'}}>
              <NavItem>
              </NavItem>
              
            </div>
            }
            </Nav>
          <Nav navbar>
            {isLoggedIn &&
              <>
                <NavItem> 
                  <a aria-current="page" className="nav-link"
                    style={{ cursor: "pointer" }} onClick={() => {
                      logout()
                      setIsLoggedIn(false)
                    }}>Logout</a>
                </NavItem>
                
              </>
            }
            {!isLoggedIn &&
              <>
                <NavItem>
                  <NavLink tag={RRNavLink} to="/login">Login</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink tag={RRNavLink} to="/register">Register</NavLink>
                </NavItem>
              </>
            }
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}
