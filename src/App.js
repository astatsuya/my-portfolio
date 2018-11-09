import React  from 'react';
import { Row, Col } from 'react-bootstrap';
import Headder from './components/headder';
import Main from './components/main';
import Footer from './components/footer';

class App extends React.Component {
  render() {
    return (
      <div class="container" style={{marginTop: 10}} >
        <Row className="show-grid">
          <Col xs={12} md={9} >
            <Headder />
          </Col>
        </Row>
        <Row className="show-grid">
          <Col xs={12} md={9}>
            <Main />
          </Col>
        </Row>
        <Row className="show-grid">
          <Col xs={12} md={9}>
            <Footer />
          </Col>
        </Row>
      </div>
    );
  }
}

export default App;
