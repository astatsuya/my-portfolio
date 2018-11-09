import React from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { SocialIcon } from 'react-social-icons';


class Headder extends React.Component {
  render() {
    return (
      <div className="Headder">
        <Navbar >
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#home">Top</a>
            </Navbar.Brand>
          </Navbar.Header>
          <Navbar.Collapse>
          <Nav>
            <NavItem eventKey={1} href="#">
              Skills
            </NavItem>
            <NavItem eventKey={2} href="#">
              Works
            </NavItem>
            <NavItem eventKey={3} href="#">
              About me
            </NavItem>
            <NavItem eventKey={4} href="https://goo.gl/forms/dFk8SH5G4sPczJBf2" target="_blank" rel="noopener noreferrer" >
              Contact
            </NavItem>
          </Nav>
          <Nav style={{marginLeft: 140}}>
            <NavItem eventKey={5} href="https://github.com/astatsuya" target="_blank" rel="noopener noreferrer" >
              <SocialIcon network="github" style={{ height: 25, width: 25 }} />
            </NavItem>
            <NavItem eventKey={6} href="https://medium.com/@astatsuya" target="_blank" rel="noopener noreferrer">
              <SocialIcon network="medium" style={{ height: 25, width: 25 }} />
            </NavItem>
            <NavItem eventKey={7} href="https://twitter.com/astatsuya1" target="_blank" rel="noopener noreferrer">
              <SocialIcon network="twitter" style={{ height: 25, width: 25 }} />
            </NavItem>
          </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}

export default Headder;
