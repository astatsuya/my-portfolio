import React from 'react';
import { Panel, Table } from 'react-bootstrap';
import { tableStyle } from './skills'
// import transferimg '../images/transferimg.png';

const Works = () => {
  return (
    <div className="Works">
      <Panel>
        <Panel.Heading>
          <Panel.Title componentClass="h3">Works</Panel.Title>
        </Panel.Heading>
        <Panel.Body>
          <Table striped bordered condensed hover style={tableStyle}>
           <thead>
             <tr>
              <td colSpan="1">部署異動の傾向を調べるアプリ</td>
              <td colSpan="1">React, Readux, React-Router</td>
             </tr>
             <tr>
              <td colSpan="2">
              <a href="https://astatsuya.github.io/transfer/" target="_blank" rel="noopener noreferrer">
              <img src="../images/transferimg.png" alt="" width="50" length="50" /> a
              </a></td>
             </tr>
           </thead>
          </Table>
          <Table striped bordered condensed hover style={tableStyle}>
           <thead>
             <tr>
              <td colSpan="1">部署異動の傾向を調べるアプリ</td>
              <td colSpan="1">React, Readux, React-Router</td>
             </tr>
             <tr>
              <td colSpan="2">
              <a href="https://astatsuya.github.io/transfer/" target="_blank" rel="noopener noreferrer">
              <img src="../images/transferimg.png" alt="" width="50" length="50" /> a
              </a></td>
             </tr>
           </thead>
          </Table>
          <Table striped bordered condensed hover style={tableStyle}>
           <thead>
             <tr>
              <td colSpan="1">バレーボールの得点カウントアプリ</td>
              <td colSpan="1">JavaScript, HTML5, CSS</td>
             </tr>
             <tr>
              <td colSpan="2">ここにURLと画像</td>
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

export default Works;
