import React from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { SocialIcon } from 'react-social-icons';

class Footer extends React.Component {
  render() {
    return (
      <div className="Footer">
        <Navbar>
            <Navbar.Toggle />
          <Navbar.Collapse>
            <Nav>
              <NavItem eventKey={1} href="https://github.com/astatsuya" target="_blank" rel="noopener noreferrer" >
                <SocialIcon network="github" style={{ height: 25, width: 25 }} />
              </NavItem>
              <NavItem eventKey={2} href="https://medium.com/@astatsuya" target="_blank" rel="noopener noreferrer">
                <SocialIcon network="medium" style={{ height: 25, width: 25 }} />
              </NavItem>
              <NavItem eventKey={3} href="https://twitter.com/astatsuya1" target="_blank" rel="noopener noreferrer">
                <SocialIcon network="twitter" style={{ height: 25, width: 25 }} />
              </NavItem>
              <NavItem eventKey={9} >
              <p>Copyright 2018 Tatsuya Asami </p>
              </NavItem>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}

export default Footer;
