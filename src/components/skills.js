import React from 'react';
import { Panel, Table } from 'react-bootstrap';


const Skills = () => {
  return (
    <div className="Skills">
      <Panel>
        <Panel.Heading>
          <Panel.Title componentClass="h3">Skills</Panel.Title>
        </Panel.Heading>
        <Panel.Body>
          <Table striped bordered condensed hover>
           <thead>
             <tr>
              <td>Language</td>
              <td colSpan="2">JavaScript, HTML5, CSS3</td>
             </tr>
             <tr>
              <td>Frameworks</td>
              <td colSpan="2">React</td>
             </tr>
             <tr>
              <td>Others</td>
              <td colSpan="2">Redux</td>
             </tr>
           </thead>
          </Table>
        </Panel.Body>
      </Panel>
    </div>
  );
}

//
//
// class Skills extends React.Component {
//   render() {
//     return (
//       <div className="Main">
//         <Panel>
//           <Panel.Heading>
//             <Panel.Title componentClass="h3">Skills</Panel.Title>
//           </Panel.Heading>
//           <Panel.Body>
//             <Table striped bordered condensed hover>
//              <thead>
//                <tr>
//                 <td>Language</td>
//                 <td colSpan="2">JavaScript, HTML5, CSS3</td>
//                </tr>
//                <tr>
//                 <td>Frameworks</td>
//                 <td colSpan="2">React</td>
//                </tr>
//                <tr>
//                 <td>Others</td>
//                 <td colSpan="2">Redux</td>
//                </tr>
//              </thead>
//             </Table>
//           </Panel.Body>
//         </Panel>
//       </div>
//     );
//   }
// }

export default Skills;