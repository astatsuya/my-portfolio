import React  from 'react';
import { Row, Col } from 'react-bootstrap';
import Headder from './components/headder';
import Main from './components/main';
import Footer from './components/footer';

class App extends React.Component {
  render() {
    return (
      <div className="container" style={{marginTop: 10}} >
        <Row>
          <Col xs={12} md={10} mdOffset={1} lg={8} lgOffset={2} >
            <Headder />
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={10} mdOffset={1} lg={8} lgOffset={2}>
            <Main />
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={10} mdOffset={1} lg={8} lgOffset={2}>
            <Footer />
          </Col>
        </Row>
      </div>
    );
  }
}

export default App;
