import React from 'react';
import { Panel, Table } from 'react-bootstrap';

export const tableStyle = {maxWidth: 500, margin: 'auto'};

class Skills extends React.Component {
  render() {
    return (
        <Panel className="Skills">
          <Panel.Heading>
            <Panel.Title componentClass="h3">Skills</Panel.Title>
          </Panel.Heading>
          <Panel.Body>
            <Table striped bordered condensed hover style={tableStyle}>
             <thead>
               <tr>
                <td>Language</td>
                <td colSpan="1">JavaScript, HTML5, CSS3</td>
               </tr>
               <tr>
                <td>Frameworks</td>
                <td colSpan="1">React</td>
               </tr>
               <tr>
                <td>Others</td>
                <td colSpan="1">Redux, Git, Jest, enzyme, selenium, webdriverIO</td>
               </tr>
             </thead>
            </Table>
          </Panel.Body>
        </Panel>
    );
  }
}


export default Skills;
