import React from 'react';
import { Navbar, Nav, NavItem, Image } from 'react-bootstrap';

class Footer extends React.Component {
  render() {
    return (
      <div className="Footer">
        <Navbar>
            <Navbar.Toggle />
          <Navbar.Collapse>
            <Nav>
              <NavItem eventKey={1} href="https://github.com/astatsuya" target="_blank" rel="noopener noreferrer" >
                <Image src='../../images/Github.png' style={{ height: 25, width: 25 }} />
              </NavItem>
              <NavItem eventKey={2} href="https://medium.com/@astatsuya" target="_blank" rel="noopener noreferrer">
                <Image src='../../images/Monogram.png' style={{ height: 25, width: 25 }} />
              </NavItem>
              <NavItem eventKey={3} href="https://twitter.com/astatsuya1" target="_blank" rel="noopener noreferrer">
                <Image src='../../images/Twitter.png' style={{ height: 25, width: 25 }} />
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
