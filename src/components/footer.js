import React from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { SocialIcon } from 'react-social-icons';

class Footer extends React.Component {
  render() {
    return (
      <div className="Footer">
        <Navbar>
          <Nav>
            <NavItem eventKey={9} href="https://goo.gl/forms/dFk8SH5G4sPczJBf2" target="_blank" rel="noopener noreferrer">
            <p>Copyright 2018 Tatsuya Asami </p>
            </NavItem>
            <NavItem eventKey={10} href="https://github.com/astatsuya" target="_blank" rel="noopener noreferrer" >
            <SocialIcon network="github" style={{ height: 25, width: 25 }} />
            </NavItem>
            <NavItem eventKey={11} href="https://medium.com/@astatsuya" target="_blank" rel="noopener noreferrer">
            <SocialIcon network="medium" style={{ height: 25, width: 25 }} />
            </NavItem>
            <NavItem eventKey={12} href="https://twitter.com/astatsuya1" target="_blank" rel="noopener noreferrer">
            <SocialIcon network="twitter" style={{ height: 25, width: 25 }} />
            </NavItem>
            <NavItem eventKey={13} href="https://goo.gl/forms/dFk8SH5G4sPczJBf2" target="_blank" rel="noopener noreferrer">
            <SocialIcon network="email" style={{ height: 25, width: 25 }} />
            </NavItem>
          </Nav>
        </Navbar>
      </div>
    );
  }
}

export default Footer;
