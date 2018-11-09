import React from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { SocialIcon } from 'react-social-icons';


class Headder extends React.Component {
  render() {
    return (
      <Navbar collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="#brand">The portfolio of Tatsuya Asami</a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav style={{marginLeft: 240}}>
            <NavItem eventKey={1} href="https://github.com/astatsuya" target="_blank" rel="noopener noreferrer" >
              <SocialIcon network="github" style={{ height: 25, width: 25 }} />
            </NavItem>
            <NavItem eventKey={2} href="https://medium.com/@astatsuya" target="_blank" rel="noopener noreferrer">
              <SocialIcon network="medium" style={{ height: 25, width: 25 }} />
            </NavItem>
            <NavItem eventKey={3} href="https://twitter.com/astatsuya1" target="_blank" rel="noopener noreferrer">
              <SocialIcon network="twitter" style={{ height: 25, width: 25 }} />
            </NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}


export default Headder;
