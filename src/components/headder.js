import React from 'react';
import { Navbar, Nav, NavItem, Image } from 'react-bootstrap';

class Headder extends React.Component {
  render() {
    return (
      <Navbar collapseOnSelect fluid>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="#brand">My Portfolio</a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav pullRight>
            <NavItem eventKey={1} href="https://github.com/astatsuya" target="_blank" rel="noopener noreferrer" >
              <Image src='images/Github.png' style={{ height: 25, width: 25 }} />
            </NavItem>
            <NavItem eventKey={2} href="https://medium.com/@astatsuya" target="_blank" rel="noopener noreferrer">
              <Image src='images/Monogram.png' style={{ height: 25, width: 25 }} />
            </NavItem>
            <NavItem eventKey={3} href="https://twitter.com/astatsuya1" target="_blank" rel="noopener noreferrer">
              <Image src='images/Twitter.png' style={{ height: 25, width: 25 }} />
            </NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default Headder;
