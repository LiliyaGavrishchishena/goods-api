import React from 'react';
import { Navbar } from 'react-bootstrap';

const Header = () => (
  <Navbar
    role="banner"
    collapseOnSelect
    expand="lg"
    bg="primary"
    variant="dark"
    style={{
      minHeight: '4rem',
      position: 'sticky',
      top: '0',
      zIndex: '100',
      alignItems: 'center',
    }}
  >
    <Navbar.Brand>API Goods</Navbar.Brand>
  </Navbar>
);

export default Header;
